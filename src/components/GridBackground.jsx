import React from "react";
import Header from "./Header";
import Hero from "./Hero";
export function GridBackground() {
  return (
    <div className="h-auto w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col">
      <div className="absolute pointer-events-none inset-0 flex dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="relative z-10">
        <Header position={"top"}/>
      </div>
      <Hero />
    </div>
  );
}