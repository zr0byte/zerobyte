import React from 'react'
import { GlowingStarsBgCard } from './GlowingStarsBgCard'

const KeyFeatures = () => {
  return (
    <div className='h-screen z-20 flex flex-col items-center bg-white dark:bg-black w-full'>
        <h1 className='dark:text-white text-black text-6xl font-bold my-8'>Key Features</h1>
        <div>
            <GlowingStarsBgCard />
        </div>
    </div>
  )
}

export default KeyFeatures