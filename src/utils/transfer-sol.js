import { AnchorProvider, web3, BN } from "@project-serum/anchor";
import { PublicKey, Transaction, TransactionInstruction, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { connection } from "./constants";

const programId = new PublicKey(import.meta.env.VITE_PROGRAM_ID);
const commitmentLevel = 'confirmed';

async function sendLamports(wallet, to, amount) {
  let data = Buffer.alloc(8);
  data.writeBigInt64LE(BigInt(amount.toString()));

  let ins = new TransactionInstruction({
    keys: [
      { pubkey: wallet.publicKey, isSigner: true, isWritable: true },
      { pubkey: to, isSigner: false, isWritable: true },
      { pubkey: SystemProgram.programId, isSigner: false, isWritable: false },
    ],
    programId: programId,
    data: data,
  });

  const transaction = new Transaction().add(ins);
  transaction.feePayer = wallet.publicKey;
  const { blockhash } = await connection.getLatestBlockhash(commitmentLevel);
  transaction.recentBlockhash = blockhash;

  const signedTransaction = await wallet.signTransaction(transaction);
  const signature = await connection.sendRawTransaction(signedTransaction.serialize(), {
    skipPreflight: false,
    preflightCommitment: commitmentLevel,
  });

  return signature;
}

export async function transferSol(amountLamports, recipientAddress, wallet) {
  const provider = new AnchorProvider(connection, wallet, {
    preflightCommitment: commitmentLevel,
    commitment: commitmentLevel,
  });

  if (!provider) return;

  try {
    const recipient = new PublicKey(recipientAddress);

    const signature = await sendLamports(wallet, recipient, amountLamports);

    // Wait for transaction confirmation
    const confirmation = await connection.confirmTransaction(signature, commitmentLevel);

    // Fetch the transaction details
    const transactionDetails = await connection.getTransaction(signature, {
      commitment: commitmentLevel,
      maxSupportedTransactionVersion: 0
    });

    if (!transactionDetails) {
      throw new Error("Transaction details not found");
    }

    // Extract relevant information
    const transactionInfo = {
      signature: signature,
      blockTime: transactionDetails.blockTime ? new Date(transactionDetails.blockTime * 1000).toISOString() : 'Unknown',
      sender: wallet.publicKey.toBase58(),
      recipient: recipientAddress,
      amount: amountLamports.toNumber() / LAMPORTS_PER_SOL,
      fee: transactionDetails.meta.fee / LAMPORTS_PER_SOL,
      status: confirmation.value.err ? 'Failed' : 'Success'
    };

    return transactionInfo;
  } catch (err) {
    console.error("Transaction error: ", err);
    throw err;
  }
}