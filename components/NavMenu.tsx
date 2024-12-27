"use client"

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from "react"

interface NavMenuProps {
  isVertical: boolean;
}

export default function NavMenu({ isVertical = false }: NavMenuProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleNavClick = (tag: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const newPath = `/?tag=${tag}`;
    
    if (pathname === '/') {
      window.history.pushState(null, '', newPath);
      window.dispatchEvent(new CustomEvent('urlChange', { detail: { tag } }))
    } else {
      router.push(newPath);
    }
  }

  useEffect(() => {
    if (pathname === '/' && window.location.search.includes('tag=')) {
      const urlParams = new URLSearchParams(window.location.search)
      const tag = urlParams.get('tag')
      if (tag) {
        window.dispatchEvent(new CustomEvent('urlChange', { detail: { tag } }))
      }
    }
  }, [pathname])

  return (
    <div className={`flex flex-wrap justify-center gap-y-0 ${isVertical ? 'flex-col space-y-2 text-center' : 'flex-row gap-4'}`}>
        <a href="/" onClick={handleNavClick('UX')} className={`hover:underline text-base ${isVertical ? `md:pb-0` : `md:pb-0.5`}`}>UI/UX</a>
        <a href="/" onClick={handleNavClick('CS')} className={`hover:underline text-base ${isVertical ? `md:pb-0` : `md:pb-0.5`}`}>Programming</a>
        <a href="/" onClick={handleNavClick('GDES')} className={`hover:underline text-base ${isVertical ? `md:pb-0` : `md:pb-0.5`}`}>Graphics</a>
        <a href="resume" className={`hover:underline text-base ${isVertical ? `md:pb-0` : `md:pb-0.5`}`}>Resume</a>
    </div>
  )
}