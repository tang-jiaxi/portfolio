'use client';
import './globals.css'; 
import React, { useEffect, useState } from 'react';
import Filter from '../components/Filter';
import MatterSvgIcons from '@/components/MatterSVGIcons';
import Image from 'next/image';
import MovingLines from '@/components/MovingLines';
import _debounce from "lodash/debounce";

const Home = () => {
  const [resizeKey, setResizeKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  const underlineStyle = {
    textDecoration: "underline",
    textDecorationThickness: "clamp(0.155rem, 0.25vw, 0.25vw)",
    textDecorationColor: "#DD5868",
    textUnderlineOffset: "clamp(0.3rem, 0.55vw, 0.55vw)",
  };

  useEffect(() => {
    const handleResize = _debounce(() => {
      setResizeKey((prevKey) => prevKey + 1);
      setIsMobile(window.innerWidth <= 600)
    }, 100);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      handleResize.cancel();
    };
  }, []);

  return (
    <div className="flex flex-col gap-0 w-full h-auto mx-auto">

      <div className="relative z-10 w-full h-[60vh] inter:h-auto overflow-hidden">
        <Image
          src="/images/heroImagePC.svg"
          alt="Hero Image"
          width={500}
          height={500}
          className="z-10 invisible inter:visible object-cover"
        />

        {/* Text */}
        <div className="absolute inset-0 z-30 mx-auto inter:ml-[8vw] md:ml-[10vw] lg:ml-[11vw] mt-[3vh] inter:mt-[3vh] md:mt-[6vh] lg:mt-[12vh] max-w-[90vw] h-fit pointer-events-none">
          <h1 className="font-bold lg:text-[2.75vw] lg:leading-[3.9vw]">
            Hi, I’m Jiaxi Tang!<br/>
            UX Designer. UI Engineer.
          </h1>
          <p className="pt-4 md:pt-6 lg:text-[1.6vw] lg:leading-[2.5vw] inter:max-w-[55vw] md:max-w-[45vw] lg:max-w-[40vw]">
            I’m pursuing a <span style={underlineStyle}> dual degree in Computer Science and
            Graphic Design with a minor in UX Design.</span> Currently the
            President of design consultancy club, Design U!
          </p>
        </div>

        <div key={resizeKey} className="absolute z-20 bottom-0">
          <MatterSvgIcons isHeader={true} isMobile={isMobile}/>
        </div>

        <div className="absolute inset-0 -z-10 w-full">
          <MovingLines/>
        </div>
      </div>
      
      <div className="w-full bg-red-light pb-16">
        <Filter />
      </div>

      <h2 className="text-center w-full bg-red-light text-black"> That&apos;s all! </h2>
      <h2 className="text-center w-full bg-red-light text-black font-normal pb-4"> You&apos;ve reached the end :) </h2>
      
      <div>
        <Image
          src="/images/bottomWave.svg"
          alt="Drippy decoration"
          width={1440}
          height={200}
          className="w-[100vw] mx-auto overflow-hidden"
          unoptimized
        />
      </div>
    </div>
  );
};

export default Home;

