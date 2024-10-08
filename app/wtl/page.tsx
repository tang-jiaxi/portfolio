
import React from 'react';
import CasestudyImages from '@/components/CasestudyImages';
import CasestudyNav from '@/components/CasestudyNav';

const WtlPage = () => {
  return (
    <div>
      <CasestudyImages 
        imageDir="/wtl" 
        coverImage="/images/wtlCover.png" 
        altText="WTL Case Study Cover Image" 
      />
      <CasestudyNav
        index={2}
      />
    </div>
  );
};

export default WtlPage;
