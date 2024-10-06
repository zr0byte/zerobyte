import React from 'react'
import frequentlyAskedQuestions from '@/faq-data'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'

const FAQList = () => {
  return (
    <div className="lg:w-1/2 md:w-[60vw] lg:mx-0 md:mx-0 mx-8">
      <Accordion type="single" collapsible>
        {
          frequentlyAskedQuestions.map((faq, index) => (
            <AccordionItem key={index} value={index.toString()}>
              <AccordionTrigger className="dark:text-white text-black text-sm">{faq.question}</AccordionTrigger>
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