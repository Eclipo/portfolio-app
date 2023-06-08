import React from "react";
import { EdipGuy } from "./EdipAvatar/EdipGuy";
import "../../IntersectionObserver.js";
import "./edipLogo.css";
import { Link } from "react-scroll";

const QuickFacts = () => {
  return (
    <div id="quickFacts" className="sectionAnimation">
      <div className="container-sm mt-3">
        <div className="row m-0">
          <div className="col m-0">
            <div className="row m-0">
              {" "}
              <h3 className="text-start text-black mb-0">
                Building web applications with
              </h3>
              <h1 className="text-start pt-0 mt-0 ">
                mindful design & solid code
              </h1>
            </div>
            <div className="row d-inline-block ">
              {" "}
              <Link smooth={true} to={"resumeOverview"} href="#" tabIndex={3}>
                <button className="skillNav float-start m-0 me-3">
                  <h4
                    className="m-auto"
                    style={{ color: "var(--primary-white)" }}>
                    RÉSUMÉ
                  </h4>
                </button>
              </Link>
              <Link smooth={true} to={"contactID"} href="#" tabIndex={6}>
                <button id="quickContact" className="skillNav float-start m-0">
                  <h4
                    className="m-auto"
                    style={{ color: "var(--primary-white)" }}>
                    CONTACT
                  </h4>
                </button>
              </Link>
              <Link smooth={true} to={"skills"} href="#" tabIndex={1}>
                <button className="scrollIntro float-start ms-3">
                  <div className="scrollDown"></div>
                </button>
              </Link>
            </div>
          </div>

          <div className="col m-0 pb-0">
            <span className="float-start">
              <EdipGuy></EdipGuy>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickFacts;
