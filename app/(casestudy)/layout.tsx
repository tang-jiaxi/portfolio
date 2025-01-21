"use client"
import CaseNavigation from '../../components/CasestudyNav';
import { ProjectsArray } from '../../components/ProjectsArray';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import '../globals.css'; 
import ResponsiveMatterWrapper from '@/components/ResponsiveMatterWrapper';

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

  return (
    <>
      <div style={{ backgroundColor: projectData.bgColor }} className={`absolute top-0 left-0 w-full h-[200px] z-0`}></div>

      <Image 
        src={projectData.imageSrc}
        alt={projectData.imageAlt}
        className="object-cover relative w-full h-auto mx-auto"
        style={{ backgroundColor: projectData.bgColor }}
      />
      
      <main className="mb-8">
        {children}
      </main>
      
      <CaseNavigation index={projectData.index}></CaseNavigation>

      <ResponsiveMatterWrapper isHeader={false}/>
    </>
  )
}