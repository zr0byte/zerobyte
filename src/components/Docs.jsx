import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Footer } from './Footer'
import DocsPageLayout from './DocsPageLayout'
import DocsExpand from './DocsExpand'

const Docs = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <div className='dark:bg-black bg-white w-full flex flex-col min-h-screen'>
            <Header position={"top"}/>
            <div className='lg:mx-60 md:mx-28 mx-4 flex justify-center items-center'>
                {/* <h1 className='text-black dark:text-white mt-auto text-6xl font-bold'>Docs</h1> */}
                <div className='w-full mt-10'>
                    <DocsPageLayout />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Docs