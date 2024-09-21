import React from 'react'
import zLogo from "../assets/Z-final.png"
const Savage = () => {
    // const screenWidth
    return (
        <div className='bg-white dark:bg-black flex flex-col justify-center pt-32'>
            <div className='flex justify-center'>
                <img src={zLogo} alt="ZeroByte Logo" className='h-24 w-24' />
                <img src={zLogo} alt="ZeroByte Logo" className='h-24 w-24' />
                <img src={zLogo} alt="ZeroByte Logo" className='h-24 w-24' />
            </div>
            {/* <div className='flex justify-center py-4'>
                <h1 className='text-black dark:text-white text-3xl font-normal'><span className='opacity-30'>Giving incognito mode to your Solana wallet.</span> <span className=''></span>  <span className='opacity-30'>But actually </span><span className=' text-[#6439FF]'>effective.</span></h1>
            </div> */}
        </div>
    )
}

export default Savage