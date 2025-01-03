"use client"

import { FilterContext } from "@/components/FilterContext";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import { GoogleAnalytics } from "@next/third-parties/google";
import { useState } from "react";

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [filter, setFilter] = useState<string>("ShowAll");

  return (
    <div className="flex flex-col min-h-screen">
      <FilterContext.Provider value={{filter, setFilter}}>
        <NavBar/>
        <div className={`flex-grow`}>{children}</div> {/* Main content */}
        <GoogleAnalytics gaId="G-45D1ZXXTF2"/>
        <Footer/>
      </FilterContext.Provider>
    </div>
  );
};


