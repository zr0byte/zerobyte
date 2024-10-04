import React from 'react'

import { FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";

import Logo from './Logo'
import { Button } from './ui/button';
import { TextHoverEffect } from './ui/text-hover-effect'
import { Separator } from './ui/separator'

export const Footer = () => {
  return (
    <footer className='mt-auto flex flex-col bg-white dark:bg-black w-full overflow-hidden'>
      <div className='lg:px-72 xl:px-72 px-5 py-20 md:px-28 sm:px-5 flex justify-between'>
        <div className='flex flex-col'>
          <Logo position={"bottom"} />
          <h2 className='text-black dark:text-white mt-2 text-sm opacity-30'>Secure. Private. Decentralized.</h2>
        </div>
        <div className='flex flex-row space-x-3'>
          <a href="https://github.com/zr0byte/zerobyte" target="_blank" rel="noopener noreferrer">
            <Button variant="link" size="icon" className="opacity-30 hover:opacity-100 transition-all">
              <FaGithub size={24} />
            </Button>
          </a>
          <a href="https://x.com/zr0byte">

            <Button variant="link" size="icon" className=" opacity-30 hover:opacity-100 transition-all">
              <RiTwitterXFill size={24} />
            </Button>
          </a>
          <a href="https://discord.gg/Xfw7XReW7F">

            <Button variant="link" size="icon" className=" opacity-30 hover:opacity-100 transition-all">
              <FaDiscord size={24} />
            </Button>
          </a>
        </div>
      </div>
      <Separator />
      <div className='lg:mx-72 sm:mx-10 mt-6 justify-center items-center flex'>
        <p className='text-sm text-black dark:text-white opacity-30'>
          © {new Date().getFullYear()} ZeroByte. All rights reserved.
        </p>
      </div>
      <div className="lg:h-[50vh] sm:h-[30vh] flex items-center justify-center ">
        <TextHoverEffect text="ZeroByte" />
      </div>
    </footer>
  )
}
