import MiniUniv from '@/components/ui/MiniUniv'
import { FeatureUniv, topUniversities } from '@/context/ies'
import OverseasCard from '@/components/ui/OverseasCard';
import { overseas } from '@/context/data';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import React from 'react'
import IESUnivCard from '@/components/ui/IESUnivCard';

const InternationalStudies = () => {
    return (
        <main className='max-w-sm md:max-w-full mx-auto w-full flex flex-col items-center justify-center overflow-hidden'>
            {/* Hero */}
            <section className='flex items-center justify-center bg-gold-100 w-full h-[600px] overflow-hidden relative text-white bg-[url("/images/stock/graduation.jpg")] bg-no-repeat bg-cover bg-center'>
                <div className='flex items-center justify-center gap-5 h-full backdrop-blur bg-black/40 w-full'>
                    <div className='max-w-7xl w-full flex flex-col items-center justify-center text-center'>
                        <h1 className='text-5xl font-semibold leading-tight mb-5'>Make your study-abroad dream a reality!</h1>
                        <p className='text-xl mb-10 w-[500px]'>From selecting the right course to your first day at the university, Edvoy helps in every step of the journey.</p>
                        <button className='px-5 py-3 text-black font-medium bg-gold-200 rounded-xl'>Read More!</button>
                    </div>
                </div>
            </section>
            {/* Top Universities */}
            <section className='max-w-7xl w-full flex flex-col items-center justify-center my-10 gap-10'>
                <div className='flex flex-col items-center justify-center text-center text-white'>
                    <h1 className='text-4xl font-semibold text-gold-200'>Discover top-rated universities</h1>
                    <p className='text-lg text-white/40'>Start your success story at a renowned university with our guidance.</p>
                </div>
                <div className='flex flex-wrap items-center justify-center gap-5'>
                    {topUniversities.map((univ, index) => (
                        <MiniUniv key={index} name={univ.name} image={univ.image} />
                    ))}
                </div>
            </section>
            <section className='max-w-7xl w-full flex flex-col items-center justify-center my-10 gap-10'>
                <div className='flex flex-col items-center justify-center text-center text-white'>
                    <h1 className='text-4xl font-semibold text-gold-200'>Explore Top Study Destinations</h1>
                    <p className='text-lg text-white/40'>We’re partnered with over 120 world class education providers in 6 countries</p>
                </div>
                <div className='flex flex-wrap flex-col md:flex-row items-center justify-center gap-5 py-10'>
                    <Carousel>
                        <CarouselContent className='max-w-7xl flex items-center justify-between px-4'>
                            {overseas.map((card, index) => (
                                <CarouselItem key={index} className='basis-auto'>
                                    <OverseasCard key={index} title={card.title} image={card.imageUrl} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className='bg-gold-300 text-black-800' />
                        <CarouselNext className='bg-gold-300 text-black-800' />
                    </Carousel>
                </div>
            </section>
            <section className='max-w-7xl w-full flex flex-col items-center justify-center my-10 gap-10'>
                <div className='flex flex-col items-center justify-center text-center text-white'>
                    <h1 className='text-4xl font-semibold text-gold-200'>Discover Top Universities</h1>
                    <p className='text-lg text-white/40'>We’re partnered with over 120 world class education providers</p>
                </div>
                <div className='flex flex-wrap flex-col md:flex-row items-center justify-center gap-5 py-10'>
                    <Carousel>
                        <CarouselContent className='max-w-7xl flex items-center justify-between px-4'>
                            {FeatureUniv.map((card, index) => (
                                <CarouselItem key={index} className='basis-auto'>
                                    <IESUnivCard key={index} name={card.name} country={card.country} image={card.image} />
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className='bg-gold-300 text-black-800' />
                        <CarouselNext className='bg-gold-300 text-black-800' />
                    </Carousel>
                </div>
            </section>
        </main >
    )
}

export default InternationalStudies
