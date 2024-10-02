import axios from 'axios';

const GENERATE_PROOF_URL = import.meta.env.VITE_GENERATE_PROOF_URL
export async function generateZeroProof(sender, receiver, amount, privateMsg ) {
    console.log("Generating proof......", sender, receiver, amount, privateMsg);
    try {
        const response = await axios.post(GENERATE_PROOF_URL, {
            senders_address: sender,
            recievers_address: receiver,
            amount: parseFloat(amount),
            message: privateMsg,
        });
        console.log("Proof generated:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error generating proof:", error);
        throw error;
    }
}   