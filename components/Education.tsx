import React from 'react'
import OverseasCard from './ui/OverseasCard';
import { languages, overseas } from '@/context/data';
import LanguageCard from './ui/LanguageCard';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image';

const Education = () => {
    return (
        <section className='w-full bg-black py-2'>
            <div className='max-w-sm md:max-w-8xl mx-auto p-5 md:px-10 rounded-2xl'>
                <div className='flex flex-col items-center md:items-start justify-center gap-4'>
                    <h2 className="md:ml-10 text-3xl font-bold">Education</h2>
                </div>
                <div className='relative max-w-sm md:max-w-7xl mx-auto w-full h-64 flex items-center justify-start mt-5 rounded-2xl bg-white/10 overflow-hidden bg-[url("/images/education_bg.png")] bg-no-repeat bg-center' style={{ backgroundSize: "100%" }}>
                    <div className='px-10 max-w-3xl w-full flex flex-col items-center justify-start md:justify-center gap-4'>
                        <h1 className="text-center text-2xl md:text-4xl font-bold text-white">Unlock Exclusive Benefits and Transform Your Learning Journey into <span className='text-gold-200'>Golden Opportunities!</span></h1>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='max-w-sm md:max-w-7xl mx-auto my-10 relative'>
                        <h1 className='text-2xl font-semibold mb-2'>Overseas Education</h1>
                        <div className='flex items-center justify-center py-5'>
                            <Carousel className='max-w-full md:max mx-auto w-full flex items-center justify-center' opts={{ loop: true, dragFree: true }}>
                                <CarouselContent className='w-full flex items-center justify-start'>
                                    {overseas.map((card, index) => (
                                        <CarouselItem key={index} className='basis-auto'>
                                            <OverseasCard key={index} title={card.title} image={card.imageUrl} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                {overseas.length > 4 && (
                                    <div className=''>
                                        <CarouselPrevious className='hidden lg:flex bg-gold-300 text-black' />
                                        <CarouselNext className='hidden lg:flex bg-gold-300 text-black' />
                                    </div>
                                )}
                            </Carousel>
                        </div>
                        <button className='absolute -bottom-10 lg:top-0 lg:bottom-auto right-10 bg-gold-300 px-3 py-2 rounded-2xl'>View More</button>
                    </div>
                    <div className='max-w-sm md:max-w-7xl mx-auto my-10 relative'>
                        <h1 className='text-2xl font-semibold mb-2'>1-on-1 classes</h1>

                        <div className='flex items-center justify-center py-5'>
                            <Carousel className='max-w-full md:max mx-auto w-full flex items-center justify-center' opts={{ loop: true, dragFree: true }}>
                                <CarouselContent className='w-full flex items-center justify-start'>
                                    {languages.map((card, index) => (
                                        <CarouselItem key={index} className='basis-auto'>
                                            <LanguageCard key={index} title={card.title} image={card.imageUrl} rating={card.rating} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                {languages.length > 4 && (
                                    <div className=''>
                                        <CarouselPrevious className='hidden lg:flex bg-gold-300 text-black' />
                                        <CarouselNext className='hidden lg:flex bg-gold-300 text-black' />
                                    </div>
                                )}
                            </Carousel>
                        </div>
                        <button className='absolute -bottom-10 lg:top-0 lg:bottom-auto right-10 bg-gold-300 px-3 py-2 rounded-2xl'>View More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education;
