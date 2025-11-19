import Home from "./pages/index.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import AboutPage from "./pages/AboutPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";

function App(){
  return (
    <BrowserRouter  basename="/MyPortfolio">
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<AboutPage/>}/>
        <Route path="/Portfolio" element={<PortfolioPage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;