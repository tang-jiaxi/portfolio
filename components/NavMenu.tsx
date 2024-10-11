"use client"

import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
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
    <NavigationMenu>
      <NavigationMenuList className={`flex ${isVertical ? 'flex-col space-y-2' : 'flex-row space-x-4'} font-sans`}>
        <NavigationMenuItem>
          <NavigationMenuLink href="/" onClick={handleNavClick('UX')} className="text-sm md:text-lg hover:underline">UI/UX</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/" onClick={handleNavClick('CS')} className="text-sm md:text-lg hover:underline">Coding</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="/" onClick={handleNavClick('GDES')} className="text-sm md:text-lg hover:underline">Graphic</NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink href="resume" className="text-sm md:text-lg hover:underline">Resume</NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}