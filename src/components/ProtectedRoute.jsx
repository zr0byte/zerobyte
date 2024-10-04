import React from 'react';
import { Navigate } from 'react-router-dom';
import { useWallet } from '@solana/wallet-adapter-react';

const ProtectedRoute = ({ children }) => {
    const { publicKey } = useWallet();

    // If no public key, redirect to home page
    if (!publicKey) {
        return <Navigate to="/" />;
    }

    // Otherwise, render the protected content
    return children;
};

export default ProtectedRoute; // Default export