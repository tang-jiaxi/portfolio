import React from 'react';
import CasestudyImages from '@/components/CasestudyImages';
import CasestudyNav from '@/components/CasestudyNav';
import MatterSvgIcons from '@/components/MatterSVGIcons';
import Image from 'next/image';
import Link from 'next/link';

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
      <div className="absolute top-0 left-0 w-full h-[500px] bg-red-light z-0"></div>
      <CasestudyImages 
        mediaItems={PortfolioImages1}
        imageDir="portfolio" 
        coverImage="/images/portfolioCover.png" 
        altText="Portfolio Case Study Header" 
      />
      <div>
        <p className="text-xs md:text-lg ml-[50vw]">
          Here's the{' '}
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
        altText="Portfolio Case Study Images" 
      />
      <CasestudyNav
        index={4}
      />
      <div className="z-30 w-full overflow-hidden">
        <MatterSvgIcons header={false}/>
      </div>
    </div>
  );
};

export default PortfolioPage;
