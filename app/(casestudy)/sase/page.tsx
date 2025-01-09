import React from 'react';
// import CasestudyImages from '@/components/CasestudyImages';
import { Metadata } from 'next';
import { ProjectIntro } from '@/components/ProjectIntro';
import Process from '@/content/sase/1_Process';
import Problem from '@/content/sase/2_Problem';
import Requirements from '@/content/sase/3_Requirements';
import Develop from '@/content/sase/4_Develop';
import FinalDesign from '@/content/sase/5_FinalDesign';
import Reflection from '@/content/sase/6_Reflection';

export const metadata: Metadata = {
  title: 'SASE',
};

// const SaseImages1 = [
//   'row-1-column-1.png',
//   'row-2-column-1.png',
//   'row-3-column-1.png',
//   'row-4-column-1.png',
//   'row-5-column-1.png',
//   'row-6-column-1.png',
//   'row-7-column-1.png',
// ];

// const SaseImages2 = [
//   'row-8-column-1.png',
//   'saseOpenPDF.mp4',
//   'row-10-column-1.png',
//   'saseFilter.mp4',
//   'row-12-column-1.png',
//   'saseResponsiveDesign.mp4',
//   'row-14-column-1.png',
//   'row-15-column-1.png',
//   'row-16-column-1.png',
// ];

const SasePage = () => {
  return (
    <>
      <div className='mt-8 md:mt-20 mb-8 md:mb-14 lg:mb-28'>
        <ProjectIntro
          date="United States, May 2024 – Present"
          topRight={["My Role","Designer and Developer"]}
          topLeft={["User Group","Corporate sponsors that finanically support us"]}
          bottomLeft={["'Work Place'","Society of Asian Scientists and Engineers (SASE)"]}
          bottomRight={["Location","University of Minnesota (UMN)"]}
        ></ProjectIntro>
      </div>
      <main className='w-[90vw] mx-auto md:w-[85vw] lg:w-[75vw] flex flex-col mb-8 md:mb-20 gap-8 md:gap-14 lg:gap-28'>
        <Process/>
        <Problem/>
        <Requirements/>
        <Develop/>
        <FinalDesign/>
        <Reflection/>
      </main>
      {/* <CasestudyImages 
        mediaItems={SaseImages1}
        imageDir="sase" 
      />
      <div>
        <p className="text-xs md:text-lg mx-[12vw]">
          Check out a live version of the{' '} 
          <a 
            href="https://tang-jiaxi.github.io/saseTalentNetwork/" 
            target="_blank" 
            className="text-red-dark underline"
          >
            website
          </a>{' '}
          with dummy values or the{' '} 
          <a 
            href="https://github.com/tang-jiaxi/saseTalentNetwork" 
            className="text-red-dark underline"
          >
          GitHub repository
          </a>
          .        
        </p>      
      </div>
      <CasestudyImages 
        mediaItems={SaseImages2}
        imageDir="sase" 
      /> */}
    </>
  );
};

export default SasePage;
