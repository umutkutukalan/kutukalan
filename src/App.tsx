import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";
import Home from "./pages/Home";
function App() {
  return (
    <div className="w-full flex bg-[#2f1411]">
      <Navbar/>
      <div className="w-full">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
