import React from 'react';
import Hero from "./components/Hero/hero";
import Navbar from "./components/Navbar/navbar";
import { BrowserRouter } from 'react-router-dom';
import { GlobalStyle } from './global/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle/>
      <BrowserRouter>
        <Navbar />
        <Hero />
      </BrowserRouter>
    </>
  );
}

export default App;
