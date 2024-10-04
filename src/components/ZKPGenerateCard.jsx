import React, { useCallback, useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

import { Button } from './ui/button'
import { ArrowRight, CheckCircleIcon, InfoIcon, XCircleIcon } from 'lucide-react'
import { Progress } from './ui/progress'
import { ResuableAlert } from './ReuseableAlert'
import { useNavigate } from 'react-router-dom'
import { generateZeroProof } from '@/utils/send-data-backend'
import { useAtomValue, useSetAtom } from 'jotai'
import { amountAtom, isGeneratingProofAtom, privateMessageAtom, proofErrorAtom, proofResponseAtom, receiverAtom } from '@/store/transactionAtom'
import { useWallet } from '@solana/wallet-adapter-react'
import { toast } from 'sonner'

const ZKPGenerateCard = ({ title, loadingText, successText, succesMsg, alertModal, btnText, url }) => {
    const navigate = useNavigate()
    const { connected } = useWallet()
    const [progress, setProgress] = useState(0)
    // const [error, setError] = useState(null)
    // const { publicKey } = useWallet()
    // const [isComplete, setIsComplete] = useState(null)
    // const proofResponse = useAtomValue(proofResponseAtom)
    // const isGeneratingProof = useAtomValue(isGeneratingProofAtom)
    // const proofError = useAtomValue(proofErrorAtom)
    const proofResponse = useAtomValue(proofResponseAtom);
    const isGeneratingProof = useAtomValue(isGeneratingProofAtom);
    const proofError = useAtomValue(proofErrorAtom);
    // const resetTransactionState = useSetAtom(resetTransactionStateAtom)
    const [toastShown, setToastShown] = useState(false)
    const [showResult, setShowResult] = useState(false)
    // const generateProof = useCallback(async () => {
    //     try {
    //         const sender = publicKey.toBase58()
    //         const startTime = Date.now()
    //         const response = await generateZeroProof(sender, receiver, amount, privateMessage)
    //         const endTime = Date.now()
    //         const duration = endTime - startTime

    //         setProofResponse(response)

    //         // calculating response time for progress
    //         const simulateProgress = () => {
    //             let elapsed = 0
    //             const progressInterval = setInterval(() => {
    //                 elapsed += 100
    //                 const calculatedProgress = Math.min((elapsed / duration) * 200, 100)
    //                 setProgress(calculatedProgress)
    //                 if (calculatedProgress >= 100) {
    //                     clearInterval(progressInterval)
    //                     setIsComplete(true)
    //                 }
    //             }, 100)
    //         }

    //         simulateProgress()
    //     } catch (error) {
    //         console.error("Error generating proof:", error)
    //         setError("Failed to generate proof. Please try again.")
    //     }
    // }, [publicKey, receiver, amount, privateMessage])

    // useEffect(() => {
    //     generateProof()
    // }, [generateProof])
    // const resetState = useCallback(() => {
    //     setProgress(0)
    //     setShowResult(false)
    //     setErrorToastShown(false)
    //     resetTransactionState()
    // }, [resetTransactionState])

    // useEffect(() => {
    //     // Reset state when component mounts or wallet connection changes
    //     resetState()
    // }, [connected, resetState])
    // const resetState = useCallback(() => {
    //     setProgress(0)
    //     setShowResult(false)
    //     setToastShown(false)
    //     resetTransactionState()
    // }, [resetTransactionState])

    // useEffect(() => {
    //     // Reset state when component mounts or wallet connection changes
    //     resetState()
    // }, [connected, resetState])
    useEffect(() => {
        let interval;
        if (isGeneratingProof) {
            setShowResult(false)
            setProgress(0)
            interval = setInterval(() => {
                setProgress((oldProgress) => {
                    const newProgress = Math.min(oldProgress + 5, 95);
                    return newProgress;
                });
            }, 200);
        } else if (proofResponse || proofError) {
            clearInterval(interval);
            setProgress(100);
            setTimeout(() => setShowResult(true), 500); // Short delay to ensure progress reaches 100%
        }

        return () => clearInterval(interval);
    }, [isGeneratingProof, proofResponse, proofError]);

    useEffect(() => {
        if (proofError && !toastShown) {
            toast.error("Failed to generate proof. Please try again.", {
                description: "Please ensure you have sufficient SOL in your wallet.",
                style: {
                    backgroundColor: '#f56565',
                    color: '#fff',
                    fontWeight: 'bold',
                    padding: '16px',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                },
                duration: 5000,
            });
            setToastShown(true); // Set the flag to true after the toast is shown
        }
    }, [proofError, toastShown]);
    const isSuccess = proofResponse && proofResponse.status_code === 200;
    console.log("Response", proofResponse, proofError, showResult);
    return (
        <div className='w-full my-5'>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">{title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {!showResult ? (
                        <>
                            <Progress value={progress} className="w-full" />
                            <p className="text-center text-gray-600">{loadingText + "..."}</p>
                        </>
                    ) : (
                        <>
                            {isSuccess ? (
                                <div className="text-center">
                                    <CheckCircleIcon className="mx-auto h-12 w-12 text-green-500 mb-4" />
                                    <p className="text-lg font-semibold text-green-600 mb-2">{successText}</p>
                                    <p className="text-gray-600 mb-4">{succesMsg}</p>
                                </div>
                            ) : proofError ? (
                                <div className="text-center">
                                    <XCircleIcon className="mx-auto h-12 w-12 text-red-500 mb-4" />
                                    <p className="text-lg font-semibold text-red-600 mb-2">Error</p>
                                    <p className="text-gray-600 mb-4">{proofError}</p>
                                </div>
                            ) : null}
                        </>
                    )}
                    {/* {error && toast.error("Failed to generate proof. Please try again.", {
                        style: {
                            backgroundColor: '#f56565', // A lighter shade of red
                            color: '#fff',              // White text color for better contrast
                            fontWeight: 'bold',         // Make the text stand out
                            padding: '16px',            // Add padding for better spacing
                            borderRadius: '8px',        // Rounded corners for a clean look
                            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow for a 3D effect
                        },
                        duration: 5000,
                    })} */}
                    {alertModal}
                    <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        disabled={isGeneratingProof || !isSuccess}
                        onClick={() => navigate(`/app/${url}`)}
                    >
                        {btnText}
                        <ArrowRight size={18} className='ml-1' />
                    </Button>
                    {/* This step will be of signature from the wallet */}
                </CardContent>
            </Card>
        </div>
    )
}

export default ZKPGenerateCard