import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import PartenairesPage from "./pages/PartenairesPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PartenairesPage />
  </StrictMode>
);
