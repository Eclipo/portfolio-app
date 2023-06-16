import React from "react";
import ArtExhibition from "./ArtExhibition";
import "../../IntersectionObserver.js";
import "./about.css";
const About = () => {
  return (
    <div id="about" className="sectionAnimation">
      <h2>About</h2>
      <div id="testimonials" className="testimonials">
        <div className="testimonials-content">
          <ArtExhibition></ArtExhibition>
        </div>
      </div>
    </div>
  );
};
export default About;
