import Image from 'next/image'
import React from 'react'

interface CardProp{
    name: string
    image:string
}

const MiniUniv = ({name,image}:CardProp) => {
    return (
        <div className='bg-white flex flex-col items-center justify-start gap-2 h-56 w-56  p-3 rounded-2xl'>
            <div className='w-36 h-36 flex items-center justify-center'>
                <Image src={image} alt='' height={200} width={200} />
            </div>
            <h1 className='text-center'>{name}</h1>
        </div>
    )
}

export default MiniUniv
