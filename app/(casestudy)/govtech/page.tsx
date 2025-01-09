import React from 'react';
import { Metadata } from 'next';
import { ProjectIntro } from '@/components/ProjectIntro';
import Dashboard from '@/content/govtech/1_Dashboard';
import WhatIsFlexilist from '@/content/govtech/2_WhatIsFlexilist';
import GovtechTimeline from '@/content/govtech/3_Timeline';
import P1Research from '@/content/govtech/4_Research';
import UserInterviews from '@/content/govtech/5_UserInterviews';
import UserInterview1 from '@/content/govtech/6_UserInterview1';
import UserInterview2 from '@/content/govtech/7_UserInterview2';
import UI2Findings from '@/content/govtech/8_UI2Findings';
import UIUXDesign from '@/content/govtech/9_UIUXDesign';
import JustInTime from '@/content/govtech/10_JustInTime';
import Functionality from '@/content/govtech/11_Functionality';
import Usability from '@/content/govtech/12_Usability';
import TheSolution from '@/content/govtech/13_TheSolution';
import BreakInto2Steps from '@/content/govtech/13_BreakInto2Steps';
import FinalDesign from '@/content/govtech/14_FinalDesign';
import Heuristics from '@/content/govtech/15_Heuristics';
import Frontend from '@/content/govtech/16_Frontend';
import SlowlyProgressInDifficulty from '@/content/govtech/17_SlowlyProgress';
import Interdisiplinary from '@/content/govtech/18_Interdisiplinary';
import Reflection from '@/content/govtech/19_Reflection';

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
        bottomLeft={["Role","UI/UX Design, Experimental Systems and Technology Lab"]}
        bottomRight={["Team","1 Product Manager/n3 Software Developers"]}
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
