import Home from "./pages/index.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import AboutPage from "./pages/AboutPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="About" element={<AboutPage />} />
        <Route path="Portfolio" element={<PortfolioPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
