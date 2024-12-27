import React from 'react';
import CasestudyImages from '@/components/CasestudyImages';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GovTech',
};

const GovTechPage = () => {
  return (
    <div>
      <CasestudyImages 
        imageDir="govtech" 
      />
    </div>
  );
};

export default GovTechPage;
