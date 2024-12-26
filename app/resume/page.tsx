import MatterSvgIcons from '@/components/MatterSVGIcons';
import React from 'react';

const ResumePage = () => {
  return (
    <div>
      <iframe src="/Jiaxi_Tang_Resume.pdf" className="w-[80vw] md:w-[50vw] aspect-[8.5/10.5] mx-auto mb-16"></iframe>
      <div className="z-30 w-full h-[39vh] overflow-hidden relative">
        <p className="font-sans text-gray-400 absolute pl-4 lg:pl-16 top-1/3 text-sm -z-10">Drag and drop the logos for some fun!</p>
        <MatterSvgIcons isHeader={false}/>
      </div>
    </div>
  );
};

export default ResumePage;