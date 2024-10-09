import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from './ui/table'
import { useAtomValue } from 'jotai'
import { persistentTransactionsAtom } from '@/store/transactionAtom'
import { ScrollArea } from './ui/scroll-area'

const TransactionView = () => {
    const transactions = useAtomValue(persistentTransactionsAtom)

    const formatDate = (isoString) => {
        if (!isoString) return 'N/A';
        const date = new Date(isoString);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    return (
        <div className='w-full my-5'>
            <Card>
                <CardHeader>
                    <CardTitle>Transaction History</CardTitle>
                </CardHeader>
                <CardContent>
                    <ScrollArea className="h-[280px] w-auto">
                        <Table>
                            <TableCaption>Your recent transactions.</TableCaption>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Transaction ID</TableHead>
                                    <TableHead>Recipient</TableHead>
                                    <TableHead>Amount</TableHead>
                                    <TableHead>Time</TableHead>
                                    <TableHead>Status</TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                {transactions.length > 0 ? (
                                    transactions.map((transaction, index) => (
                                        <TableRow key={index}>
                                            <TableCell>{`${transaction.signature.slice(0, 6)}...${transaction.signature.slice(-4)}`}</TableCell>
                                            <TableCell>{transaction.recipient ? `${transaction.recipient.slice(0, 6)}...${transaction.recipient.slice(-4)}` : 'N/A'}</TableCell>
                                            <TableCell>{transaction.amount} SOL</TableCell>
                                            <TableCell>{formatDate(transaction.blockTime)}</TableCell>
                                            <TableCell>{transaction.status}</TableCell>
                                        </TableRow>
                                    ))
                                ) : (
                                    <TableRow>
                                        <TableCell colSpan={5} className="text-center">No transactions yet</TableCell>
                                    </TableRow>
                                )}
                            </TableBody>
                        </Table>
                    </ScrollArea>
                </CardContent>
            </Card>
        </div>
    )
}

export default TransactionView