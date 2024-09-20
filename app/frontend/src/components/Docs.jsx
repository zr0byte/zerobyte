import React from 'react'
import Header from './Header'
import { Footer } from './Footer'
import DocsPageLayout from './DocsPageLayout'

const Docs = () => {
    return (
        <div className='dark:bg-black bg-white w-full flex flex-col min-h-screen'>
            <Header />
            <div className='mx-60 flex justify-center items-center'>
                {/* <h1 className='text-black dark:text-white mt-auto text-6xl font-bold'>Docs</h1> */}
                <div className='w-screen mt-10'>
                    <DocsPageLayout />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Docs