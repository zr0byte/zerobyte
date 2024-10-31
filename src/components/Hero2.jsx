import React from 'react'
import { CanvasRevealEffectDemo } from './CardReveal'
const Hero2 = () => {
    return (
        <div className='dark:bg-black bg-white w-full flex flex-col h-auto'>
            <div className='w-full max-w-7xl mx-auto md:pt-20'>
                <h1 className='text-neutral-600 dark:text-neutral-400 text-6xl font-bold p-8 text-left md:text-center sm:text-center'>
                    Secure Every Transaction
                </h1>
                <div className='w-full'>
                    <CanvasRevealEffectDemo />
                </div>
            </div>
        </div>
    )
}

export default Hero2