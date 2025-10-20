import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./pages/Home";
import Queque from "./components/Queque";
import Musics from "./pages/Musics";
import Admin from "./pages/Admin";
function App() {
  return (
    <div className="w-full flex relative">
      <Navbar />
      <div className="w-full pl-15 xl:pr-95">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Home />
              </>
            }
          />
          <Route path="/projects" element={<Home />} />
          <Route path="/musics" element={<Musics />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </div>
      <Queque />
    </div>
  );
}

export default App;
