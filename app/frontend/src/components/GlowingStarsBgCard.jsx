import React from "react";
import { GlowingStarsBackgroundCard, GlowingStarsDescription, GlowingStarsTitle } from "./ui/glowing-stars";
import keyFeaturesData from "@/key-features-data";

export function GlowingStarsBgCard() {
    return (
        (<div className="py-8 flex flex-col items-center antialiased">
        <div className="w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {keyFeaturesData.map((item, index) => (
                    <div key={index} className="flex flex-col gap-5">
                        <GlowingStarsBackgroundCard>
                            <GlowingStarsTitle>{item.title}</GlowingStarsTitle>
                            <div className="flex justify-between items-end">
                                <GlowingStarsDescription className={"text-sm"}>
                                    {item.description}
                                </GlowingStarsDescription>
                            </div>
                        </GlowingStarsBackgroundCard>
                    </div>
                ))}
            </div>
        </div>
        </div>)
    );
}
