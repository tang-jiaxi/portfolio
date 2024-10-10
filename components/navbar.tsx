"use client"
import Link from 'next/link';
import Image from 'next/image';
import NavMenu from "./NavMenu";

export default function NavBar() {
  return (
    <div className="sticky top-0 z-50 bg-transparent font-sans px-8">
      <nav className="flex flex-col sm:flex-row gap-1 sm:gap-0 justify-between items-center p-4">
        <Link href={'/'} passHref className="flex items-center space-x-2">
          <Image
              src="/images/logo.png" 
              alt="Logo"
              width={1920}
              height={1080}
              loading="lazy"
              className="object-cover w-10 bg-transparent"
            />
          <span className="text-xl font-semibold">Jiaxi Tang</span>
        </Link>
        <NavMenu isVertical={false} />
      </nav>
    </div>
  )
}
