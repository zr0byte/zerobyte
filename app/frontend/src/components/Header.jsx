import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'

import { Link } from 'react-router-dom'
import Logo from './Logo'
import { Wallet } from './AppWalletProvider'
import { ModeToggle } from './mode-toogle'
import SideBar from './SideBar'
import { useWallet } from '@solana/wallet-adapter-react'

const Header = ({ position }) => {
    const { connected } = useWallet()
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }


    const NavItems = () => (
        <>
            <Link to="/how-it-works">
                <Button variant="ghost" size="sm" className="text-black dark:text-white">
                    How it Works
                </Button>
            </Link>
            <Link to="/docs">
                <Button variant="ghost" size="sm" className="text-black dark:text-white">
                    ZeroByte Docs
                </Button>
            </Link>
        </>
    )

    return (
        <header className="z-10 py-5 px-5 md:px-8 lg:px-16 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <Logo position={position} />

                {isMobile ? (
                    <div className="flex items-center space-x-4">
                        <Wallet />
                        {/* <ModeToggle /> */}
                        <SideBar />
                    </div>
                ) : (
                    <div className='flex items-center space-x-6' >
                        { !connected && <NavItems />}
                        <Wallet />
                        <ModeToggle />
                    </div>
                )}
            </div>

            {isMobile && isMenuOpen && (
                <NavItems />
                // <div className={cn("h-screen bg-[0 0% 9%] z-auto ml-60 flex flex-col items-end space-x-6 my-4", !isMobile && "hidden")}>
                // </div>
            )}
        </header>
    )
}

export default Header