"use client"
import React from 'react'
import { gold } from '@/context/data';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./ui/carousel"
import GoldStoreCard from './ui/GoldStoreCard';
import { useRouter } from 'next/navigation';

const GoldStore = () => {
    const router = useRouter()
    return (
        <section className='w-full bg-black text-white py-2'>
            <div className='max-w-sm md:max-w-8xl mx-auto p-5 md:p-10 rounded-2xl'>
                <div className='flex flex-col items-center md:items-start justify-center gap-4'>
                    <h2 className="md:ml-10 text-3xl font-bold">Gold Store</h2>
                </div>
                <div className='mt-10 '>
                    <div className='max-w-sm md:max-w-7xl mx-auto relative'>
                        <h1 className='text-2xl font-semibold mb-2'>Gold Store</h1>
                        <div className='flex flex-wrap flex-col md:flex-row items-center justify-center py-5'>
                            <Carousel className='max-w-full md:max mx-auto w-full flex items-center justify-center' opts={{ loop: true, dragFree: true }}>
                                <CarouselContent className='w-full flex items-center justify-start'>
                                    {gold.map((card, index) => (
                                        <CarouselItem key={index} className='basis-auto'>
                                            <GoldStoreCard key={index} title={card.title} image={card.imageUrl} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                {gold.length > 4 && (
                                    <div className=''>
                                        <CarouselPrevious className='hidden lg:flex bg-light_solid text-secondary' />
                                        <CarouselNext className='hidden lg:flex bg-light_solid text-secondary' />
                                    </div>
                                )}
                            </Carousel>
                        </div>
                        <button onClick={()=>router.push("https://app.value1.in")} className='absolute -bottom-10 lg:top-0 lg:bottom-auto right-10 bg-solid px-3 py-2 rounded-2xl'>View More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GoldStore;
