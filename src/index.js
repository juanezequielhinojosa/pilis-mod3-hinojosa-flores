import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";
import { UbicacionesProvider } from "./contexts/UbicacionesContext";
import { IdProvider } from "./contexts/IdContext";
import { FiltrosProvider } from "./contexts/FiltrosContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <UserProvider>
      <UbicacionesProvider>
        <IdProvider>
          <FiltrosProvider>
              <App /> 
          </FiltrosProvider>
        </IdProvider>
      </UbicacionesProvider>
    </UserProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
