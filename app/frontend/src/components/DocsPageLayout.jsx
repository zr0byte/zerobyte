import React, { useState } from 'react';

import { cn } from '@/lib/utils';
import { ScrollArea } from './ui/scroll-area';
import { Button } from './ui/button';

// Later on we will separate out the data
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
            <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">Introduction to Our Privacy-Preserving DeFi Protocol</h1>
            <p className="mb-4 text-black dark:text-white">Welcome to the documentation for our cutting-edge privacy-preserving DeFi protocol built on Solana. This protocol leverages zero-knowledge proofs and layer-2 solutions to provide secure, private transactions while maintaining compliance with regulations.</p>
            <h2 className="text-2xl font-semibold mb-2 text-black dark:text-white">Key Features</h2>
            <ul className="list-disc pl-6 mb-4 text-black dark:text-white">
                <li>Zero-knowledge proofs for transaction privacy</li>
                <li>Layer-2 scaling solution for improved performance</li>
                <li>Compliance framework for selective disclosure</li>
                <li>Interoperability with existing DeFi protocols</li>
            </ul>
        </>
    ),
    'getting-started': (
        <>
            <h1 className="text-3xl font-bold mb-4 text-black dark:text-white">Getting Started</h1>
            <p className="mb-4 text-black dark:text-white">Follow these steps to start using our privacy-preserving DeFi protocol:</p>
            <ol className="list-decimal pl-6 mb-4 text-black dark:text-white">
                <li className="mb-2">Set up a Solana wallet</li>
                <li className="mb-2">Acquire some SOL tokens</li>
                <li className="mb-2">Connect your wallet to our web application</li>
                <li className="mb-2">Generate your privacy keys</li>
                <li className="mb-2">Make your first private transaction</li>
            </ol>
            <p className='text-black dark:text-white'>For more detailed instructions, please refer to our user guide.</p>
        </>
    ),
    // Add more content for other sections as needed
};

const DocsPageLayout = () => {
    const [activeItem, setActiveItem] = useState(menuItems[0].id);

    const Sidebar = () => (
        <ScrollArea className="h-full py-6 pl-4 pr-6">
            {/* <h2 className="mb-4 text-lg font-semibold text-black dark:text-white">Documentation</h2> */}
            <nav>
                <ul className="space-y-2">
                    {menuItems.map((item) => (
                        <li key={item.id}>
                            <Button
                                variant="link"
                                className={cn(
                                    "w-full justify-start text-black dark:text-white",
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
        </ScrollArea>
    );

    return (
        <div className="flex min-h-screen bg-background text-foreground pr-4">
            {/* Sidebar */}
            <div className="lg:w-64">
                <Sidebar />
            </div>

            {/* Main content */}
            <main className="flex-1 overflow-auto lg:w-0 w-[90vw]">
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
    );
};

export default DocsPageLayout;