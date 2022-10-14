import { createContext, useState } from "react";

export const UbicacionesContext = createContext({
  listaUbicaciones: [],
  setListaUbicaciones: () => {}
})

export const UbicacionesProvider = ({ children }) => {
  const [listaUbicaciones, setListaUbicaciones] = useState([]);
  const value = { listaUbicaciones, setListaUbicaciones };

  return <UbicacionesContext.Provider value={value}>
    {children}
    </UbicacionesContext.Provider>;
}