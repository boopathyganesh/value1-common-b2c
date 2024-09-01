"use client"
import FinanceCard from '@/components/ui/FinanceCards'
import { loans } from '@/context/data'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'


const FinancePage = () => {
  const router = useRouter()

  function handleBtn() {
      router.push('/reward-store/finance')
  }

  return (
    <main className='max-w-sm md:max-w-full mx-auto w-full flex flex-col items-center justify-center overflow-hidden gap-5 bg-light_bg text-secondary'>
      <section className='relative max-w-full w-full h-[500px] flex items-center justify-center overflow-hidden '>
        <Image src={'/images/finance.jpg'} alt={''} height={1000} width={1000} className='w-full object-cover object-center' />
        <div className='absolute bottom-40 flex flex-col items-center justify-center text-center gap-5'>
          <h1 className='text-4xl font-semibold text-tertiary'>Where Every Experience Counts</h1>
          <p className='text-xl text-tertiary/70'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi beatae illum esse</p>
        </div>
      </section>
      <section className='max-w-sm md:max-w-7xl w-full h-max flex flex-col items-center justify-center rounded-2xl overflow-hidden p-5 gap-8 '>
        <div className='text-left w-full flex flex-col items-start justify-center gap-2'>
          <h1 className='text-4xl font-semibold text-secondary'>Loans</h1>
          <p className='text-xl text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi beatae illum esse</p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-5 py-4'>
          {loans.map((card, index) => (
            <FinanceCard key={index} id={card.id} title={card.title} content={card.content} image={card.image} type='capital' />
          ))}
        </div>
      </section>
      <section className='max-w-sm md:max-w-7xl w-full h-max flex flex-col items-center justify-center rounded-2xl overflow-hidden p-5 gap-8 '>
        <div className='text-left w-full flex flex-col items-start justify-center gap-2'>
          <h1 className='text-4xl font-semibold text-secondary'>Insurance</h1>
          <p className='text-xl text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi beatae illum esse</p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-5 py-4'>
          {loans.map((card, index) => (
            <FinanceCard key={index} id={card.id} title={card.title} content={card.content} image={card.image} type='capital' />
          ))}
        </div>
      </section>
      <section className='max-w-sm md:max-w-7xl w-full h-max flex flex-col items-center justify-center rounded-2xl overflow-hidden p-5 gap-8 '>
        <div className='text-left w-full flex flex-col items-start justify-center gap-2'>
          <h1 className='text-4xl font-semibold text-secondary'>Credit Cards</h1>
          <p className='text-xl text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi beatae illum esse</p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-5 py-4'>
          {loans.map((card, index) => (
            <FinanceCard key={index} id={card.id} title={card.title} content={card.content} image={card.image} type='capital' />
          ))}
        </div>
      </section>
      <section className='max-w-sm md:max-w-7xl w-full h-max flex flex-col items-center justify-center rounded-2xl overflow-hidden p-5 gap-8 '>
        <div className='text-left w-full flex flex-col items-start justify-center gap-2'>
          <h1 className='text-4xl font-semibold text-secondary'>Capital Market</h1>
          <p className='text-xl text-secondary'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi beatae illum esse</p>
        </div>
        <div className='flex flex-wrap items-center justify-center gap-5 py-4'>
          {loans.map((card, index) => (
            <FinanceCard key={index} id={card.id} title={card.title} content={card.content} image={card.image} type='capital' />
          ))}
        </div>
      </section>
      <section className='max-w-sm md:max-w-7xl w-full h-max flex flex-col items-center justify-center gap-3 p-5 mb-10 bg-dark_bg/10 rounded-3xl'>
        <h1 className='max-w-6xl text-4xl font-semibold text-center'>Claim the awesome Financial Deals and collect your Gold!</h1>
        <p className='max-w-5xl text-center'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione repudiandae possimus, quam, aut at vel consequuntur dolor voluptatem, reprehenderit officia ullam omnis consequatur ab? Dicta quod esse hic magni non.</p>
        <button onClick={handleBtn} className='bg-primary hover:scale-105 hover:bg-solid text-secondary font-medium px-5 py-3 mt-5 rounded-2xl smooth'>Apply Now!</button>
      </section>
    </main>
  )
}

export default FinancePage;
