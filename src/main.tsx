import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import { MusicProvider } from "./context/MusicContext.tsx";
import { AudioPlayerProvider } from "./context/AudioPlayerContext.tsx";
import { AboutProvider } from "./context/AboutContext.tsx";

createRoot(document.getElementById("root")!).render(
  <AboutProvider>
    <MusicProvider>
      <AudioPlayerProvider>
        <StrictMode>
          <Router>
            <App />
          </Router>
        </StrictMode>
      </AudioPlayerProvider>
    </MusicProvider>
  </AboutProvider>
);
