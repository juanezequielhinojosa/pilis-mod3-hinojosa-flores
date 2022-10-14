import { createContext, useState } from "react";

export const IdContext = createContext({
  idTarjeta: null,
  setIdTarjeta: () => {}
})

export const IdProvider = ({ children }) => {
  const [idTarjeta, setIdTarjeta] = useState(13);
  const value = { idTarjeta, setIdTarjeta };

  return <IdContext.Provider value={value}>
    {children}
    </IdContext.Provider>;
}