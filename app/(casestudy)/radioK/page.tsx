
import React from 'react';
// import CasestudyImages from '@/components/CasestudyImages';
import { Metadata } from 'next';
import { ProjectIntro } from '@/components/ProjectIntro';
import RadioKTimeline from './_components/1_Timeline';
import Client from './_components/2_Client';
import Project from './_components/3_Project';
import Hypothesis from './_components/4_Hypothesis';
import AccessPath from './_components/5_AccessPath';
import Navigation from './_components/6_Navigation';
import UserResearch from './_components/7_UserResearch';
import Insight1 from './_components/8_Insight1';
import Insight2 from './_components/9_Insight2';
import Insight3 from './_components/10_Insight3';
import UIUX from './_components/11_UIUX';
import UserPersona from './_components/13_UserPersona';
import UserGroup from './_components/12_UserGroup';
import JourneyMap from './_components/14_JourneyMap';
import JourneyMapFindings from './_components/15_JourneyMapFindings';
import UIMoodBoard from './_components/16_UI';
import Prototype from './_components/17_Prototype';
import FinalDesign from './_components/18_FinalDesign';
import Reflection from './_components/19_Reflection';

export const metadata: Metadata = {
  title: 'RadioK',
};

const RadioKPage = () => {
  return (
    <>
      <div className='mt-8 md:mt-20 mb-8 md:mb-14 lg:mb-28'>
        <ProjectIntro
          date="United States, May 2024 – Present"
          topRight={["My Role","Designer and Developer"]}
          topLeft={["User Group","University students, Minnesota residents"]}
          bottomLeft={["Client","Real College Podcast by RadioK (UMN’s radio station)"]}
          bottomRight={["Team","DesignU @ University of Minnesota"]}
          isNoWrap
        ></ProjectIntro>
      </div>
      <main className='w-[90vw] mx-auto md:w-[85vw] lg:w-[75vw] flex flex-col mb-8 md:mb-20 gap-8 md:gap-14 lg:gap-28'>
        <RadioKTimeline/>
        <Client/>
        <Project/>
        <Hypothesis/>
        <AccessPath/>
        <Navigation/>
        <UserResearch/>
        <Insight1/>
        <Insight2/>
        <Insight3/>
        <UIUX/>
        <UserGroup/>
        <UserPersona/>
        <JourneyMap/>
        <JourneyMap/>
        <UIMoodBoard/>
        <Prototype/>
        <FinalDesign/>
        <Reflection/>
      </main>
    </>
  );
};

export default RadioKPage;
