
import React from 'react';
import CasestudyImages from '@/components/CasestudyImages';
import CasestudyNav from '@/components/CasestudyNav';

const RadioKPage = () => {
  return (
    <div>
      <CasestudyImages 
        imageDir="radioK" 
        coverImage="/images/radioKCover.png" 
        altText="RadioK Case Study Cover Image" 
      />
      <CasestudyNav
        index={3}
      />
    </div>
  );
};

export default RadioKPage;
