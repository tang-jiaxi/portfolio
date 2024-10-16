"use client"
import Link from 'next/link';
import Image from 'next/image';
import NavMenu from "./NavMenu";
import { useRouter } from 'next/navigation'

export default function NavBar() {
  const router = useRouter();

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();    
    window.dispatchEvent(new CustomEvent('urlChange', { detail: { tag: 'all' } }));
    window.history.pushState(null, '', '/');
    router.push('/');
  };

  return (
    <div className="sticky top-0 z-50 bg-transparent font-sans px-8">
      <nav className="flex flex-col sm:flex-row gap-1 sm:gap-0 justify-between items-center p-4">
        <Link href={'/'} onClick={handleLogoClick} className="flex items-center space-x-2">
          <Image
              src="/images/logo.svg" 
              alt="Logo"
              width={1920}
              height={1080}
              className="object-cover w-10 bg-transparent"
              unoptimized
              priority
            />
          <span className="text-xl text-center font-semibold">Jiaxi Tang</span>
        </Link>
        <NavMenu isVertical={false} />
      </nav>
    </div>
  )
}
