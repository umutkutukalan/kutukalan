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
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { useMusicContext } from "./hooks/useMusicContext";
import Settings from "./pages/Settings";
import About from "./pages/About";
import CreateMobilApp from "./pages/CreateMobilApp";

export const App = () => {
  const { user } = useUser();
  const { currentTrack, isPlaying, pause, playTrack } = useAudioPlayer();

  const { loading } = useMusicContext();
  const { aboutLoading } = useAbout();

  // If current path starts with the secret prefix, render only CreateUser (full page)
  const secretCreateUserPrefix = "/create-user-th&a5tg8+521&6j%25qwp";
  if (location.pathname.startsWith(secretCreateUserPrefix)) {
    return <CreateUser />;
  }

  if (loading || aboutLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        <DotLottieReact
          className="w-20 h-20"
          src="https://lottie.host/c13e1dc0-f7ee-4254-835f-f023d14021b1/CsVgXfNTS6.lottie"
          loop
          autoplay
        />
      </div>
    );
  }

  return (
    <>
      <div
        className="w-full flex relative focus:outline-none focus-visible:outline-none"
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
        <div className="w-full lg:pl-15 xl:pl-10 xl:pr-95 relative">
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
            <Route path="/about" element={<About />} />
            {user?.role === "ADMIN" && (
              <>
                <Route path="/create-homecard" element={<Admin />} />
                <Route path="/create-mobile-app" element={<CreateMobilApp />} />
                <Route path="/create-music" element={<CreateMusic />} />
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
