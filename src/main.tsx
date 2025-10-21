import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { MusicProvider } from "./context/MusicContext.tsx";

createRoot(document.getElementById("root")!).render(
  <MusicProvider>
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>
  </MusicProvider>
);
