import React from "react";
import HeroImage from "../components/heroPage/heroImage";
import HeroContent from "../components/heroPage/HeroContent";
import "../scss/hero.scss";
const Hero = () => {
  return (
    <div className="hero">
      <HeroImage />
      <HeroContent />
    </div>
  );
};

export default Hero;
