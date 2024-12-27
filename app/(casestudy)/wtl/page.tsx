
import React from 'react';
import CasestudyImages from '@/components/CasestudyImages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'WTL',
};

const WtlPage = () => {
  return (
    <div>
      <CasestudyImages 
        imageDir="wtl" 
      />
    </div>
  );
};

export default WtlPage;
