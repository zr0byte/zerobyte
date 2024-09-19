import React from 'react'
import { Button } from './ui/button'
import { ModeToggle } from './mode-toogle'
import { Link } from 'react-router-dom'
import Logo from './Logo'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from './ui/dialog'
import { Wallet } from './AppWalletProvider'



const Header = () => {
    return (
        <>
            <div className='z-10 py-5 px-60 flex flex-row justify-between items-center bg-white dark:bg-black'>
                <Logo position={"top"} />
                <div className='flex space-x-6'>
                    {/* <Link to={"/features"}>
                        <Button variant="ghost" size="sm" className='text-black dark:text-white'>Features</Button>
                    </Link> */}
                    <Link to={"/how-it-works"}>
                        <Button variant="ghost" size="sm" className='text-black dark:text-white'>How it Works</Button>
                    </Link>
                    <Link to={"/pricing"}>
                        <Button variant="ghost" size="sm" className='text-black dark:text-white'>Pricing</Button>
                    </Link>
                    <Link to={"/docs"}>
                        <Button variant="ghost" size="sm" className='text-black dark:text-white'>ZeroByte Docs</Button>
                    </Link>
                </div>
                <div className='flex space-x-6 items-center'>
                    {/* <Dialog>
                        <DialogTrigger>
                            <Button size="sm" className='text-white dark:text-black'>Get Started</Button>
                        </DialogTrigger>
                        <DialogContent className="dark:bg-black bg-white">
                            <DialogHeader>
                                <DialogTitle className="text-black dark:text-white">Ready to Unlock DeFi?</DialogTitle>
                                <DialogDescription>
                                    Connect your Solana wallet to continue.
                                </DialogDescription>
                            </DialogHeader>

                            <div className='flex flex-col justify-center'>
                                <Wallet />
                            </div>  
                            <DialogFooter className={"w-full"}>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog> */}
                    <Wallet />
                    <ModeToggle />
                </div>
            </div>
        </>
    )
}
export default Header