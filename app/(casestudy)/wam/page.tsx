
import React from 'react';
import CasestudyImages from '@/components/CasestudyImages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WAM',
};

const WamPage = () => {
  return (
    <div>
      <CasestudyImages 
        imageDir="wam" 
      />
    </div>
  );
};

export default WamPage;
