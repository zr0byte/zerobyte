import React from "react";
import { BackgroundBeams } from "./ui/background-beams";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export function BgBeams() {
    return (
        (<div
            className="h-full w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
            <div className="max-w-2xl mx-auto p-4 z-20">
                <h1 className="relative z-10 text-lg md:text-5xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold py-4">ERROR 404</h1>
                <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
                Uh Oh. Sorry there’s something wrong.
                </h1>
                <div className="flex justify-center mt-7">
                <Link to={"/"}>
                <Button size="sm">Return to Home</Button>
                </Link>
                </div>
            </div>
            <BackgroundBeams />
        </div>)
    );
}
