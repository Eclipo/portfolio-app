import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";
import "../../IntersectionObserver.js";
import "./about.css";
const Testimonials = () => {
  return (
    <div id="aboutMe" className="sectionAnimation">
      <div id="testimonials" className="testimonials">
        <h1 className="testimonials-h1">About</h1>
        <div className="testimonials-content">
          <TestimonialsCarousel></TestimonialsCarousel>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
