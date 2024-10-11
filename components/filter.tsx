"use client"; 
import React, { useEffect, useRef, useState } from 'react';
import { ProjectCard, ProjectsArray } from './ProjectCard';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"; 
import { UxTag, CsTag, GdesTag, ShowAllTag, ClientTag, WorkTag, SchoolTag } from './Tag'; 
interface TagProps {
  isSelected: boolean;
}
  
const tagComponents: { [key: string]: React.FC<TagProps> } = {
  UX: UxTag,
  CS: CsTag,
  GDES: GdesTag,
  ShowAll: ShowAllTag,
  Client: ClientTag,
  Work: WorkTag,
  School: SchoolTag,
};

const Filter = () => {
  const [selectedTag, setSelectedTag] = useState<string>("ShowAll");
  const filterRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
  const handleUrlChange = (event: CustomEvent<{ tag: string }>) => {
    const tag = event.detail.tag;
    if (Object.keys(tagComponents).includes(tag)) {
      setSelectedTag(tag);
      scrollIntoView();
    } else {
      setSelectedTag("ShowAll");
    }
  };
  window.addEventListener('urlChange', handleUrlChange as EventListener);

  const scrollIntoView = () => {
    if (filterRef.current) {
      filterRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  }, []);

  const handleTagChange = (tag: string | undefined) => {
    // If the current tag is already selected, switch to "ShowAll"
    if (tag) {
      if (tag === selectedTag) {
        setSelectedTag("ShowAll");
      } else {
        setSelectedTag(tag);
      }
    }
  };

  const projectsToRender = selectedTag === "ShowAll" ? ProjectsArray : ProjectsArray.filter(project =>
    project.tags.includes(selectedTag)
  );

  return (
    <div id="filter" ref={filterRef} className="flex flex-col gap-16 pt-16 px-4">
      <div className="border border-black p-4 md:p-6 inline-block rounded-3xl mx-auto bg-white">
        <ToggleGroup 
          type="single" 
          onValueChange={handleTagChange} 
          value={selectedTag} 
          className="flex flex-wrap justify-center gap-2 md:gap-6 lg:gap-3"        
        >
          <ToggleGroupItem value="ShowAll" aria-label="Toggle Show All" className="hover:bg-transparent data-[state=on]:bg-transparent p-0 md:p-0">
            <ShowAllTag
              isSelected={selectedTag === "ShowAll"}
            />
          </ToggleGroupItem>
          <ToggleGroupItem value="UX" aria-label="Toggle UX" className="hover:bg-transparent data-[state=on]:bg-transparent p-0">
            <UxTag
              isSelected={selectedTag.includes("UX")}
            />
          </ToggleGroupItem>
          <ToggleGroupItem value="CS" aria-label="Toggle CS" className="hover:bg-transparent data-[state=on]:bg-transparent p-0">
            <CsTag
              isSelected={selectedTag.includes("CS")}
              />
          </ToggleGroupItem>
          <ToggleGroupItem value="GDES" aria-label="Toggle GDES" className="hover:bg-transparent data-[state=on]:bg-transparent p-0">
            <GdesTag
              isSelected={selectedTag.includes("GDES")}
            />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {projectsToRender.map((project, index) => (
        <div key={project.title || index} className="block w-full focus:outline-non rounded-lg transition duration-150 ease-in-out">
          <ProjectCard
            imageSrc={project.imageSrc}
            title={project.title}
            tags={project.tags.map(tag => {
              const TagComponent = tagComponents[tag];
              return TagComponent ? (
                <TagComponent
                  key={tag}
                  isSelected={selectedTag === tag}
                />
              ) : null;
            })}
            hashtags={project.hashtags}
            link={project.link}
          />
        </div>
      ))}
    </div>
  );
};

export default Filter;
