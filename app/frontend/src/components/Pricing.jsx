import React from 'react'
import Header from './Header'

import PricingTable from './ui/feature-comparison'
import { Footer } from './Footer'
// import DotPattern from './DotPatternBg'
// import DotPatternBg from './DotPatternBg'

const Pricing = () => {
    return (
        <div className='dark:bg-black bg-white w-full flex flex-col min-h-screen'>
            <Header />
            <div className='flex flex-col justify-center mt-20 items-center'>
                {/* <DotPatternBg /> */}
                <h1 className='text-black dark:text-white mt-auto text-6xl font-bold'>ZeroByte Pricing</h1>
                <h2 className='text-black dark:text-white my-4 opacity-35'>Unlock Privacy for Free — All the Essential Tools to Protect Your Identity with Zero Cost.</h2>
                <PricingTable />
            </div>
            <Footer />
        </div>
    )
}

export default Pricing