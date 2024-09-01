import Image from 'next/image';
import React from 'react'

interface PackageProps {
    image: string;
    title: string;
    price: string;
}
const PackageCard = ({ image, title, price }: PackageProps) => {
    return (
        <div className='flex flex-col items-center justify-center gap-3 text-center group h-full w-full'>
            <div className='relative flex items-center justify-center rounded-3xl bg-cover bg-center h-full w-full overflow-hidden'>
                <Image src={image} alt={''} height={500} width={500} className='w-full h-full object-cover object-center group-hover:scale-110 smooth' />
                <div className='absolute bottom-0 text-left w-full flex flex-col items-start justify-center pl-5 pb-1 bg-dark_bg/30 leading-tight'>
                    <h1 className='text-xl font-medium text-tertiary'>{title}</h1>
                    <p className='text-sm text-tertiary'>Start form <span className='text-xl font-medium'>&#8377;{price}</span></p>
                </div>
            </div>
        </div>
    )
}

export default PackageCard
