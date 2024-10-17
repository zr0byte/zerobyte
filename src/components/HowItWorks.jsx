import React from 'react'
import { PhotoProvider, PhotoView } from 'react-photo-view';
import Header from './Header'
import { Footer } from './Footer'
import flowChart from "../assets/flow-chart.png"
import 'react-photo-view/dist/react-photo-view.css';
const HowItWorks = () => {
  return (
    <div className='dark:bg-black bg-white w-full flex flex-col min-h-screen'>
      <Header position={"top"} />
      <div className='flex flex-col justify-center mt-20 items-center'>
        <h1 className='text-neutral-600 dark:text-neutral-400 mt-auto text-6xl font-bold px-4 lg:px-0 md:px-4'>Discover How It All Comes Together</h1>
        <h2 className='text-black dark:text-white my-4 opacity-35 px-4'>A Step-by-Step Guide to Understanding Our Process and Features.</h2>
        <div className='text-black dark:text-white flex flex-col lg:px-28 px-4 my-4'>
          <h2 className="text-4xl font-bold mb-4 lg:text-center md:text-center sm:text-start text-neutral-600 dark:text-neutral-300">0byte: Secure and Private Transactions</h2>
          <div className='lg:px-36 px-0 text-neutral-600 dark:text-neutral-400'>
            <p className="mb-4">
              0byte leverages zero-knowledge proofs to ensure privacy and security. Our goal is to provide a platform for users to send money without revealing confidential details. Here's a step-by-step breakdown of the process:
            </p>
            <ol className="list-decimal list-outside pl-6 space-y-4">
              <li>
                <strong> Wallet Connection:</strong>
                <p>The user starts by connecting their cryptocurrency wallet to our application, establishing a secure link for the transaction.</p>
              </li>
              <li>
                <strong> Transaction Details:</strong>
                <p>Users input essential transaction information:</p>
                <ul className="list-disc list-inside pl-4">
                  <li>Recipient's wallet address</li>
                  <li>Amount to be transferred</li>
                </ul>
              </li>
              <li>
                <strong>Zero-Knowledge Proof Generation:</strong>
                <ul className="list-disc list-inside pl-4">
                  <li>The transaction request is sent to our backend server.</li>
                  <li>Our backend, designed with privacy in mind, generates a zero-knowledge proof.</li>
                  <li>This proof verifies the transaction's validity without revealing any sensitive data.</li>
                  <li>Importantly, no transaction details are stored on our servers.</li>
                </ul>
              </li>
              <li>
                <strong> Smart Contract Verification:</strong>
                <ul className="list-disc list-inside pl-4">
                  <li>The generated zero-knowledge proof is submitted to our custom smart contract.</li>
                  <li>This contract, deployed on the blockchain, validates the proof.</li>
                  <li>Upon successful validation, the smart contract executes the transaction.</li>
                </ul>
              </li>
            </ol>
            <p className="mt-4">
              By utilizing zero-knowledge proofs, we ensure that transactions are verified and executed without exposing any private information, offering a new level of security and privacy in digital transactions.
            </p>
          </div>
        </div>
        <PhotoProvider>

          <div className='h-full w-full flex justify-center my-8 px-4'>
            <PhotoView src={flowChart}>
              <img src={flowChart} alt="Flow Chart" className='rounded-lg cursor-pointer' />
            </PhotoView>
          </div>
        </PhotoProvider>
      </div>
      <Footer />
    </div>
  )
}

export default HowItWorks