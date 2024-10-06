"use client"; 
import React, { useState } from 'react';
import { ProjectCard, ProjectsArray } from './projectCard';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"; // Import your ToggleGroup components
import { UxTag, CsTag, GdesTag, ShowAllTag } from './tag'; // Assuming these are your tag components

interface TagProps {
  isSelected: boolean;
}

const tagComponents: { [key: string]: React.FC<TagProps> } = {
  UX: UxTag,
  CS: CsTag,
  GDES: GdesTag,
  ShowAll: ShowAllTag,
};

const Filter = () => {
  const [selectedTag, setSelectedTag] = useState<string>("ShowAll");

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
    <div className="flex flex-col gap-16 ">
      {/* Tag selection UI using ToggleGroup */}
      <div className="border border-black p-8 inline-block rounded-full w-[900px] mx-auto">
        <ToggleGroup type="single" onValueChange={handleTagChange} value={selectedTag}>
          <ToggleGroupItem value="ShowAll" aria-label="Toggle Show All" className="hover:bg-transparent data-[state=on]:bg-transparent">
            <ShowAllTag
              isSelected={selectedTag === "ShowAll"} // Show all if all tags are selected
            />
          </ToggleGroupItem>
          <ToggleGroupItem value="UX" aria-label="Toggle UX" className="hover:bg-transparent data-[state=on]:bg-transparent">
            <UxTag
              isSelected={selectedTag.includes("UX")}
            />
          </ToggleGroupItem>
          <ToggleGroupItem value="CS" aria-label="Toggle CS" className="hover:bg-transparent data-[state=on]:bg-transparent">
            <CsTag
              isSelected={selectedTag.includes("CS")}
              />
          </ToggleGroupItem>
          <ToggleGroupItem value="GDES" aria-label="Toggle GDES" className="hover:bg-transparent data-[state=on]:bg-transparent">
            <GdesTag
              isSelected={selectedTag.includes("GDES")}
            />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      {projectsToRender.map((project, index) => (
        <div className="block w-full focus:outline-non rounded-lg transition duration-150 ease-in-out">
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
