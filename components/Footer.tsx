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
    router.push('/');
  };

  return (
    <>
    <div className={`w-full mx-auto px-4 lg:px-16 py-8 md:pb-[4vh] md:mt-0 flex flex-row gap-8 justify-between overflow-hidden ${isMainPage ? 'bg-white' : `bg-red-light`}`}>

      <Link href={'/'} onClick={handleLogoClick} className="flex flex-col footer:flex-row basis-[30%] footer:basis-auto justify-center items-center gap-2 min-w-fit font-medium">
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

      <div className="flex flex-col mx-auto basis-[30%] footer:basis-auto">
        <NavMenu isVertical={true} />
      </div>

      <div className="hidden md:flex flex-col justify-center mx-auto">
        <h3 className="text-black">I hope you enjoyed your visit!</h3>
        <h4>© Designed and developed with care by Jiaxi Tang.</h4>
      </div>

      <div className="grid grid-cols-1 footer:grid-cols-2 lg:grid-cols-4 gap-y-0 footer:gap-4 basis-[30%] footer:basis-auto align-middle items-center min-w-fit">
        <a href="https://www.linkedin.com/in/jiaxi--tang/" target="_blank" rel="noopener noreferrer" className="w-fit justify-self-end">
          <FaLinkedin className="sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
        </a>
        <a href="https://github.com/tang-jiaxi" target="_blank" rel="noopener noreferrer" className="w-fit justify-self-end">
          <FaGithub className="sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
        </a>
        <a href="https://www.behance.net/jiaxi_tang" target="_blank" rel="noopener noreferrer" className="w-fit justify-self-end">
          <FaBehance className="sm:w-10 sm:h-10 lg:w-12 lg:h-12" />
        </a>
        <a href="mailto:jt.jiaxitang@gmail.com" className="w-fit justify-self-end">
          <FaEnvelope className="sm:w-10 sm:h-10 lg:w-12 lg:h-12"/>
        </a>
      </div>
    </div>

    <div className={`md:hidden flex-col justify-center items-center text-center pb-8 ${isMainPage ? 'bg-white' : `bg-red-light`}`}>
      <h3 className="text-black">I hope you enjoyed your visit!</h3>
      <h4 className="px-4">© Designed and developed with care by Jiaxi Tang.</h4>
    </div>
    </>
  );
}
