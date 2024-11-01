import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { AlertCircle, ClipboardCheck, Copy, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import Header from './Header'
import { Footer } from './Footer'
import { useNavigate } from 'react-router-dom'
import usePreventBack from '@/hooks/usePreventBack'

export default function TransactionError() {
    const [copied, setCopied] = useState(false)
    const navigate = useNavigate()
    const errorCode = 'SOL-ERR-1234' // Example error code
    usePreventBack();

    const handleDashboardClick = () => {
        // window.location.reload()
        navigate('/app');
    };

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => setCopied(false), 2000)
            return () => clearTimeout(timer)
        }
    }, [copied])

    const copyToClipboard = () => {
        navigator.clipboard.writeText(errorCode)
        setCopied(true)
    }

    return (
        <div className="dark:bg-black bg-white w-full flex flex-col min-h-screen relative">
            <div className='z-10 sticky top-0 bg-white/30 dark:bg-black/30 backdrop-blur-md'>
                <Header />
            </div>
            <div className='lg:px-60 w-full sm:px-5 h-screen flex flex-col justify-start items-center mt-20'>
                <Card className="lg:w-[60vw] md:w-[80vw] w-[90vw]">
                    <CardHeader>
                        <CardTitle className="text-2xl font-bold text-center">Transaction Failed</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: "spring", stiffness: 260, damping: 20 }}
                            className="flex justify-center"
                        >
                            <AlertCircle className="w-24 h-24 text-red-500" />
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-center text-gray-600"
                        >
                            We encountered an error while processing your transaction on the Solana blockchain. Please try again or contact support if the issue persists.
                        </motion.p>
                        <div className="bg-white dark:bg-black p-4 rounded-lg">
                            <p className="text-sm font-medium text-gray-500 mb-1">Error Code</p>
                            <div className="flex items-center justify-between bg-white dark:bg-black border border-gray-400 rounded p-2">
                                <code className="text-sm text-black dark:text-white break-all p-1">{errorCode}</code>
                                <Button variant="ghost" size="sm" onClick={copyToClipboard}>
                                    {copied ? <ClipboardCheck className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-2">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={handleDashboardClick}>
                            Back to Dashboard
                        </Button>
                        {/* <Button variant="outline" className="w-full">
                            Contact Support
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </Button> */}
                    </CardFooter>
                </Card>
            </div>
            <Footer />
        </div>
    )
}