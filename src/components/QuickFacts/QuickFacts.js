import React from "react";
import { EdipGuy } from "./EdipAvatar/EdipGuy";
import Typed from "react-typed";
import "../../IntersectionObserver.js";
import "./edipLogo.css";
import "./quickfacts.css";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const QuickFacts = () => {
  return (
    <div id="quickFacts" className="sectionAnimation">
      <div className="container primaryContainer">
        <h1 className="flexCenter">
          Hey!<br></br>
          I'm Edip Sarac!
        </h1>

        <div className="flexCenter mb-3 pb-0" style={{ marginTop: "-6.5rem" }}>
          <EdipGuy></EdipGuy>
        </div>
        <div className="flexCenter mb-0 pb-0" style={{ marginTop: "-6rem" }}>
          <p className="welcomeText">
            Welcome to my resumé website! <br></br>
            Here you can read about me, my skills and my prior experiences. I am
            always open to consider new possibilities with potential employers,
            but I am quite picky though.
            <br></br>
            <br></br>
            <span className="highLight">Scroll down </span> or use the
            <span className="highLight"> navbar </span> to view more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuickFacts;
