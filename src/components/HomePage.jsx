import React from 'react'
import { GridBackground } from './GridBackground'
import KeyFeatures from './KeyFeatures'
import Faqs from './Faqs'
import { Footer } from './Footer'
import OurTeam from './OurTeam'
import NewsLetter from './NewsLetter'
import Hero2 from './Hero2'
import Savage from './Savage'
import OurVision from './OurVision'
import { HeroVideoDialogDemo } from './HeroVideoDialog'

const HomePage = () => {
    return (
        <div className='min-h-screen'>
            <GridBackground />
            <HeroVideoDialogDemo />
            <Hero2 />
            <KeyFeatures />
            <OurVision />
            <OurTeam />
            <Faqs />
            {/* <NewsLetter />  Will implement later */} 
            <Savage />
            <Footer />
        </div>
    )
}

export default HomePage