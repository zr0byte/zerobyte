import React from 'react'
import transactionSVG from "../assets/txns-svg.png"
import { CanvasRevealEffectDemo } from './CardReveal'
const Hero2 = () => {
    return (
        <div className='dark:bg-black bg-white w-full flex flex-col min-h-screen '>
            <div className='flex flex-col justify-center items-center mt-20'>
                <h1 className='text-black dark:text-white text-6xl font-bold'>True Confidentiality with Every Transaction.</h1>
            </div>
            <div className='flex justify-center flex-col px-60 w-full'>
                <CanvasRevealEffectDemo />
            </div>
        </div>
    )
}

export default Hero2