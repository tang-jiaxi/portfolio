"use client"
import { FaLinkedin, FaGithub, FaBehance, FaEnvelope } from 'react-icons/fa'; 
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import NavMenu from './NavMenu';

export default function Footer() {
  const pathname = usePathname(); 
  const isMainPage = pathname === '/';

  const router = useRouter();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();    
    window.dispatchEvent(new CustomEvent('urlChange', { detail: { tag: 'all' } }));
    window.history.pushState(null, '', '/');
    router.push('/');
  };

  return (
    <div>
    <div className={`w-full px-4 lg:px-16 pb-8 md:pb-[4vh] pt-8 md:pt-0 flex flex-row gap-4 sm:gap-8 max-w-[100vw] ${isMainPage ? 'bg-white' : `bg-red-light`}`}>

        <Link href={'/'} onClick={handleLogoClick} className="flex justify-center items-center">
          <Image
                src="/images/logo.svg" 
                alt="Logo"
                width={1920}
                height={1080}
                className="object-cover max-w-[10vw]"
                unoptimized
              />
          <span className="text-2xl text-center font-semibold">Jiaxi Tang</span>
        </Link>

      <div className="flex flex-col mx-auto">
        <NavMenu isVertical={true} />
      </div>

      <div className="hidden md:flex flex-col justify-center items-center lg:max-w-[25vw] mx-auto">
        <p className="text-xl text-center font-sans mx-auto">I hope you enjoyed your visit!</p>
        <p className="text-xs md:text-sm text-gray-400 font-sans text-center mx-auto"> This website was made with React, Next.js, Tailwind, Javascript, Typescript, Matter.js, and ShadCN/UI library.</p>
      </div>

      <div className="flex justify-center items-center gap-3 md:gap-6">
        <a href="https://www.linkedin.com/in/jiaxi--tang/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
        </a>
        <a href="https://github.com/tang-jiaxi" target="_blank" rel="noopener noreferrer">
          <FaGithub className="sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
        </a>
        <a href="https://www.behance.net/jiaxi_tang" target="_blank" rel="noopener noreferrer">
          <FaBehance className="sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
        </a>
        <a href="mailto:jt.jiaxitang@gmail.com">
          <FaEnvelope className="sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
        </a>
      </div>
    </div>
      <div className={`md:hidden flex-col justify-center items-center pb-8 ${isMainPage ? 'bg-white' : `bg-red-light`}`}>
        <p className="text-lg text-center font-sans mx-auto">I hope you enjoyed your visit!</p>
        <p className="text-xs md:text-sm text-gray-400 font-sans text-center mx-[4vw]"> This website was made with React, Next.js, Tailwind, Javascript, Typescript, Matter.js, and ShadCN/UI library.</p>
      </div>
    </div>
  );
}
