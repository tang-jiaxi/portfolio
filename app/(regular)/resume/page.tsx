import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Resume',
};

const ResumePage = () => {
  return (
    <div>
      <div className='w-[90vw] h-[123.75vw] md:w-[50vw] md:h-[68.75vw] mx-auto mb-12 md:mb-16'>
        <iframe src="/Jiaxi_Tang_Resume.pdf" className="min-w-fit w-full min-h-fit h-full" allowFullScreen></iframe>
      </div>
    </div>
  );
};

export default ResumePage;