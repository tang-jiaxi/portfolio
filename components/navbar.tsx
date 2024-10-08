import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import Link from 'next/link';
import Image from 'next/image';

const baseUrl = process.env.BASE_URL

export default function NavBar() {
  return (
    <div className="sticky top-0 z-50 bg-transparent font-sans px-8">
      <nav className="flex justify-between items-center p-4">
        <Link href={'/'} passHref className="flex items-center space-x-2">
          <Image
              src="/images/logo.png" 
              alt="Logo"
              layout="responsive"
              width={1920}
              height={1080}
              loading="lazy"
              className="object-cover max-w-[5vw] bg-transparent"
            />
          <span className="text-xl font-semibold">Jiaxi Tang</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4 font-sans">
            <NavigationMenuItem>
              <NavigationMenuLink href="uiux" className="hover:underline">UI/UX</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="coding" className="hover:underline">Coding</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="graphics" className="hover:underline">Graphics</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="resume" className="hover:underline">Resume</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  )
}
