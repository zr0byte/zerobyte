/**
 * Program IDL in camelCase format in order to be used in JS/TS.
 *
 * Note that this is only a type helper and is not the actual IDL. The original
 * IDL can be found at `target/idl/transfer_sol.json`.
 */
export type TransferSol = {
    "address": "4PcALvTHvD1aPCsLqRZfKjgBEnFWUgZy67KDAFqjyCGN",
    "metadata": {
        "name": "transferSol",
        "version": "0.1.0",
        "spec": "0.1.0",
        "description": "Created with Anchor"
    },
    "instructions": [
        {
            "name": "transferSolWithCpi",
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
                    "name": "systemProgram",
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
};

