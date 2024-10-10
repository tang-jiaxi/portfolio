"use client"
import { FaLinkedin, FaGithub, FaBehance, FaEnvelope } from 'react-icons/fa'; 
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import NavMenu from './NavMenu';

const baseUrl = process.env.BASE_URL

export default function Footer() {
  const pathname = usePathname(); 
  const isMainPage = pathname === '/';

  return (
    <div className={`w-full px-4 lg:px-16 pb-8 md:pb-2 pt-8 md:pt-0 flex flex-row justify-between gap-4 sm:gap-8 max-w-[100vw] ${isMainPage ? 'bg-white' : `bg-red-light`}`}>

        <Link href={baseUrl || '#'} passHref className="flex justify-center items-center">
          <Image
                src="/images/logo.png" 
                alt="Logo"
                width={1920}
                height={1080}
                loading="lazy"
                className="object-cover max-w-[20vw]"
              />
          <span className="text-2xl font-semibold">Jiaxi Tang</span>
        </Link>

      <div className="flex flex-col">
        <NavMenu isVertical={true} />
      </div>

      <div className="hidden md:flex justify-center items-center">
        <p className="text-xl font-sans mx-auto">I hope you enjoyed your visit!</p>
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
  );
}
