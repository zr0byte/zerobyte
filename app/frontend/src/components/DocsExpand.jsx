import React from 'react'
import { ArrowRightFromLine } from 'lucide-react';
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import Docs from './Docs';
import DocsPageLayout from './DocsPageLayout';
import { Button } from './ui/button';

const DocsExpand = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Button variant="outline" size="icon">
                    <ArrowRightFromLine className='text-black dark:text-white' />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>
                        Random
                    </SheetTitle>
                    <SheetDescription>
                        <DocsPageLayout />
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default DocsExpand