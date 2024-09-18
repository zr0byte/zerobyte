import React from 'react'
import { ChevronRight } from 'lucide-react';
import { Button } from './ui/button'


const Hero = () => {
  return (
    <div className='z-20 flex flex-col justify-center items-center my-auto min-w-96 mx-6 text-center'>
      <h1 className='text-7xl text-black dark:text-white font-bold my-5'>Unlock Trust, Preserve Privacy.</h1>
      <h3 className='text-4xl text-black font-bold dark:text-[#4379F2]w-max bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 '>Revolutionizing DeFi Access with Zero-Knowledge Credentials.</h3>
      <div className=' text-black dark:text-white mb-5 w-1/3 text-center '>
        <p>Elevate your DeFi platform with our cutting-edge Anonymous Credential System. Leveraging zero-knowledge proofs, we empower users to verify their qualifications without compromising privacy.</p>
      </div>
      <Button size="sm" className="group flex items-center">
        Start Your Privacy Journey
        <span className="ml-1">
          <ChevronRight size={20} />
        </span>
      </Button>
    </div>
  )
}

export default Hero