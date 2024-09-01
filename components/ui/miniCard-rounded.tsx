import React from 'react'
import Image from 'next/image';
import { StaticImageData } from 'next/image';

interface MiniCardProps {
    cardTitle: string;
    icon: StaticImageData | string;
    description: string;
  }

const MiniCardRounded: React.FC<MiniCardProps> = ({ cardTitle, icon, description })=> {
  return (
    <div data-aos='fade-down' data-aos-delay='400' className='w-32 h-48 md:h-60 md:w-36 xl:w-40 mb-4 text-white hover:text-gold-500 bg-transparent rounded-full md:p-5 flex flex-col items-center justify-start'>
        <div className='bg-white rounded-full overflow-hidden p-2' style={{ width: '100px', height: '100px' }}>
            <div className='w-full h-full flex items-center justify-center'>
                <Image src={icon} height={600} width={600} alt='icons' className='object-cover'/>
            </div>
        </div>
        <div className='font-bold text-md text-center py-1'>{cardTitle}</div>
        <p className='text-center font-normal text-sm mb-2'>{description}</p>
    </div>


  )
}

export default MiniCardRounded;