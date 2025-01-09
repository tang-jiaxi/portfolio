
import React from 'react';
import { Metadata } from 'next';
import { ProjectIntro } from '@/components/ProjectIntro';
import Team from '@/content/wtl/1_Team';
import Problem from '@/content/wtl/2_Problem';
import Data from '@/content/wtl/3_Data';
import Hypothesis from '@/content/wtl/4_Hypothesis';
import Timeline from '@/content/wtl/6_Timeline';
import Brief from '@/content/wtl/7_Brief';
import Task from '@/content/wtl/8_Task';
import UIDesign from '@/content/wtl/9_UIDesign';
import MoodBoard from '@/content/wtl/10_MoodBoard';
import UserResearch from '@/content/wtl/11_UserResearch';
import Iterations from '@/content/wtl/12_Iterations';
import FinalDesign from '@/content/wtl/13_FinalDesign';
import Reflection from '@/content/wtl/14_Reflection';

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
