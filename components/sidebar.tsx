'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import { FaAngleRight, FaAngleDown } from "react-icons/fa6";
import MultiMenu from "./ui/multi-menu";
import MiniLogo from "@/public/images/mini-logo.png"
//import Logo from "@/public/images/logo-big.png"
import Image from "next/image";
//import menu from "@/lib/menu";
import React from "react";
import { useRouter, usePathname } from "next/navigation";

interface MenuItem {
    id: number;
    title: string;
    link: string;
    icon: string;
    subList?: {
        title: string;
        link: string;
        icon: string;
    }[];
}

interface SideBarProps {
    menu: MenuItem[]
}

const Sidebar = ({ menu }: SideBarProps) => {

    const Logo = process.env.NEXT_PUBLIC_BRAND_LOGO || "/images/logo-big.png" ;

    const router = useRouter();
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(true);

    const toggleMenu = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    function handleBtnClick(link: string) {
        router.push(link)
    }


    return (
        <div className="relative w-max hidden lg:flex">
            {/* Sidebar Toggle */}
            <button className={`flex absolute top-5 -right-0 rounded-full bg-dark_bg p-1.5 text-center smooth ${isSidebarOpen ? 'rotate-180 animate-pulse' : ''} `} onClick={toggleMenu}>
                <FaAngleRight className="text-solid text-md" />
            </button>
            <div className={`flex flex-col items-center justify-center py-8 gap-5 w-max h-screen  overflow-hidden filter bg-inherit smooth ${isSidebarOpen ? 'max-w-52' : 'max-w-24'}`}>
                {/* Logo */}
                <div className={`${isSidebarOpen ? 'w-40' : 'w-16'} h-20 flex items-center justify-center`}>
                    {!isSidebarOpen && (
                        <Link href={"/"}><Image src={MiniLogo} alt={"Mini Brand Logo"} height={500} width={500} /></Link>
                    )}
                    {isSidebarOpen && (
                        <Link href={"/"}><Image src={Logo} alt={"Brand Logo"} height={500} width={800} /></Link>
                    )}
                </div>

                {/* Sidebar */}
                <div className="flex flex-col py-2 h-[620px] items-center justify-center overflow-hidden">
                    <ul className="flex flex-col items-center justify-between gap-2 overflow-y-scroll no-scroll">
                        {menu.map((item) => (
                            <React.Fragment key={item.id}>
                                {!item.subList && (
                                    <li className={`flex items-center justify-center smooth w-52 group`}>
                                        <button onClick={() => handleBtnClick(item.link)} className={`flex items-center justify-between gap-4 py-2 px-3 ${isSidebarOpen ? 'w-full' : 'max-w-20'} ${pathname === item.link ? "bg-gold-300 text-tertiary" : "bg-[#303136] text-gold-300"} rounded-2xl group-hover:bg-[#242529] smooth`}>
                                            {isSidebarOpen && (<div className="text-left text-lg font-semibold">{item.title}</div>)}
                                            <div className={`p-2 group-hover:bg-light_bg ${pathname === item.link ? "bg-light_bg" : "bg-light_bg/40"} rounded-xl smooth`}>
                                                <Image src={item.icon} alt={item.title} height={20} width={20} className="text-xl text-solid" />
                                            </div>
                                        </button>
                                    </li>
                                )}
                                {item.subList && (
                                    <li className={`flex items-center justify-center ${isSidebarOpen ? 'w-52' : 'w-max'} group`}>
                                        <MultiMenu sidebarSts={isSidebarOpen} Icon={item.icon} parentBtn={item.title} child={item.subList} activeLink={pathname} />
                                    </li>
                                )}
                            </React.Fragment>
                        ))}
                    </ul>
                </div>
            </div>
        </div>


    )
}

export default Sidebar
