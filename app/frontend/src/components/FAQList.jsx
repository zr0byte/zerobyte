import React from 'react'
import frequentlyAskedQuestions from '@/faq-data'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

const FAQList = () => {
  return (
    <div className="w-1/2 my-8">
      <Accordion type="single" collapsible>
        {
          frequentlyAskedQuestions.map((faq, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionTrigger className="dark:text-white text-black">{faq.question}</AccordionTrigger>
              <AccordionContent className="dark:text-white text-black">
              <div dangerouslySetInnerHTML={{ __html: faq.answer.replace(/\n/g, '<br />') }} />
              </AccordionContent>
            </AccordionItem>
          ))
        }
      </Accordion>
    </div>
  )
}

export default FAQList