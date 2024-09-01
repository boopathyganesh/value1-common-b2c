import Link from 'next/link';
import React from 'react'

interface CardProps {
    title: string;
    image: string;
}

const GoldStoreCard = ({ title,image}: CardProps) => {
    return (
        <Link href={"https://www.app.value1.in/"} className='flex flex-col items-center justify-between w-72 h-64 bg-black/10 text-white rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${image})`}}>
            <div className='flex items-center justify-center gap-1.5 bg-black-800/50 p-5 h-full w-full'>
                <h1 className='text-2xl font-bold'>{title}</h1>
            </div>
        </Link>
    )
}
export default GoldStoreCard
