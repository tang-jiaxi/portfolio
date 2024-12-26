"use client"; 
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ProjectCard, ProjectsArray } from './ProjectCard';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"; 
import { UxTag, CsTag, GdesTag, ShowAllTag, ClientTag, WorkTag, SchoolTag } from './Tag'; 
import { motion, AnimatePresence } from 'framer-motion'

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
  const [filterKey, setFilterKey] = useState(0) //force re-render animation
  const filterRef = useRef<HTMLDivElement>(null)
  const debounceTimerRef = useRef<number | null>(null)

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

  const debouncedFilterChange = useCallback((tag: string) => {
    if (debounceTimerRef.current) {
      window.clearTimeout(debounceTimerRef.current)
    }

    debounceTimerRef.current = window.setTimeout(() => {
      setSelectedTag(tag)
      setFilterKey(prevKey => prevKey + 1)
    }, 100) 
  }, [])

  const handleTagChange = (tag: string | undefined) => {
    // If the current tag is already selected, switch to "ShowAll"
    if (tag) {
      if (tag === selectedTag) {
        setSelectedTag("ShowAll");
        debouncedFilterChange("ShowAll")
      } else {
        setSelectedTag(tag);
        debouncedFilterChange(tag)
      }
    }
    setFilterKey(prevKey => prevKey + 1)
  };

  const projectsToRender = selectedTag === "ShowAll" ? ProjectsArray : ProjectsArray.filter(project =>
    project.tags.includes(selectedTag)
  );

  return (
    <div id="filter" ref={filterRef} className="flex flex-col gap-16 px-4">
      <div className="border border-black p-2 sm:p-4 inline-block rounded-3xl mx-auto bg-white">
        <ToggleGroup 
          type="single" 
          onValueChange={handleTagChange} 
          value={selectedTag} 
          className="flex flex-wrap justify-center gap-0 md:gap-2"        
        >
          <ToggleGroupItem value="ShowAll" aria-label="Toggle Show All" className="hover:bg-transparent data-[state=on]:bg-transparent px-1">
            <ShowAllTag
              isSelected={selectedTag === "ShowAll"}
            />
          </ToggleGroupItem>
          <ToggleGroupItem value="UX" aria-label="Toggle UX" className="hover:bg-transparent data-[state=on]:bg-transparent px-1">
            <UxTag
              isSelected={selectedTag.includes("UX")}
            />
          </ToggleGroupItem>
          <ToggleGroupItem value="CS" aria-label="Toggle CS" className="hover:bg-transparent data-[state=on]:bg-transparent px-1">
            <CsTag
              isSelected={selectedTag.includes("CS")}
              />
          </ToggleGroupItem>
          <ToggleGroupItem value="GDES" aria-label="Toggle GDES" className="hover:bg-transparent data-[state=on]:bg-transparent px-1">
            <GdesTag
              isSelected={selectedTag.includes("GDES")}
            />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 gap-16"
      >
        <AnimatePresence mode="wait">
          {projectsToRender.map((project, index) => (
            <motion.div
              key={`${project.title || index}-${filterKey}`}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ 
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 0.5,
                delay: index * 0.03,
              }}
              className="block w-full focus:outline-none rounded-lg"
            >
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
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Filter;