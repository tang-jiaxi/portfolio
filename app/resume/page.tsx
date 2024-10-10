import MatterSvgIcons from '@/components/MatterSVGIcons';
import React from 'react';

const WamPage = () => {
  return (
    <div>
      <embed src="/Jiaxi_Tang_Resume.pdf" className="w-[50vw] h-[65vw] mx-auto mb-16"></embed>
      <div className="z-30 w-full overflow-hidden">
        <MatterSvgIcons header={false}/>
      </div>
    </div>
  );
};

export default WamPage;