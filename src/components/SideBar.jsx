import React from 'react'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet'
import MenuBar from './MenuBar'
import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import Logo from './Logo'
import { ModeToggle } from './mode-toogle'
import { useWallet } from '@solana/wallet-adapter-react'

const SideBar = () => {
    const { connected } = useWallet()
    return (
        <Sheet>
            <SheetTrigger>
                <MenuBar />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        <div className='mt-5 flex flex-row justify-between'>
                            <Logo />
                            <ModeToggle />
                        </div>
                    </SheetTitle>
                    <SheetDescription>
                        {
                            !connected && <div className='flex flex-col'>
                                <a href="https://wallet.0byte.tech/" target='_blank'>
                                    <Button variant="ghost" size="sm" className="text-black dark:text-white w-full">
                                        ZeroByte Wallet
                                    </Button>
                                </a>
                                <Link to="/roadmap">
                                    <Button variant="ghost" size="sm" className="text-black dark:text-white w-full">
                                        Roadmap
                                    </Button>
                                </Link>
                                <Link to="/how-it-works">
                                    <Button variant="ghost" size="sm" className="text-black dark:text-white w-full">
                                        How it Works
                                    </Button>
                                </Link>
                                <Link to="/docs">
                                    <Button variant="ghost" size="sm" className="text-black dark:text-white w-full">
                                        ZeroByte Docs
                                    </Button>
                                </Link>
                            </div>
                        }
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default SideBar