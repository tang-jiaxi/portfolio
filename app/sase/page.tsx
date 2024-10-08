import React from 'react';
import CasestudyImages from '@/components/CasestudyImages';
import CasestudyNav from '@/components/CasestudyNav';

const SaseImages = [
  'row-1-column-1.png',
  'row-2-column-1.png',
  'row-3-column-1.png',
  'row-4-column-1.png',
  'row-5-column-1.png',
  'row-6-column-1.png',
  'row-7-column-1.png',
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
      <div className="absolute top-0 left-0 w-full h-[500px] bg-blue-radiok z-0"></div>
      <CasestudyImages 
        mediaItems={SaseImages}
        imageDir="sase" 
        coverImage="/images/saseCover.png" 
        altText="SASE Case Study Cover Image" 
      />
      <CasestudyNav
        index={4}
      />
    </div>
  );
};

export default SasePage;
