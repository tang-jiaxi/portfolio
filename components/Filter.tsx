"use client"; 
import React, { useEffect, useRef, useContext } from 'react';
import { ProjectCard } from './ProjectCard';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"; 
import { UxTag, CsTag, GdesTag, ShowAllTag, ClientTag, WorkTag, SchoolTag } from './Tag'; 
import { motion, AnimatePresence } from 'framer-motion';
import { ProjectsArray } from './ProjectsArray';
import _debounce from "lodash/debounce";
import { FilterContext } from './FilterContext';
  
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
  const filterRef = useRef<HTMLDivElement>(null);
  const { filter, setFilter } = useContext(FilterContext);
  const firstMount = useRef(false);

  useEffect(() => {
    if (!firstMount.current) {
      firstMount.current = true;
      return;
    }
    if (filterRef.current) {
      const scrollPosition = filterRef.current.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({
        top: scrollPosition,
        behavior: 'smooth',
      });
    }
  }, [filter]);

  const handleTagChange = _debounce((selectedFilter: string) => {
    setFilter(selectedFilter);
  }, 100);

  const projectsToRender = filter === "ShowAll" ? ProjectsArray : ProjectsArray.filter(project =>
    project.tags.includes(filter)
  );

  return (
    <div id="filter" ref={filterRef} className="flex flex-col gap-16 px-4">
      <div className="border border-black p-2 sm:p-4 inline-block rounded-3xl mx-auto bg-white">
        <ToggleGroup 
          type="single" 
          onValueChange={handleTagChange} 
          value={filter} 
          className="flex flex-wrap justify-center gap-0 md:gap-2"        
        >
          <ToggleGroupItem value="ShowAll" aria-label="Toggle Show All" className="hover:bg-transparent data-[state=on]:bg-transparent px-1">
            <ShowAllTag
              isSelected={filter === "ShowAll"}
            />
          </ToggleGroupItem>
          <ToggleGroupItem value="UX" aria-label="Toggle UX" className="hover:bg-transparent data-[state=on]:bg-transparent px-1">
            <UxTag
              isSelected={filter === "UX"}
            />
          </ToggleGroupItem>
          <ToggleGroupItem value="CS" aria-label="Toggle CS" className="hover:bg-transparent data-[state=on]:bg-transparent px-1">
            <CsTag
              isSelected={filter === "CS"}
              />
          </ToggleGroupItem>
          <ToggleGroupItem value="GDES" aria-label="Toggle GDES" className="hover:bg-transparent data-[state=on]:bg-transparent px-1">
            <GdesTag
              isSelected={filter === "GDES"}
            />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <motion.div 
        layout
        className="grid grid-cols-1 gap-16"
      >
        <AnimatePresence mode="sync">
          {projectsToRender.map((project, index) => (
            <motion.div
              key={`${project.title || index}-${filter}`}
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
                ease: 'easeInOut',
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
                        isSelected={filter === tag}
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