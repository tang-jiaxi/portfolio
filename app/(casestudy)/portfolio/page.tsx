import React from 'react';
import CasestudyImages from '@/components/CasestudyImages';

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
    </div>
  );
};

export default PortfolioPage;
