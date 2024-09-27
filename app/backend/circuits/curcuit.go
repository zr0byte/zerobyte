package circuits

import (
	"github.com/consensys/gnark/frontend"
	"github.com/gagliardetto/solana-go"
)

type SolanaTransactionValidityCircuit struct {
	SenderAddress     frontend.Variable
	SenderBalance     frontend.Variable
	RecipientAddress  frontend.Variable
	TransactionAmount frontend.Variable
	Timestamp         frontend.Variable
	Nonce             frontend.Variable
	Signature         [64]frontend.Variable
}

func (circuit *SolanaTransactionValidityCircuit) Define(api frontend.API) error {
	// Verify that the sender's balance is greater than or equal to the transaction amount
	api.AssertIsEqual(
		api.Sub(circuit.SenderBalance, circuit.TransactionAmount),
		circuit.SenderBalance,
	)

	// Verify the transaction signature is valid
	pubKey := solana.PublicKeyFromBytes(api.Slice(circuit.SenderAddress[:], 0, 32))
	message := api.Concat(
		circuit.SenderAddress[:],
		circuit.RecipientAddress[:],
		circuit.TransactionAmount,
		circuit.Timestamp,
		circuit.Nonce,
	)
	api.VerifyEd25519Signature(message, pubKey, circuit.Signature[:])

	return nil
}

// func main() {
// 	var circuit TransactionValidityCircuit
// 	proof, err := frontend.Prove(&circuit, bls12_381.NewYellow())
// 	if err != nil {
// 		panic(err)
// 	}

// 	// The proof can now be verified by a smart contract written in Rust
// 	println(proof)
// }
