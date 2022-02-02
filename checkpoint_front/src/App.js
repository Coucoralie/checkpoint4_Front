import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** Import des composants */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
/** Import des pages */
import Home from "./pages/Home";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
export default App;
