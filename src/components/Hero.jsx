import React from 'react'
import { Button } from './ui/button'
import { IconEyeOff, IconLockOpen } from '@tabler/icons-react';
import { FlipWords } from './ui/flip-words';


const Hero = () => {
  const words = ["Trust", "Privacy", "Security", "Confidence", "Freedom"];
  return (
    <div className='z-20 flex flex-col justify-center items-center my-auto min-w-96 mx-6 text-center h-auto'>
      {/* <h1 className='text-7xl text-black dark:text-white justify-center items-center font-bold my-5 flex lg:flex-row md:flex-row sm:flex-row flex-wrap'>Unlock <span className='mx-3 text-[#4C3BCF]'>Trust.</span> Preserve <span className='mx-3 text-[#4C3BCF]'>Privacy.</span></h1> */}
      <div className="justify-center items-center w-auto">
        <div className="text-7xl mx-auto font-bold text-neutral-600 dark:text-neutral-400 text-center ">
          Unlock
          <FlipWords words={words} duration={1000} /> <br />
          with every transaction.
        </div>
      </div>
      <h3 className='text-4xl md:text-3xl text-black font-bold dark:text-[#4379F2]w-max bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 '>Conduct private transactions on the blockchain with zero-knowledge proofs.</h3>
      <div className=' text-black dark:text-white mb-5 lg:w-1/2 md:w-[70vw] sm:w-full lg:text-center opacity-80'>
        <p>Experience truly confidential blockchain transactions with zero-knowledge proofs. Secure your financial data, keep your identity anonymous, and transact privately without revealing details to anyone. Fast, scalable, and user-friendly—your privacy is our priority.</p>
      </div>
      {/* <Button size="sm" variant="link" className="group flex items-center cursor-text text-black dark:text-white">
        Connect your wallet to start
      </Button> */}
    </div>
  )
}

export default Hero