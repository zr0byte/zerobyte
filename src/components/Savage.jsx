import React from 'react'
// import zLogo from "../assets/Z-final.png"
import zLogoDark from "../assets/logos/dark.png"
import zLogoDefault from "../assets/logos/default.png"
const Savage = () => {
    // const screenWidth
    return (
        <div className='bg-white dark:bg-black flex flex-col justify-center md:py-28 py-20'>
            <div className='flex justify-center'>
                <img src={zLogoDark} alt="ZeroByte Logo" className='h-24 w-24 dark:hidden' />
                <img src={zLogoDefault} alt="ZeroByte Logo" className='h-24 w-24 hidden dark:block' />
                <img src={zLogoDark} alt="ZeroByte Logo" className='h-24 w-24 dark:hidden' />
                <img src={zLogoDefault} alt="ZeroByte Logo" className='h-24 w-24 hidden dark:block' />
                <img src={zLogoDark} alt="ZeroByte Logo" className='h-24 w-24 dark:hidden' />
                <img src={zLogoDefault} alt="ZeroByte Logo" className='h-24 w-24 hidden dark:block' />
                <img src={zLogoDark} alt="ZeroByte Logo" className='h-24 w-24 dark:hidden' />
                <img src={zLogoDefault} alt="ZeroByte Logo" className='h-24 w-24 hidden dark:block' />
            </div>
            {/* <div className='flex justify-center py-4'>
                <h1 className='text-black dark:text-white text-3xl font-normal'><span className='opacity-30'>Giving incognito mode to your Solana wallet.</span> <span className=''></span>  <span className='opacity-30'>But actually </span><span className=' text-[#6439FF]'>effective.</span></h1>
            </div> */}
        </div>
    )
}

export default Savage