
import React from 'react';
import { Metadata } from 'next';
import { ProjectIntro } from '@/components/ProjectIntro';
import Team from '@/app/(casestudy)/wtl/_components/1_Team';
import Problem from '@/app/(casestudy)/wtl/_components/2_Problem';
import Data from '@/app/(casestudy)/wtl/_components/3_Data';
import Hypothesis from '@/app/(casestudy)/wtl/_components/4_Hypothesis';
import Timeline from '@/app/(casestudy)/wtl/_components/6_Timeline';
import Brief from '@/app/(casestudy)/wtl/_components/7_Brief';
import Task from '@/app/(casestudy)/wtl/_components/8_Task';
import UIDesign from '@/app/(casestudy)/wtl/_components/9_UIDesign';
import MoodBoard from '@/app/(casestudy)/wtl/_components/10_MoodBoard';
import UserResearch from '@/app/(casestudy)/wtl/_components/11_UserResearch';
import Iterations from '@/app/(casestudy)/wtl/_components/12_Iterations';
import FinalDesign from '@/app/(casestudy)/wtl/_components/13_FinalDesign';
import Reflection from '@/app/(casestudy)/wtl/_components/14_Reflection';

export const metadata: Metadata = {
  title: 'WTL',
};

const WtlPage = () => {
  return (
    <>
      <div className='mt-8 md:mt-20 mb-8 md:mb-14 lg:mb-28'>
        <ProjectIntro
          date="United States, Sep 2023 – May 2024"
          topRight={["My Role","Research Assistant — UI Design"]}
          topLeft={["User Group","Fashion Designers"]}
          bottomLeft={["'Work Place'","Wearable Technology Lab (WTL), College of Design @ University of Minnesota"]}
          bottomRight={["Team","2 Design Professors, 1 Economic Professor, 2 Research Assistants"]}
        ></ProjectIntro>
      </div>
      <main className='w-[90vw] mx-auto md:w-[85vw] lg:w-[75vw] flex flex-col mb-8 md:mb-20 gap-8 md:gap-14 lg:gap-28'>
        <Team/>
        <Problem/>
        <Data/>
        <Hypothesis/>
        <Timeline/>
        <Brief/>
        <Task/>
        <UIDesign/>
        <MoodBoard/>
        <UserResearch/>
        <Iterations/>
        <FinalDesign/>
        <Reflection/>
      </main>
    </>
  );
};

export default WtlPage;
