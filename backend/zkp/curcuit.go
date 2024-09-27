package zkp

import (
	"0byte/models"
	"fmt"
	"math/big"

	"github.com/bwesterb/go-ristretto"
	"github.com/consensys/gnark-crypto/ecc"
	"github.com/consensys/gnark/backend/groth16"
	"github.com/consensys/gnark/frontend"
	"github.com/consensys/gnark/frontend/cs/r1cs"
)

type BalanceCircuit struct {
	Balance frontend.Variable `gnark:",public"`  // Public input (sender's balance)
	Amount  frontend.Variable `gnark:",private"` // Private input (transaction amount)
}

func (circuit *BalanceCircuit) Define(api frontend.API) error {
	api.AssertIsLessOrEqual(circuit.Amount, circuit.Balance)
	return nil
}

func floatToBigInt(f float64) *big.Int {
	scaled := new(big.Float).SetFloat64(f)
	scalingFactor := new(big.Float).SetFloat64(1e6) // 6 decimal places
	scaled.Mul(scaled, scalingFactor)
	result := new(big.Int)
	scaled.Int(result) // truncate to an integer
	return result
}

func GenerateZKProof(req models.ProofRequestObject) (models.ZKProofResponse, error) {
	var response models.ZKProofResponse

	// Convert float64 amounts to big.Int for precise arithmetic
	senderBalance := floatToBigInt(req.SendersBalance)
	amount := floatToBigInt(req.Amount)

	// Check if the sender has enough balance
	if senderBalance.Cmp(amount) < 0 {
		return response, fmt.Errorf("insufficient balance")
	}

	// Define the circuit with the balance and amount as variables
	circuit := BalanceCircuit{}

	// Compile the circuit to R1CS (Rank-1 Constraint System)
	r1cs, err := frontend.Compile(ecc.BN254.ScalarField(), r1cs.NewBuilder, &circuit)
	if err != nil {
		return response, fmt.Errorf("error compiling circuit: %v", err)
	}

	// Generate the proving and verifying keys
	pk, vk, err := groth16.Setup(r1cs)
	if err != nil {
		return response, fmt.Errorf("error setting up proving key: %v", err)
	}

	assignment := BalanceCircuit{
		Balance: senderBalance,
		Amount:  amount,
	}

	// Create witness (inputs for the circuit)
	witness, err := frontend.NewWitness(&assignment, ecc.BN254.ScalarField())
	if err != nil {
		return response, fmt.Errorf("error creating witness: %v", err)
	}

	// Generate the zkSNARK proof
	proof, err := groth16.Prove(r1cs, pk, witness)
	if err != nil {
		return response, fmt.Errorf("error generating proof: %v", err)
	}

	// Verify the proof
	publicWitness, err := witness.Public()
	if err != nil {
		return response, fmt.Errorf("error creating public witness: %v", err)
	}

	err = groth16.Verify(proof, vk, publicWitness)
	if err != nil {
		return response, fmt.Errorf("proof verification failed: %v", err)
	}

	// Commitments (using your commitment functions)
	rSender := new(ristretto.Scalar)
	rReceiver := new(ristretto.Scalar)
	rAmount := new(ristretto.Scalar)
	rSender.Rand()
	rReceiver.Rand()
	rAmount.Rand()
	H := generateH()

	var senderAmountScalar, receiverAmountScalar ristretto.Scalar

	// Set the amount as a scalar
	senderAmountScalar.SetBigInt(amount)
	receiverAmountScalar.SetBigInt(amount)

	// Commit to sender and receiver
	senderCommit := commitTo(&H, rSender, &senderAmountScalar)
	receiverCommit := commitTo(&H, rReceiver, &receiverAmountScalar)

	// Convert commitments to strings (using proper encoding)
	response.SenderCommit = senderCommit.String()
	response.ReceiverCommit = receiverCommit.String()

	// Attach the zkSNARK proof
	response.Proof = proof

	return response, nil
}
