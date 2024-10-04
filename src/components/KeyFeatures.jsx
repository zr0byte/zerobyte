import React from 'react'
import { FeaturesSectionDemo } from './HoverCard'

const KeyFeatures = () => {
  return (
    <div className='h-auto z-20 flex flex-col items-center bg-white dark:bg-black w-full md:px-10'>
        <h1 className='text-neutral-600 dark:text-neutral-400 text-6xl font-bold my-8'>Features</h1>
        <div>
            <FeaturesSectionDemo />
        </div>
    </div>
  )
}

export default KeyFeatures