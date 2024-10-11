
import React from 'react';
import CasestudyImages from '@/components/CasestudyImages';
import CasestudyNav from '@/components/CasestudyNav';
import MatterSvgIcons from '@/components/MatterSVGIcons';

const RadioKPage = () => {
  return (
    <div>
      <CasestudyImages 
        imageDir="radioK" 
        coverImage="/images/radioKCover.png" 
        altText="RadioK Case Study Cover Image" 
      />
      <CasestudyNav
        index={2}
      />
      <div className="z-30 w-full overflow-hidden">
        <MatterSvgIcons header={false}/>
      </div>
    </div>
  );
};

export default RadioKPage;
