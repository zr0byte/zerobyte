import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

export const commitmentLevel = "processed";
export const endpoint = clusterApiUrl("devnet");
export const connection = new Connection(endpoint, commitmentLevel);

export const transferSolProgramId = new PublicKey("4PcALvTHvD1aPCsLqRZfKjgBEnFWUgZy67KDAFqjyCGN");
export const transferSolProgramInterface = {
    "address": "4PcALvTHvD1aPCsLqRZfKjgBEnFWUgZy67KDAFqjyCGN",
    "metadata": {
        "name": "transfer_sol",
        "version": "0.1.0",
        "spec": "0.1.0",
        "description": "Created with Anchor"
    },
    "instructions": [
        {
            "name": "transfer_sol_with_cpi",
            "discriminator": [
                209,
                108,
                135,
                67,
                87,
                217,
                209,
                143
            ],
            "accounts": [
                {
                    "name": "payer",
                    "writable": true,
                    "signer": true
                },
                {
                    "name": "recipient",
                    "writable": true
                },
                {
                    "name": "system_program",
                    "address": "11111111111111111111111111111111"
                }
            ],
            "args": [
                {
                    "name": "amount",
                    "type": "u64"
                }
            ]
        }
    ]
}