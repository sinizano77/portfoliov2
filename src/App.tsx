import React from "react";
import Hero from "./components/Hero/hero";
import Navbar from "./components/Navbar/navbar";
import Sidebar from "./components/Sidebar/sidebar";
import UnderConstruction from "./components/UnderConstruction/underConstruction";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./global/GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Navbar />
        <Sidebar />
        <Hero />
        <UnderConstruction />
      </BrowserRouter>
    </>
  );
}

export default App;
