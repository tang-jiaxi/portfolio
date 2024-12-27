import React from 'react';
import CasestudyImages from '@/components/CasestudyImages';
import CasestudyNav from '@/components/CasestudyNav';
import MatterSvgIcons from '@/components/MatterSVGIcons';
import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SASE',
};

const SaseImages1 = [
  'row-1-column-1.png',
  'row-2-column-1.png',
  'row-3-column-1.png',
  'row-4-column-1.png',
  'row-5-column-1.png',
  'row-6-column-1.png',
  'row-7-column-1.png',
];

const SaseImages2 = [
  'row-8-column-1.png',
  'saseOpenPDF.mp4',
  'row-10-column-1.png',
  'saseFilter.mp4',
  'row-12-column-1.png',
  'saseResponsiveDesign.mp4',
  'row-14-column-1.png',
  'row-15-column-1.png',
  'row-16-column-1.png',
];

const SasePage = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-[200px] bg-blue-sase z-0"></div>
      <Image 
        src='/images/saseCover.png' 
        alt='SASE Case Study Cover' 
        layout="responsive" 
        width={1920}       
        height={1080}     
        className="object-cover relative w-full h-auto mx-auto"
        unoptimized
      />
      <CasestudyImages 
        mediaItems={SaseImages1}
        imageDir="sase" 
      />
      <div>
        <p className="text-xs md:text-lg mx-[12vw]">
          Check out a live version of the{' '} 
          <a 
            href="https://tang-jiaxi.github.io/saseTalentNetwork/" 
            target="_blank" 
            className="text-red-dark underline"
          >
            website
          </a>{' '}
          with dummy values or the{' '} 
          <a 
            href="https://github.com/tang-jiaxi/saseTalentNetwork" 
            className="text-red-dark underline"
          >
          GitHub repository
          </a>
          .        
        </p>      
      </div>
      <CasestudyImages 
        mediaItems={SaseImages2}
        imageDir="sase" 
      />
      <CasestudyNav
        index={4}
      />
      <div className="z-30 w-full h-[39vh] overflow-hidden relative">
        <p className="font-sans text-gray-400 absolute pl-4 lg:pl-16 top-1/3 text-sm -z-10">Drag and drop the logos for some fun!</p>
        <MatterSvgIcons isHeader={false}/>
      </div>
    </div>
  );
};

export default SasePage;
