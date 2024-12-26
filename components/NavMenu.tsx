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
    <div className={`flex ${isVertical ? 'flex-col space-y-2 text-center' : 'flex-row gap-4'}`}>
        <a href="/" onClick={handleNavClick('UX')} className="text-base">UI/UX</a>
        <a href="/" onClick={handleNavClick('CS')} className="text-base">Programming</a>
        <a href="/" onClick={handleNavClick('GDES')} className="text-base">Graphics</a>
        <a href="resume" className="hover:underline text-base">Resume</a>
    </div>
  )
}