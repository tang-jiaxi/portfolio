import { createContext } from 'react';

export interface FilterContextType {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const defaultValue: FilterContextType = {
  filter: "ShowAll",
  setFilter: () => {}
};

export const FilterContext = createContext<FilterContextType>(defaultValue);