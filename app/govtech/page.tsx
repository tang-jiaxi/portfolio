
import React from 'react';
import CasestudyImages from '@/components/CasestudyImages';
import CasestudyNav from '@/components/CasestudyNav'
import MatterSvgIcons from '@/components/MatterSVGIcons';
import Image from 'next/image';

const GovTechPage = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-[200px] bg-green-govtech z-0"></div>
      <Image 
        src='/images/govtechCover.png' 
        alt='Govtech Case Study Cover' 
        layout="responsive" 
        width={1920}       
        height={1080}     
        className="object-cover relative w-full h-auto mx-auto"
        unoptimized
      />
      <CasestudyImages 
        imageDir="govtech" 
      />
      <CasestudyNav
        index={0}
      />
      <div className="z-30 w-full h-[39vh] overflow-hidden relative">
        <p className="font-sans text-gray-400 absolute pl-4 lg:pl-16 top-1/3 text-sm -z-10">Drag and drop the logos for some fun!</p>
        <MatterSvgIcons isHeader={false}/>
      </div>
    </div>
  );
};

export default GovTechPage;
