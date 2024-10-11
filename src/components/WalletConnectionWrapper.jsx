import React, { useEffect, useState } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Spinner } from './Spinner';
// const REDIRECTION_DELAY = 400;
const WalletConnectionWrapper = ({ children, CONNECTION_TIMEOUT }) => {
    const navigate = useNavigate()
    const { connected, connecting } = useWallet();
    const { connection } = useConnection();
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const checkConnection = async () => {
            if (connecting) return;

            try {
                await Promise.race([
                    connection.getLatestBlockhash(),
                    new Promise((_, reject) =>
                        setTimeout(() => reject(new Error('Connection timeout')), CONNECTION_TIMEOUT)
                    )
                ]);
                // console.log(connection);
                if (connected && (location.pathname === '/' || location.pathname === "/docs" || location.pathname === "/how-it-works" || location.pathname === "/wallet")) {
                    navigate('/app');
                    setIsLoggedIn(true)
                }
            } catch (error) {
                console.error('Connection error:', error);
                toast.error("Connection failed.", {
                    description: "Failed to connect to the Solana network. Please check your internet connection and try again.",
                    duration: 5000,    // Set duration to 5000ms
                    richColors: "true"
                });
                if (location.pathname !== '/') {
                    navigate('/');
                    setIsLoggedIn(false)
                }
            }
        };

        checkConnection();
    }, [connected, connecting, connection, location, navigate]);

    if (connecting) {
        return <Spinner />;
    }
    
    // if (isLoggedIn && !connected) {
    //     return null; // This will prevent any flickering as the navigate in useEffect will handle redirection
    // }
    return children;
};



export default WalletConnectionWrapper