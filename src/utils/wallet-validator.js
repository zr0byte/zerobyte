import { PublicKey } from "@solana/web3.js";

// Can check for the pubKey or wallet address user provided on chain
export const validateSolanaAddress = (address) => {
    try {
        // Convert the address to a PublicKey object
        const publicKey = new PublicKey(address);
        // Check if the address bytes are valid and the public key is on the curve
        const isValid = PublicKey.isOnCurve(publicKey.toBytes());
        console.log("Public key validator", isValid);
        return isValid;
    } catch (error) {
        console.error("Invalid Solana address:", error);
        return false; // Return false if the address is invalid
    }
};
