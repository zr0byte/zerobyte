const frequentlyAskedQuestions = [
    {
        question: "What are private transactions?",
        answer: "Private transactions allow users to send and receive funds without revealing any transaction details, such as the sender, recipient, or amount, to the public. With the use of Zero-Knowledge Proofs (zkSNARKs), the transaction remains completely confidential while still being verified on the blockchain."
    },
    {
        question: "How do Zero-Knowledge Proofs (zkSNARKs) ensure privacy?",
        answer: "Zero-Knowledge Proofs allow one party to prove to another that a statement is true without revealing any additional information. In the case of private transactions, zkSNARKs ensure that the transaction is valid without exposing details like the sender’s or recipient’s identity, or the amount involved."
    },
    {
        question: "How do I ensure my transactions are private?",
        answer: "All transactions conducted through our platform are private by default using zkSNARKs. You don’t need to manually activate privacy features – they are built into the core of the app. However, you can customize your privacy settings to hide or reveal certain details, such as transaction amounts or recipient addresses, if needed."
    },
    {
        question: "Are private transactions secure?",
        answer: "Yes, private transactions are highly secure. Not only is your transaction data hidden, but our platform also uses end-to-end encryption to protect data during transmission. Additionally, zkSNARKs ensure that all transactions are valid and secure without exposing any sensitive information."
    },
    {
        question: "Can I see my transaction history?",
        answer: "Yes, you can view your transaction history privately. Only you can see the details of your transactions, including the amounts and recipient addresses. If you prefer, these details can remain hidden or be revealed with a password or biometric authentication."
    },
    {
        question: "Will my wallet address be exposed?",
        answer: "No, your wallet address remains confidential when conducting private transactions. We only display obfuscated versions of wallet addresses (e.g., 3xx...72c) to ensure that your identity and financial activities stay private."
    },
    {
        question: "Can I use this app without connecting my wallet?",
        answer: "To use the full features of our app, you need to connect a compatible wallet (e.g., Phantom or Solflare). Your wallet is used to sign transactions and manage funds securely. However, we do not store any wallet data on our servers, ensuring your privacy and control over your assets."
    },
    {
        question: "How fast are private transactions on Solana?",
        answer: "Solana’s high-performance blockchain ensures that transactions, even private ones, are processed quickly. Thanks to Solana’s scalability, private transactions using zkSNARKs are both fast and cost-effective compared to other blockchains."
    },
    {
        question: "Do I need technical knowledge to use this app?",
        answer: "No, our platform is designed to be user-friendly and accessible to everyone. You don’t need any special technical knowledge to perform private transactions. The app handles the complexities of zkSNARKs and encryption in the background, ensuring a seamless experience."
    },
    {
        question: "How does the app protect my data from hackers?",
        answer: "We use cutting-edge encryption and decentralized technology to safeguard your data from unauthorized access. Additionally, sensitive information like transaction details is stored privately on the blockchain and is not accessible to anyone without proper authorization."
    }
];

export default frequentlyAskedQuestions;