import { formatCurrency } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
import React from 'react'

interface CardProps {
    title: string;
    image: string;
}

const OverseasCard = ({ title,image}: CardProps) => {
    return (
        <Link href={`/services/iec/countries/study-in-${title}`} className='flex flex-col items-center justify-between w-80 md:w-[500px] h-[300px] bg-dark_bg/10 text-tertiary rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${image})`}}>
            <div className='flex items-center justify-center gap-1.5 bg-dark_bg/30 p-5 h-full w-full'>
                <h1 className='text-2xl font-bold capitalize'>{title}</h1>
            </div>
        </Link>
    )
}
export default OverseasCard
