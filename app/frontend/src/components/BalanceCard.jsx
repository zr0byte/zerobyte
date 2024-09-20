import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { RotateCw } from 'lucide-react';
const BalanceCard = ({ balance, fetchBalance }) => {
    return (
        <div className='w-full'>
            <Card>
                <CardHeader>
                    <CardTitle className='flex flex-col'>
                        <div className='flex justify-between items-center'>
                            <div>Balance</div>
                            <div>
                                <Button size={"icon"} variant={"ghost"} onClick={fetchBalance}><RotateCw size={20} strokeWidth={2} className='' /></Button>
                            </div>
                        </div>
                    </CardTitle>
                    <CardDescription>Account 1</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className='font-extrabold text-6xl'>{balance}</p>
                </CardContent>
                <CardFooter>
                    <p className='opacity-30 text-sm'>Last updated: <span>2024-20-09</span></p>
                </CardFooter>
            </Card>
        </div>
    )
}

export default BalanceCard