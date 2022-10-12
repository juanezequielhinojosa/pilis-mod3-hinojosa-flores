import { createContext, useState } from "react";

export const ClimasContext = createContext({
  listaClimas: [],
  setListaClimas: () => {}
})

export const ClimasProvider = ({ children }) => {
  const [listaClimas, setListaClimas] = useState([]);
  const value = { listaClimas, setListaClimas };

  return <ClimasContext.Provider value={value}>
    {children}
    </ClimasContext.Provider>;
}