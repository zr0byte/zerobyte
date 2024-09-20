import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

const TransactionView = () => {
    return (
        <div className='w-full my-5'>
            <Card>
                <CardHeader>
                    <CardTitle>
                        <p>Recent Activity</p>
                    </CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col">
                    <div className='flex justify-between'>
                        <p className='text-sm'>2024-20-09</p>
                        <p className='text-sm'>-1 SOL</p>
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}

export default TransactionView