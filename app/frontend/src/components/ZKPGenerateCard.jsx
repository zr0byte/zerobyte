import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

import { Button } from './ui/button'
import { ArrowRight, CheckCircleIcon, InfoIcon } from 'lucide-react'
import { Progress } from './ui/progress'
import { ResuableAlert } from './ReuseableAlert'

const ZKPGenerateCard = ({ title, loadingText, successText, succesMsg, alertModal }) => {
    const [progress, setProgress] = useState(0)
    const [isComplete, setIsComplete] = useState(false)

    useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    clearInterval(timer)
                    setIsComplete(true)
                    return 100
                }
                const diff = Math.random() * 10
                return Math.min(oldProgress + diff, 100)
            })
        }, 500)

        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div className='w-full my-5'>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl font-bold">{title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {!isComplete ? (
                        <>
                            <Progress value={progress} className="w-full" />
                            <p className="text-center text-gray-600">{loadingText + "..."}</p>
                        </>
                    ) : (
                        <div className="text-center">
                            <CheckCircleIcon className="mx-auto h-12 w-12 text-green-500 mb-4" />
                            <p className="text-lg font-semibold text-green-600 mb-2">{successText}</p>
                            <p className="text-gray-600 mb-4">{succesMsg}</p>
                        </div>
                    )}
                    {alertModal}
                    <Button
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                        disabled={!isComplete}
                        onClick={() => ""}
                    >
                        Continue
                    </Button>
                    {/* This step will be of signature from the wallet */}
                </CardContent>
            </Card>
        </div>
    )
}

export default ZKPGenerateCard