import React from 'react'
import Logo from './Logo'
import { Wallet } from './AppWalletProvider'
import { ModeToggle } from './mode-toogle'
import { Footer } from './Footer'
import TransactionMake from './TransactionMake'
import { Button } from './ui/button'
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom'
import Header from './Header'

const NewTransaction = () => {
    return (
        <div className='dark:bg-black bg-white w-full flex flex-col min-h-screen relative'>
            <div className='z-10 sticky top-0 bg-white/30 dark:bg-black/30 backdrop-blur-md'>
                <Header />
            </div>
            <div className='lg:px-60 w-full sm:px-5 h-screen flex flex-col justify-start items-center mt-20'>
                <div className='lg:w-[60vw] md:w-[80vw] w-[90vw]'>
                    <Link to={"/app"}>
                        <Button variant={"ghost"} size={"sm"} className="text-black dark:text-white group pl-1"><ChevronLeft size={18} className='' />Back</Button>
                    </Link>
                    <TransactionMake />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default NewTransaction