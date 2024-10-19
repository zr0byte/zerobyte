import React from 'react'
import { GlareCardDemo } from './GlareCard'

const OurTeam = () => {
  return (
    <div className='lg:h-[90vh] 2xl:h-[80vh] md:h-[70vh] h-auto z-20 flex flex-col items-center  md:pt-20 my-auto bg-white dark:bg-black w-full'>
        <h1 className='text-neutral-600 dark:text-neutral-400 text-6xl text-left font-bold'>Our team</h1>
        <div className='flex lg:flex-row md:flex-row gap-10 mt-10 flex-col'>
            <GlareCardDemo displayName={"Sidhanth Pandey"} displayPic={"https://avatars.githubusercontent.com/u/88340810?v=4"} url={"https://github.com/sidpan2011"} position={"Co-founder, India"}/>
            <GlareCardDemo displayName={"Nitin Mewar"} displayPic={"https://avatars.githubusercontent.com/u/87393900?v=4"} url={"https://github.com/nitinmewar"} position={"Co-founder, India"}/>
        </div>
    </div>
  )
}

export default OurTeam