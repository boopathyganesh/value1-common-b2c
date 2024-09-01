'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { siteConfig } from '@/config/site';
import { signIn } from 'next-auth/react';
import { usePathname } from 'next/navigation';

export default function MobileMenu() {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false)
  const [selectedLink, setSelectedLink] = useState('');
  const path = usePathname();

  const trigger = useRef<HTMLButtonElement>(null)
  const mobileNav = useRef<HTMLDivElement>(null)


  function handleLogin() {
    signIn('credentials', { callbackUrl: '/reward-store' });
  }

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
    setMobileNavOpen(false);
  };

  // close the mobile menu on click outside
  useEffect(() => {
    const clickHandler = ({ target }: { target: EventTarget | null }): void => {
      if (!mobileNav.current || !trigger.current) return;
      if (!mobileNavOpen || mobileNav.current.contains(target as Node) || trigger.current.contains(target as Node)) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close the mobile menu if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: { keyCode: number }): void => {
      if (!mobileNavOpen || keyCode !== 27) return;
      setMobileNavOpen(false)
    };
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  useEffect(() => {
    const layoutFrame = document.querySelector('.layout-frame');
    const navFrame = document.querySelector('.nav-frame');
    if (mobileNavOpen && layoutFrame && navFrame) {
      layoutFrame.classList.add('blur');
      navFrame.classList.add('no-blur');
    } else if (layoutFrame && navFrame) {
      layoutFrame.classList.remove('blur');
      navFrame.classList.remove('no-blur');
    }
  }, [mobileNavOpen]);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        ref={trigger}
        className={`hamburger ${mobileNavOpen && 'active'}`}
        aria-controls="mobile-nav"
        aria-expanded={mobileNavOpen}
        onClick={() => setMobileNavOpen(!mobileNavOpen)}
      >
        <span className="sr-only">Menu</span>
        <svg
          className="w-6 h-6 fill-current text-gray-700 hover:text-gold-500 transition duration-150 ease-in-out"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="4" width="24" height="2" rx="1" />
          <rect y="11" width="24" height="2" rx="1" />
          <rect y="18" width="24" height="2" rx="1" />
        </svg>
      </button>

      {/*Mobile navigation */}
      <nav
        id="mobile-nav"
        ref={mobileNav}
        className={`nav-frame flex flex-wrap items-center justify-center absolute top-52 z-50 left-0 w-full mt-4 px-4 sm:px-6 overflow-hidden transition-all duration-300 ease-in-out backdrop-blur-md h-full`}
        style={mobileNavOpen ? { maxHeight: mobileNav.current?.scrollHeight, opacity: 1 } : { maxHeight: 0, opacity: 0.8 }}
      >
        {/* <ul className="bg-black-800 px-4 py-2 max-w-xs w-full flex flex-col justify-center items-center rounded-2xl shadow-xl">
          <li>
            <Link
              href="/"
              className={`${selectedLink === 'page1' ? 'text-gold-500' : 'text-white'} font-semibold hover:text-gold-500 px-8 py-5 flex items-center  transition duration-250 ease-in-out`}  
              onClick={() => handleLinkClick('page1')}
            >
              Home
            </Link>
          </li>    
          <li>
            <Link
              href="/how-it-works"
              className={`${selectedLink === 'page2' ? 'text-gold-500' : 'text-white'} font-semibold hover:text-gold-500 px-8 py-5 flex items-center  transition duration-250 ease-in-out`}  
              onClick={() => handleLinkClick('page2')}
            >
              How it Works?
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={`${selectedLink === 'page3' ? 'text-gold-500' : 'text-white'} font-semibold hover:text-gold-500 px-8 py-5 flex items-center  transition duration-250 ease-in-out`}  
              onClick={() => handleLinkClick('page3')}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/co-own"
              className={`${selectedLink === 'page4' ? 'text-gold-500' : 'text-white'} font-semibold hover:text-gold-500 px-8 py-5 flex items-center  transition duration-250 ease-in-out`}  
              onClick={() => handleLinkClick('page4')}
            >
              Co-Own
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`${selectedLink === 'page5' ? 'text-gold-500' : 'text-white'} font-semibold hover:text-gold-500 px-8 py-5 flex items-center  transition duration-250 ease-in-out`}  
              onClick={() => handleLinkClick('page5')}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className={`${selectedLink === 'page6' ? 'text-gold-500' : 'text-white'} font-semibold hover:text-gold-500 px-8 py-5 flex items-center  transition duration-250 ease-in-out`}  
              onClick={() => handleLinkClick('page6')}
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              href="#"
              className="font-medium w-32 rounded-xl inline-flex items-center justify-center border border-transparent px-4 py-2 mb-4 my-2 text-black-800 bg-gold-500 hover:bg-gold-400 active:scale-95 transition duration-150 ease-in-out" onClick={() => setMobileNavOpen(false)}
            >
              Sign up
            </Link>
          </li>
        </ul> */}
        <ul className="bg-black px-4 py-2 max-w-xs w-full flex flex-col justify-center items-center rounded-2xl shadow-xl gap-3">
          {siteConfig.navItems.map((item, index) => (
            <li className={`font-medium text-lg hover:scale-105 hover:text-primary ${path === item.link ? "text-primary" : "text-white"}`} key={index} onClick={()=>handleLinkClick(item.link)}><Link href={item.link}>{item.name}</Link></li>
          ))}
          <div className="flex items-center justify-center gap-5">
            <button onClick={handleLogin} className="font-medium px-5 py-3 bg-primary rounded-2xl hover:scale-105 hover:bg-solid smooth">Login</button>
          </div>
        </ul>

      </nav>
    </div>
  )
}
