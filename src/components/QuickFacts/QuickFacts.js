import React from "react";
import { EdipGuy } from "./EdipAvatar/EdipGuy";
import "../../IntersectionObserver.js";
import "./edipLogo.css";
import { Link } from "react-scroll";

const QuickFacts = () => {
  return (
    <div id="quickFacts" className="sectionAnimation">
      <div className="container primaryContainer mt-5">
        <div className="row m-0">
          <div className="col-6 m-0">
            <div className="row m-0">
              {" "}
              <h3 className="text-start text-black mb-0">
                Building web applications with
              </h3>
              <h1 className="text-start pt-0 mt-0 ">
                thoughtful design and solid code
              </h1>
            </div>
            <div className="row d-inline-block ">
              {" "}
              <Link smooth={true} to={"resumeOverview"} href="#" tabIndex={3}>
                <button className="skillNav float-start m-0">
                  <h4
                    className="m-auto"
                    style={{ color: "var(--primary-white)" }}>
                    RÉSUMÉ
                  </h4>
                </button>
              </Link>
              <Link smooth={true} to={"contactID"} href="#" tabIndex={6}>
                <button id="quickContact" className="skillNav float-start">
                  <h4
                    className="m-auto"
                    style={{ color: "var(--primary-white)" }}>
                    CONTACT
                  </h4>
                </button>
              </Link>
            </div>
          </div>

          <div className="col d-flex m-0">
            <span className="float-start mt-5 ">
              <EdipGuy></EdipGuy>
            </span>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col">
            {" "}
            <Link smooth={true} to={"skills"} href="#" tabIndex={1}>
              <div className="scrollIntro">
                <div className="scrollDown"></div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickFacts;
