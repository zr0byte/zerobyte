import React from 'react'
import Header from './Header'
import { Footer } from './Footer'

const HowItWorks = () => {
  return (
    <div className='dark:bg-black bg-white w-full flex flex-col min-h-screen'>
      <Header />
      <div className='mx-60 my-auto flex justify-center h-screen items-center'>

        <h1 className='text-black dark:text-white'>How it Works Page</h1>
      </div>
      <Footer />
    </div>
  )
}

export default HowItWorks