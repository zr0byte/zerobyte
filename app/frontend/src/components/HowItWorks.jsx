import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Header from './Header'
import { Footer } from './Footer'
import flowChart from "../assets/flow-chart.png"
import 'react-photo-view/dist/react-photo-view.css';
const HowItWorks = () => {
  return (
    <div className='dark:bg-black bg-white w-full flex flex-col min-h-screen'>
      <Header position={"top"}/>
      <div className='flex flex-col justify-center mt-20 items-center'>
        <h1 className='text-black dark:text-white mt-auto text-6xl font-bold px-4 lg:px-0 md:px-0'>Discover How It All Comes Together</h1>
        <h2 className='text-black dark:text-white my-4 opacity-35 px-4'>A Step-by-Step Guide to Understanding Our Process and Features.</h2>
        <PhotoProvider>

          <div className='h-full w-full flex justify-center mt-8 px-4'>
            <PhotoView src={flowChart}>
              <img src={flowChart} alt="Flow Chart" className='rounded-lg cursor-pointer' />
            </PhotoView>
          </div>
        </PhotoProvider>
      </div>
      <Footer />
    </div>
  )
}

export default HowItWorks