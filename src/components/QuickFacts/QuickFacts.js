import React from "react";
import { EdipGuy } from "./EdipAvatar/EdipGuy";
import "../../IntersectionObserver.js";
import "./edipLogo.css";

const QuickFacts = () => {
  return (
    <div id="quickFacts" className="sectionAnimation">
      <div className="container primaryContainer">
        <h1 className="flexCenter">
          Welcome! <br></br>I'm Edip
        </h1>

        <div className="flexCenter mb-lg-4 pb-0" style={{ marginTop: "-6rem" }}>
          <EdipGuy></EdipGuy>
        </div>
        <div className="text-left mb-4" style={{ marginTop: "-6rem" }}>
          <h3 className="text-start">
            A full-stack developer from Sweden who enjoys front-end and playful
            design.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default QuickFacts;
