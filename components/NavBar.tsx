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
    if (currentPosition > window.innerHeight) {
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

  return (
    <div 
      className="sticky top-0 z-50 px-8 bg-transparent" 
      style={{
        animation: `${animation} 0.5s ease forwards`,
      }}
    >
      <nav className="flex flex-col sm:flex-row gap-1 sm:gap-0 justify-between items-center py-3">
        <Link href={'/'} onClick={handleLogoClick} className="flex items-center gap-2 font-medium hover:no-underline">
          <Image
              src="/images/logo.svg" 
              alt="Logo"
              width={1920}
              height={1080}
              className="object-cover w-10 bg-transparent"
              unoptimized
            />
          <span className="pb-0.5">Jiaxi Tang</span>
        </Link>
        <NavMenu isVertical={false} />
      </nav>
    </div>
  )
}
