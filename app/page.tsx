import React from 'react';
import Filter from '@/components/Filter';
import MatterSvgIcons from '@/components/MatterSVGIcons';
import Image from 'next/image';
import MovingLines from '@/components/MovingLines';

const Home = () => {
  return (
    <div className="flex flex-col gap-0 w-full h-auto mx-auto relative">

      <div className="relative w-full overflow-hidden mx-auto">
        <div className="z-10">
          <Image
            src="/images/heroImage.svg"
            alt="Hero Image"
            height={900}
            width={1440}
            className="w-[100vw] overflow-hidden object-cover"
            priority
          />
        </div>
        <div className="absolute inset-x-0 -bottom-[20vh] lg:bottom-0 z-20">
          <MatterSvgIcons header={true}/>
        </div>
        <div className="absolute inset-0 -z-10 h-full">
          <MovingLines />
        </div>
      </div>
      
      <div className="w-full bg-red-light pb-20">
        <Filter />
      </div>
      <p className="text-center text-2xl font-bold w-full bg-red-light"> that&apos;s all! </p>
      <p className="text-center text-xl bg-red-light w-full"> you&apos;ve reached the end :) </p>
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
