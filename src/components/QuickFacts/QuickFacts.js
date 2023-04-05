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

      <div className="container d-block">
        <h1 className="flexCenter">
          Hey!<br></br>
          I'm  Edip Sarac!
        </h1>

          <div className="flexCenter mb-0 pb-0" style={{ marginTop: "-7.5rem"}}>
              <EdipGuy></EdipGuy>  
            </div>
            <div className="flexCenter mb-0 pb-0" style={{ marginTop: "-6rem"}}>

    <p className="welcomeText">
                This is my personal website dedicated to potential employers, current colleagues or someone who wants to know more about me.
                <br></br>
                <br></br>
                You can simply{" "}
                <span style={{ color: "var(--tint-navy)" }}>
                  {" "}
                  scroll down{" "}
                </span>{" "}
                to view more or you can use the
                <span style={{ color: "var(--tint-navy)" }}> navbar </span>.
              </p>
    </div>
        
              
            </div>
          </div>
    
  );
};

export default QuickFacts;
