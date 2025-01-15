import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import resume from '../../../public/Jiaxi_Tang_Resume.webp'
import { RxDownload } from "react-icons/rx";

export const metadata: Metadata = {
  title: 'Resume',
};

const ResumePage = () => {
  return (
    <main className='w-[90vw] h-[123.75vw] md:w-[70vw] md:h-[68.75vw] lg:w-[60vw] lg:h-[77.6vw] mx-auto mb-12 md:mb-16'>
      <p className='flex flex-row gap-1 md:hidden mb-2'>
        <RxDownload className='mt-1'/>
        <a href="/Jiaxi_Tang_Resume.pdf" 
          className='underline hover:underline' 
          style={{font: "inherit"}}
          download 
        >
          Download as PDF to your device
        </a>
      </p>
      <iframe 
        src="/Jiaxi_Tang_Resume.pdf" 
        className="hidden md:block min-w-fit w-full min-h-fit h-full" 
        allowFullScreen 
        title='Jiaxi Tang Resume'>
      </iframe>
      <Image src={resume} objectFit='contain' className="md:hidden w-full h-auto border border-gray-dark" alt="Jiaxi Tang resume"></Image>
    </main>
  );
};

export default ResumePage;