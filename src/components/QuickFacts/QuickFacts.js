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
            Welcome to my resumé website! <br></br>
            Here you can read about me, my skills and my prior experiences. I am
            always open to consider new possibilities with potential employers,
            but I am quite picky though.
            <br></br>
            <br></br>
            <span className="highLight">Scroll down </span> to see more.
            <span className="highLight">The navbar </span> in the upper right
            corner helps you to navigate through the website but it also has
            some <span className="highLight">web tools</span> which I highly
            recommend you to try out for an enchanced experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickFacts;
