import React from 'react'
import { Wallet } from './AppWalletProvider'
import Logo from './Logo'
import { ModeToggle } from './mode-toogle'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import ZKPGenerateCard from './ZKPGenerateCard'
import { ChevronLeft, Wallet2 } from 'lucide-react'
import { Footer } from './Footer'
import { ResuableAlert } from './ReuseableAlert'

const ZKPGenerateView = () => {
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
                    <Link to={"/app/review-transaction"}>
                        <Button variant={"ghost"} size={"sm"} className="text-black dark:text-white group pl-1"><ChevronLeft size={18} className='' />Back</Button>
                    </Link>
                    <ZKPGenerateCard
                        title={"Encrypted smart contract"}
                        loadingText={"Generating encrypted smart contract of your transaction..."}
                        successText={"Smart Contract Generated Successfully"}
                        succesMsg={""}
                        alertModal={
                            <ResuableAlert
                                variant={"warning"}
                                icon={<Wallet2
                                    size={18} />}
                                title={"Important"}
                                description={"These allow you to prove the validity of a transaction without revealing its details."}
                            />
                        }
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ZKPGenerateView