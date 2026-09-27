import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./fonts";
import "./index.css";
import MentionsLegalesPage from "./pages/MentionsLegalesPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MentionsLegalesPage />
  </StrictMode>
);
