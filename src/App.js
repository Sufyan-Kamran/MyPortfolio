import Home from "./pages/index.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import AboutPage from "./pages/AboutPage.jsx";
import PortfolioPage from "./pages/PortfolioPage.jsx";

function App(){
  return (
    <>
      <Navbar />
      <Home />
    </>
    

  )
}

export default App;