import { Link } from "react-router-dom";
import { GlareCard } from "./ui/glare-card";


export function GlareCardDemo({ displayName, displayPic, url, position }) {
    return (
        <Link to={url}>
            <GlareCard className="flex flex-col items-center justify-end">
                <img
                    className="h-full w-full absolute inset-0 object-cover"
                    src={displayPic}
                />
                <div className="z-30 flex flex-col w-full items-center backdrop-filter backdrop-blur-sm py-2">
                    <p className="text-white font-bold text-xl mt-4 tracking-tight">{displayName}</p>
                    <p className="text-white font-bold text-sm tracking-tight">{position}</p>
                </div>
            </GlareCard>
        </Link>
    );
}
