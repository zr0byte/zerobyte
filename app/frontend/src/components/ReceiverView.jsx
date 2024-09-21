import React from 'react'
import Logo from './Logo'
import { Wallet } from './AppWalletProvider'
import { ModeToggle } from './mode-toogle'
import { Footer } from './Footer'
import TransactionMake from './TransactionMake'
import { Button } from './ui/button'
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom'
import ReceiverAddressCard from './ReceiverAddressCard'

const ReceiverView = () => {
    return (
        <div className='dark:bg-black bg-white w-full flex flex-col min-h-screen relative'>
            <div className='flex justify-between items-center z-10 py-5 px-60 sticky top-0 bg-white/30 dark:bg-black/30 backdrop-blur-md'>
                <div>
                    <Logo position={"top"} />
                </div>
                <div className='space-x-6'>
                    <Wallet />
                    <ModeToggle />
                </div>
            </div>
            <div className='px-60 h-screen flex flex-col justify-start items-center mt-20'>
                <div className='w-1/2'>
                    <Link to={"/app/step-1"}>
                        <Button variant={"ghost"} size={"sm"} className="text-black dark:text-white group pl-1"><ChevronLeft size={18} className='' />Back</Button>
                    </Link>
                    <ReceiverAddressCard />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ReceiverView