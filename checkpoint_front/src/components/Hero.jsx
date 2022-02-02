import React from "react";
/** Import de CSS */
import "./Hero.css";
/** Import des images */
import HeroImg from "../assets/images/hero.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={HeroImg} alt="hero" className="imgHero" />
    </div>
  );
};
export default Hero;
