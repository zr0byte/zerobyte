import React from 'react'
import Header from './Header'
import { Footer } from './Footer'
import flowChart from "../assets/flow-chart.png"
const HowItWorks = () => {
  return (
    <div className='dark:bg-black bg-white w-full flex flex-col min-h-screen'>
      <Header />
      <div className='flex flex-col justify-center mt-20 items-center'>
        <h1 className='text-black dark:text-white mt-auto text-6xl font-bold'>Discover How It All Comes Together</h1>
        <h2 className='text-black dark:text-white my-4 opacity-35'>A Step-by-Step Guide to Understanding Our Process and Features.</h2>
        <div className='h-full w-full flex justify-center mt-8'>
          <img src={flowChart} alt="Flow Chart" className='rounded-lg' />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HowItWorks