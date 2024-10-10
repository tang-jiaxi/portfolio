
import React from 'react';
import CasestudyImages from '@/components/CasestudyImages';
import CasestudyNav from '@/components/CasestudyNav'
import MatterSvgIcons from '@/components/MatterSVGIcons';

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
      <div className="z-30 w-full overflow-hidden">
        <MatterSvgIcons header={false}/>
      </div>
    </div>
  );
};

export default GovTechPage;
