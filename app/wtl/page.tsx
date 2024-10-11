
import React from 'react';
import CasestudyImages from '@/components/CasestudyImages';
import CasestudyNav from '@/components/CasestudyNav';
import MatterSvgIcons from '@/components/MatterSVGIcons';

const WtlPage = () => {
  return (
    <div>
      <CasestudyImages 
        imageDir="/wtl" 
        coverImage="/images/wtlCover.png" 
        altText="WTL Case Study Cover Image" 
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

export default WtlPage;
