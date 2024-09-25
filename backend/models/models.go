package models

import (
	"github.com/consensys/gnark/backend/groth16"
	"github.com/consensys/gnark/frontend"
)

type ProofRequestObject struct {
	SendersAddress   string  `json:"senders_address"`
	ReceiversAddress string  `json:"revievers_Address"`
	Amount           float64 `json:"amount"`
	SendersBalance   float64 `json:"senders_balance"`
}

type ProofResponse struct {
	Proof string `json:"proof"`
}

// ZKProofResponse represents the proof and commitments returned in response
type ZKProofResponse struct {
	Proof          groth16.Proof `json:"proof"`
	SenderCommit   string        `json:"sender_commitment"`
	ReceiverCommit string        `json:"receiver_commitment"`
	AmountCommit   string        `json:"amount_commitment"`
}

// DefineCircuit is the ZKP circuit to prove the transaction is valid
type DefineCircuit struct {
	SenderCommit   frontend.Variable `gnark:",public"`
	ReceiverCommit frontend.Variable `gnark:",public"`
	AmountCommit   frontend.Variable `gnark:",public"`
}
