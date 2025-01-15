"use client"; 

import React, { useContext } from 'react';
import { ProjectCard } from './ProjectCard';
import Tag from './Tag'; 
import { motion, AnimatePresence, easeInOut } from 'framer-motion';
import { ProjectsArray } from './ProjectsArray';
import { FilterContext } from './FilterContext';

const Filter = () => {
    const { filter } = useContext(FilterContext);
    const cleanFilter = filter.split("#")[0];

  const projectsToRender = cleanFilter === "ShowAll" ? ProjectsArray : ProjectsArray.filter(project =>
    project.tags.includes(cleanFilter)
  );

  return (
    <motion.div 
      layout
      className="grid grid-cols-1 gap-16"
    >
      <AnimatePresence mode="sync">
        {projectsToRender.map((project, index) => (
          <motion.div
            key={`${index}-${cleanFilter}`}
            layout
            initial={{ opacity: 0, scale: 0.80 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ 
              type: "tween",
              duration: 0.3,
              ease: easeInOut,
              delay: index * 0.04,
            }}
            className="block w-full focus:outline-none rounded-lg"
          >
            <div key={project.title || index} className="block w-full focus:outline-non rounded-lg transition duration-150 ease-in-out">
              <ProjectCard
                imageSrc={project.imageSrc}
                imageAlt={project.imageAlt}
                bgColor={project.bgColor}
                title={project.title}
                tags={project.tags.map((tag, index) => (
                  <Tag key={index} tag={tag} isSelected={cleanFilter === tag}/>
                ))}
                hashtags={project.hashtags}
                link={project.link}
              />
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default Filter;