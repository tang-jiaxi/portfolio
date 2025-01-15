import React from 'react';
import { Metadata } from 'next';
import ReactGallery from './_components/ReactGallery';

export const metadata: Metadata = {
  title: 'Exploration',
};

const ResumePage = () => {

  return (
    <div className='mx-4 mb-4'>
      <ReactGallery/>
    </div>
  );
};

export default ResumePage;