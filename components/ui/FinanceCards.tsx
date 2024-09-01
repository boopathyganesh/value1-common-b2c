"use client"
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

interface CardProps {
    type: "loan" | "insurance" | "credit" | "capital"
    id?: string;
    title: string;
    content: string;
    image: string | StaticImageData;
}

const FinanceCard = ({ title, content, image, id, type }: CardProps) => {
    const router = useRouter()
    function handleBtnClick(id?: string) {
        if (id) {
            if (type === "loan") {
                router.push('/reward-store/finance/loans' + id)
            }
            else if (type === "insurance") {
                router.push('/reward-store/finance/insurance' + id)
            }
            else if (type === "credit") {
                router.push('/reward-store/finance/credit-cards' + id)
            }
            else if (type === "capital") {
                router.push('/reward-store/finance/capital-market' + id)
            }
        }
        else {
            router.push('/services/finance/')
        }
    }
    return (
        <div className='flex flex-col items-center justify-between w-72 h-56 bg-white/10 text-gold-200 rounded-2xl overflow-hidden'>
            <div className='flex flex-col items-start justify-between h-full text-gold-200 p-5'>
                <div className='flex flex-col items-center justify-start gap-2 '>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='w-16 h-16 rounded-full flex items-center justify-center bg-white overflow-hidden'>
                            <Image src={image} alt={""} height={500} width={500} />
                        </div>
                        <h1 className='text-lg font-medium w-44 text-gold-200'>{title}</h1>
                    </div>
                    <p className='text-white/70 text-sm'>{content}</p>
                </div>
                <button onClick={() => handleBtnClick(id)} className='mt-3 p-2 bg-gold-200 text-black rounded-lg'>Apply Now</button>
            </div>
        </div>
    )
}

export default FinanceCard
