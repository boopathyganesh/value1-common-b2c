'use client'
import Image from 'next/image'
import React from 'react'
import CountryCard from './CountryCard'
import PackageCard from './PackageCard'
import { useRouter } from 'next/navigation'


const Holidays = () => {

  const router = useRouter()
  function handleBtn(){
    router.push("/reward-store/travel/holiday")
  }

  return (
    <main className='max-w-sm md:max-w-full mx-auto w-full flex flex-col items-center justify-center overflow-hidden gap-5 bg-light_bg text-secondary'>
      <section className='relative max-w-full w-full h-[500px] flex items-center justify-center'>
        <Image src={'/images/holidays/kashmir.webp'} alt={''} height={1000} width={1000} className='w-full ' />
        <div className='absolute bottom-40 flex flex-col items-center justify-center text-center gap-5'>
          <h1 className='text-4xl font-semibold text-tertiary'>Where Every Experience Counts</h1>
          <p className='text-xl text-tertiary/70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi beatae illum esse</p>
        </div>
        <div className='absolute -bottom-12 flex items-center justify-center text-center px-3 py-2 gap-5 rounded-[55px] bg-light_bg border border-solid'>
          <div className='flex items-center justify-center gap-2 px-2 py-1.5 group'>
            <span className='w-10 h-10 rounded-full overflow-hidden flex items-center justify-center group-hover:scale-105 smooth'>
              <Image src={'/images/svgs/award.svg'} alt={''} height={200} width={200} className='w-full h-auto' />
            </span>
            <span className='font-medium text-secondary group-hover:text-solid smooth'>Honeymoon</span>
          </div>
          <div className='flex items-center justify-center gap-2 px-2 py-1.5 group'>
            <span className='w-10 h-10 rounded-full overflow-hidden flex items-center justify-center group-hover:scale-105 smooth'>
              <Image src={'/images/svgs/award.svg'} alt={''} height={200} width={200} className='w-full h-auto ' />
            </span>
            <span className='font-medium text-secondary group-hover:text-solid smooth'>Pilgrimage</span>
          </div>
          <div className='flex items-center justify-center gap-2 px-2 py-1.5 group'>
            <span className='w-10 h-10 rounded-full overflow-hidden flex items-center justify-center group-hover:scale-105 smooth'>
              <Image src={'/images/svgs/award.svg'} alt={''} height={200} width={200} className='w-full h-auto ' />
            </span>
            <span className='font-medium text-secondary group-hover:text-solid smooth'>Ayurveda</span>
          </div>
          <div className='flex items-center justify-center gap-2 px-2 py-1.5 group'>
            <span className='w-10 h-10 rounded-full overflow-hidden flex items-center justify-center group-hover:scale-105 smooth'>
              <Image src={'/images/svgs/award.svg'} alt={''} height={200} width={200} className='w-full h-auto ' />
            </span>
            <span className='font-medium text-secondary group-hover:text-solid smooth'>Adventure</span>
          </div>
          <div className='flex items-center justify-center gap-2 px-2 py-1.5 group'>
            <span className='w-10 h-10 rounded-full overflow-hidden flex items-center justify-center group-hover:scale-105 smooth'>
              <Image src={'/images/svgs/award.svg'} alt={''} height={200} width={200} className='w-full h-auto ' />
            </span>
            <span className='font-medium text-secondary group-hover:text-solid smooth'>Group Departure</span>
          </div>
          <div className='flex items-center justify-center gap-2 px-2 py-1.5 group'>
            <span className='w-10 h-10 rounded-full overflow-hidden flex items-center justify-center group-hover:scale-105 smooth'>
              <Image src={'/images/svgs/award.svg'} alt={''} height={200} width={200} className='w-full h-auto' />
            </span>
            <span className='font-medium text-secondary group-hover:text-solid smooth'>Leisure</span>
          </div>
        </div>
      </section>
      <section className='max-w-sm md:max-w-7xl w-full h-max flex flex-col items-center justify-center rounded-2xl overflow-hidden p-5 gap-8 mt-10'>
        <div className='text-left w-full flex flex-col items-start justify-center gap-2'>
          <h1 className='text-4xl font-semibold text-secondary'>Top Trending Destinations</h1>
          <p className='text-xl text-secondary'>Explore the hottest travel spots around the globe and experience the best of holidays.</p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-5'>
          <CountryCard image={'/images/holidays/australia.jpg'} country={'Australia'} />
          <CountryCard image={'/images/holidays/canada.avif'} country={'Canada'} />
          <CountryCard image={'/images/holidays/ireland.jpg'} country={'France'} />
          <CountryCard image={'/images/holidays/maldives.jpg'} country={'Maldives'} />
          <CountryCard image={'/images/holidays/goa.jpg'} country={'Goa'} />
        </div>
      </section>
      <section className='max-w-sm md:max-w-7xl w-full h-max flex flex-col items-center justify-center rounded-2xl overflow-hidden p-5 gap-8'>
        <div className='text-left w-full flex flex-col items-start justify-center gap-2'>
          <h1 className='text-4xl font-semibold text-secondary'>Seasonal Journeys</h1>
          <p className='text-xl text-secondary'>Best places to visit in August long - weekend Getaways!</p>
        </div>
        <div className='grid grid-cols-3 items-center h-max justify-center gap-5'>
          <div className='grid grid-rows-2 gap-5 max-h-96 h-full'>
            <div>
              <PackageCard image={'/images/holidays/maldives.jpg'} title={'Singapore Splendor with Genting Cruise'} price={'54499'} />
            </div>
            <div className='grid grid-cols-2 gap-5'>
              <PackageCard image={'/images/holidays/maldives.jpg'} title={'Maldives'} price={'54499'} />
              <PackageCard image={'/images/holidays/maldives.jpg'} title={'Singapore'} price={'54499'} />
            </div>
          </div>
          <div className='max-h-96 h-full'>
            <PackageCard image={'/images/holidays/canada.avif'} title={'Canada Holidays'} price={'54499'} />
          </div>
          <div className='grid grid-rows-2 gap-5 max-h-96 h-full'>
            <PackageCard image={'/images/holidays/ireland.jpg'} title={'Singapore Splendor with Genting Cruise'} price={'54499'} />
            <PackageCard image={'/images/holidays/australia.jpg'} title={'Singapore Splendor with Genting Cruise'} price={'54499'} />
          </div>
        </div>
      </section>
      <section className='max-w-sm md:max-w-7xl w-full h-max flex flex-col items-center justify-center gap-3 p-5 mb-10 bg-dark_bg/10 rounded-3xl'>
        <h1 className='max-w-6xl text-4xl font-semibold text-center'>Ready to enjoy your holidays!</h1>
        <p className='max-w-5xl text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione repudiandae possimus, quam, aut at vel consequuntur dolor voluptatem, reprehenderit officia ullam omnis consequatur ab? Dicta quod esse hic magni non.</p>
        <button onClick={handleBtn} className='bg-primary hover:scale-105 hover:bg-solid text-secondary font-medium px-5 py-3 mt-5 rounded-2xl smooth'>Book Now!</button>
      </section>
    </main>
  )
}

export default Holidays;
