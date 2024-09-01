"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"


interface CardProps {
    image: string;
}

const BigCard = ({ image }: CardProps) => {
    const router = useRouter();
    const [show, setShow] = useState<boolean>(false)
    function handleBtn() {
        setShow(true)
    }
    function handleRedirect() {
        router.push("https://value1.world/bus.html")
    }

    useEffect(()=>{
        if(show){
            setTimeout(handleRedirect, 4000);
        }
    })

    return (
        <div className='flex flex-col md:flex-row items-center justify-between w-[750px] h-max md:h-80 p-4 bg-white/10 text-white rounded-2xl overflow-hidden'>
            <div className='w-72 md:w-96 flex items-center justify-center rounded-3xl overflow-hidden'>
                <Image src={image} alt={""} width={800} height={800} className='w-full h-auto' />
            </div>
            <div className='flex flex-col items-center justify-center gap-1.5 p-5'>
                <ol className='text-xl text-center md:space-y-1'>
                    <li className='text-xl md: font-medium'>Book Bus Tickets!</li>
                    <li className='text-xl md:text-2xl font-medium'>Earn <span className='text-gold-300 font-bold'>Gold</span> Rewards!</li>
                    <li className='text-md md:text-lg font-medium'>Make Every Journey Unforgettable!</li>
                </ol>
                <button onClick={handleBtn} className='text-white p-3 mt-5 bg-gold-200 rounded-lg font-semibold'>Book Now!</button>
            </div>
            <AlertDialog open={show}>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Redirecting to Value1.world</AlertDialogTitle>
                        <AlertDialogDescription>
                            You will be redirected to value1.world. There you can easily book your buses. Happy Holidays!!!
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                </AlertDialogContent>
            </AlertDialog>

        </div>
    )
}

export default BigCard;
