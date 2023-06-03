import React from "react";
import { EdipGuy } from "./EdipAvatar/EdipGuy";
import "../../IntersectionObserver.js";
import "./edipLogo.css";
import { Link } from "react-scroll";

const QuickFacts = () => {
  return (
    <div id="quickFacts" className="sectionAnimation">
      <div className="container primaryContainer mt-5">
        <h3 className="welcomeText text-black text-start mt-5 pt-5 pb-0">
          Welcome, the name is
        </h3>
        <h1 className="flexCenter text-start pt-1 mt-0">Edip Sarac</h1>

        <div className="flexCenter pb-0 mb-0" style={{ marginTop: "-6rem" }}>
          <EdipGuy></EdipGuy>
        </div>
        <div className="row welcomeText">
          <h3 className="text-start">
            I'm a <span className="text-black">full-stack developer</span>
            <br></br>
            from <span className="text-black">Sweden</span>
            <br></br>
            who enjoys <span className="text-black"> front-end</span>
            <br></br>
            and playful<span className="text-black"> web design</span>.
          </h3>
        </div>

        <Link smooth={true} to={"skills"} href="#" tabIndex={1}>
          <div className="scrollIntro">
            <div className="scrollDown"></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default QuickFacts;
