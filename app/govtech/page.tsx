
import React from 'react';
import CasestudyImages from '@/components/CasestudyImages';

const GovTechPage = () => {
  return (
    <CasestudyImages 
      imageDir="govtech" 
      coverImage="/images/govtechCover.png" 
      altText="GovTech Case Study Cover Image" 
    />
  );
};

export default GovTechPage;
