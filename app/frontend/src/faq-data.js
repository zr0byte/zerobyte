const frequentlyAskedQuestions = [
    {
        question: "What is an Anonymous Credential System?",
        answer: "An Anonymous Credential System allows users to prove that they meet certain criteria without revealing specific details about their credentials. For example, a user can prove they have a credit score above a certain threshold without disclosing the exact score."
    },
    {
        question: "How does the system ensure privacy?",
        answer: "The system leverages Zero-Knowledge Proofs (ZKP), a cryptographic technique that enables users to prove they meet a requirement (like a credit score threshold) without revealing any sensitive information."
    },
    {
        question: "What is the benefit for DeFi platforms?",
        answer: "DeFi platforms can offer special rates or benefits to users who meet certain criteria, like a high credit score, while maintaining user privacy."
    },
    {
        question: "How does a user obtain their credentials?",
        answer: "Users obtain their credentials from a trusted off-chain issuer (e.g., a credit score provider). The user then generates a ZKP that proves they meet the necessary conditions without sharing the credential details."
    },
    {
        question: "What are the key steps in the user flow?",
        answer: `1. Users obtain credentials off-chain (e.g., from a trusted issuer).
      \n2.  They generate a Zero-Knowledge Proof that they meet the required criteria. 
      \n3. They submit the proof to the platform. 
      \n4. The platform verifies the proof and grants access to special rates or benefits.`
    },
    {
        question: "How is the verification done on-chain?",
        answer: "The DeFi platform uses a Solana-based program to verify the submitted proofs on-chain. The smart contract checks the validity of the ZKP to confirm that the user meets the required conditions."
    },
    {
        question: "What technology is used to build the Anonymous Credential System?",
        answer: "The system uses Zero-Knowledge Proofs (ZKP) and is implemented using ZKP libraries compatible with Solana."
    },
    {
        question: "Can the platform see my actual credit score?",
        answer: "No, the platform cannot see your actual credit score. The Zero-Knowledge Proof allows you to prove that you meet the required criteria without revealing the score itself."
    },
    {
        question: "Is this feature secure?",
        answer: "Yes, Zero-Knowledge Proofs are designed to ensure privacy and security. All credential proofs are verified on-chain, ensuring transparency and immutability."
    },
    {
        question: "How do users interact with the DeFi platform?",
        answer: "Users interact with the platform through an easy-to-use interface where they can submit their proofs."
    }
];

export default frequentlyAskedQuestions;