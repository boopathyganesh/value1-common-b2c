import Image from 'next/image'
import React from 'react'

interface CardProps {
    image: string;
}

const BigCard = ({ image }: CardProps) => {
    return (
        <div className='flex  items-center justify-between w-[750px] h-80 p-4 bg-white rounded-2xl overflow-hidden'>
            <div className='w-96 flex items-center justify-center rounded-3xl overflow-hidden'>
                <Image src={image} alt={""} width={800} height={800} className='w-full h-auto' />
            </div>
            <div className='flex flex-col items-center justify-center gap-1.5 text-black-800 p-5'>
                <ol className='text-xl text-center space-y-1'>
                    <li className='text-2xl font-medium'>Book Bus Tickets!</li>
                    <li className='text-2xl font-medium'>Earn <span className='text-gold-300 font-bold'>Gold</span> Rewards!</li>
                    <li className='text-lg font-medium'>Make Every Journey Unforgettable!</li>
                </ol>
                <button className='p-3 mt-5 bg-gold-200 rounded-lg font-semibold'>Book Now!</button>
            </div>
        </div>
    )
}

export default BigCard;
