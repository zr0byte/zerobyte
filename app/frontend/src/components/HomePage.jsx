import React from 'react'
import { GridBackground } from './GridBackground'
import KeyFeatures from './KeyFeatures'
import Faqs from './Faqs'
import { Footer } from './Footer'

const HomePage = () => {
    return (
        <div className='min-h-screen'>
            <GridBackground />
            <KeyFeatures />
            <Faqs />
            <Footer />
        </div>
    )
}

export default HomePage