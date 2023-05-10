import React from "react";
import ArtExhibition from "./ArtExhibition";
import "../../IntersectionObserver.js";
import "./about.css";
const About = () => {
  return (
    <div id="about" className="sectionAnimation">
      <div id="testimonials" className="testimonials">
        <h1 className="testimonials-h1">About</h1>
        <p className="duckText">
          Here we are at the very heart of my website, my precious animations!{" "}
          <br></br>
          Hopefully you will enjoy them while getting to know me a bit better.
        </p>
        <div className="testimonials-content">
          <ArtExhibition></ArtExhibition>
        </div>
      </div>
    </div>
  );
};
export default About;
