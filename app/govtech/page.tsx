
import React from 'react';
import CasestudyImages from '@/components/CasestudyImages';
import CasestudyNav from '@/components/CasestudyNav'

const GovTechPage = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-[600px] bg-green-govtech z-0"></div>
      <CasestudyImages 
        imageDir="govtech" 
        coverImage="/images/govtechCover.png" 
        altText="GovTech Case Study Cover Image" 
      />
      <CasestudyNav
        index={1}
      />
    </div>
  );
};

export default GovTechPage;
