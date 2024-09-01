import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

interface CardProps {
    id: string;
    title: string;
    content: string;
    image: string;
}

const DealsCard = ({ id, title, content, image }: CardProps) => {

    const router = useRouter()

    function handleBtnClick(id:string){
        router.push('/reward-store/online-deals/'+id)
    }

    return (
        <div className='flex items-center justify-between w-[350px] h-32 bg-white/10 text-white rounded-2xl overflow-hidden px-5 group'>
            <div className='flex items-center justify-center w-24 h-24 p-2 rounded-full border-2 border-solid group-hover:border-dashed overflow-hidden bg-white'>
                <Image src={image} alt={title} width={800} height={800} className='w-full group-hover:scale-105 smooth' />
            </div>
            <div className='w-2/3 flex flex-col items-center justify-center gap-1.5 p-5'>
                <h1 className='text-lg font-medium text-center line-clamp-1'>{title}</h1>
                <p className='text-sm'>Flat {content} Worth of <span className='text-gold-500 font-medium'>Gold</span></p>
                <button className='mt-1 px-3 py-2 bg-gold-200 text-secondary rounded-xl' onClick={()=>handleBtnClick(id)}>Avail Now</button>
            </div>
        </div>
    )
}

export default DealsCard
