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
import GlobalMusicBar from "./components/musics/GlobalMusicBar";
import { useAudioPlayer } from "./context/AudioPlayerContext";
import { useAbout } from "./hooks/useAbout";
import Settings from "./pages/Settings";
import Competencies from "./pages/Competencies";
import CreateMobilApp from "./pages/CreateMobilApp";
import LoadingScreen from "./components/LoadingScreen";
import { UpdateMusic } from "./pages/UpdateMusic";

export const App = () => {
  const { user } = useUser();
  const { currentTrack, isPlaying, pause, playTrack } = useAudioPlayer();

  const { aboutLoading } = useAbout();

  // If current path starts with the secret prefix, render only CreateUser (full page)
  const secretCreateUserPrefix = "/kutukalan-login";
  if (location.pathname.startsWith(secretCreateUserPrefix)) {
    return <CreateUser />;
  }

  if (aboutLoading) {
    return <LoadingScreen key={location.pathname} />;
  }

  return (
    <>
      <div
        className="w-full flex relative focus:outline-none focus-visible:outline-none h-full"
        tabIndex={0}
        onKeyDown={(e) => {
          if (
            (e.code === "Space" || e.key === " ") &&
            !location.pathname.startsWith("/create") &&
            !location.pathname.startsWith("/settings")
          ) {
            e.preventDefault();
            if (isPlaying) {
              pause();
            } else if (currentTrack) {
              playTrack(currentTrack);
            }
          }
        }}
      >
        <Navbar />
        <div className="w-full h-full lg:pl-15 2xl:pl-0 xl:pr-[clamp(15rem,30vw,45rem)] relative">
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
            <Route path="/projects/:projectSlug" element={<ProjectDetail />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:blogSlug" element={<BlogDetail />} />
            <Route path="/musics" element={<Musics />} />
            <Route path="/competencies" element={<Competencies />} />
            {user?.role === "ADMIN" && (
              <>
                <Route path="/create-homecard" element={<Admin />} />
                <Route path="/create-mobile-app" element={<CreateMobilApp />} />
                <Route path="/create-music" element={<CreateMusic />} />
                <Route path="/update-music/:id" element={<UpdateMusic />} />
                <Route path="/create-content" element={<CreateContent />} />
                <Route path="/settings" element={<Settings />} />
              </>
            )}
          </Routes>
        </div>
        <Queque />
      </div>
      {currentTrack && <GlobalMusicBar />}
    </>
  );
};

export default App;
