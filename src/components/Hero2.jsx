import React from 'react'
import transactionSVG from "../assets/txns-svg.png"
import { CanvasRevealEffectDemo } from './CardReveal'
const Hero2 = () => {
    return (
        <div className='dark:bg-black bg-white w-full flex flex-col h-auto'>
            <div className='flex flex-col justify-center items-center mt-20'>
                <h1 className='text-neutral-600 dark:text-neutral-400 text-6xl font-bold md:px-10 px-8 text-center'>Secure Every Transaction</h1>
            </div>
            <div className='flex justify-center flex-col w-full md:px-10'>
                <CanvasRevealEffectDemo />
            </div>
        </div>
    )
}

export default Hero2