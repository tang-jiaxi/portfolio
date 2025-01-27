"use client"
import NavMenu from "./NavMenu";
import "./NavBar.css";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react';
import _debounce from "lodash/debounce";

export default function NavBar() {
  const [animation, setAnimation] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  // const [scrollPosition, setScrollPosition] = useState(0);
  const router = useRouter();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();    
    window.dispatchEvent(new CustomEvent('urlChange', { detail: { tag: 'all' } }));
    window.history.pushState(null, '', '/');
    router.push('/');
  };

  useEffect(() => {
    const handleScroll = _debounce(() => {
    const currentPosition = window.scrollY;
    if (currentPosition > 150) {
      setAnimation("fadeIn");
    } else {
      setAnimation("fadeOut");
    }
    }, 100);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, []);

  useEffect(() => {
    const handleResize = _debounce(() => {;
      setIsMobile(window.innerWidth <= 640)
    }, 100);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      handleResize.cancel();
    };
  }, []);

  return (
    <div 
      className="sticky top-0 z-50 px-8 bg-transparent" 
      style={{
        animation: isMobile ? `${animation} 0.5s ease forwards` : '',
      }}
    >
      <nav className="flex flex-col sm:flex-row gap-1 sm:gap-0 items-center sm:justify-between sm:items-stretch py-3 2xl:mt-2">
        <Link 
          href={'/'} 
          onClick={handleLogoClick} 
          className="flex items-center gap-2 2xl:gap-4 font-medium hover:no-underline sm:py-1.5 sm:px-4 sm:rounded-full 2xl:py-2.5 2xl:px-6"
          style={{animation: isMobile ? '' : `${animation} 0.5s ease forwards`}}
        >
          <Image
              src="/images/logo.svg" 
              alt="Logo"
              width={1920}
              height={1080}
              className="object-cover w-10 bg-transparent"
              unoptimized
            />
          <span className="pb-0.5 2xl:pt-0.5 2xl:text-[1vw] self-center">Jiaxi Tang</span>
        </Link>
        <div 
          className="sm:py-2 sm:px-6 2xl:px-7 sm:rounded-full flex items-center"
          style={{animation: isMobile ? '' : `${animation} 0.5s ease forwards`}}
        >
          <NavMenu isVertical={false}/>
        </div>
      </nav>
    </div>
  )
}
