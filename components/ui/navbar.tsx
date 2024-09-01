"use client"
import React from 'react'
import { BiBell } from "react-icons/bi";
import { sitemap } from '@/lib/map';
import { usePathname } from 'next/navigation';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem } from './dropdown-menu';
import User from "@/public/images/mr.dummy.png";
import Image from 'next/image';
import { FaRegCircleUser } from "react-icons/fa6";
import Link from 'next/link';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { ProfileComponent } from '../DashboardComponents/ProfileComponent';
import { handleSignOut } from '@/app/auth/signout';


type PointerDownOutsideEvent = CustomEvent<{ originalEvent: PointerEvent }>;
type FocusOutsideEvent = CustomEvent<{ originalEvent: FocusEvent }>;


const AppNavbar = () => {
    const path = usePathname();
    let activeItem = sitemap.find(item => item.link === path);

    const handleInteractionOutside = (event: PointerDownOutsideEvent | FocusOutsideEvent) => {
        // Prevent the dialog from closing
        event.preventDefault();
        event.stopPropagation();
    };

    return (
        <nav className='w-full h-12 px-5 md:px-0 flex items-center justify-between text-secondary'>
            <div className='w-max md:w-full flex flex-col items-center justify-center gap-4'>
                <h2 className="md:ml-10 text-3xl font-bold w-full text-center">{activeItem?.title}</h2>
            </div>
            <div className='w-max flex items-center justify-center gap-5'>
                <button className='hidden px-3 py-3 rounded-2xl bg-primary md:flex items-center justify-center'>
                    <BiBell className='text-2xl' />
                </button>
                <Link className='hidden md:flex px-5 py-3 rounded-2xl bg-primary font-medium' href={'/reward-store/membership'} >Membership</Link>
                <button className='hidden md:flex px-5 py-3 rounded-2xl bg-primary font-medium'>Support</button>
                {/* Profile Section */}
                <DropdownMenu>
                    <Dialog>
                        <DropdownMenuTrigger asChild>
                            <div className={`flex items-center justify-start h-max bg-dark_bg/10 rounded-full p-1 overflow-hidden`}>
                                <div className="w-12 h-12 flex items-center justify-center p-1">
                                    <Image src={User} alt={"User Image"} />
                                </div>
                            </div>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56 flex flex-col items-start justify-center bg-dark_bg/20 p-5 m-5 backdrop-blur">
                            <DialogTitle hidden>Profile Settings</DialogTitle>
                            <DropdownMenuLabel className='flex items-center justify-center gap-2'><FaRegCircleUser className='text-lg' /> My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator aria-orientation='horizontal' className='w-full' />
                            <DropdownMenuItem>
                                <DialogTrigger className='flex items-center justify-center gap-2' ><FaRegCircleUser className='text-lg' /> Profile</DialogTrigger>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={''} className='flex items-center justify-center gap-2' ><FaRegCircleUser className='text-lg' /> KYC Details</Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href={''} className='flex items-center justify-center gap-2' ><FaRegCircleUser className='text-lg' /> Membership</Link>
                            </DropdownMenuItem>
                            <DropdownMenuSeparator aria-orientation='horizontal' className='w-full' />
                            <DropdownMenuItem>
                                <button onClick={() => handleSignOut('/auth')} className='flex items-center justify-center gap-2' ><FaRegCircleUser className='text-lg' /> Logout</button>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                        <DialogContent className='max-w-5xl w-full max-h-[800px] h-full' onInteractOutside={handleInteractionOutside}>
                            <ProfileComponent />
                        </DialogContent>
                    </Dialog>
                </DropdownMenu>
            </div>
        </nav>
    )
}

export default AppNavbar
