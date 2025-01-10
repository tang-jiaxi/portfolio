import React from 'react';
import { Metadata } from 'next';
import { ProjectIntro } from '@/components/ProjectIntro';
import Dashboard from '@/app/(casestudy)/govtech/_components/1_Dashboard';
import WhatIsFlexilist from '@/app/(casestudy)/govtech/_components/2_WhatIsFlexilist';
import GovtechTimeline from '@/app/(casestudy)/govtech/_components/3_Timeline';
import P1Research from '@/app/(casestudy)/govtech/_components/4_Research';
import UserInterviews from '@/app/(casestudy)/govtech/_components/5_UserInterviews';
import UserInterview1 from '@/app/(casestudy)/govtech/_components/6_UserInterview1';
import UserInterview2 from '@/app/(casestudy)/govtech/_components/7_UserInterview2';
import UI2Findings from '@/app/(casestudy)/govtech/_components/8_UI2Findings';
import UIUXDesign from '@/app/(casestudy)/govtech/_components/9_UIUXDesign';
import JustInTime from '@/app/(casestudy)/govtech/_components/10_JustInTime';
import Functionality from '@/app/(casestudy)/govtech/_components/11_Functionality';
import Usability from '@/app/(casestudy)/govtech/_components/12_Usability';
import TheSolution from '@/app/(casestudy)/govtech/_components/13_TheSolution';
import BreakInto2Steps from '@/app/(casestudy)/govtech/_components/13_BreakInto2Steps';
import FinalDesign from '@/app/(casestudy)/govtech/_components/14_FinalDesign';
import Heuristics from '@/app/(casestudy)/govtech/_components/15_Heuristics';
import Frontend from '@/app/(casestudy)/govtech/_components/16_Frontend';
import SlowlyProgressInDifficulty from '@/app/(casestudy)/govtech/_components/17_SlowlyProgress';
import Interdisiplinary from '@/app/(casestudy)/govtech/_components/18_Interdisiplinary';
import Reflection from '@/app/(casestudy)/govtech/_components/19_Reflection';

export const metadata: Metadata = {
  title: 'GovTech',
};

const GovTechPage = () => {
  return (
    <>
      <div className='mt-8 md:mt-20 mb-8 md:mb-14 lg:mb-28'>
        <ProjectIntro
          date="Singapore, May – Aug 2024"
          topRight={["Workplace","Government Technology Agency of Singapore (GovTech)"]}
          topLeft={["User Group","Teachers in the Ministry of Education (MOE), Singapore"]}
          bottomLeft={["My Role","UI/UX Design, Experimental Systems and Technology Lab"]}
          bottomRight={["Team","1 Product Manager, 3 Software Developers"]}
        ></ProjectIntro>
      </div>
      <main className='w-[90vw] mx-auto md:w-[85vw] lg:w-[75vw] flex flex-col mb-8 md:mb-20 gap-8 md:gap-14 lg:gap-28'>
        <Dashboard></Dashboard>
        <WhatIsFlexilist></WhatIsFlexilist>
        <GovtechTimeline></GovtechTimeline>
        <P1Research></P1Research>
        <UserInterviews></UserInterviews>
        <UserInterview1></UserInterview1>
        <UserInterview2></UserInterview2>
        <UI2Findings></UI2Findings>
        <UIUXDesign></UIUXDesign>
        <JustInTime></JustInTime>
        <Functionality></Functionality>
        <Usability></Usability>
        <TheSolution></TheSolution>
        <BreakInto2Steps></BreakInto2Steps>
        <FinalDesign></FinalDesign>
        <Heuristics></Heuristics>
        <Frontend></Frontend>
        <SlowlyProgressInDifficulty></SlowlyProgressInDifficulty>
        <Interdisiplinary></Interdisiplinary>
        <Reflection></Reflection>
      </main>
    </>
  );
};

export default GovTechPage;
