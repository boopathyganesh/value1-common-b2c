import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react'

type MultiMenuProps = {
    parentBtn: string;
    Icon: string;
    child: {
        title: string;
        icon: string;
        link: string;
    }[];
};

const CustomMultiMenu: React.FC<MultiMenuProps> = ({ Icon, parentBtn, child }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const trigger = useRef<HTMLButtonElement>(null)
    const MenuNav = useRef<HTMLDivElement>(null)

    const handleLinkClick = () => {
        setIsOpen(false);
    };
    // close the mobile menu on click outside
    useEffect(() => {
        const clickHandler = ({ target }: { target: EventTarget | null }): void => {
            if (!MenuNav.current || !trigger.current) return;
            if (!isOpen || MenuNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
            setIsOpen(false)
        };
        document.addEventListener('click', clickHandler)
        return () => document.removeEventListener('click', clickHandler)
    })
    // // close the mobile menu if the esc key is pressed
    // useEffect(() => {
    //     const keyHandler = ({ keyCode }: { keyCode: number }): void => {
    //         if (!isOpen || keyCode !== 27) return;
    //         setIsOpen(false)
    //     };
    //     document.addEventListener('keydown', keyHandler)
    //     return () => document.removeEventListener('keydown', keyHandler)
    // })
    return (
        <div className=''>
            <button ref={trigger} onClick={() => setIsOpen(!isOpen)} className='group hover:bg-gold-300 rounded-2xl w-full'>
                <div className='flex flex-col items-center justify-start gap-0.5'>
                    <div className="p-2 bg-gold-500/80 group-hover:bg-white rounded-xl smooth">
                        <Image src={Icon} alt="" height={100} width={100} className={`text-lg text-white group-hover:text-gold-500`} />
                        {/* <Icon className="text-lg text-white group-hover:text-gold-500" /> */}
                    </div>
                    <div className='text-xs text-gold-500 group-hover:text-black-800'>{parentBtn}</div>
                </div>
            </button>
            {isOpen && (
                <div ref={MenuNav} className={`absolute w-max px-6 -top-12 bottom-center p-1 rounded-2xl bg-[#242529] ${isOpen ? 'max-h-max' : 'max-h-0'}`}>
                    <ul className='flex items-center justify-center gap-5 overflow-x-auto py-1'>
                        {child.map((item, index) => (
                            <li key={index} className='p-1.5 group hover:bg-gold-300 rounded-2xl' onClick={handleLinkClick}>
                                <a href={item.link} className='flex flex-col items-center justify-center gap-0.5'>
                                    <div className="p-2 bg-gold-500/80 group-hover:bg-white rounded-xl smooth">
                                        {/* {React.cloneElement(item.Icon, { className: `text-lg text-white group-hover:text-gold-500` })} */}
                                        <Image src={item.icon} alt="" height={100} width={100} className="text-lg text-white group-hover:text-gold-500" />
                                    </div>
                                    <div className='text-xs text-center text-gold-500 group-hover:text-black-800'>{item.title}</div>
                                </a>
                            </li>
                        ))}
                        {/* <li className='p-1.5 group hover:bg-gold-300 rounded-2xl'>
                            <Link href='#' className='flex flex-col items-center justify-center gap-0.5'>
                                <div className="p-2 bg-gold-500/80 group-hover:bg-white rounded-xl smooth">
                                    <LuLayoutDashboard className="text-lg text-white group-hover:text-gold-500" />
                                </div>
                                <div className='text-xs text-gold-500 group-hover:text-black-800'>Dashboard</div>
                            </Link>
                        </li> */}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default CustomMultiMenu
