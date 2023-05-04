import React from "react";
import ArtExhibition from "./ArtExhibition";
import "../../IntersectionObserver.js";
import "./about.css";
const About = () => {
  return (
    <div id="aboutMe" className="sectionAnimation">
      <div id="testimonials" className="testimonials">
        <h1 className="testimonials-h1">About</h1>
        <p className="duckText">
          Here we are at the very heart of my website. <br></br>
          My precious animations about me and hopefully you will enjoy them.
        </p>
        <div className="testimonials-content">
          <ArtExhibition></ArtExhibition>
        </div>
      </div>
    </div>
  );
};
export default About;
