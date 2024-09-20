import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'

import { CopyIcon, Info, RefreshCwIcon } from 'lucide-react';
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'

const ReceiverAddressCard = () => {
    const navigate = useNavigate()
    const [addressOption, setAddressOption] = useState('new')
    const [stealthAddress, setStealthAddress] = useState('')
    const [generatedAddress, setGeneratedAddress] = useState('')

    const generateNewAddress = () => {
        // This would be replaced with actual address generation logic
        setGeneratedAddress('7J54KngeoXhWxGmBvcKALJNrJGGnzHxwPKQEoVDXQHPv')
    }
    return (
        <div className='w-full my-5'>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">Receiver Address</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 w-full">
                    <RadioGroup value={addressOption} onValueChange={setAddressOption}>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="new" id="new" />
                            <Label htmlFor="new">Send to a new stealth address</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="existing" id="existing" />
                            <Label htmlFor="existing">I have a stealth address</Label>
                        </div>
                    </RadioGroup>

                    {addressOption === 'new' ? (
                        <div className="space-y-4">
                            <p className="text-sm text-gray-600">
                                A new stealth address will be generated for the receiver. You'll need to securely share this address with them.
                            </p>
                            {/* Need to generate this function */}
                            <Button onClick={generateNewAddress} className="w-full">
                                Generate New Stealth Address
                                <RefreshCwIcon className="ml-2 h-4 w-4" />
                            </Button>
                            {generatedAddress && (
                                <div className="mt-4">
                                    <Label htmlFor="generated-address">Generated Stealth Address</Label>
                                    <div className="flex mt-1">
                                        <Input
                                            id="generated-address"
                                            value={generatedAddress}
                                            readOnly
                                            className="flex-grow"
                                        />
                                        <Button
                                            onClick={() => navigator.clipboard.writeText(generatedAddress)}
                                            className="ml-2"
                                            variant="outline"
                                        >
                                            <CopyIcon className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="space-y-4">
                            <Label htmlFor="stealth-address">Enter Stealth Address</Label>
                            <Input
                                id="stealth-address"
                                value={stealthAddress}
                                onChange={(e) => setStealthAddress(e.target.value)}
                                placeholder="Enter the stealth address"
                            />
                        </div>
                    )}

                    <Button className="mt-2 w-full" onClick={() => { navigate("/app/review-transaction") }}>Continue <ArrowRight size={18} className='ml-1' /></Button>
                </CardContent>
            </Card>

        </div>
    )
}

export default ReceiverAddressCard