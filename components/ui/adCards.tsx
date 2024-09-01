import { formatCurrency } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface CardProps {
    title: string;
    content: string;
    image: string;
    rating: number;
    price?: number;
}

const AdCard = ({ title, content, image, rating, price }: CardProps) => {

    return (
        <div className={`relative flex items-start justify-start w-96 h-[250px] bg-white rounded-3xl overflow-hidden bg-cover bg-center`} style={{backgroundImage:`url(${image})`}}>
            <div className='text-black-800 p-3 absolute text-left flex flex-col items-start justify-center gap-2'>
                <h1 className='text-xl max-w-52 font-extrabold text-white'>{title}</h1>
                <h3 className='text-lg font-medium text-white max-w-52'>{content}</h3>
                <button className='p-3 bg-gold-200 rounded-3xl'>Shop Now</button>
            </div>
        </div>
    )
}

export default AdCard
