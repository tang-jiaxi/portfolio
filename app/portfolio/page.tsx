import React from 'react';
import CasestudyImages from '@/components/CasestudyImages';
import CasestudyNav from '@/components/CasestudyNav';
import MatterSvgIcons from '@/components/MatterSVGIcons';
import Image from 'next/image';

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio',
};

const PortfolioImages1 = [
  'row-1-column-1.png',
  'row-2-column-1.png',
  'row-3-column-1.png',
  'row-4-column-1.png',
  'row-5-column-1.png',
  'row-6-column-1.png',
  'row-7-column-1.png',
  'row-8-column-1.png',
  'row-9-column-1.png',
];

const PortfolioImages2 = [
  'row-10-column-1.png',
  'row-11-column-1.png',
];

const PortfolioPage = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-[200px] bg-red-light z-0"></div>
      <Image 
        src='/images/portfolioCover.png' 
        alt='Portfolio Case Study Cover' 
        layout="responsive" 
        width={1920}       
        height={1080}     
        className="object-cover relative w-full h-auto mx-auto"
        unoptimized
      />
      <CasestudyImages 
        mediaItems={PortfolioImages1}
        imageDir="portfolio" 
      />
      <div>
        <p className="text-xs md:text-lg ml-[50vw]">
          Here&apos;s the{' '}
          <a 
            href="https://github.com/tang-jiaxi/portfolio" 
            className="text-red-dark underline"
          >
          GitHub repository
          </a>
          {' '}too.        
        </p>      
      </div>
      <CasestudyImages 
        mediaItems={PortfolioImages2}
        imageDir="portfolio" 
      />
      <CasestudyNav
        index={3}
      />
      <div className="z-30 w-full h-[39vh] overflow-hidden relative">
        <p className="font-sans text-gray-400 absolute pl-4 lg:pl-16 top-1/3 text-sm -z-10">Drag and drop the logos for some fun!</p>
        <MatterSvgIcons isHeader={false}/>
      </div>
    </div>
  );
};

export default PortfolioPage;
