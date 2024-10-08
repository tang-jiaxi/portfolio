
import React from 'react';
import CasestudyImages from '@/components/CasestudyImages';
import CasestudyNav from '@/components/CasestudyNav';

const WamPage = () => {
  return (
    <div>
      <div className="absolute top-0 left-0 w-full h-[500px] bg-pink-wam z-0"></div>
      <CasestudyImages 
        imageDir="wam" 
        coverImage="/images/wamCover.png" 
        altText="Weisman Art Museum Case Study Cover Image" 
      />
      <CasestudyNav
        index={5}
      />
    </div>
  );
};

export default WamPage;
