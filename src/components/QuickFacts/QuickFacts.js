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
                I build web applications with
              </h3>
              <h1 className="text-start pt-0 mt-0 ">
                mindful design & solid code
              </h1>
            </div>

            <div className="row">
              <div className="col m-0 mb-2 pb-0">
                <span className="" style={{ display: "grid", height: "17rem" }}>
                  <EdipGuy></EdipGuy>
                </span>
              </div>
              <div className="col m-auto" id="heroBtns">
                {" "}
                <Link smooth={true} to={"experiencesID"} href="#" tabIndex={2}>
                  <button className="skillNav float-start ms-2 me-2">
                    <h4
                      className="m-auto"
                      style={{ color: "var(--primary-white)" }}>
                      Experiences
                    </h4>
                  </button>
                </Link>
                <Link smooth={true} to={"contactID"} href="#" tabIndex={6}>
                  <button
                    id="quickContact"
                    className="skillNav text-start float-start m-0">
                    <h4
                      className="m-auto"
                      style={{ color: "var(--primary-white)" }}>
                      CONTACT
                    </h4>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickFacts;
