"use client"
import { useRouter } from 'next/navigation';
import React from 'react'

interface CardProps {
    id?:string;
    title: string;
    image: string;
}

export const VLabCard = ({ title,image,id}: CardProps) => {
    const router = useRouter()

    function handleBtnClick(id?: string) {
        if (id) {
            router.push('/reward-store/value-labs/' + id)
        }
        else {
            router.push('/services/value-labs/')
        }
    }
    return (
        <button onClick={() => handleBtnClick(id)} className='flex flex-col items-center justify-between w-72 h-64 bg-black/10 text-white rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat' style={{backgroundImage:`url(${image})`}}>
            <div className='flex items-center justify-center gap-1.5 bg-black-800/50 p-5 h-full w-full'>
                <h1 className='text-2xl font-bold'>{title}</h1>
            </div>
        </button>
    )
}

export default VLabCard
