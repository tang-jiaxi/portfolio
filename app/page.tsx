'use client';
import './globals.css'; 
import React, { useEffect, useRef, useState } from 'react';
import FilterBar from '@/components/FilterBar';
import ProjectList from '@/components/ProjectList';
import MatterSvgIcons from '@/components/MatterSVGIcons';
import Image from 'next/image';
import heroImage from '../public/images/heroImage.svg';
import bottomWave from '../public/images/bottomWave.svg';
import MovingLines from '@/components/MovingLines';
import _debounce from "lodash/debounce";

const Home = () => {
  const [resizeKey, setResizeKey] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const isFirstMount = useRef(true);

  const underlineStyle = {
    textDecoration: "underline",
    textDecorationThickness: "clamp(0.155rem, 0.25vw, 0.25vw)",
    textDecorationColor: "#DD5868",
    textUnderlineOffset: "clamp(0.3rem, 0.55vw, 0.55vw)",
  };

  useEffect(() => {
    const handleResize = _debounce(() => {
      if (isFirstMount.current) {
        isFirstMount.current = false;
        return;
      }
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
          src={heroImage}
          alt="Hero Image"
          className="z-10 invisible inter:visible object-cover"
        />

        {/* Text */}
        <div className="absolute inset-0 z-30 mx-auto inter:ml-[8vw] md:ml-[10vw] lg:ml-[11vw] mt-[3vh] inter:mt-[3vh] md:mt-[6vh] lg:mt-[12vh] max-w-[90vw] h-fit pointer-events-none">
          <h1 className="font-bold lg:text-[2.75vw] lg:leading-[3.9vw]">
            Hi, I&apos;m Jiaxi Tang!<br/>
            UX Designer. UI Engineer.
          </h1>
          <h2 className="pt-4 text-black font-normal md:pt-6 text-base md:text-lg lg:text-[1.6vw] lg:leading-[2.5vw] inter:max-w-[55vw] md:max-w-[45vw] lg:max-w-[40vw]">
            I&apos;m pursuing a <span style={underlineStyle}> dual degree in Computer Science and
            Graphic Design with a minor in UX Design.</span> Passionate about building objectively awesome solutions!
          </h2>
          <h4 className="mt-[20vh] md:mt-[15vh] z-0">Drag and drop the logos for some fun!</h4>
        </div>

        <div key={resizeKey} className="absolute z-20 bottom-0">
          <MatterSvgIcons isHeader={true} isMobile={isMobile}/>
        </div>

        <div className="absolute inset-0 -z-10 w-full">
          <MovingLines/>
        </div>
      </div>
      
      <div className="w-full bg-red-light flex flex-col gap-16 pb-16">
        <FilterBar/>
        <ProjectList/>
      </div>

      <h2 className="text-center w-full bg-red-light text-black"> That&apos;s all! </h2>
      <h2 className="text-center w-full bg-red-light text-black font-normal pb-4"> You&apos;ve reached the end :) </h2>
      
      <div>
        <Image
          src={bottomWave}
          alt="Drippy decoration"
          className="w-[100vw] mx-auto overflow-hidden"
        />
      </div>
    </div>
  );
};

export default Home;

