import { setActiveLink } from "@/store/slices/activeLinkSlice";
import { usePathname, useRouter } from "next/navigation";
import React, { useState, useEffect, useRef } from "react";
import { IconType } from "react-icons";
import { FaAngleRight } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import Image from "next/image";

type MultiMenuProps = {
  parentBtn: string;
  Icon: string;
  activeLink: string;
  child: {
    title: string;
    icon: string;
    link: string
  }[];
  sidebarSts: boolean;
};

const MultiMenu: React.FC<MultiMenuProps> = ({ Icon, parentBtn, child, sidebarSts, activeLink }: MultiMenuProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const trigger = useRef<HTMLButtonElement>(null)
  const MenuNav = useRef<HTMLDivElement>(null)


  const handleLinkClick = (link: string) => {
    //setIsOpen(false);
    router.push(link)
  };
  // close the mobile menu on click outside
  // useEffect(() => {
  //   const clickHandler = ({ target }: { target: EventTarget | null }): void => {
  //     if (!MenuNav.current || !trigger.current) return;
  //     if (!isOpen || MenuNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
  //     setIsOpen(false)
  //   };
  //   document.addEventListener('click', clickHandler)
  //   return () => document.removeEventListener('click', clickHandler)
  // })
  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!isOpen || keyCode !== 27) return;
      setIsOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  useEffect(() => {
    if (child.some((item) => item.link === activeLink)) {
      setIsOpen(true);
    } else {
      setIsOpen(false);
    }
  }, [child, activeLink]);

  return (
    <div className="relative">
      <button
        ref={trigger}
        className={`flex items-center justify-between ${sidebarSts ? 'w-52' : 'w-max'} py-2 px-3 cursor-pointer rounded-2xl group-hover:bg-[#242529] outline-none smooth ${isOpen ? 'bg-[#242529]' : 'bg-[#303136]'}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {
          sidebarSts ?
            <div className="flex items-center justify-between w-full gap-4">
              <div className="text-left text-lg font-semibold text-primary">{parentBtn}</div>
              <div className={`p-2 group-hover:bg-light_bg rounded-xl ${isOpen ? 'bg-light_bg' : 'bg-light_bg/40'}`}>
                <FaAngleRight className={`text-xl text-solid smooth ${isOpen ? 'rotate-90' : ''}`} />
              </div>
            </div>
            :
            <div className={`p-2 group-hover:bg-light_bg rounded-xl ${isOpen ? 'bg-light_bg' : 'bg-light_bg/40'}`}>
              <Image src={Icon} alt="" height={100} width={100} className={`w-5 h-5 text-solid smooth ${isOpen ? 'rotate-90' : ''}`} />
            </div>
        }
      </button>
      <div ref={MenuNav} className={`transition-all ml-auto duration-300 ease-in-out overflow-hidden h-max  ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
        {isOpen && (
          <ul className={`w-max my-2 flex items-start justify-center gap-1 ${sidebarSts ? 'border-l-2 pl-3' : 'border-t-2 pt-3'} border-dashed  border-gold-500`}>
            <div className={`flex flex-col items-start justify-center gap-1 ${sidebarSts ? 'w-48' : 'w-full bg-gray-200 p-3 rounded-2xl'} `}>
              {child.map((item, index) => (
                <li
                  key={index}
                  className={`w-full flex text-secondary text-md font-semibold items-center justify-center ${activeLink === item.link ? "bg-dark_bg/10 scale-[1.01]" : "bg-gold-200"}  ${sidebarSts ? 'bg-dark_bg/10 px-3 py-2' : 'bg-light_bg'} rounded-xl cursor-pointer`}
                >
                  <button onClick={() => handleLinkClick(item.link)} className="flex items-center justify-between w-full gap-3">
                    {sidebarSts && (
                      <div className="text-left">{item.title}</div>
                    )}
                    {/* ${activeLink === item.link ? 'bg-gold-500 text-tertiary' : 'bg-light_bg text-solid'} */}
                    <div className={`
                        p-2 rounded-xl
                        ${activeLink === item.link ? 'bg-dark_bg text-tertiary' : 'bg-light_bg text-solid'}
                    `}>
                      <Image src={item.icon} alt="" height={100} width={100} className="w-5 h-5" />
                    </div>
                  </button>
                </li>
              ))}
            </div>
          </ul>
        )}
      </div>

    </div>
  );
};

export default MultiMenu;
