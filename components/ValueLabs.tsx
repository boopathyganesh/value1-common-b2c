import { labs, v_brands } from '@/context/data'
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@radix-ui/react-select'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './ui/carousel'
import VLabCard from './ui/VLabCard'




const ValueLabs = () => {
    const slidesCount = (labs.length + 1).toString()
    const SLIDES = Array.from(Array(slidesCount).keys())
    return (
        <section className='w-full bg-black text-white py-2'>
            <div className='max-w-sm md:max-w-8xl mx-auto p-5 md:px-10 rounded-2xl bg-black'>
                <div className='flex flex-col items-center md:items-start justify-center gap-4'>
                    <h2 className="md:ml-10 text-3xl font-bold">Value Labs</h2>
                    <div className='relative max-w-sm md:max-w-7xl mx-auto w-full flex items-center justify-center mt-5 rounded-2xl bg-white/10 overflow-hidden'>
                        <div className='w-full h-[400px] pt-10 md:pt-0 flex items-start md:items-center justify-end bg-[url("/images/stock/man-point-left.png")] bg-contain bg-left-bottom bg-no-repeat'>
                            <div className='px-10 max-w-3xl w-full flex flex-col items-center justify-start md:justify-center gap-4'>
                                <h1 className="text-center text-2xl md:text-4xl font-bold text-white">Make your Business Dreams into Live with Us!</h1>
                                <Link href={'/services/value-labs'} className='bg-primary text-white font-medium px-5 py-3 rounded-2xl hover:scale-105 smooth'>Explore with Us!</Link>
                            </div>
                        </div>
                        {/* <div className='absolute -top-0 -right-96 w-[1000px] h-full bg-[url("/images/Asset-06.png")] bg-cover bg-no-repeat opacity-40' style={{zIndex:0}}></div> */}
                    </div>
                </div>
                <div className='mt-10'>
                    <div className='max-w-7xl mx-auto relative'>
                        <h1 className='text-2xl font-semibold mb-2'>Value Labs</h1>
                        <div className='flex flex-wrap flex-col md:flex-row items-center justify-center py-5'>
                            <Carousel className='max-w-full md:max mx-auto w-full flex items-center justify-center' opts={{ loop: true, dragFree: true }}>
                                <CarouselContent className='w-full flex items-center justify-start'>
                                    {labs.map((card, index) => (
                                        <CarouselItem key={index} className='basis-auto'>
                                            <VLabCard key={index} title={card.title} image={card.imageUrl} />
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                                {labs.length > 4 && (
                                    <div className=''>
                                        <CarouselPrevious className='hidden lg:flex bg-light_solid text-secondary' />
                                        <CarouselNext className='hidden lg:flex bg-light_solid text-secondary' />
                                    </div>
                                )}
                            </Carousel>
                        </div>
                        {/* <div className='absolute top-0 right-5 md:right-10 flex items-center justify-center gap-5'>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Default(Chennai)" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Chennai">Chennai</SelectItem>
                                    <SelectItem value="Coimbatore">Coimbatore</SelectItem>
                                    <SelectItem value="Madurai">Madurai</SelectItem>
                                    <SelectItem value="Tiruchirappalli">Tiruchirappalli</SelectItem>
                                    <SelectItem value="Tuticorin">Tuticorin</SelectItem>
                                </SelectContent>
                            </Select>
                        </div> */}
                    </div>
                </div>
            </div>

        </section>
    )
}

export default ValueLabs
