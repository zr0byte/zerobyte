import React from 'react'
import Header from './Header'
import { Footer } from './Footer'
import { BgBeams } from './BgBeams'

export const NotFound = () => {
  return (
    <div className='dark:bg-black bg-white w-full flex flex-col min-h-screen pt-10'>
      {/* <Header /> */}
      <div className='mx-60 my-auto flex justify-center items-center h-screen'>
        <BgBeams />
      </div>
      <Footer />
    </div>
  )
}
