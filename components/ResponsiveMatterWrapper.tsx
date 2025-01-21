"use client"

import { useEffect, useRef, useState } from "react";
import _debounce from "lodash/debounce";
import MatterSvgIcons from "@/components/MatterSVGIcons";

interface ResponsiveMatterWrapperProps {
  isHeader: boolean;
}

export default function ResponsiveMatterWrapper({ isHeader }: ResponsiveMatterWrapperProps) {
  const [resizeKey, setResizeKey] = useState(0);
  const isFirstMount = useRef(true);

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
    <div key={resizeKey} className="z-30 w-full relative">
      <MatterSvgIcons isHeader={isHeader}/>
    </div>
  );
};


