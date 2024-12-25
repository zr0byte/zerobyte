import React from 'react'
import { StickyScrollRevealDemo } from './StickyScrollReveal'

const OurVision = () => {
    return (
        <div className='lg:h-auto md:h-auto h-auto z-20 flex flex-col w-full bg-white dark:bg-black'>
            <div className='w-full mx-auto md:pt-20 px-8'>
                <h1 className='text-neutral-600 dark:text-neutral-400 text-6xl font-bold p-8 text-left md:text-center sm:text-center'>
                    Our Vision
                </h1>
            </div>
            <div className='w-full mx-auto'>
                <StickyScrollRevealDemo />
            </div>
        </div>
    )
}

export default OurVision    