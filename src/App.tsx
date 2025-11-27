import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./pages/Home";
import Queque from "./components/Queque";
import Musics from "./pages/Musics";
import Admin from "./pages/Admin";
import CreateMusic from "./pages/CreateMusic";
import CreateUser from "./pages/CreateUser";
import CreateContent from "./pages/CreateContent";
import Projects from "./pages/Projects";
import { useUser } from "./hooks/useUserContext";
import ProjectDetail from "./pages/ProjectDetail";
import Blogs from "./pages/Blogs";
import BlogDetail from "./pages/BlogDetail";

function App() {
  const { user } = useUser();

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
            <Route path="/projects" element={<Projects />} />
            <Route path="/projeler/:projectSlug" element={<ProjectDetail />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/bloglar/:blogSlug" element={<BlogDetail />} />
            <Route path="/musics" element={<Musics />} />
            {user?.role === "ADMIN" && (
              <>
                <Route path="/create-homecard" element={<Admin />} />
                <Route path="/create-music" element={<CreateMusic />} />
                <Route path="/create-content" element={<CreateContent />} />
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
