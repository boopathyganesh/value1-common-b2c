import Education from '@/components/Education'
import Finance from '@/components/Finance'
import GoldStore from '@/components/GoldStore'
import GoodDeeds from '@/components/GoodDeeds'
import HeroSection from '@/components/HeroSection'
import OnlineDeals from '@/components/OnlineDeals'
import Travel from '@/components/Travel'
import ValueBrands from '@/components/ValueBrands'
import ValueLabs from '@/components/ValueLabs'
import ValueProfessionals from '@/components/ValueProfessionals'
import Partners from '@/components/partners'
import Testimonials from '@/components/testimonials'
import React from 'react'

import { resolve } from 'path'
import dotenv from "dotenv";
dotenv.config({ path: resolve(__dirname, '.env') });

var invite = process.env.INVITE

//console.log(invite)

const pages = () => {
  return (
    <main className='max-w-sm md:max-w-full mx-auto w-full flex flex-col items-center justify-center overflow-hidden'>
      <div className='w-full flex items-center justify-center px-5'>
        <HeroSection />
      </div>
      <div className={`w-full ${invite === 'true' ? "hidden":""}`}>
        <GoldStore />
        
        <OnlineDeals />
        <Travel />
        <Education />
        {/* <GoodDeeds /> */}
        <ValueBrands />
        <ValueLabs />
        <Finance />
        {/* <ValueProfessionals /> */}
      </div>
      <div className={`relative w-full max-h-[1500px] h-full overflow-scroll no-scroll ${invite === 'true' ? "":"hidden"}`}>
        <div className='absolute z-20 top-0 flex items-center justify-center w-full h-full'>
          <div className='absolute top-1/2'>
            <h1 className='text-black'>Invitation</h1>
          </div>
        </div>
        <div className='relative w-full flex flex-col items-center justify-center'>
          <div className='absolute top-0 w-full h-full bg-black/10 z-10 backdrop-blur-lg'></div>  {/*Invitation Purpose*/}
          <GoldStore />
          <ValueLabs />
          <OnlineDeals />
          <Travel />
          <Finance />
          <Education />
          <GoodDeeds />
          <ValueBrands />
          <ValueProfessionals />
        </div>
      </div>
      <Testimonials />
      <Partners />
    </main>
  )
}

export default pages
