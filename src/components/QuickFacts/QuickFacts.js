import React from "react";
import { EdipGuy } from "./EdipAvatar/EdipGuy";
import "../../IntersectionObserver.js";
import "./edipLogo.css";
import { Link } from "react-scroll";

const QuickFacts = () => {
  return (
    <div id="quickFacts" className="sectionAnimation">
      <div className="container primaryContainer mt-5">
        
        <div className="row">
          <div className="col-6">

          
          <h3 className="text-start text-black mb-0">
          Building web applications with
          </h3>
          <h1 className="text-start pt-0 mt-0 ">mindful web design and solid code</h1>
          </div>
            <div className="col d-flex">
              <span className="mx-auto mt-5">
              <EdipGuy></EdipGuy>    

              </span>
            </div>
          
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
