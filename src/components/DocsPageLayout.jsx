import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { ScrollArea } from './ui/scroll-area';
import { Button } from './ui/button';

const menuItems = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'getting-started', label: 'Getting Started' },
    { id: 'features', label: 'Features' },
    { id: 'api', label: 'API Reference' },
    { id: 'examples', label: 'Examples' },
];

const content = {
    introduction: (
        <>
            <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">Introduction to 0byte</h1>
            <p className="mb-4 text-black dark:text-white">Welcome to 0byte, a revolutionary privacy-focused platform built on the Solana blockchain. We enable users to conduct completely private and anonymous transactions while leveraging Solana's lightning-fast performance and low transaction costs.</p>
            <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">Overview</h2>
            <p className='mb-4 text-black dark:text-white'>
                0byte is designed with a singular focus: to provide complete transactional privacy without compromising on speed or security. By utilizing advanced zero-knowledge proof technology, we ensure that your transaction details remain completely confidential while still maintaining the integrity and verifiability of the Solana blockchain.
            </p>
            <ul className="list-disc pl-6 mb-4 text-black dark:text-white">
                <li><span className='font-bold'>Complete Transaction Privacy: </span> Leverage zero-knowledge proofs to keep your transaction details private and anonymous on-chain</li>
                <li><span className='font-bold'>Lightning Fast Performance: </span> Built on Solana to provide near-instantaneous transaction finality</li>
                <li><span className='font-bold'>User Anonymity: </span> Protect your identity while conducting transactions on the blockchain</li>
                <li><span className='font-bold'>Seamless Integration: </span> Easy-to-use platform for conducting private transactions</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">Why 0byte?</h2>
            <p className='mb-4 text-black dark:text-white'>
                In an era where blockchain transactions are inherently transparent, 0byte provides a crucial layer of privacy for users who want to maintain confidentiality in their financial transactions. Whether you're an individual user or an institution, 0byte offers the tools you need to conduct transactions privately and securely on the Solana blockchain.
            </p>
        </>
    ),
    'getting-started': (
        <>
            <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">Getting Started</h1>
            <p className="mb-4 text-black dark:text-white">To begin using 0byte for private transactions, explore our documentation to understand how to:</p>
            <ol className="list-decimal pl-6 mb-4 text-black dark:text-white">
                <li className="mb-2">Set up a Solana wallet</li>
                <li className="mb-2">Enter receiver's details such as wallet address, SOL to send</li>
                <li className="mb-2">Generate Zero-knowledge proofs of your sufficient funds, without revealing your balances</li>
                <li className="mb-2">Review the transactional details as the transaction is irreversible</li>
                <li className="mb-2">Make your first private transaction</li>
            </ol>
            <p className='text-black dark:text-white'>For more detailed instructions, please refer to our <a href="https://github.com/zr0byte/zerobyte/" target='_blank' className="text-blue-500 hover:text-blue-600 underline">Github</a></p>
        </>
    ),
};

const DocsPageLayout = () => {
    const [activeItem, setActiveItem] = useState(menuItems[0].id);

    const Navigation = () => (
        <nav className="py-4">
            <ul className="flex flex-row lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 overflow-x-auto">
                {menuItems.map((item) => (
                    <li key={item.id} className="flex-shrink-0">
                        <Button
                            variant="link"
                            className={cn(
                                "whitespace-nowrap justify-start text-black dark:text-white",
                                activeItem === item.id ? "opacity-100" : "opacity-30"
                            )}
                            onClick={() => setActiveItem(item.id)}
                        >
                            {item.label}
                        </Button>
                    </li>
                ))}
            </ul>
        </nav>
    );

    return (
        <div className="min-h-screen flex flex-col bg-background text-foreground px-4">
            {/* Mobile/Tablet Navigation at Top */}
            <div className="lg:hidden p-4 overflow-x-auto no-scrollbar">
                <ScrollArea className="w-full">
                    <Navigation />
                </ScrollArea>
            </div>

            {/* Desktop Layout */}
            <div className="flex">
                {/* Desktop Sidebar */}
                <div className="hidden lg:block w-64 pl-4">
                    <ScrollArea className="h-full py-6 pr-6">
                        <Navigation />
                    </ScrollArea>
                </div>

                {/* Main content */}
                <main className="flex-1 overflow-auto w-full lg:w-0">
                    <ScrollArea className="h-full">
                        <div className="container py-6 px-4">
                            {content[activeItem] || (
                                <p className="text-black dark:text-white">
                                    Content for this section is coming soon.
                                </p>
                            )}
                        </div>
                    </ScrollArea>
                </main>
            </div>
        </div>
    );
};

export default DocsPageLayout;