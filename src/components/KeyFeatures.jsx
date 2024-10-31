import React from 'react'
import { FeaturesSectionDemo } from './HoverCard'

const KeyFeatures = () => {
  return (
    <div className='h-auto z-20 flex flex-col w-full bg-white dark:bg-black'>
      <div className='w-full max-w-7xl mx-auto md:px-10 px-8'>
        <h1 className='text-neutral-600 dark:text-neutral-400 text-6xl font-bold my-8 text-left md:text-center sm:text-center'>
          Features
        </h1>
        <div className='w-full'>
          <FeaturesSectionDemo />
        </div>
      </div>
    </div>
  )
}

export default KeyFeatures