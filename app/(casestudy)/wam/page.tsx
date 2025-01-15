
import React from 'react';
import { Metadata } from 'next';
import { ProjectIntro } from '@/components/ProjectIntro';
import WAMTimeline from './_components/1_Timeline';
import Client from './_components/2_Client';
import Project from './_components/3_Project';
import Hypothesis from './_components/4_Hypothesis';
import UserResearch from './_components/5_UserResearch';
import Insight1 from './_components/6_Insight1';
import Insight2 from './_components/7_Insight2';
import MoodBoard from './_components/8_MoodBoard';
import FinalDesign from './_components/9_FinalDesign';
import Reflection from './_components/10_Reflection';

export const metadata: Metadata = {
  title: 'WAM',
};

const WamPage = () => {
  return (
    <div>
      <div className='mt-8 md:mt-20 mb-8 md:mb-14 lg:mb-28'>
        <ProjectIntro
          date="United States, Aug 2022 – Dec 2022"
          topRight={["My Role","Graphic Designer, UX Designer"]}
          topLeft={["User Group","University students, Art lovers"]}
          bottomLeft={["Client","Weisman Art Museum"]}
          bottomRight={["Team","DesignU @ University of Minnesota"]}
          isNoWrap
        ></ProjectIntro>
      </div>
      <main className='w-[90vw] mx-auto md:w-[85vw] lg:w-[75vw] flex flex-col mb-8 md:mb-20 gap-8 md:gap-14 lg:gap-28'>
        <WAMTimeline/>
        <Client/>
        <Project/>
        <Hypothesis/>
        <UserResearch/>
        <Insight1/>
        <Insight2/>
        <MoodBoard/>
        <FinalDesign/>
        <Reflection/>
      </main>
    </div>
  );
};

export default WamPage;
