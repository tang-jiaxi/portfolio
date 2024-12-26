
import React from 'react';
import CasestudyImages from '@/components/CasestudyImages';
import CasestudyNav from '@/components/CasestudyNav';
import MatterSvgIcons from '@/components/MatterSVGIcons';
import Image from 'next/image';

const WtlPage = () => {
  return (
    <div>
      <Image 
        src='/images/wtlCover.png' 
        alt='Wtl Case Study Cover' 
        layout="responsive" 
        width={1920}       
        height={1080}     
        className="object-cover relative w-full h-auto mx-auto"
        unoptimized
      />
      <CasestudyImages 
        imageDir="/wtl" 
      />
      <CasestudyNav
        index={1}
      />
      <div className="z-30 w-full h-[39vh] overflow-hidden relative">
        <p className="font-sans text-gray-400 absolute pl-4 lg:pl-16 top-1/3 text-sm -z-10">Drag and drop the logos for some fun!</p>
        <MatterSvgIcons isHeader={false}/>
      </div>
    </div>
  );
};

export default WtlPage;
