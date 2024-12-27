import React from 'react';
import CasestudyImages from '@/components/CasestudyImages';
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
    </div>
  );
};

export default SasePage;
