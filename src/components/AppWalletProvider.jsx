import React from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import "./custom-wallet-modal.css"


export const Wallet = () => {
    return <WalletMultiButton className='custom-wallet-button'/>;
};