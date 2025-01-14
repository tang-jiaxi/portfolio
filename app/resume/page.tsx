import MatterSvgIcons from '@/components/MatterSVGIcons';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
};

const ResumePage = () => {
  return (
    <div>
      <iframe src="/Jiaxi_Tang_Resume.pdf" className="w-[80vw] md:w-[50vw] aspect-[8.5/10.5] mx-auto mb-16"></iframe>
      <div className="z-30 w-full overflow-hidden relative">
        <MatterSvgIcons isHeader={false}/>
      </div>
    </div>
  );
};

export default ResumePage;