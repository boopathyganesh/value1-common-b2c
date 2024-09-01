import Image,{ StaticImageData } from 'next/image';
import React from 'react'

interface CardProps{
    title: string;
    image:string|StaticImageData;
    description:string;
}

const BenefitCard = ({title,image,description}:CardProps) => {
    return (
        <div className="flex flex-col items-center justify-center p-4 border-2 border-gold-300 bg-white rounded-3xl w-80 h-80 gap-2 hover:scale-105 smooth overflow-hidden">
            <span className="w-20">
                <Image src={image} alt={title} width={500} height={500} />
            </span>
            <h1 className='text-gold-400 text-2xl text-center'>{title}</h1>
            <p className='text-center text-black/75'>{description}</p>
        </div>
    )
}

export default BenefitCard
