import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./pages/Home";
import Queque from "./components/Queque";
import Musics from "./pages/Musics";
import Admin from "./pages/Admin";
import CreateMusic from "./pages/CreateMusic";
import ProjectDetail from "./components/yzlm-project/ProjectDetail";
import { useState } from "react";
import CreateUser from "./pages/CreateUser";

function App() {
  const [user] = useState("ADMIN");
  const location = useLocation();

  // If current path starts with the secret prefix, render only CreateUser (full page)
  const secretCreateUserPrefix = "/create-user-th&a5tg8+521&6j%25qwp";
  if (location.pathname.startsWith(secretCreateUserPrefix)) {
    return <CreateUser />;
  }

  return (
    <>
      <div className="w-full flex relative">
        <Navbar />
        <div className="w-full pl-15 xl:pr-95 relative">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                </>
              }
            />
            <Route path="/projects" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/musics" element={<Musics />} />
            {user === "ADMIN" && (
              <>
                <Route path="/admin" element={<Admin />} />
                <Route path="/create-music" element={<CreateMusic />} />
              </>
            )}
          </Routes>
        </div>
        <Queque />
      </div>
    </>
  );
}

export default App;
