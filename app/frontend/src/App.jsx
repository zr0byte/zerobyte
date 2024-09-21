import { BrowserRouter, Navigate, Route, Routes, useLocation, useNavigate } from "react-router-dom"

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
import { Spinner } from "./components/Spinner.jsx";
import '@solana/wallet-adapter-react-ui/styles.css';
import './components/custom-wallet-modal.css'
import { Toaster, toast } from "sonner";
import NewTransaction from "./components/NewTransaction.jsx";
import ReceiverView from "./components/ReceiverView.jsx";
import ReviewCard from "./components/ReviewCard.jsx";
import ZKPGenerateView from "./components/ZKPGenerateView.jsx";
import WalletConnectionWrapper from "./components/WalletConnectionWrapper.jsx";


const CONNECTION_TIMEOUT = 15000; // 15 seconds timeout

const ProtectedRoute = ({ children }) => {
  const { connected } = useWallet();
  const location = useLocation();

  if (!connected) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};


const AppRoutes = () => {
  // const { connected } = useWallet();

  return (
    <WalletConnectionWrapper CONNECTION_TIMEOUT={CONNECTION_TIMEOUT}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/features" element={<Features />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        {/* <Route path="/pricing" element={<Pricing />} /> */}
        <Route path="/docs" element={<Docs />} />
        <Route path="/app" element={<ProtectedRoute><Dashboard CONNECTION_TIMEOUT={CONNECTION_TIMEOUT} /></ProtectedRoute>} />
        <Route path="/app/step-1" element={<ProtectedRoute><NewTransaction /></ProtectedRoute>} />
        <Route path="/app/step-2" element={<ProtectedRoute><ReceiverView /></ProtectedRoute>} />
        <Route path="/app/review-transaction" element={<ProtectedRoute><ReviewCard /></ProtectedRoute>} />
        <Route path="/app/smart-contract-generate" element={<ProtectedRoute><ZKPGenerateView /></ProtectedRoute>} />
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
              <Toaster />
              <AppRoutes />
            </BrowserRouter>
          </ThemeProvider>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App
