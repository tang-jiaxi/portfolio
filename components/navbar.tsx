import { Avatar, AvatarImage } from "@/components/ui/avatar"
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
import Link from 'next/link';

const baseUrl = process.env.BASE_URL

export default function NavBar() {
  return (
    <div className="sticky top-0 z-50 bg-transparent font-sans px-8">
      <nav className="flex justify-between items-center p-4">
        <Link href={baseUrl || '#'} passHref className="flex items-center space-x-2">
          <Avatar>
            <AvatarImage src="images/logo.png" alt="Logo" />
          </Avatar>
          <span className="text-xl font-semibold">Jiaxi Tang</span>
        </Link>

        <NavigationMenu>
          <NavigationMenuList className="flex space-x-4 font-sans">
            <NavigationMenuItem>
              <NavigationMenuLink href="uiux">UI/UX</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="coding">Coding</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="graphics">Graphics</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink href="resume">Resume</NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </nav>
    </div>
  )
}
