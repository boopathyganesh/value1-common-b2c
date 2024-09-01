import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

import { FAQ as FAQData } from '@/context/FAQ'


const Abilities = () => {
    return (
        <section className='max-w-7xl w-full text-light_bg flex flex-col items-center justify-center gap-10'>
            <h1 className='font-medium text-3xl'>My specialties</h1>
            <Accordion type="single" collapsible className='max-w-4xl mx-auto w-full' defaultValue="0">
                {FAQData.map((faq, index) => (
                    <AccordionItem key={index} value={index.toString()} >
                        <AccordionTrigger className='text-solid'>{faq.question}</AccordionTrigger>
                        <AccordionContent className='text-secondary'>
                            {faq.answer}
                        </AccordionContent>
                    </AccordionItem>
                ))}

            </Accordion>
        </section>
    )
}

export default Abilities
