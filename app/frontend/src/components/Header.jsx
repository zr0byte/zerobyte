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
                    <Wallet />
                    <ModeToggle />
                </div>
            </div>
        </>
    )
}
export default Header