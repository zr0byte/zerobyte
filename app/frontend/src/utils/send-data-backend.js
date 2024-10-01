import axios from 'axios';


export async function generateZeroProof({ sender, receiver, amount, privateMsg }) {
    console.log("Generating proof......", sender, receiver, amount, privateMsg);
    try {
        const response = await axios.post("http://localhost:8080/generate-proof", {
            senders_address: sender,
            revievers_Address: receiver,
            amount: amount,
            message: privateMsg,
        });
        console.log("Proof generated:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error generating proof:", error);
        throw error;
    }
}