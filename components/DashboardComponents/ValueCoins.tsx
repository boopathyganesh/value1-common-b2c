import Image from 'next/image'
import React from 'react'

const ValueCoins = () => {
  return (
    <div className="relative flex flex-col items-start justify-center rounded-3xl p-4 w-full md:w-96 h-36 gap-2 bg-secondary_bg text-secondary">
      <h3 className='text-lg font-semibold w-full pl-5'>Value Coins</h3>
      <div className='flex items-center justify-start pl-5'>
        <h2 className='font-medium'>You Have <span className='text-light_solid'>{101}</span> Value Coins</h2>
      </div>
      <div className='absolute top-3 right-5 flex items-center justify-center gap-2 bg-light_solid/50 p-1.5 rounded-xl'>
        <Image src={'/images/svgs/value-coin.svg'} alt='Value Coin' width={500} height={500} className='w-5' />
        <h1 className='text-sm font-medium text-secondary'>Value Coin</h1>
      </div>
      <button className='absolute bottom-5 right-10 p-2 text-sm rounded-xl bg-primary text-secondary font-medium'>Redeem</button>
    </div>
  )
}

export default ValueCoins
