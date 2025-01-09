"use client"

import { useContext, useRef } from "react"
import { FilterContext } from './FilterContext';
import { usePathname, useRouter } from "next/navigation";

interface NavMenuProps {
  isVertical: boolean;
}

export default function NavMenu({ isVertical = false }: NavMenuProps) {
  const { setFilter } = useContext(FilterContext);
  const incrementRef = useRef(0);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = (tag: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    incrementRef.current += 1;
    const tagIncrement = `${tag}#${incrementRef.current}`; //force scrolling useEffect in Filter
    setFilter(tagIncrement);
    if (pathname != '/') {
      router.push('/');
    }
  }

  return (
    <div className={`flex flex-wrap justify-center gap-y-2 ${isVertical ? 'flex-col space-y-2 text-center' : 'flex-row gap-4'}`}>
      <a href="/" onClick={handleNavClick('UX')} className={`hover:underline text-base ${isVertical ? `md:mb-0` : `md:mb-0.5`}`}>UI/UX</a>
      <a href="/" onClick={handleNavClick('CS')} className={`hover:underline text-base ${isVertical ? `md:mb-0` : `md:mb-0.5`}`}>Programming</a>
      <a href="/" onClick={handleNavClick('GDES')} className={`hover:underline text-base ${isVertical ? `md:mb-0` : `md:mb-0.5`}`}>Graphics</a>
      <a href="resume" className={`hover:underline text-base align-middle bg-red-light border border-black pb-1 pt-0.5 rounded-full -translate-y-0.5 px-2 ${isVertical ? `md:mb-0` : `md:mb-0.5`}`}>Resume</a>
    </div>
  )
}