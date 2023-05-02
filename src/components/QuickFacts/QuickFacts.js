import React from "react";
import { EdipGuy } from "./EdipAvatar/EdipGuy";
import "../../IntersectionObserver.js";
import "./edipLogo.css";

const QuickFacts = () => {
  return (
    <div id="quickFacts" className="sectionAnimation">
      <div className="container primaryContainer">
        <h1 data-aos="fade-down" className="flexCenter">
          Hey!<br></br>
          I'm Edip Sarac!
        </h1>

        <div
          data-aos="fade-up"
          className="flexCenter mb-lg-4 pb-0"
          style={{ marginTop: "-6rem" }}>
          <EdipGuy></EdipGuy>
        </div>
        <div
          data-aos="fade-down"
          data-aos-delay="1250"
          data-aos-duration="650"
          className="text-left mb-4"
          style={{ marginTop: "-6rem" }}>
          <h3>
            A full-stack developer
            <br></br>from Sweden who enjoys
            <br></br>front-end and playful design.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default QuickFacts;
