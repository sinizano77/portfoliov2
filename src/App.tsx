import React from 'react';
import GlobalFonts from './fonts/fonts';
import Hero from "./components/Hero/hero";
import Navbar from "./components/Navbar/navbar"
import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalFonts />
        <Navbar />
        <Hero />
      </BrowserRouter>
    </>
  );
}

export default App;
