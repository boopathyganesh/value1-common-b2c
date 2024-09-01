
import Image from 'next/image';
import React from 'react'

interface CountryCardProps {
    image: string;
    country: string;
  }

const CountryCard = ({ image, country }: CountryCardProps) => {
    return (
      <div className='flex flex-col items-center justify-center gap-3 text-center group '>
        <div className='flex items-center justify-center h-56 w-56 rounded-3xl bg-cover bg-center overflow-hidden shadow-2xl'>
          <Image src={image} alt={''} height={500} width={500} className='w-full h-full group-hover:scale-110 smooth' />
        </div>
        <h1 className='text-2xl font-medium text-secondary group-hover:text-primary smooth'>{country}</h1>
      </div>
    )
  }

export default CountryCard
