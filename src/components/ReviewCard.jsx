import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { useNavigate } from 'react-router-dom'
import { ChevronLeft, Info } from 'lucide-react'
import { Checkbox } from './ui/checkbox'
import { ResuableAlert } from './ReuseableAlert'
import Header from './Header'
import { amountAtom, persistentTransactionsAtom, privateMessageAtom, receiverAtom } from '@/store/transactionAtom'
import { useAtom, useAtomValue } from 'jotai'
import { useAnchorWallet } from '@solana/wallet-adapter-react'
import { transferSol } from '@/utils/transfer-sol'
import { BN } from '@project-serum/anchor'
import { LAMPORTS_PER_SOL } from '@solana/web3.js'

import { Spinner } from './Spinner'
import { toast } from 'sonner'

const ReviewCard = () => {
    const navigate = useNavigate()
    const [isConfirmed, setIsConfirmed] = useState(false)
    const amount = useAtomValue(amountAtom)
    const receiver = useAtomValue(receiverAtom)
    const privateMessage = useAtomValue(privateMessageAtom)
    const [isLoading, setIsLoading] = useState(false)
    const [, setTransactionInfo] = useAtom(persistentTransactionsAtom)
    const wallet = useAnchorWallet();
    const [amountLamports, setAmountLamports] = useState(null)

    useEffect(() => {
        if (amount) {
            try {
                const floatAmount = parseFloat(amount)
                if (!isNaN(floatAmount)) {
                    const lamports = Math.round(floatAmount * LAMPORTS_PER_SOL)
                    setAmountLamports(new BN(lamports.toString()))
                } else {
                    console.error('Invalid amount:', amount)
                    setAmountLamports(null)
                }
            } catch (error) {
                console.error('Error converting amount to BN:', error)
                setAmountLamports(null)
            }
        }
    }, [amount])

    const handleClick = () => {
        navigate("/app/step-1")
    }

    const handleTransfer = async () => {
        if (!wallet || !amountLamports) return;
        try {
            setIsLoading(true)
            const transactionInfo = await transferSol(amountLamports, receiver, wallet);
            setTransactionInfo(transactionInfo);
            navigate("/app/success")
        } catch (error) {
            setIsLoading(false)
            navigate("/app/failed")
            console.error("Transfer error:", error);
            toast.error(error.message)
        }
    };

    const formatAmount = (value) => {
        if (!value) return '0';
        const floatValue = parseFloat(value);
        if (isNaN(floatValue)) return '0';
        return floatValue.toFixed(9).replace(/\.?0+$/, '');
    };

    if (isLoading){
        return <Spinner />
    }

    return (
        <div className='dark:bg-black bg-white w-full flex flex-col min-h-screen relative'>
            <div className='z-10 sticky top-0 bg-white/30 dark:bg-black/30 backdrop-blur-md'>
                <Header />
            </div>
            <div className='px-60 h-screen flex flex-col justify-start items-center mt-20'>
                <div className='lg:w-[60vw] md:w-[80vw] w-[90vw]'>
                    <Button variant={"ghost"} size={"sm"} className="text-black dark:text-white group pl-1" onClick={handleClick}>
                        <ChevronLeft size={18} className='' />Back
                    </Button>
                    <div className='mt-5'>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">Review Transaction</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-gray-500">Amount to be sent</p>
                                    <p className="text-lg font-bold">{formatAmount(amount) + " SOL"}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-gray-500">Receiver's address</p>
                                    <p className="text-lg font-mono">
                                        {receiver.slice(0, 6) + "....." + receiver.slice(-4)}
                                    </p>
                                </div>
                                {privateMessage !== "" && (
                                    <div className="space-y-2">
                                        <p className="text-sm font-medium text-gray-500">Message</p>
                                        <p className="text-lg font-bold">{privateMessage}</p>
                                    </div>
                                )}
                                <ResuableAlert 
                                    variant={"warning"} 
                                    icon={<Info size={18} />} 
                                    description={"Please review all details carefully. This transaction cannot be reversed once confirmed."} 
                                    title={"Attention"} 
                                />
                                <div className="flex items-center space-x-2">
                                    <Checkbox
                                        id="confirm"
                                        checked={isConfirmed}
                                        onCheckedChange={(checked) => setIsConfirmed(checked)}
                                    />
                                    <label
                                        htmlFor="confirm"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        I understand that this is a private transaction and cannot be reversed.
                                    </label>
                                </div>
                                <Button
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                                    disabled={!isConfirmed || !amountLamports}
                                    onClick={handleTransfer}
                                >
                                    Confirm and Send
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ReviewCard