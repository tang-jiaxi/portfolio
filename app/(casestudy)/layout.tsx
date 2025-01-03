"use client"
import CaseNavigation from '../../components/CasestudyNav';
import { ProjectsArray } from '../../components/ProjectsArray';
import MatterSvgIcons from '../../components/MatterSVGIcons';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { useEffect } from 'react';

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
    window.scrollTo({
      top: 0,
    });
  }, []);

  return (
    <>
      <div style={{ backgroundColor: projectData.bgColor }} className={`absolute top-0 left-0 w-full h-[100px] z-0`}></div>

      <Image 
        src={projectData.imageSrc}
        alt={projectData.imageAlt}
        className="object-cover relative w-full h-auto mx-auto"
      />
      
      {children}
      
      <CaseNavigation index={projectData.index}></CaseNavigation>

      <div className="z-30 w-full overflow-hidden relative">
        <p className="font-sans text-gray-400 absolute pl-4 lg:pl-16 top-1/3 text-sm -z-10">Drag and drop the logos for some fun!</p>
        <MatterSvgIcons isHeader={false}/>
      </div>
    </>
  )
}