import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./fonts";
import "./index.css";
import ConfidentialitePage from "./pages/ConfidentialitePage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfidentialitePage />
  </StrictMode>
);
