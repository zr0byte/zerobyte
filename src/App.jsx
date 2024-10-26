import React, { useEffect, useMemo, useState, Suspense, lazy } from "react";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";
import { ConnectionProvider, WalletProvider, useWallet } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { UnsafeBurnerWalletAdapter } from '@solana/wallet-adapter-wallets';
import { clusterApiUrl } from "@solana/web3.js";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme-provider.jsx";
import WalletConnectionWrapper from "./components/WalletConnectionWrapper.jsx";
import { NotFound } from "./components/NotFound.jsx";
import '@solana/wallet-adapter-react-ui/styles.css';
import './components/custom-wallet-modal.css';
import { Spinner } from "./components/Spinner.jsx";
import "./global.js"

// Lazy-loaded components
const HomePage = lazy(() => import("./components/HomePage.jsx"));
const WalletPage = lazy(() => import("./components/WalletPage.jsx"));
const Features = lazy(() => import("./components/Features.jsx"));
const HowItWorks = lazy(() => import("./components/HowItWorks.jsx"));
const Docs = lazy(() => import("./components/Docs.jsx"));
const Dashboard = lazy(() => import("./components/Dashboard.jsx"));
const NewTransaction = lazy(() => import("./components/NewTransaction.jsx"));
const ZKPGenerateView = lazy(() => import("./components/ZKPGenerateView.jsx"));
const ReviewCard = lazy(() => import("./components/ReviewCard.jsx"));
const ProofOfFunds = lazy(() => import("./components/ProofOfFunds.jsx"))
const TransactionSucessPage = lazy(() => import("./components/TransactionSucessPage.jsx"))
const TransactionErrorPage = lazy(() => import("./components/TransactionErrorPage.jsx"))
const Roadmap = lazy(() => import("./components/Roadmap.jsx"));


const CONNECTION_TIMEOUT = 15000; // 15 seconds timeout

const ProtectedRoute = ({ children }) => {
  const { connected } = useWallet();
  const location = useLocation();
  const [isChecking, setIsChecking] = useState(true)

  useEffect(() => {
    const checkConnection = setTimeout(() => {
      setIsChecking(false);
    }, 1000); // Short delay to prevent flash of home page

    return () => clearTimeout(checkConnection);
  }, []);

  if (isChecking) {
    return <Spinner />;
  }

  if (!connected) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  return children;
};


const AppRoutes = () => {
  // const { connected } = useWallet();

  return (
    <WalletConnectionWrapper CONNECTION_TIMEOUT={CONNECTION_TIMEOUT}>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/wallet" element={<WalletPage />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/roadmap" element={<Roadmap />} />
          {/* <Route path="/pricing" element={<Pricing />} /> */}
          <Route path="/docs" element={<Docs />} />
          <Route path="/app" element={<ProtectedRoute><Dashboard CONNECTION_TIMEOUT={CONNECTION_TIMEOUT} /></ProtectedRoute>} />
          <Route path="/app/step-1" element={<ProtectedRoute><NewTransaction /></ProtectedRoute>} />
          <Route path="/app/proof-of-funds" element={<ProtectedRoute><ProofOfFunds /></ProtectedRoute>} />
          <Route path="/app/review-transaction" element={<ProtectedRoute><ReviewCard /></ProtectedRoute>} />
          {/* <Route path="/app/generate-smart-contract" element={<ProtectedRoute><ZKPGenerateView /></ProtectedRoute>} /> */}
          <Route path="/app/success" element={<ProtectedRoute><TransactionSucessPage /></ProtectedRoute>} />
          <Route path="/app/failed" element={<ProtectedRoute><TransactionErrorPage /></ProtectedRoute>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
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
