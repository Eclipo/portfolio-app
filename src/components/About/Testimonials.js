import React from "react";
import TestimonialsCarousel from "./TestimonialsCarousel";
import "../../IntersectionObserver.js";
import "./about.css";
const Testimonials = () => {
  return (
    <div id="aboutMe" className="sectionAnimation">
      <div id="testimonials" className="testimonials">
        <h1
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          className="testimonials-h1">
          About
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-easing="ease-in-sine"
          className="testimonials-content">
          <TestimonialsCarousel></TestimonialsCarousel>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
