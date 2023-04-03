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
      <div
        className="sectionLine"
        style={{ backgroundColor: "var(--primary-yellow)" }}
      ></div>
      <div className="container d-block">
        <h1 className="flexCenter" style={{ color: "var(--primary-yellow" }}>
          Hey!
        </h1>

        <div className="row">
          <div className="col">
            <div className="flexCenter" style={{ marginTop: "-7.5rem" }}>
              <EdipGuy></EdipGuy>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <p className="welcomeText">
                My name is Edip Sarac and this is my résumé website.<br></br> 
                Being a web developer I want to offer a more creative and
                personal alternative in contrast to the traditional cover letter.
                <br></br>
                <br></br>
                Simply{" "}
                <span style={{ color: "var(--tint-navy)" }}>
                  {" "}
                  scroll down{" "}
                </span>{" "}
                to view more or you can use the
                <span style={{ color: "var(--tint-navy)" }}> navbar </span>.
              </p>

              <div className="row mt-3">
                <div className="col">
                  <Link
                    to={"quickFacts"}
                    className=""
                    href="#"
                    style={{ marginLeft: "1.5rem" }}
                  >
                    <button className="bg-transparent m-auto">
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        color="var(--slate)"
                        className="fntAwesome"
                        id="arrowDown"
                        style={{ transform: "scale(2)" }}
                      ></FontAwesomeIcon>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickFacts;
