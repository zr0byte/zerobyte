import React from 'react'
import { Footer } from './Footer'
import Header from './Header'


const WalletPage = () => {
    return (
        <div className='dark:bg-black bg-white w-full flex flex-col min-h-screen'>
            <Header position={"top"} />

            <div className='lg:mx-60 md:mx-30 mx-4 my-auto flex flex-col justify-center items-center h-[80vh]'>
                <h1 className='text-neutral-600 dark:text-neutral-400 text-6xl font-bold my-8'>ZeroByte Wallet is Coming Soon.</h1>
                <p className='text-neutral-600 dark:text-neutral-400 lg:text-center sm:text-start'>
                    We're working hard to revolutionize blockchain privacy with the ZeroByte wallet. Our team is dedicated to creating a secure, user-friendly platform that will set new standards for private transactions. Stay tuned as we prepare to unveil a wallet that will transform your crypto experience.
                </p>
            </div>
            <Footer />
        </div>
    )
}

export default WalletPage