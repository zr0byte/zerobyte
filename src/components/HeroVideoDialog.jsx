import React from 'react';
import HeroVideoDialog from "./ui/hero-video-dialog";
import thumbnailImg from "../assets/thumbnail.png"
import { BorderBeam } from "./ui/border-beam";

export function HeroVideoDialogDemo() {
    return (
        <div className="relative h-auto pt-20 lg:pt-0 z-auto flex justify-center items-center px-4 lg:px-20 dark:bg-black bg-white">
        <div className="relative w-full max-w-6xl">
            <div className="absolute inset-0 z-30 pointer-events-none">
                <BorderBeam className="rounded-lg h-full" />
            </div>
            <div className="relative">
                <HeroVideoDialog
                    className="dark:hidden block"
                    animationStyle="from-center"
                    videoSrc="https://www.youtube.com/embed/zx9cZamPT1M"
                    thumbnailSrc={thumbnailImg}
                    thumbnailAlt="Hero Video"
                />
                <HeroVideoDialog
                    className="hidden dark:block"
                    animationStyle="from-center"
                    videoSrc="https://www.youtube.com/embed/zx9cZamPT1M"
                    thumbnailSrc={thumbnailImg}
                    thumbnailAlt="Hero Video"
                />
            </div>
        </div>
    </div>
    );
}