import React from 'react'
import FAQList from './FAQList'

const Faqs = () => {
  return (
    <div className='h-screen z-20 flex flex-col items-center my-auto bg-white dark:bg-black w-full'>
        <h1 className='text-black dark:text-white text-6xl text-left font-bold'>ZeroByte FAQs</h1>
        <FAQList />
    </div>
  )
}

export default Faqs