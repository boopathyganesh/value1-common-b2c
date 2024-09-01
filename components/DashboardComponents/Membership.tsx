import React from 'react'

const Membership = () => {
  return (
    <div className="flex flex-col items-left justify-center rounded-3xl w-full md:w-96 h-36 px-4 py-2 gap-1 bg-secondary_bg text-secondary">
      <h2 className='text-xl font-semibold'>Welcome to <span className='text-solid'>Value1</span></h2>
      <h4 className='text-base font-normal'>India&apos;s 1st Tech company co-owned by its customers & workforce</h4>
      <div className='flex items-center justify-between'>
        <h4 className='text-base font-medium'>My Membership ID</h4>
        <h1 className='text-xl font-bold text-solid'>M8E97F</h1>
      </div>
    </div>
  )
}

export default Membership
