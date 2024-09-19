import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom"

import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';

import { ThemeProvider } from "./components/theme-provider.jsx";
import Features from "./components/Features.jsx";
import Pricing from "./components/Pricing.jsx";
import HowItWorks from "./components/HowItWorks.jsx";
import Docs from "./components/Docs.jsx";
import HomePage from "./components/HomePage.jsx";
import { NotFound } from "./components/NotFound.jsx";

import Dashboard from "./components/Dashboard.jsx";
import { useEffect, useMemo, useState } from "react";
import { clusterApiUrl } from "@solana/web3.js";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import '@solana/wallet-adapter-react-ui/styles.css';
import './components/custom-wallet-modal.css'
import { Spinner } from "./components/Spinner.jsx";

const CONNECTION_TIMEOUT = 15000; // 15 seconds timeout

const WalletConnectionWrapper = ({ children }) => {
  const { connected, connecting } = useWallet();
  const { connection } = useConnection();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);
  const [connectionError, setConnectionError] = useState(null);

  useEffect(() => {
    let timeoutId;

    const checkConnection = async () => {
      setIsLoading(true);
      setConnectionError(null);

      try {
        // Check if we can reach the Solana network
        await Promise.race([
          connection.getLatestBlockhash(),
          new Promise((_, reject) =>
            setTimeout(() => reject(new Error('Connection timeout')), CONNECTION_TIMEOUT)
          )
        ]);

        if (connected && location.pathname !== '/app') {
        } else {
          setIsLoading(false);
        }
      } catch (error) {
        console.error('Connection error:', error);
        setConnectionError('Failed to connect to the Solana network. Please check your internet connection and try again.');
        setIsLoading(false);
      }
    };

    if (!connecting) {
      checkConnection();
    }

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [connected, connecting, connection, location]);

  if (connecting || isLoading) {
    return <Spinner />;
  }

  if (connectionError) {
    return <div className="text-red-500 text-center p-4">{connectionError}</div>;
  }

  if (connected && location.pathname !== '/app') {
    return <Navigate to="/app" replace />;
  }

  return children;
};

const AppRoutes = () => {
  const { connected } = useWallet();

  return (
    <WalletConnectionWrapper>
      <Routes>
        <Route path="/" element={connected ? <Navigate to="/app" replace /> : <HomePage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/app" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </WalletConnectionWrapper>
  );
};

function App() {
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(() => [new UnsafeBurnerWalletAdapter()], []);

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <ThemeProvider>
            <BrowserRouter>
              <AppRoutes />
            </BrowserRouter>
          </ThemeProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App
