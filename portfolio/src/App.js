import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/HomePage";
// import About from "./pages/About";
// import Skills from "./pages/Skills";
// import Projects from "./pages/Projects";
// import Experience from "./pages/Experience";
// import Contact from "./pages/Contact";

function App() {
  return (
    <div className=" text-gray-900">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      

      <Footer />
    </div>
  );
}

export default App;
