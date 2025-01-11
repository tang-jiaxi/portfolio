"use client"; 

import React, { useEffect, useRef, useContext } from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"; 
import Tag from './Tag'; 
import _debounce from "lodash/debounce";
import { FilterContext } from './FilterContext';

const Filter = () => {
  const filterRef = useRef<HTMLDivElement>(null);
  const { filter, setFilter } = useContext(FilterContext);
  const firstMount = useRef(false);
  const cleanFilter = filter.split("#")[0];

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
    if (selectedFilter) {
      setFilter(selectedFilter);
    } else {
      setFilter("ShowAll");
    }
  }, 100);

  return (
    <div id="filter" ref={filterRef} className="flex flex-col gap-16 px-4">
      <div className="border border-black p-2 sm:p-4 inline-block rounded-3xl mx-auto bg-white">
        <ToggleGroup 
          type="single" 
          onValueChange={handleTagChange} 
          value={cleanFilter} 
          className="flex flex-wrap justify-center gap-0"        
        >
          <ToggleGroupItem value="ShowAll" aria-label="Toggle Show All" className="hover:bg-transparent data-[state=on]:bg-transparent">
            <Tag
              isSelected={cleanFilter === "ShowAll"}
              tag="ShowAll"
            />
          </ToggleGroupItem>
          <ToggleGroupItem value="UX" aria-label="Toggle UX" className="hover:bg-transparent data-[state=on]:bg-transparent">
            <Tag
              isSelected={cleanFilter === "UX"}
              tag="UX"
            />
          </ToggleGroupItem>
          <ToggleGroupItem value="CS" aria-label="Toggle CS" className="hover:bg-transparent data-[state=on]:bg-transparent">
            <Tag
              isSelected={cleanFilter === "CS"}
              tag="CS"
            />
          </ToggleGroupItem>
          <ToggleGroupItem value="GDES" aria-label="Toggle GDES" className="hover:bg-transparent data-[state=on]:bg-transparent">
            <Tag
              isSelected={cleanFilter === "GDES"}
              tag="GDES"
            />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
};

export default Filter;