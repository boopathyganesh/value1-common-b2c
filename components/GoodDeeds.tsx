import React from 'react'
import Image from 'next/image';
import { goodDeeds } from '@/context/data';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import VBrandCard from './ui/VBrandCard';
import GoodDeedCard from './ui/GoodDeedCard';

const GoodDeeds = () => {
    return (
        <section className='w-full bg-light_bg text-secondary py-2'>
            <div className='max-w-sm md:max-w-8xl mx-auto p-5 md:px-10 rounded-2xl bg-light_bg'>
                <div className='flex flex-col items-center md:items-start justify-center gap-4'>
                    <h2 className="md:ml-10 text-3xl font-bold">Good Deeds</h2>
                    <div className='mt-10 pt-5 md:pt-0 relative max-w-sm md:max-w-6xl mx-auto w-full bg-light_solid flex flex-col md:flex-row items-center justify-start md:justify-end md:pr-20 gap-3 md:gap-10 h-64 rounded-3xl'>
                        <div className='flex flex-col md:flex-row items-center justify-center' >
                            <Image className='absolute bottom-0 right-0 md:left-0 w-48 md:w-64 pointer-events-none' src={'/images/Asset-28.png'} width={500} height={500} alt={''} />
                        </div>
                        <div className='flex flex-col items-center justify-center gap-3 md:gap-5 z-10'>
                            <h1 className='text-center md:text-right text-2xl md:text-4xl font-bold text-secondary'>Planning for a Trip?</h1>
                            <p className='text-xl text-center md:text-2xl font-medium text-secondary'>Turn Every Trip into a <span className='font-bold text-tertiary'>Golden Memories!</span></p>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='max-w-7xl mx-auto relative'>
                        <h1 className='text-2xl font-semibold mb-2'>Good Deeds</h1>
                        <div className='flex items-center justify-center py-5'>
                                    <Carousel className='max-w-full md:max mx-auto w-full flex items-center justify-center' opts={{ loop:true, dragFree: true }}>
                                        <CarouselContent className='w-full flex items-center justify-start'>
                                            {goodDeeds.map((card, index) => (
                                                <CarouselItem key={index} className='basis-auto'>
                                                    <GoodDeedCard key={index} title={card.title} image={card.imageUrl} />
                                                </CarouselItem>
                                            ))}
                                        </CarouselContent>
                                        {goodDeeds.length > 4 && (
                                            <div className=''>
                                                <CarouselPrevious className='hidden lg:flex bg-light_solid text-secondary' />
                                                <CarouselNext className='hidden lg:flex bg-light_solid text-secondary' />
                                            </div>
                                        )}
                                    </Carousel>
                                </div>
                        <div className='absolute top-0 bottom-auto right-0 md:right-10 flex items-center justify-center gap-5'>
                            <Select defaultValue='Chennai'>
                                <SelectTrigger className="w-[120px] md:w-[180px]">
                                    <SelectValue placeholder="Your City" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Chennai">Chennai</SelectItem>
                                    <SelectItem value="0">Coming Soon!</SelectItem>
                                    {/* <SelectItem value="Coimbatore">Coimbatore</SelectItem>
                                    <SelectItem value="Madurai">Madurai</SelectItem>
                                    <SelectItem value="Tiruchirappalli">Tiruchirappalli</SelectItem>
                                    <SelectItem value="Tuticorin">Tuticorin</SelectItem> */}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default GoodDeeds;
