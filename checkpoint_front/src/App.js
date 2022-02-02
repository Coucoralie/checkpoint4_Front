import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
/** Import de CSS */
import './App.css';
/** Import des composants */
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
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
      <Footer />
    </BrowserRouter>
  );
};
export default App;
