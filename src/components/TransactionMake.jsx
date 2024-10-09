import React, { useEffect, useState } from 'react'
import { useAtom } from 'jotai'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { ResuableAlert } from './ReuseableAlert'
import { Info } from 'lucide-react';
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import { generateZeroProof } from '@/utils/send-data-backend'
import { useWallet } from '@solana/wallet-adapter-react'
// import { validateSolanaAddress } from '@/utils/wallet-validator'
import { receiverAtom, amountAtom, privateMessageAtom, senderAtom, generateProofAtom } from '../store/transactionAtom'
import { validateSolanaAddress } from '@/utils/wallet-validator'
import { toast } from 'sonner'

const MAX_DECIMALS = 9;
const TransactionMake = () => {
    const navigate = useNavigate()
    const { publicKey } = useWallet()   
    const [sender, setSender] = useAtom(senderAtom)
    const [amount, setAmount] = useAtom(amountAtom)
    const [receiver, setReceiver] = useAtom(receiverAtom)
    // const [privateMessage, setPrivateMessage] = useAtom(privateMessageAtom)
    const [, generateProof] = useAtom(generateProofAtom);
    const [isAddressValid, setIsAddressValid] = useState(false)
    const pubKeyString = publicKey?.toBase58()
    const handlePublicAddressChange = (e) => {
        const val = e.target.value
        setReceiver(val)
        if (val === "") {
            // setReceiver("")
            setIsAddressValid(false);
            return
        }
        if (validateSolanaAddress(val)) {
            setIsAddressValid(true); // Mark as valid
        } else {
            setIsAddressValid(false); // Mark as invalid
            toast.error("Wallet address is not valid!", {
                description: "Please enter a valid SOL address.",
                duration: 5000,
                // richColors:"true"
            }); // Display error toast
        }
        // console.log("Receiver's receiver", val);
    }
    useEffect(() => {
        if (publicKey) {
            setSender(publicKey.toBase58())
        }
    }, [publicKey, setSender])
    const handleAmountChange = (e) => {
        let val = e.target.value;
        if (val === "") {
            setAmount("")
            return
        }
        // Remove leading zeros but preserve the "0." for decimal inputs
        val = val.replace(/^0+(?!\.|$)/, '0');
        // Regular expression to match valid input up to MAX_DECIMALS decimal places
        const regex = new RegExp(`^\\d*(\\.\\d{0,${MAX_DECIMALS}})?$`);
        // Allow only valid input that matches regex and restrict decimals
        if (regex.test(val)) {
            // Trim excessive trailing zeros after decimal point (e.g., 1.23000 -> 1.23)
            if (val.includes('.')) {
                val = val.replace(/(\.\d*?[1-9])0+$/g, '$1'); // Remove trailing zeros
            }
            setAmount(val);
            // console.log("Amount", val);
        }
    };
    const handleMsgChange = (e) => {
        const msg = e.target.value
        setPrivateMessage(msg)
        // console.log("Your private msg", msg);
    }
    const handleClick = async () => {
        navigate("/app/proof-of-funds");
        await generateProof();
    };
    const isEmpty = !amount || !receiver // to check if the fields are empty or not
    return (
        <div className='w-full my-5'>
            <Card>
                <CardHeader>
                    <CardTitle>
                        <p>New Private Transfer</p>
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col">
                    <div className="grid w-full max-w-full items-center gap-1.5">
                        <Label htmlFor="email">Amount to send (SOL)</Label>
                        <Input
                            type="text"
                            id="amount"
                            placeholder="0.00"
                            onChange={handleAmountChange}
                            value={amount}
                        />
                        <div className="space-y-2">
                            <Label htmlFor="receiver">Receiver's Public Address</Label>
                            <Input
                                type="text"
                                id="receiver"
                                placeholder="Enter recipient's public receiver"
                                onChange={handlePublicAddressChange}
                                value={receiver}
                            />
                        </div>
                        {/* <div className='my-2'>
                            <Label htmlFor="email">Optional encrypted note  </Label>
                            <Textarea
                                className='my-1'
                                placeholder="Add a private note..."
                                onChange={handleMsgChange}
                                value={privateMessage} />
                            <p className='text-sm opacity-30'>This note will be encrypted and only visible to the recipient.</p>
                        </div> */}

                        <ResuableAlert icon={<Info size={18} />} title={"Warning"} description={"Blockchain transactions are irreversible. Please double-check all details before proceeding."} variant={"warning"} />
                        <Button className="mt-2" onClick={handleClick} disabled={isEmpty || !isAddressValid}>Continue <ArrowRight size={18} className='ml-1' /></Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default TransactionMake