import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./fonts";
import "./index.css";
import ConditionsPage from "./pages/ConditionsPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConditionsPage />
  </StrictMode>
);
