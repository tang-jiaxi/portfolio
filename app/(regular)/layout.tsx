"use client"
import { useEffect, useRef, useState } from 'react';
import MatterSvgIcons from '../../components/MatterSVGIcons';
import '../globals.css'; 
import _debounce from "lodash/debounce";

interface RegularLayoutProps {
  children: React.ReactNode;
}

export default function CasestudyLayout({ children }: RegularLayoutProps) {
  const isFirstMount = useRef(true);
  const [resizeKey, setResizeKey] = useState(0);
  
  useEffect(() => {
    const handleResize = _debounce(() => {
      if (isFirstMount.current) {
        isFirstMount.current = false;
        return;
      }
      setResizeKey((prevKey) => prevKey + 1);
    }, 100);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      handleResize.cancel();
    };
  }, []);
    
  return (
    <>
      {children}
      <div key={resizeKey} className="z-30 w-full overflow-hidden relative">
        <MatterSvgIcons isHeader={false}/>
      </div>
    </>
  )
}