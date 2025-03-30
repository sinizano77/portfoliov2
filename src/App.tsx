import React from "react";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/sidebar";
import Hero from "./components/Hero/hero";
import About from "./components/About/about";
import Experience from "./components/Experience/experience";
import UnderConstruction from "./components/UnderConstruction/underConstruction";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./global/GlobalStyle";

//<UnderConstruction />
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Hero />
        <About />
        <Experience />
        <UnderConstruction />
      </BrowserRouter>
    </>
  );
}

export default App;
