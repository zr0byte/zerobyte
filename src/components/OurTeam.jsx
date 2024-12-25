import React from 'react'
import { GlareCardDemo } from './GlareCard'

const OurTeam = () => {
  return (
    <div className='lg:h-[90vh] 2xl:h-[80vh] md:h-[70vh] h-auto z-20 flex flex-col w-full bg-white dark:bg-black'>
      <div className='w-full max-w-7xl mx-auto md:pt-20 px-8'>
        <h1 className='text-neutral-600 dark:text-neutral-400 text-6xl font-bold p-8 text-left md:text-center sm:text-center'>
          Our Team
        </h1>
        <div className='flex lg:flex-row md:flex-row gap-10 mt-10 flex-col items-center justify-center'>
          <GlareCardDemo
            displayName={"Sidhanth Pandey"}
            displayPic={"https://avatars.githubusercontent.com/u/88340810?v=4"}
            url={"https://github.com/sidpan2011"}
            position={"Co-founder, India"}
          />
          <GlareCardDemo
            displayName={"Nitin Mewar"}
            displayPic={"https://avatars.githubusercontent.com/u/87393900?v=4"}
            url={"https://github.com/nitinmewar"}
            position={"Co-founder, India"}
          />
        </div>
      </div>
    </div>
  )
}

export default OurTeam