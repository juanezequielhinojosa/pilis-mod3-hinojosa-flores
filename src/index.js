import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { ClimasProvider } from "./context/ClimasContext";
import { IdProvider } from "./context/idContext";
import { FiltrosProvider } from "./context/FiltrosContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <UserProvider>
      <ClimasProvider>
        <IdProvider>
          <FiltrosProvider>
              <App /> 
          </FiltrosProvider>
        </IdProvider>
      </ClimasProvider>
    </UserProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
