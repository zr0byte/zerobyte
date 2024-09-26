import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { CheckCircle, Copy, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card'
import Header from './Header'
import { Footer } from './Footer'
import { useNavigate } from 'react-router-dom'

export default function TransactionSuccess() {
    const [copied, setCopied] = useState(false)
    const navigate = useNavigate()
    const transactionId = '3Wk2gWgMtMZXVLYzjNJNz6UiNpJXKWxmzKvTsqXXXXXX'

    useEffect(() => {
        if (copied) {
            const timer = setTimeout(() => setCopied(false), 2000)
            return () => clearTimeout(timer)
        }
    }, [copied])

    const copyToClipboard = () => {
        navigator.clipboard.writeText(transactionId)
        setCopied(true)
    }

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
                        <div className="bg-white dark:bg-black p-4 rounded-lg">
                            <p className="text-sm font-medium text-gray-500 mb-1">Transaction ID</p>
                            <div className="flex items-center justify-between bg-white dark:bg-black border  border-gray-400 rounded p-2">
                                <code className="text-sm text-black dark:text-white break-all p-1">{transactionId}</code>
                                <Button variant="ghost" size="sm" onClick={copyToClipboard}>
                                    {copied ? <CheckCircle className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex flex-col space-y-2">
                        <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={() => navigate("/app")}>
                            Back to Dashboard
                        </Button>
                        <Button variant="outline" className="w-full">
                            View on Explorer
                            <ExternalLink className="ml-2 h-4 w-4" />
                        </Button>
                    </CardFooter>
                </Card>
            </div>
            <Footer />
        </div>
    )
}