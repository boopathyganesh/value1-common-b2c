import React from 'react'

const GoldReward = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl w-full md:w-96 h-36 bg-secondary_bg text-secondary p-4">
      <h1 className='text-xl font-semibold'>Gold Reward</h1>
      <div className='flex flex-col items-start justify-center p-2 px-4 w-full'>
        <h5 className='text-lg font-medium'>Current reward value is</h5>
        <p className='text-lg text-gold-500 font-medium'><span>&#8377;3,242.17</span><span>(1.7326 gm)</span></p>
        <p className='text-green-500 text-base font-medium'>Total returns: <span>+&#8377;324</span> <span>(11.28%)</span></p>
      </div>
    </div>
  )
}

export default GoldReward
