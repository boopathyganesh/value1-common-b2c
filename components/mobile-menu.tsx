'use client'
import Link from 'next/link';
import React from 'react'
import { LuLayoutDashboard } from "react-icons/lu";
import CustomMultiMenu from './ui/customMultiMenu';
import menu from '@/lib/menu';
import Image from 'next/image';

const MobileMenu = () => {
    const rewardSubMenu = [
        { name: 'Reward List 1', href: '#', Icon: <LuLayoutDashboard className="text-xl text-gold-500" /> },
        { name: 'Reward List 2', href: '#', Icon: <LuLayoutDashboard className="text-xl text-gold-500" /> },
        { name: 'Reward List 3', href: '#', Icon: <LuLayoutDashboard className="text-xl text-gold-500" /> },
        { name: 'Reward List 4', href: '#', Icon: <LuLayoutDashboard className="text-xl text-gold-500" /> },
        { name: 'Reward List 5', href: '#', Icon: <LuLayoutDashboard className="text-xl text-gold-500" /> },
    ]
    return (
        <div className="bg-[#303136] h-max w-full md:w-3/4 p-1 fixed bottom-10 left-1/2 transform -translate-x-1/2 rounded-xl lg:hidden">
            <div className="relative">
                <ul className="flex items-center justify-between gap-5 overflow-x-auto px-5 py-0.5">

                    {menu.map((item, index) => (
                        <React.Fragment key={index}>
                            {!item.subList && (
                                <li className='p-1.5 group hover:bg-gold-300 rounded-2xl h-24 w-20 flex items-start justify-center'>
                                    <Link href={item.link} className='flex flex-col items-center justify-center gap-0.5'>
                                        <div className="p-2 bg-gold-500/80 group-hover:bg-white rounded-xl smooth">
                                            <Image src={item.icon} alt="" height={100} width={100} className="text-lg text-white group-hover:text-gold-500" />
                                        </div>
                                        <div className='text-xs text-center text-gold-500 group-hover:text-black-800'>{item.title}</div>
                                    </Link>
                                </li>
                            )}
                            {item.subList && (
                                <li className='p-1.5 group hover:bg-gold-300 rounded-2xl h-24 w-20 flex items-start justify-center'>
                                    <CustomMultiMenu parentBtn={item.title} Icon={item.icon} child={item.subList} />
                                </li>
                            )}
                        </React.Fragment>
                    ))}

                    {/* <li className='p-1.5 group hover:bg-gold-300 rounded-2xl'>
                        <Link href='#' className='flex flex-col items-center justify-center gap-0.5'>
                            <div className="p-2 bg-gold-500/80 group-hover:bg-white rounded-xl smooth">
                                <LuLayoutDashboard className="text-lg text-white group-hover:text-gold-500" />
                            </div>
                            <div className='text-xs text-gold-500 group-hover:text-black-800'>Dashboard</div>
                        </Link>
                    </li>
                    <li className='p-1.5 group hover:bg-gold-300 rounded-2xl'>
                        <Link href='#' className='flex flex-col items-center justify-center gap-0.5'>
                            <div className="p-2 bg-gold-500/80 group-hover:bg-white rounded-xl smooth">
                                <LuLayoutDashboard className="text-lg text-white group-hover:text-gold-500" />
                            </div>
                            <div className='text-xs text-gold-500 group-hover:text-black-800'>Dashboard</div>
                        </Link>
                    </li>
                    <li className='p-1.5 group hover:bg-gold-300 rounded-2xl'>
                        <CustomMultiMenu parentBtn={"Reward"} Icon={<LuLayoutDashboard className="text-lg text-white group-hover:text-gold-500" />} child={rewardSubMenu} />
                    </li>
                    <li className='p-1.5 group hover:bg-gold-300 rounded-2xl'>
                        <Link href='#' className='flex flex-col items-center justify-center gap-0.5'>
                            <div className="p-2 bg-gold-500/80 group-hover:bg-white rounded-xl smooth">
                                <LuLayoutDashboard className="text-lg text-white group-hover:text-gold-500" />
                            </div>
                            <div className='text-xs text-gold-500 group-hover:text-black-800'>Dashboard</div>
                        </Link>
                    </li>
                    <li className='p-1.5 group hover:bg-gold-300 rounded-2xl'>
                        <Link href='#' className='flex flex-col items-center justify-center gap-0.5'>
                            <div className="p-2 bg-gold-500/80 group-hover:bg-white rounded-xl smooth">
                                <LuLayoutDashboard className="text-lg text-white group-hover:text-gold-500" />
                            </div>
                            <div className='text-xs text-gold-500 group-hover:text-black-800'>Dashboard</div>
                        </Link>
                    </li> */}
                </ul>
            </div>
        </div>
    )
}

export default MobileMenu
