import React from 'react'

interface CardProps{
    title:string;
    content:string;
}

const MiniCard = ({title,content}:CardProps) => {
  return (
    <div className='w-56 h-44 flex flex-col items-center justify-center gap-2 bg-white text-black hover:scale-105 origin-center p-4 rounded-3xl border hover:border-none border-gold-300 smooth'>
      <h1 className='text-center text-lg font-semibold text-gold-200'>{title}</h1>
      <p className='text-center text-xs'>{content}</p>
    </div>
  )
}

export default MiniCard
