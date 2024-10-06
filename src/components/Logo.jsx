import React from 'react'
import { Link } from 'react-router-dom'
import darkLogo from "../assets/logos/dark.png"
import defaultLogo from "../assets/logos/default.png"

const Logo = ({ position }) => {
    return (
        <div className='w-auto'>
            {position === "top"
                ?
                <Link to={'/'}>
                    <div className='text-black flex items-center text-3xl dark:text-white font-medium tracking-tighter'>
                        <img src={darkLogo} alt="ZeroByte Logo" className='h-12 w-12 dark:hidden' />
                        <img src={defaultLogo} alt="ZeroByte Logo" className='h-12 w-12 hidden dark:block' />
                        <span className='ml-[-12px]'>byte</span>
                    </div>
                </Link>
                :
                <div className='text-black flex items-center text-3xl dark:text-white font-medium tracking-tighter'>
                    <img src={darkLogo} alt="ZeroByte Logo" className='h-12 w-12 dark:hidden' />
                    <img src={defaultLogo} alt="ZeroByte Logo" className='h-12 w-12 hidden dark:block' />
                    <span className='ml-[-12px]'>byte</span>
                </div>
            }
        </div>
    )
}

export default Logo