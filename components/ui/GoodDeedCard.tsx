import { formatCurrency } from '@/lib/utils';
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link';
import React from 'react'

interface CardProps {
    title: string;
    image: string;
    id?: string;
}

const GoodDeedCard = ({ title, image, id }: CardProps) => {

    let link = '/reward-store/value-brands/'

    if (id) {
        link = link + id
    }

    return (
        <Link href={link} className='relative flex items-center justify-center w-72 h-[300px] rounded-2xl overflow-hidden bg-dark_bg/10'>
            <Image src={image} alt={''} height={500} width={500} className='w-52 h-auto'/>
            <div className='absolute bottom-0 flex items-center justify-center p-2 w-full bg-dark_bg/10 text-secondary rounded-t-2xl max-h-20 hover:max-h-max smooth'>
                <h1 className='text-xl text-center font-semibold'>{title}</h1>
            </div>
        </Link>
    )
}
export default GoodDeedCard
