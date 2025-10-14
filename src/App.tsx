import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./pages/Home";
import Queque from "./components/Queque";
function App() {
  return (
    <div className="w-full flex bg-[#1f0e0e]">
      <Navbar/>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Queque />
    </div>
  );
}

export default App;
