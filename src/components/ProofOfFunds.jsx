import React from 'react'
import ZKPGenerateCard from './ZKPGenerateCard'
import { ChevronLeft, Info } from 'lucide-react'
import { ResuableAlert } from './ReuseableAlert'
import Header from './Header'
import { Footer } from './Footer'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { Button } from './ui/button'

const ProofOfFunds = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/app/step-1")
        window.location.reload()
    }
    return (
        <div className='dark:bg-black bg-white w-full flex flex-col min-h-screen relative'>
            <div className='z-10 sticky top-0 bg-white/30 dark:bg-black/30 backdrop-blur-md'>
                <Header />
            </div>
            <div className='px-60 h-auto flex flex-col justify-start items-center mt-20'>
                <div className='lg:w-[60vw] md:w-[80vw] w-[90vw]'>
                    {/* <Link to={"/app/step-1"}>
                    </Link> */}
                        <Button variant={"ghost"} size={"sm"} className="text-black dark:text-white group pl-1" onClick={handleClick}><ChevronLeft size={18} className='' />Back</Button>
                    <ZKPGenerateCard
                        title={"Generating Proof of Funds"}
                        loadingText={"Generating proof of sufficient funds..."}
                        successText={"Proof Generated Successfully"}
                        succesMsg={"Your proof of funds has been created without revealing your balance."}
                        alertModal={
                            <ResuableAlert
                                variant={"warning"}
                                icon={<Info
                                    size={18} />}
                                title={"Important"}
                                description={"This step creates a zero-knowledge proof that you have enough funds without revealing your balance."}
                            />
                        }
                        btnText={"Continue"}
                        url={"review-transaction"}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ProofOfFunds