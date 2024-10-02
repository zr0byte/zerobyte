import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

const TransactionView = () => {
    const TXNS = [] // Will make an API req later on to get the recent txns data
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
                        {TXNS.length === 0 ? (
                            <p className='text-sm'>No recent transactions</p>
                        ) : (
                            TXNS.map((txn, index) => (
                                <div key={index} className='flex justify-between w-full'>
                                    <p className='text-sm'>{txn.date}</p>
                                    <p className='text-sm'>{txn.amount} SOL</p>
                                </div>
                            ))
                        )}
                    </div>
                </CardContent>
            </Card>

        </div>
    )
}

export default TransactionView