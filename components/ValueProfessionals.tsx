import React from 'react'
import Image from 'next/image';
import ProfessionalCard from './ui/ProfessionalCard';
import { v_prof } from '@/context/data';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const ValueProfessionals = () => {

    return (
        <section className='w-full bg-light_bg text-secondary py-2'>
            <div className='max-w-8xl mx-auto p-1 md:px-10 rounded-2xl'>
                <div className='flex flex-col items-center md:items-start justify-center gap-4'>
                    <h2 className="md:ml-10 text-3xl font-bold">Value Professionals</h2>
                    <div className='mt-10 pt-5 md:pt-0 relative max-w-sm md:max-w-6xl mx-auto w-full bg-primary flex flex-col md:flex-row items-center justify-start md:justify-end md:pr-20 gap-3 md:gap-10 h-64 rounded-3xl'>
                        <div className='flex flex-col md:flex-row items-center justify-center' >
                            <Image className='absolute bottom-0 right-0 md:left-0 w-48 md:w-64 pointer-events-none' src={'/images/Asset-28.png'} width={500} height={500} alt={''} />
                            <h1 className='text-center md:text-right text-2xl font-semibold text-secondary'>Planning for a Trip?</h1>
                        </div>
                        <div className='hidden md:flex h-10 border-l border-tertiary/80'></div>
                        <div className='flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5'>
                            <p className='text-xl font-medium'>Find everything your need to start.</p>
                            <a href='/reward-store/travel/bus-booking' className='bg-light_bg text-secondary px-3 py-2 rounded-3xl'>Learn More</a>
                        </div>
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='max-w-7xl mx-auto my-10 relative'>
                        <h1 className='text-2xl font-semibold mb-2'>Value Professionals</h1>
                        <div className='flex items-center justify-center py-5'>
                            <Carousel className='max-w-full md:max mx-auto w-full flex items-center justify-center' opts={{ loop: true, dragFree: true }}>
                                <CarouselContent className='w-full flex items-center justify-start'>
                                    {v_prof.map((card, index) => (
                                        <CarouselItem key={index} className='basis-auto'>
                                           <ProfessionalCard key={index} title={card.title} image={card.imageUrl} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                {v_prof.length > 4 && (
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

export default ValueProfessionals;
