import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HeroSection = () => {
    return (
        <section className='relative max-w-xs md:max-w-8xl w-full flex items-center justify-center my-5 rounded-2xl bg-gold-200 overflow-hidden'>
            <div className='w-full h-[400px] flex items-start md:items-center justify-start border  bg-[url("/images/coown_abassdor.png")] bg-contain bg-right-bottom bg-no-repeat'>
                <div className='pt-5 px-10 max-w-2xl w-full flex flex-col items-center md:items-start justify-center gap-4'>
                    <h1 className="text-2xl text-center md:text-left md:text-4xl font-bold text-black">Power to Common Man</h1>
                    <h1 className="text-2xl text-center md:text-left md:text-3xl font-semibold text-black">Earn 24K Gold with Every Transaction!</h1>
                    <p className='text-xl text-black font-medium'>Join the Exciting Revolution and Co-own the World&apos;s Most Inclusive Enterprise</p>
                    <Link href={"/reward-store"} className='z-10 md:ml-10 bg-white border-2 border-white rounded-xl px-2 py-2 md:px-5 md:py-3 text-black-800 text-md md:text-xl font-medium cursor-pointer'>Join Now</Link>
                </div>
            </div>
            <div className='hidden md:flex  absolute -top-0 -left-0 w-[1000px] h-full bg-[url("/images/Asset-06.png")] bg-cover bg-no-repeat opacity-40' style={{ zIndex: 0 }}></div>
        </section>
    )
}

export default HeroSection
