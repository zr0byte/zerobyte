import React from 'react'
import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { X } from 'lucide-react';
const MenuBar = ({ handleClick, isMobile, isMobileOpen }) => {
    return (
        <Button variant="outline" size="icon" onClick={handleClick}>
            <Menu className='text-black dark:text-white' />
        </Button>
    )
}

export default MenuBar