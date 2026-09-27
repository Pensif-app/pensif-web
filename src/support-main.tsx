import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./fonts";
import "./index.css";
import SupportPage from "./pages/SupportPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SupportPage />
  </StrictMode>
);
