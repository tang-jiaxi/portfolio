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
    <>
    <div className={`w-full mx-auto px-4 lg:px-16 my-8 md:mb-[4vh] md:mt-0 flex flex-row gap-8 justify-between ${isMainPage ? 'bg-white' : `bg-red-light`}`}>

      <Link href={'/'} onClick={handleLogoClick} className="flex basis-[30%] md:basis-auto justify-center items-center gap-2 min-w-fit font-medium">
        <Image
              src="/images/logo.svg" 
              alt="Logo"
              width={0}
              height={0}
              className="object-cover max-w-[10vw]"
              unoptimized
            />
        Jiaxi Tang
      </Link>

      <div className="flex flex-col mx-auto basis-[30%] md:basis-auto">
        <NavMenu isVertical={true} />
      </div>

      <div className="hidden md:flex flex-col justify-center mx-auto">
        <h3 className="text-black">I hope you enjoyed your visit!</h3>
        <h4> This website was made with React.js, Next.js, Tailwind, Javascript, Typescript, Matter.js, and ShadCN/UI library.</h4>
      </div>

      <div className="flex flex-row gap-4 justify-between items-center basis-[30%] md:basis-auto">
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

    <div className={`md:hidden flex-col justify-center items-center text-center pb-8 ${isMainPage ? 'bg-white' : `bg-red-light`}`}>
      <h3 className="text-black">I hope you enjoyed your visit!</h3>
      <h4 className="px-4">This website was made with React.js, Next.js, Tailwind, Javascript, Typescript, Matter.js, and ShadCN/UI library.</h4>
    </div>
    </>
  );
}
