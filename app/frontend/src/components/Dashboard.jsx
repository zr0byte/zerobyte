import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useWallet, useConnection } from '@solana/wallet-adapter-react';
import { Wallet } from './AppWalletProvider';
import { toast } from "sonner";
import { ArrowRight } from 'lucide-react';
import { Spinner } from './Spinner';
import Logo from './Logo';
import { ModeToggle } from './mode-toogle';
import { Footer } from './Footer';
import { LAMPORTS_PER_SOL } from '@solana/web3.js';
import BalanceCard from './BalanceCard';
import { Button } from './ui/button';
import TransactionView from './TransactionView';

const Dashboard = ({ CONNECTION_TIMEOUT }) => {
    const { publicKey, connected } = useWallet();
    const { connection } = useConnection();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [balance, setBalance] = useState(null)

    useEffect(() => {
        const checkConnectionAndWallet = async () => {
            if (!connected) {
                navigate('/');
                return;
            }

            try {
                await Promise.race([
                    connection.getLatestBlockhash(),
                    new Promise((_, reject) => {
                        setTimeout(() => reject(new Error('Connection timeout')), CONNECTION_TIMEOUT)
                        console.log(CONNECTION_TIMEOUT);
                    })
                ]);
                setIsLoading(false);
            } catch (error) {
                console.error('Connection error:', error);
                toast.error("Failed to connect to the Solana network. Please check your internet connection and try again.");
                navigate('/');
            }
        };
        checkConnectionAndWallet();

        const fetchBalance = async () => {
            if (connected && publicKey) {
                try {
                    const balance = await connection.getBalance(publicKey);
                    const balanceInSol = balance / LAMPORTS_PER_SOL;
                    setBalance(`${balanceInSol} SOL`)
                    console.log(balanceInSol);
                } catch (error) {
                    console.error("Failed to fetch balance", error)
                }
            }
        }
        fetchBalance()
    }, [connected, connection, publicKey, navigate, CONNECTION_TIMEOUT]);

    if (isLoading) {
        return <Spinner />;
    }
    
    return (
        <div className='dark:bg-black bg-white w-full flex flex-col min-h-screen relative'>
            <div className='flex justify-between items-center z-10 py-5 px-60 sticky top-0 bg-white/30 dark:bg-black/30 backdrop-blur-md'>
                <div>
                    <Logo position={"top"} />
                </div>
                <div className='space-x-6'>
                    <Wallet />
                    <ModeToggle />
                </div>
            </div>
            <div className='px-60 h-screen flex flex-col justify-start items-center mt-20'>
                <div className='w-1/2'>
                    <BalanceCard balance={balance} />
                    <Button className="w-full my-5" onClick={() => navigate("/app/step-1")}>
                        New Private Transfer <ArrowRight className='ml-3' size={20} />
                    </Button>
                    <TransactionView />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;