import React, { Component, useState } from "react";
import "./experiences.css";
import "../../IntersectionObserver.js";
import { animate } from "./experienceFunctions.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeftLong,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import { faHand } from "@fortawesome/free-solid-svg-icons";

class Experiences extends Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    animate(event.currentTarget.id);
  }

  render() {
    return (
      <div className="sectionAnimation container-sm p-0" id="experiencesID">
        <h2>Experiences</h2>
        <hr></hr>

        <div className="container-sm p-0 m-0 mx-auto">
          <div className="resumeTable w-100 m-0 p-0 row">
            <div className="align-items-center resumeNavMenu" id="expMenu">
              <div className="resumeNavRow flex-row-lg" id="expCategoryMenu">
                <button
                  className="row col-lg techCategory"
                  id="fintech"
                  onClick={this.handleClick}>
                  <h3 className="resumeNavRow">Fintech Company</h3>
                </button>

                <button
                  className="row col-lg techCategory"
                  id="municipality_3"
                  onClick={this.handleClick}>
                  <h3 className="resumeNavRow">#3 Municipality</h3>
                </button>

                <button
                  className="row col-lg techCategory"
                  id="municipality_2"
                  onClick={this.handleClick}>
                  <h3 className="resumeNavRow">#2 Municipality</h3>
                </button>

                <button
                  className="row col-lg techCategory"
                  id="municipality_1"
                  onClick={this.handleClick}>
                  <h3 className="resumeNavRow">#1 Municipality</h3>
                </button>
              </div>
            </div>

            <div className="container-md expTable expInfo mb-2" id="_container">
              <div
                className="row row-cols-2 row-cols-lg-5 row-cols-md-2 row-cols-sm-2 row-cols-xs-2 expInfo"
                id="_periodSystem">
                <div className="col">
                  <span className="periodColContainer">
                    <h4 className="header3Tech pb-0 mb-0">Employer:</h4>

                    <h4
                      className="header3Tech pt-0 mt-0"
                      style={{ color: "var(--darkest-slate)" }}>
                      CGI Sverige AB
                    </h4>
                  </span>
                </div>

                <div className="col">
                  <span className="periodColContainer">
                    <h4 className="header3Tech pb-0 mb-0">Customer:</h4>

                    <h4
                      className="header3Tech pt-0 mt-0"
                      id="linkID"
                      style={{ color: "var(--darkest-slate)" }}></h4>
                  </span>
                </div>

                <div className="col m-0 p-0">
                  <span className="periodColContainer">
                    <h4 className="header3Tech pb-0 mb-0">Period (MM/YY):</h4>

                    <h4
                      className="header3Tech pt-0 mt-0"
                      id="period"
                      style={{ color: "var(--darkest-slate)" }}></h4>
                  </span>
                </div>

                <div className="col">
                  <span className="periodColContainer">
                    <h4 className="header3Tech pb-0 mb-0">Role:</h4>

                    <h4
                      className="header3Tech pt-0 mt-0"
                      id="jobTitleID"
                      style={{ color: "var(--darkest-slate)" }}></h4>
                  </span>
                </div>

                <div className="col">
                  <span className="periodColContainer">
                    <h4 className="header3Tech pb-0 mb-0">System:</h4>
                    <h4
                      className="header3Tech pt-0 mt-0"
                      id="system"
                      style={{ color: "var(--darkest-slate)" }}></h4>
                  </span>
                </div>

                <div className="techUnderLine mt-2 mb-3"></div>
              </div>

              <div className="row m-0 float-left" id="_periodSystem">
                <h3 className="m-0 headerTech justify-content-start">0%</h3>
                <h3 className="m-0 headerTech mx-auto">Time</h3>
                <h3 className="m-0 headerTech justify-content-end">100%</h3>
              </div>

              <div className="techSkillContainer" id="municipality_3_tech">
                <div className="techRow" id="municipality_3_csharp">
                  <h4 className="techSkill">C#</h4>
                </div>
                <div className="techRow" id="municipality_3_ps1">
                  <h4 className="techSkill">Powershell</h4>
                </div>
                <div className="techRow" id="municipality_3_sql">
                  <h4 className="techSkill">MS SQL</h4>
                </div>
              </div>

              <div className="techSkillContainer" id="fintech_tech">
                <div className="techRow" id="fintech_csharp">
                  <h4 className="techSkill">C#</h4>
                </div>
                <div className="techRow" id="fintech_css">
                  <h4 className="techSkill">CSS</h4>
                </div>
                <div className="techRow" id="fintech_angular">
                  <h4 className="techSkill">HTML</h4>
                </div>
                <div className="techRow" id="fintech_angular">
                  <h4 className="techSkill">Typescript</h4>
                </div>
                <div className="techRow" id="fintech_angular">
                  <h4 className="techSkill">Angular</h4>
                </div>
              </div>

              <div className="techSkillContainer" id="municipality_2_tech">
                <div className="techRow" id="municipality_2_sql">
                  <h4 className="techSkill">MS SQL</h4>
                </div>
                <div className="techRow" id="municipality_2_javascript">
                  <h4 className="techSkill">Javascript</h4>
                </div>
                <div className="techRow" id="municipality_2_htmlcss">
                  <h4 className="techSkill">HTML/CSS</h4>
                </div>
                <div className="techRow" id="municipality_2_csharp">
                  <h4 className="techSkill">C#</h4>
                </div>
              </div>

              <div className="techSkillContainer" id="municipality_1_tech">
                <div className="techRow" id="municipality_2_sql">
                  <h4 className="techSkill">MS SQL</h4>
                </div>
                <div className="techRow" id="municipality_2_javascript">
                  <h4 className="techSkill">Javascript</h4>
                </div>
                <div className="techRow" id="municipality_2_htmlcss">
                  <h4 className="techSkill">HTML/CSS</h4>
                </div>
                <div className="techRow" id="municipality_2_csharp">
                  <h4 className="techSkill">C#</h4>
                </div>
              </div>

              <div className="row techText">
                <ul className="m-0 p-0">
                  <li className="row">
                    <p className="li_icon"></p>
                    <p className="col" id="_descOne"></p>
                  </li>

                  <li className="row">
                    <p className="li_icon" id="_liTwo"></p>
                    <p className="col" id="_descTwo"></p>
                  </li>

                  <li className="row" id="_liThree">
                    <p className="li_icon" id="_liThreeIcon"></p>
                    <p className="col" id="_descThree"></p>
                  </li>

                  <li className="row" id="_liFour">
                    <p className="li_icon"></p>
                    <p className="col" id="_descFour"></p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row">
              <p id="confidentialParagraph">
                *Due to confidentiality I cannot share the name of the customer.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experiences;
