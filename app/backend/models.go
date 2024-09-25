package main

type ProofRequestObject struct {
	SendersAddress   string  `json:"senders_address"`
	ReceiversAddress string  `json:"revievers_Address"`
	Amount           float64 `json:"amount"`
}

type ProofResponse struct {
	Proof string `json:"proof"`
}
