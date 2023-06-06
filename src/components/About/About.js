import React from "react";
import ArtExhibition from "./ArtExhibition";
import "../../IntersectionObserver.js";
import "./about.css";
const About = () => {
  return (
    <div id="about" className="sectionAnimation">
      <h2>About</h2>
      <p className="duckText mt-3 mb-3">
        Here we are at the very heart of my website, my precious animations! I
        hope you will enjoy them while getting to know me a bit better.
      </p>
      <div id="testimonials" className="testimonials">
        <div className="testimonials-content">
          <ArtExhibition></ArtExhibition>
        </div>
      </div>
    </div>
  );
};
export default About;
