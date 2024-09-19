// App.jsx remains the same as in the previous example

// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { Wallet } from './AppWalletProvider';

import { Spinner } from './Spinner';

const CONNECTION_TIMEOUT = 15000; // 15 seconds timeout

const Dashboard = () => {
    const { publicKey, connected } = useWallet();
    const { connection } = useConnection();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [connectionError, setConnectionError] = useState(null);

    useEffect(() => {
        const checkConnectionAndWallet = async () => {
            setIsLoading(true);
            setConnectionError(null);

            if (!connected) {
                navigate('/');
                return;
            }

            try {
                // Check if we can reach the Solana network
                await Promise.race([
                    connection.getLatestBlockhash(),
                    new Promise((_, reject) => 
                        setTimeout(() => reject(new Error('Connection timeout')), CONNECTION_TIMEOUT)
                    )
                ]);

                // If we reach here, the connection is successful
                setIsLoading(false);
            } catch (error) {
                console.error('Connection error:', error);
                setConnectionError('Failed to connect to the Solana network. Please check your internet connection and try again.');
                setIsLoading(false);
            }
        };

        checkConnectionAndWallet();
    }, [connected, connection, navigate]);

    if (isLoading) {
        return <Spinner />;
    }

    if (connectionError) {
        return <div className="text-red-500 text-center p-4">{connectionError}</div>;
    }

    return (
        <div className='dark:bg-black bg-white w-full flex flex-col min-h-screen'>
            <div className='flex flex-col justify-center mt-20 items-center'>
                <h1 className='text-black dark:text-white mt-auto text-6xl font-bold'>Dashboard</h1>
                <div>
                    <Wallet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;