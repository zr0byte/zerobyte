import React from 'react'
import { GlareCardDemo } from './GlareCard'

const OurTeam = () => {
  return (
    <div className='h-screen z-20 flex flex-col items-center my-auto bg-white dark:bg-black w-full'>
        <h1 className='text-black dark:text-white text-6xl text-left font-bold'>Our team</h1>
        <div className='flex gap-10 mt-10'>
            <GlareCardDemo displayName={"Sidhanth Pandey"} displayPic={"https://avatars.githubusercontent.com/u/88340810?v=4"} url={"https://github.com/sidpan2011"} position={"Co-founder, India"}/>
            <GlareCardDemo displayName={"Nitin Mewar"} displayPic={"https://avatars.githubusercontent.com/u/87393900?v=4"} url={"https://github.com/nitinmewar"} position={"Co-founder, India"}/>
        </div>
    </div>
  )
}

export default OurTeam