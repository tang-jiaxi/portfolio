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

  // const handleProjectNavClick = () => (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   incrementRef.current += 1;
  //   setFilter(`${incrementRef.current}`);
  //   if (pathname != '/') {
  //     router.push('/');
  //   }
  // }


  //filter in nav bar using context
  {/* <a href="/" onClick={handleNavClick('UX')} className={`2xl:text-[1vw] hover:underline text-base ${isVertical ? `md:mb-0` : `md:mb-0.5`}`}>UI/UX</a>
  <a href="/" onClick={handleNavClick('CS')} className={`2xl:text-[1vw] hover:underline text-base ${isVertical ? `md:mb-0` : `md:mb-0.5`}`}>Programming</a>
  <a href="/" onClick={handleNavClick('GDES')} className={`2xl:text-[1vw] hover:underline text-base ${isVertical ? `md:mb-0` : `md:mb-0.5`}`}>Graphics</a> */}
  {/* <a href="gallery" className={`2xl:text-[1vw] hover:underline text-base align-middle ${isVertical ? `md:mb-0` : `md:mb-0.5`}`}>Gallery</a>
  <a href="resume" className={`2xl:text-[1vw] hover:underline text-base align-middle ${isVertical ? `md:mb-0` : `md:mb-0.5`}`}>Resume</a> */}

  return (
    <div className={`flex flex-wrap justify-center gap-y-2 ${isVertical ? 'flex-col space-y-2 2xl:space-y-6 text-center' : 'flex-row gap-4 lg:mb-[5px] 2xl:gap-7 2xl:mb-1.5'}`}>
      <a href="/" onClick={handleNavClick('ShowAll')} className={`2xl:text-[1vw] hover:underline text-base align-middle ${isVertical ? `md:mb-0` : `sm:mt-0.5`}`}>Projects</a>
      <a href="exploration" className={`2xl:text-[1vw] hover:underline text-base align-middle ${isVertical ? `md:mb-0` : `sm:mt-0.5`}`}>Exploration</a>
      <a href="resume" className={`2xl:text-[1vw] hover:underline text-base align-middle ${isVertical ? `md:mb-0` : `sm:mt-0.5`}`}>Resume</a>
    </div>
  )
}