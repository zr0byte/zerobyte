import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { CheckCircle, ClipboardCheck, Copy, ExternalLink, Info } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import Header from './Header'
import { Footer } from './Footer'
import { useNavigate } from 'react-router-dom'
import usePreventBack from '@/hooks/usePreventBack'
import { useAtomValue } from 'jotai'
import { transactionsAtom } from '@/store/transactionAtom'
import { ResuableAlert } from './ReuseableAlert'

export default function TransactionSuccess() {
    const [copied, setCopied] = useState(false)
    // const [error, setError] = useState(false)
    const navigate = useNavigate()
    const transactionInfo = useAtomValue(transactionsAtom)
    const latestTransaction = transactionInfo[0]
    usePreventBack();
    const handleDashboardClick = () => {
        navigate('/app');
        // window.location.reload()
    };

    useEffect(() => {

        if (copied) {
            const timer = setTimeout(() => setCopied(false), 2000)
            return () => clearTimeout(timer)
        }
    }, [copied])

    const copyToClipboard = () => {
        navigator.clipboard.writeText(transactionInfo.signature)
        setCopied(true)
    }
    const explorerUrl = `https://explorer.solana.com/tx/${latestTransaction.signature}?cluster=devnet`
    // console.log(latestTransaction.signature);
    return (
        <div className="dark:bg-black bg-white w-full flex flex-col min-h-screen relative">
            <div className='z-10 sticky top-0 bg-white/30 dark:bg-black/30 backdrop-blur-md'>
                <Header />
            </div>
            <div className='px-60 h-screen flex flex-col justify-start items-center mt-20'>
                <Card className="lg:w-[60vw] md:w-[80vw] w-[90vw]">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-center">Transaction Successful</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="flex justify-center"
                        >
                            <CheckCircle className="w-24 h-24 text-green-500" />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-center text-gray-600"
                        >
                            Your private transaction has been successfully processed and confirmed on the Solana blockchain.
                        </motion.p>
                        <div className="bg-white dark:bg-inherit py-4 rounded-lg">
                            <p className="text-sm font-medium text-gray-500 mb-1">Transaction ID</p>
                            <div className="flex items-center justify-between bg-white dark:bg-black/30 border border-gray-400 rounded p-2">
                                <code className="text-sm text-black dark:text-white break-all p-1">{latestTransaction.signature}</code>
                                <Button variant="ghost" size="sm" onClick={copyToClipboard}>
                                    {copied ? <ClipboardCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-2">
                        <ResuableAlert icon={<Info size={18} />} title={"Important"} description={
                            "Transactions are currently not private. We are actively working on implementing full privacy features. Please be aware that transaction details may be visible during this development phase."} variant={"warning"} />
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleDashboardClick}>
                            Back to Dashboard
                        </Button>
                        <div className='w-full'>

                            <a href={explorerUrl} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" className="w-full">
                                    View on Explorer
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                            </a>
                        </div>
                    </CardFooter>
                </Card>
            </div>
            <Footer />
        </div>
    )
}