import MatterSvgIcons from '@/components/MatterSVGIcons';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
};

const ResumePage = () => {
  return (
    <div>
      <div className='w-[80vw] h-[110vw] md:w-[50vw] md:h-[68.75vw] mx-auto mb-12 md:mb-16'>
        <iframe src="/Jiaxi_Tang_Resume.pdf" className="w-full h-full"></iframe>
      </div>
      <div className="z-30 w-full overflow-hidden relative">
        <MatterSvgIcons isHeader={false}/>
      </div>
    </div>
  );
};

export default ResumePage;