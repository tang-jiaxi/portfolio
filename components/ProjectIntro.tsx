"use client"

import { usePathname } from "next/navigation";
import { ProjectsArray } from "./ProjectsArray"
import Tag from "./Tag";

interface ProjectIntroProps {
  date: string;
  topRight: string[];
  topLeft: string[];
  bottomRight: string[];
  bottomLeft: string[];
  isNoWrap?: boolean;
}

export const ProjectIntro: React.FC<ProjectIntroProps> = ({date, topRight, topLeft, bottomRight, bottomLeft, isNoWrap }) => {
  const pathname = usePathname();
  const projectData = ProjectsArray.find((project) => project.link === pathname) || {
    name: '',
    title: '',
    tags: [],
    hashtags: [],
  };
  
  return (
    <section className="w-[90vw] md:w-[93vw] lg:w-[90vw] mx-auto flex flex-col gap-0 md:flex-row border border-black rounded-[20px] md:rounded-[30px]">
      
      <div className="border-b md:border-0 border-black flex flex-col gap-4 md:gap-6 md:p-4 p-24 basis-1/3 flex-grow">
        <div>
          <h1 className={`${isNoWrap ? 'lg:text-nowrap' : ''}`}>{projectData.title}</h1>
          <p className={`${isNoWrap ? 'lg:text-nowrap' : ''}`}>{date}</p>
        </div>

        <div className="flex flex-col gap-3 md:gap-4">
          <div className="flex flex-wrap lg:flex-nowrap gap-2 justify-start">
            {projectData.tags.map((tag, index) => (
              <Tag key={index} tag={tag}/>
            ))}
          </div>
          <div className="flex flex-wrap gap-x-2 md:gap-x-4 justify-start text-gray-500">
            {projectData.hashtags.map((hashtag, index) => (
              <h3 key={index}>{hashtag}</h3>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 footer:p-0 footer:gap-0 footer:grid-cols-2">
        <div className="footer:border-b footer:border-r md:border-l border-black footer:p-4 md:p-6 ">
          <h5 className="text-black">{topRight[0]}</h5>
          <p className="m-0">{topRight[1]}</p>
        </div>
        <div className="footer:border-b border-black footer:p-4 md:p-6 ">
          <h5 className="text-black">{topLeft[0]}</h5>
          <p className="m-0">{topLeft[1]}</p>
        </div>
        <div className="footer:border-r md:border-l border-black footer:p-4 md:p-6 ">
          <h5 className="text-black">{bottomLeft[0]}</h5>
          <p className="m-0">{bottomLeft[1]}</p>
        </div>
        <div className="footer:p-4 md:p-6 ">
          <h5 className="text-black">{bottomRight[0]}</h5>
          <p className="m-0">{bottomRight[1]}</p>
        </div>
      </div>
    </section>
  )
}