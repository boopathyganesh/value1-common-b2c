'use client'

import React from 'react'
import CustomCard from './ui/CustomCard'
import { FaCheck } from "react-icons/fa6";
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AdCard from './ui/adCards';
import { data, loans } from '@/context/data';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import FinanceCard from './ui/FinanceCards';


const Finance = () => {

    return (
        <section className='w-full bg-black text-white py-2'>
            <div className='max-w-sm md:max-w-8xl mx-auto bg-black p-5 md:px-10 rounded-2xl'>
                <div className='flex flex-col items-center md:items-start justify-center gap-4'>
                    <h2 className="md:ml-10 text-3xl font-bold">Financial Services</h2>
                </div>
                <div className='max-w-sm md:max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between my-10 md:my-16 bg-white/10 p-4 rounded-xl'>
                    <div className='md:w-1/2 my-5 rounded-3xl overflow-hidden'>
                        <Image src={'/images/Asset-013.jpg'} alt={''} width={800} height={800} className='w-full h-auto' />
                    </div>
                    <div className='flex flex-col items-center justify-center gap-5'>
                        <h1 className='text-2xl md:text-4xl font-bold text-center'>Unlock Exclusive Financial Perks and <span className='text-gold-500'>Gold Rewards!</span></h1>
                        <h2 className='text-xl md:text-2xl font-medium text-center'>Craft Wealth, Unleash Dreams, and Enjoy Top-tier Support!</h2>
                        <button></button>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className="relative flex w-full flex-col mb-5 md:mb-0">
                        <Tabs defaultValue="loans" className="w-full flex flex-col items-center justify-center">
                            <TabsList className='md:ml-20'>
                                <TabsTrigger value="loans">Loans</TabsTrigger>
                                <TabsTrigger value="insurance">Insurance</TabsTrigger>
                                <TabsTrigger value="credit-cards">Credit Cards</TabsTrigger>
                                <TabsTrigger value="capital-market">Capital Market</TabsTrigger>
                            </TabsList>
                            <TabsContent value="loans" className='w-full'>
                                <div className='flex items-center justify-center py-5'>
                                    <Carousel className='max-w-full md:max mx-auto w-full flex items-center justify-center' opts={{ loop: true, dragFree: true }}>
                                        <CarouselContent className='w-full flex items-center justify-start'>
                                            {loans.map((card, index) => (
                                                <CarouselItem key={index} className='basis-auto'>
                                                    <FinanceCard key={index} title={card.title} content={card.content} image={card.image} type='loan' />
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        {loans.length > 4 && (
                                            <div className=''>
                                                <CarouselPrevious className='hidden lg:flex bg-light_gold-500 text-white' />
                                                <CarouselNext className='hidden lg:flex bg-light_gold-500 text-white' />
                                            </div>
                                        )}
                                    </Carousel>
                                </div>
                            </TabsContent>
                            <TabsContent value="insurance" className='w-full'>
                                <div className='flex items-center justify-center py-5'>
                                    <Carousel className='max-w-full md:max mx-auto w-full flex items-center justify-center' opts={{ loop: true, dragFree: true }}>
                                        <CarouselContent className='w-full flex items-center justify-start'>
                                            {loans.map((card, index) => (
                                                <CarouselItem key={index} className='basis-auto'>
                                                    <FinanceCard key={index} title={card.title} content={card.content} image={card.image} type='loan' />
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        {loans.length > 4 && (
                                            <div className=''>
                                                <CarouselPrevious className='hidden lg:flex bg-light_gold-500 text-white' />
                                                <CarouselNext className='hidden lg:flex bg-light_gold-500 text-white' />
                                            </div>
                                        )}
                                    </Carousel>
                                </div>
                            </TabsContent>
                            <TabsContent value="credit-cards" className='w-full'>
                                <div className='flex items-center justify-center py-5'>
                                    <Carousel className='max-w-full md:max mx-auto w-full flex items-center justify-center' opts={{ loop: true, dragFree: true }}>
                                        <CarouselContent className='w-full flex items-center justify-start'>
                                            {loans.map((card, index) => (
                                                <CarouselItem key={index} className='basis-auto'>
                                                    <FinanceCard key={index} title={card.title} content={card.content} image={card.image} type='loan' />
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        {loans.length > 4 && (
                                            <div className=''>
                                                <CarouselPrevious className='hidden lg:flex bg-light_gold-500 text-white' />
                                                <CarouselNext className='hidden lg:flex bg-light_gold-500 text-white' />
                                            </div>
                                        )}
                                    </Carousel>
                                </div>
                            </TabsContent>
                            <TabsContent value="capital-market" className='w-full'>
                                <div className='flex items-center justify-center py-5'>
                                    <Carousel className='max-w-full md:max mx-auto w-full flex items-center justify-center' opts={{ loop: true, dragFree: true }}>
                                        <CarouselContent className='w-full flex items-center justify-start'>
                                            {loans.map((card, index) => (
                                                <CarouselItem key={index} className='basis-auto'>
                                                    <FinanceCard key={index} title={card.title} content={card.content} image={card.image} type='loan' />
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        {loans.length > 4 && (
                                            <div className=''>
                                                <CarouselPrevious className='hidden lg:flex bg-light_gold-500 text-white' />
                                                <CarouselNext className='hidden lg:flex bg-light_gold-500 text-white' />
                                            </div>
                                        )}
                                    </Carousel>
                                </div>
                            </TabsContent>
                        </Tabs>
                        <button className='absolute -bottom-8 lg:top-0 lg:bottom-auto right-5 bg-gold-500 px-3 py-2 rounded-2xl'>View More</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Finance
