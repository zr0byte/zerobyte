import { Program, AnchorProvider, web3, BN } from "@project-serum/anchor";
import { PublicKey } from "@solana/web3.js";
import { connection, commitmentLevel, transferSolProgramId, transferSolProgramInterface } from "./constants";

export async function transferSol(amount, recipientAddress, wallet) {
  const provider = new AnchorProvider(connection, wallet, {
    preflightCommitment: commitmentLevel,
  });

  if (!provider) return;

  const program = new Program(
    transferSolProgramInterface,
    transferSolProgramId,
    provider
  );

  try {
    const recipient = new PublicKey(recipientAddress);
    const amountLamports = new BN(amount * web3.LAMPORTS_PER_SOL);

    const txn = await program.rpc.transferSolWithCpi(amountLamports, {
      accounts: {
        payer: provider.wallet.publicKey,
        recipient: recipient,
        system_program: web3.SystemProgram.programId,
      },
    });

    console.log("Transaction signature:", txn);
    return txn;
  } catch (err) {
    console.log("Transaction error: ", err);
    console.log("Program ID: ", program.programId.toBase58());
    throw err;
  }
}