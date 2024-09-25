package helpers

import (
	"context"
	"fmt"

	"github.com/gagliardetto/solana-go"
	"github.com/gagliardetto/solana-go/rpc"
	"github.com/pkg/errors"
)

type WalletBalanceResponse struct {
	Lamports uint64
}

func GetWalletBalance(walletAddress string) (WalletBalanceResponse, error) {
	var res WalletBalanceResponse
	var err error

	fmt.Println(walletAddress, "--------------------------------------")

	// Use correct Testnet RPC URL
	client := rpc.New("https://api.testnet.solana.com")

	// Convert the string wallet address to solana.PublicKey
	pubKey, err := solana.PublicKeyFromBase58(walletAddress)
	if err != nil {
		return res, errors.Wrap(err, "Invalid wallet address: ")
	}

	// Fetch the account info
	accountInfo, err := client.GetAccountInfo(context.TODO(), pubKey)
	if err != nil {
		return res, errors.Wrap(err, "Failed to get account info: ")
	}

	// Check if the account info is nil or invalid
	if accountInfo == nil || accountInfo.Value == nil {
		return res, errors.New("Account info is nil or empty")
	}

	// Extract lamports (balance) and store it in the response
	res.Lamports = accountInfo.Value.Lamports

	// Print wallet address and account details for debugging
	fmt.Printf("Wallet Address: %s\n", pubKey.String())
	fmt.Printf("Account Lamports: %d\n", accountInfo.Value.Lamports)
	fmt.Printf("Account Owner: %x\n", accountInfo.Value.Owner)

	return res, nil
}
