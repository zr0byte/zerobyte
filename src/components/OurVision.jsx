import React from 'react'
import { StickyScrollRevealDemo } from './StickyScrollReveal'

const OurVision = () => {
    return (
        <div className='lg:h-auto md:h-screen h-auto z-20 flex flex-col items-center  md:pt-20 my-auto bg-white dark:bg-black w-full'>
            <h1 className='text-neutral-600 dark:text-neutral-400 text-6xl text-left font-bold'>Our Vision</h1>
            <div className='w-full'>
                <StickyScrollRevealDemo />
            </div>
        </div>
    )
}

export default OurVision    