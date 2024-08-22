import React from "react";
import Hero from "./components/Hero/hero";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/sidebar";
import About from "./components/About/about";
import UnderConstruction from "./components/UnderConstruction/underConstruction";
import { StyleSheetManager } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./global/GlobalStyle";

//<UnderConstruction />
function App() {
  return (
    <>
      <StyleSheetManager enableVendorPrefixes>
        <GlobalStyle />
        <BrowserRouter>
          <Navbar />
          <Sidebar />
          <Hero />
          <About />
          <UnderConstruction />
        </BrowserRouter>
      </StyleSheetManager>
    </>
  );
}

export default App;
