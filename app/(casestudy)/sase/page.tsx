import React from 'react';
import { Metadata } from 'next';
import { ProjectIntro } from '@/components/ProjectIntro';
import Process from '@/app/(casestudy)/sase/_components/1_Process';
import Problem from '@/app/(casestudy)/sase/_components/2_Problem';
import Requirements from '@/app/(casestudy)/sase/_components/3_Requirements';
import Develop from '@/app/(casestudy)/sase/_components/4_Develop';
import FinalDesign from '@/app/(casestudy)/sase/_components/5_FinalDesign';
import Reflection from '@/app/(casestudy)/sase/_components/6_Reflection';

export const metadata: Metadata = {
  title: 'SASE',
};

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
          isNoWrap
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
    </>
  );
};

export default SasePage;
