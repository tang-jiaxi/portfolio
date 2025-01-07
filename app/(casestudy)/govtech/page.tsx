import React from 'react';
// import CasestudyImages from '@/components/CasestudyImages';
import { Metadata } from 'next';
import projectIntro from "@/images/govtech/projectIntro.webp";
import DashboardofActivities from '@/content/govtechContent/1_DashboardOfActivities';
import WhatIsFlexilist from '@/content/govtechContent/2_WhatIsFlexilist';
import GovtechTimeline from '@/content/govtechContent/3_Timeline';
import P1Research from '@/content/govtechContent/4_#1_Research';
import UserInterviews from '@/content/govtechContent/5_#2_UserInterviews';
import UserInterview1 from '@/content/govtechContent/6_UserInterview1';
import UserInterview2 from '@/content/govtechContent/7_UserInterview2';
import UserInterview2Findings from '@/content/govtechContent/8_UserInterview2Findings';
import UIUXDesign from '@/content/govtechContent/9_#3_UIUXDesign';
import JustInTime from '@/content/govtechContent/10_JustInTimeFeedback';
import Functionality from '@/content/govtechContent/11_Functionality';
import FunctionalityVsUsability from '@/content/govtechContent/12_FunctionalityVsUsability';
import TheSolution from '@/content/govtechContent/13_TheSolution';
import BreakInto2Steps from '@/content/govtechContent/13_BreakInto2Steps';
import FinalDesign from '@/content/govtechContent/14_FinalDesign';
import UsabilityHeuristics from '@/content/govtechContent/15_UsabilityHeuristics';
import FrontendDevelopment from '@/content/govtechContent/16_FrontendDevelopment';
import SlowlyProgressInDifficulty from '@/content/govtechContent/17_SlowlyProgressInDifficulty';
import InterdisiplinaryInsights from '@/content/govtechContent/18_InterdisiplinaryInsights';
import Reflection from '@/content/govtechContent/19_Reflection';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'GovTech',
};

const GovTechPage = () => {
  return (
    <main className='w-[90vw] mx-auto md:w-[85vw] lg:w-[75vw] flex flex-col gap-8 my-8 md:my-20 md:gap-14 lg:gap-28'>
      <Image src={projectIntro} alt='Project admin information'/>
      <DashboardofActivities></DashboardofActivities>
      <WhatIsFlexilist></WhatIsFlexilist>
      <GovtechTimeline></GovtechTimeline>
      <P1Research></P1Research>
      <UserInterviews></UserInterviews>
      <UserInterview1></UserInterview1>
      <UserInterview2></UserInterview2>
      <UserInterview2Findings></UserInterview2Findings>
      <UIUXDesign></UIUXDesign>
      <JustInTime></JustInTime>
      <Functionality></Functionality>
      <FunctionalityVsUsability></FunctionalityVsUsability>
      <TheSolution></TheSolution>
      <BreakInto2Steps></BreakInto2Steps>
      <FinalDesign></FinalDesign>
      <UsabilityHeuristics></UsabilityHeuristics>
      <FrontendDevelopment></FrontendDevelopment>
      <SlowlyProgressInDifficulty></SlowlyProgressInDifficulty>
      <InterdisiplinaryInsights></InterdisiplinaryInsights>
      <Reflection></Reflection>
      {/* <CasestudyImages 
        imageDir="govtech" 
      /> */}
    </main>
  );
};

export default GovTechPage;
