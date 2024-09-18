import React from 'react'
import Header from './Header'
import { Footer } from './Footer'

const Docs = () => {
    return (
        <div className='dark:bg-black bg-white w-full flex flex-col min-h-screen'>
            <Header />
            <div className='mx-60 my-auto flex justify-center items-center h-screen'>

            <h1 className='text-black dark:text-white z-20'>Docs Page</h1>
            </div>
            <Footer />
        </div>
    )
}

export default Docs