import React, { useEffect, useState } from 'react'
import Logo from './Logo'
import { ModeToggle } from './mode-toogle'
import { Footer } from './Footer'
import { Wallet } from './AppWalletProvider'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Link, useNavigate } from 'react-router-dom'
import { AlertCircleIcon, ChevronLeft, Info, ShieldIcon } from 'lucide-react'
import { Checkbox } from './ui/checkbox'
import { ResuableAlert } from './ReuseableAlert'
import Header from './Header'
import { amountAtom, privateMessageAtom, receiverAtom } from '@/store/transactionAtom'
import { useAtom, useAtomValue } from 'jotai'

const ReviewCard = () => {
    const navigate = useNavigate()
    const [isConfirmed, setIsConfirmed] = useState(false)
    const amount = useAtomValue(amountAtom)
    const receiver = useAtomValue(receiverAtom)
    const privateMessage = useAtomValue(privateMessageAtom)
    const handleClick = () => {
        navigate("/app/step-1")
        window.location.reload()
    }
    return (
        <div className='dark:bg-black bg-white w-full flex flex-col min-h-screen relative'>
            <div className='z-10 sticky top-0 bg-white/30 dark:bg-black/30 backdrop-blur-md'>
                <Header />
            </div>
            <div className='px-60 h-screen flex flex-col justify-start items-center mt-20'>
                <div className='lg:w-[60vw] md:w-[80vw] w-[90vw]'>
                    <Button variant={"ghost"} size={"sm"} className="text-black dark:text-white group pl-1" onClick={handleClick}><ChevronLeft size={18} className='' />Back</Button>
                    <div className='mt-5'>
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold">Review Transaction</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-gray-500">Amount to be sent</p>
                                    <p className="text-lg font-bold">{amount + " SOL"}</p>
                                </div>
                                <div className="space-y-2">
                                    <p className="text-sm font-medium text-gray-500">Receiver's address</p>
                                    <p className="text-lg font-mono">
                                        {receiver.slice(0, 6) + "....." + receiver.slice(-4)}
                                    </p>
                                </div>
                                {privateMessage !== "" && <div className="space-y-2">
                                    <p className="text-sm font-medium text-gray-500">Message</p>
                                    <p className="text-lg font-bold">{privateMessage}</p>
                                </div>}
                                {/* Will do it later, skipping this for now */}
                                {/* <div className="space-y-2">
                                    <p className="text-sm font-medium text-gray-500">Network fee estimate</p>
                                    <p className="text-lg font-bold">0.000005 SOL</p>
                                </div> */}
                                <ResuableAlert variant={"warning"} icon={<Info size={18} />} description={"Please review all details carefully. This transaction cannot be reversed once confirmed."} title={"Attention"} />
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
                                    disabled={!isConfirmed}
                                    onClick={() => navigate("/app/success")}
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