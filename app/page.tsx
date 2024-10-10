import React from 'react';
import Filter from '@/components/Filter';
import MatterSvgIcons from '@/components/MatterSVGIcons';
import Image from 'next/image';
import MovingLines from '@/components/MovingLines';

const Home = () => {
  return (
    <div className="flex flex-col gap-0 w-full h-auto mx-auto relative">

      <div className="relative grid grid-rows-1 grid-cols-1 w-full overflow-hidden mx-auto h-[100vh]  bg-red-light">
        <div className="z-10">
          <Image
            src="/images/heroImage.png"
            alt="Hero Image"
            objectFit="cover"
            height={900}
            width={1440}
            className="w-[100vw] overflow-hidden"
            priority
          />
        </div>

        <div className="z-30 w-full">
          <MatterSvgIcons header={true}/>
        </div>

        <div className="z-0  h-full">
          <MovingLines />
        </div>
      </div>
      
      <div className="w-full bg-red-light pb-20">
        <Filter />
      </div>
      <p className="text-center text-2xl font-bold w-full bg-red-light"> that's all! </p>
      <p className="text-center text-xl bg-red-light w-full"> you've reached the end :) </p>
      <div>
        <Image
          src="/images/bottomWave.svg"
          alt="Drippy decoration"
          width={1440}
          height={200}
          className="w-[100vw] mx-auto overflow-hidden"
        />
      </div>
    </div>
  );
};

export default Home;
