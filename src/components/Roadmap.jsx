import React from 'react'
import Header from './Header'
import { Footer } from './Footer'
import { TimelineDemo } from './TimelineReusable'

const Roadmap = () => {
    return (
        <div className='dark:bg-black bg-white w-full flex flex-col min-h-screen'>
            <Header position={"top"} />
            <div className='flex flex-col justify-center mt-20 items-center'>
                <h1 className='text-neutral-600 dark:text-neutral-400 mt-auto text-6xl font-bold px-4 lg:px-0 md:px-4'>Our Journey to Private Transactions</h1>
                <h2 className='text-black dark:text-white my-4 opacity-35 px-4'>Tracking Our Progress from Concept to Revolutionary Privacy Solution.</h2>
            </div>
            <TimelineDemo />
            <Footer />
        </div>
    )
}

export default Roadmap