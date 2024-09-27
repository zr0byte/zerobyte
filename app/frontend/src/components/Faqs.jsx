import React from 'react'
import FAQList from './FAQList'

const Faqs = () => {
  return (
    <div className='h-auto z-20 flex flex-col items-center my-auto bg-white dark:bg-black w-full'>
        <h1 className='text-black dark:text-white text-6xl text-left font-bold lg:mt-0 md:mt-0 mt-20 lg:py-6 md:py-6 py-8'>ZeroByte FAQs</h1>
        <FAQList />
    </div>
  )
}

export default Faqs