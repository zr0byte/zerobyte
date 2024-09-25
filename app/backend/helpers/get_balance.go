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

	client := rpc.New(rpc.TestNet_RPC) // Use TestNet_RPC for testing locally

	// Convert the string wallet address to solana.PublicKey
	pubKey, err := solana.PublicKeyFromBase58(walletAddress)
	if err != nil {
		return res, errors.Wrap(err, "Invalid wallet address : ")
	}

	// Fetch the account info
	accountInfo, err := client.GetAccountInfo(context.TODO(), pubKey)
	if err != nil {
		return res, errors.Wrap(err, "Failed to get account info : ")
	}

	res.Lamports = accountInfo.Value.Lamports

	// Print the wallet address and some account information
	fmt.Printf("Wallet Address: %s\n", pubKey.String())
	fmt.Printf("Account Lamports: %d\n", accountInfo.Value.Lamports)
	fmt.Printf("Account Data: %x\n", accountInfo.Value.Owner)
	// fmt.Printf("Executable: %t\n", accountInfo.Executable)

	return res, err
}
