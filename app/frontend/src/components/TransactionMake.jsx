import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { ResuableAlert } from './ReuseableAlert'
import { Info } from 'lucide-react';
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom'

const TransactionMake = () => {
    const navigate = useNavigate()
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
                        <Input type="number" id="number" placeholder="0.00" />
                        <div className='my-2'>
                            <Label htmlFor="email">Optional encrypted note  </Label>
                            <Textarea className='my-1' placeholder="Add a private note..."/>
                            <p className='text-sm opacity-30'>This note will be encrypted and only visible to the recipient.</p>
                        </div>
                        <ResuableAlert icon={<Info size={18}/>} title={"Warning"} description={"Blockchain transactions are irreversible. Please double-check all details before proceeding."} variant={"warning"}/>
                        <Button className="mt-2" onClick={() => {navigate("/app/step-2")}}>Continue <ArrowRight size={18} className='ml-1'/></Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default TransactionMake