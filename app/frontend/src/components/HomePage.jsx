import React from 'react'
import { GridBackground } from './GridBackground'
import KeyFeatures from './KeyFeatures'
import Faqs from './Faqs'
import { Footer } from './Footer'
import OurTeam from './OurTeam'
import NewsLetter from './NewsLetter'
import Hero2 from './Hero2'

const HomePage = () => {
    return (
        <div className='min-h-screen'>
            <GridBackground />
            <Hero2 />
            <KeyFeatures />
            <Faqs />
            <OurTeam />
            <NewsLetter />
            <Footer />
        </div>
    )
}

export default HomePage