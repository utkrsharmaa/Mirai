import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import AreaContextProvider from "./hooks/activeAreaContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AreaContextProvider>
      <App />
    </AreaContextProvider>
  </StrictMode>
);
