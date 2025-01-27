"use client"

import { FilterContext } from "@/components/FilterContext";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { clarity } from 'react-microsoft-clarity';
import { v4 as uuidv4 } from 'uuid';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [filter, setFilter] = useState<string>("ShowAll");
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);

  useEffect(() => {
    clarity.init('q0d1vuex7f');
    let userId = localStorage.getItem('userId');
    
    if (!userId) {
      userId = uuidv4();
      localStorage.setItem('userId', userId);
    } 
  
    if (clarity.hasStarted()) {
      clarity.identify('USER_ID', { userId });
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <FilterContext.Provider value={{filter, setFilter}}>
        <NavBar/>
        <div className={`flex-grow`}>{children}</div> {/* Main content */}
        <Footer/>
      </FilterContext.Provider>
    </div>
  );
};


