import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface CardProps{
    title: string;
    image:string|StaticImageData;
    description:string;
}

const ApproachCard = ({title,image,description}:CardProps) => {
    return (
        <div className='w-96 h-[450px] flex flex-col items-start justify-center py-5 px-8 bg-white/95 rounded-3xl border-2 border-gold-500 gap-3 hover:scale-105 origin-center smooth cursor-pointer'>
            <Image src={image} alt={title} height={200} width={200} className='w-20' />
            <h1 className='font-semibold text-xl text-gold-200'>{title}</h1>
            <p className='text-black/70'>{description}</p>
        </div>
    )
}

export default ApproachCard
