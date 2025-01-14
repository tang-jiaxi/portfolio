"use client"
import CaseNavigation from '../../components/CasestudyNav';
import { ProjectsArray } from '../../components/ProjectsArray';
import MatterSvgIcons from '../../components/MatterSVGIcons';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect } from 'react';
import '../globals.css'; 

interface CasestudyLayoutProps {
  children: React.ReactNode;
}

export default function CasestudyLayout({ children }: CasestudyLayoutProps) {
  const pathname = usePathname();
  const projectData = ProjectsArray.find((project) => project.link === pathname) || {
    name: '',
    imageSrc: '',
    imageAlt: 'Oops! No image found.',
    bgColor: '#FFFFFF',
    index: -1
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div style={{ backgroundColor: projectData.bgColor }} className={`absolute top-0 left-0 w-full h-[200px] z-0`}></div>

      <Image 
        src={projectData.imageSrc}
        alt={projectData.imageAlt}
        className="object-cover relative w-full h-auto mx-auto"
      />
      
      <main className="mb-8">
        {children}
      </main>
      
      <CaseNavigation index={projectData.index}></CaseNavigation>

      <section className="z-30 w-full overflow-hidden relative">
        <MatterSvgIcons isHeader={false}/>
      </section>
    </>
  )
}