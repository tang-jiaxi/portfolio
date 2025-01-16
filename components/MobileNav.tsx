import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import NavMenu from "./NavMenu";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import "./NavBar.css";

interface MobileNavProps {
  animation: string
}

export const MobileNav: React.FC<MobileNavProps> = ({animation}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={handleMenuClick}>
      <DropdownMenuTrigger>
        <button
          className={`p-2 rounded-xl hover:bg-red-light focus:outline-none ${isOpen ? 'bg-red-light' : ''}`}
          style={{animation: `${animation} 0.5s ease forwards`}}
        >
          {isOpen ? <HiOutlineX className="w-6 h-6" /> : <HiOutlineMenu className="w-6 h-6" />}
        </button>
      </DropdownMenuTrigger>

      {/* Dropdown Content */}
      <DropdownMenuContent>
        <DropdownMenuItem onClick={handleToggle} className="mt-2 mr-2 px-4 pt-3 pb-4 bg-red-light rounded-xl">
          <NavMenu isVertical={true}/>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
