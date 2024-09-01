import Image, { StaticImageData } from 'next/image'
import React from 'react'

interface CardProps {
    type: "brand"|"professional";
    title: string;
    image: string;
}

const ValueCard = ({ title,image,type}: CardProps) => {
    const backgroundImage = type === 'brand' 
        ? "url('/images/brands.png')" 
        : "url('/images/professional.png')";
    return (
        <div className='relative flex flex-col items-center justify-center w-72 h-[350px] rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat'>
            <div className='flex items-center justify-center h-52 w-52 rounded-full p-1 overflow-hidden bg-black-800/55'>
                <Image src={image} alt='' height={500} width={500} className='w-full' />
            </div>
            <div className='absolute bottom-0 flex items-center justify-center p-3 w-full bg-white/55 text-white rounded-t-2xl max-h-20 hover:max-h-max smooth'>
                <h1 className='text-xl text-center font-semibold'>{title}</h1>

            </div>
        </div>
    )
}
export default ValueCard
