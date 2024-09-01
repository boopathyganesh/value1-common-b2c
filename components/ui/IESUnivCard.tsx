import React from 'react'

interface CardProps {
    name: string;
    country:string;
    image: string;
}

const IESUnivCard = ({ name,country,image}: CardProps) => {
    return (
        <div className='flex flex-col items-center justify-between w-[400px] h-[300px] bg-black/10 text-white rounded-2xl overflow-hidden bg-cover bg-center bg-no-repeat group' style={{backgroundImage:`url(${image})`}}>
            <div className='flex flex-col items-center justify-center gap-1.5 bg-black/35 p-5 h-full w-full group-hover:translate-y-80 smooth'>
                <h1 className='text-2xl font-bold'>{name}</h1>
                <p className='text-base'>{country}</p>
            </div>
        </div>
    )
}
export default IESUnivCard
