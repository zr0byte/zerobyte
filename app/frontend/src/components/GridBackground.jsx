import React from "react";
import Header from "./Header";
import Hero from "./Hero";
export function GridBackground() {
  return (
    <div className="h-[100vh] w-full dark:bg-black bg-white dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2] relative flex flex-col">
      <div className="absolute pointer-events-none inset-0 flex dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div className="relative z-10">
        <Header />
      </div>
      <Hero />
    </div>
  );
}