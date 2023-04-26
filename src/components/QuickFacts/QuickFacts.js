import React from "react";
import { EdipGuy } from "./EdipAvatar/EdipGuy";
import "../../IntersectionObserver.js";
import "./edipLogo.css";

const QuickFacts = () => {
  return (
    <div id="quickFacts" className="sectionAnimation">
      <div className="container primaryContainer">
        <h1 className="flexCenter">
          Hey!<br></br>
          I'm Edip Sarac!
        </h1>

        <div className="flexCenter mb-lg-4 pb-0" style={{ marginTop: "-6rem" }}>
          <EdipGuy></EdipGuy>
        </div>
        <div className="flexCenter mb-4" style={{ marginTop: "-6rem" }}>
          <p className="welcomeText">
            This website is made by me and it is dedicated to familly, friends,
            colleagues and future employers. Simply a presentation of who I am
            and my experiences.<br></br>
            <br></br>
            You can <span className="highLight">scroll down </span> or use
            <span className="highLight"> the navbar </span> in the upper right
            corner to view more. The navbar has some{" "}
            <span className="highLight">web tools</span> I've made and it shows
            my take on web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickFacts;
