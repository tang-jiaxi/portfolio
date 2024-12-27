
import React from 'react';
import CasestudyImages from '@/components/CasestudyImages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RadioK',
};

const RadioKPage = () => {
  return (
    <div>
      <CasestudyImages 
        imageDir="radioK" 
      />
    </div>
  );
};

export default RadioKPage;
