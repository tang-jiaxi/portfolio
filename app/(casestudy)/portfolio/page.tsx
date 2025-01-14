import React from 'react';
import { Metadata } from 'next';
import { ProjectIntro } from '@/components/ProjectIntro';
import Process from './_components/1_Process';
import Inspiration from './_components/2_Inspiration';
import Prototype from './_components/4_Prototype';
import Develop from './_components/5_Develop';
import Library from './_components/6_Library';
import Takeaway from './_components/3_Takeaway';
import AfterSomeTime from './_components/7_AfterSomeTime';
import FuturePlans from './_components/8_FuturePlans';

export const metadata: Metadata = {
  title: 'Portfolio',
};

const PortfolioPage = () => {
  return (
    <>
      <div className='mt-8 md:mt-20 mb-8 md:mb-14 lg:mb-28'>
        <ProjectIntro
          date="United States/Singapore, Oct 2024 – Present"
          topRight={["My Role","Designer and Developer"]}
          topLeft={["User Group","Recruiters, Designers, Developers"]}
          bottomLeft={["'Work Place'","Figma, VSCode, GitHub, Vercel"]}
          bottomRight={["Tech Stack","Next.js, React.js, Typescript, TailwindCSS, Matter.js"]}
          isNoWrap
        ></ProjectIntro>
      </div>
      <main className='w-[90vw] mx-auto md:w-[85vw] lg:w-[75vw] flex flex-col mb-8 md:mb-20 gap-8 md:gap-14 lg:gap-28'>
        <Process/>
        <Inspiration/>
        <Takeaway/>
        <Prototype/>
        <Develop/>
        <Library/>
        <AfterSomeTime/>
        <FuturePlans/>
      </main>
    </>
  );
};

export default PortfolioPage;
