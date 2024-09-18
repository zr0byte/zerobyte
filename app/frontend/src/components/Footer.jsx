import React from 'react'
import { FaGithub } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";

import Logo from './Logo'
import { TextHoverEffect } from './ui/text-hover-effect'
import { Separator } from './ui/separator'
import { Link } from 'react-router-dom'
import { Button } from './ui/button';

export const Footer = () => {
  return (
    <footer className='mt-auto flex flex-col bg-white dark:bg-black w-full overflow-hidden'>
      <div className='px-72 py-20 flex justify-between'>
        <div className='flex flex-col'>
          <Logo position={"bottom"} />
          <h2 className='text-black dark:text-white mt-2 text-sm opacity-30'>Secure. Private. Decentralized.</h2>
        </div>
        <div className='flex flex-row space-x-3'>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <Button variant="link" size="icon" className="opacity-30 hover:opacity-100 transition-all">
              <FaGithub size={24} />
            </Button>
          </a>
          <a href="">

            <Button variant="link" size="icon" className=" opacity-30 hover:opacity-100 transition-all">
              <RiTwitterXFill size={24} />
            </Button>
          </a>
          <a href="">

            <Button variant="link" size="icon" className=" opacity-30 hover:opacity-100 transition-all">
              <FaDiscord size={24} />
            </Button>
          </a>
          {/* Add your social links here */}
        </div>
      </div>
      <Separator />
      <div className='mx-72 mt-6 justify-center items-center flex'>

        <p className='text-sm text-black dark:text-white opacity-30'>
          © {new Date().getFullYear()} ZeroByte. All rights reserved.
        </p>
      </div>
      <div className="h-[40rem] flex items-center justify-center ">
        <TextHoverEffect text="ZeroByte" />
      </div>
    </footer>
  )
}
