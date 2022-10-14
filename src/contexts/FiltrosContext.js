import { createContext, useState } from "react";

export const FiltrosContext = createContext({
  filters: {},
  setFilters: () => {}
})

export const FiltrosProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    searchField: '',
  });
  const value = { filters, setFilters };

  return <FiltrosContext.Provider value={value}> 
  {children}
  </FiltrosContext.Provider>;
}