import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import { Globe, Shield, Building2, BarChart2, Plug, Network, Rocket } from "lucide-react";
import { FaMask } from "react-icons/fa";

const content = [
    {
        title: "Web-Based Privacy Powerhouse",
        description:
            "We're developing a user-friendly web wallet to revolutionize privacy. Our goal is to enable private transactions across multiple networks, all from your browser. ZeroByte aims to put the power of financial anonymity at your fingertips.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                <Globe size={100} />
            </div>
        ),
    },
    {
        title: "Absolute Anonymity",
        description:
            "We're working on cutting-edge technology to ensure completely anonymous transactions. Our vision for ZeroByte is to make your financial moves invisible to prying eyes. We're striving to bring you the peace of mind that comes with true blockchain privacy.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--indigo-500),var(--purple-500))] flex items-center justify-center text-white">
                <Shield size={100} />
            </div>
        ),
    },
    {
        title: "Stealth Mode Activation",
        description:
            "We're designing advanced stealth addresses to enhance your anonymity. Our goal is to create one-time use addresses that make it impossible to link transactions to your identity. With ZeroByte, you'll be able to stay hidden in plain sight on the blockchain.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--gray-700),var(--gray-900))] flex items-center justify-center text-white">
                <FaMask size={100} />
            </div>
        ),
    },
    {
        title: "Business-Ready Integration",
        description:
            "ZeroByte isn't just for individuals. We're developing a comprehensive suite tailored for enterprise adoption. Our aim is to bring the power of private transactions to business operations, helping you maintain a competitive edge in the blockchain space.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--blue-600),var(--blue-800))] flex items-center justify-center text-white">
                <Building2 size={100} />
            </div>
        ),
    },
    {
        title: "Insights Without Compromise",
        description:
            "We're creating advanced analytics and reporting tools that provide valuable insights while maintaining user anonymity. Our goal is to help you make informed decisions without exposing sensitive information. With ZeroByte, you'll get the data you need without sacrificing privacy.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--green-500),var(--green-700))] flex items-center justify-center text-white">
                <BarChart2 size={100} />
            </div>
        ),
    },
    {
        title: "Seamless Third-Party Integration",
        description:
            "We're developing a robust public API to extend the power of ZeroByte. Our aim is to allow easy integration of private transactions into existing systems and enable the building of new applications on top of our privacy-focused infrastructure.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--yellow-500),var(--yellow-700))] flex items-center justify-center text-white">
                <Plug size={100} />
            </div>
        ),
    },
    {
        title: "Cross-Chain Confidentiality",
        description:
            "We believe privacy shouldn't be limited to a single blockchain. Our vision includes expanding our privacy solutions across multiple networks. We're working towards ensuring your transactions remain confidential no matter where you operate in the crypto space.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--red-500),var(--red-700))] flex items-center justify-center text-white">
                <Network size={100} />
            </div>
        ),
    },
    {
        title: "Scaling for the Future",
        description:
            "As blockchain adoption grows, so will ZeroByte. We're researching innovative scaling solutions to maintain privacy at higher transaction volumes. Our goal is to keep you private, even as the world of crypto expands.",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] flex items-center justify-center text-white">
                <Rocket size={100} />
            </div>
        ),
    },
];

export function StickyScrollRevealDemo() {
    return (
        <div className="p-10 w-full">
            <StickyScroll content={content} />
        </div>
    );
}