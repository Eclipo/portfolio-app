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
      <div className="sectionAnimation container-sm" id="experiencesID">
        <h2>Selected work</h2>
        <hr></hr>

        <div className="smallScreen">
          <FontAwesomeIcon
            icon={faArrowLeftLong}
            className="scrollIcon"></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faHand}
            className="scrollIcon"></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faArrowRightLong}
            className="scrollIcon"></FontAwesomeIcon>
        </div>

        <p className="smallScreen">
          Scroll the selected work horizontally to view more.
        </p>
        <div className="container-sm">
          <div className="row">
            <div className="container-sm row" id="expMenu">
              <table
                className="d-block mx-auto justify-content-center"
                id="expCategoryMenu">
                <tbody>
                  <tr>
                    <td>
                      <button
                        className="col techCategory"
                        id="fintech"
                        onClick={this.handleClick}>
                        <h3>Fintech Company</h3>
                      </button>
                      <div className="scrollLine" id="fintech_scrollLine"></div>
                    </td>

                    <td>
                      <button
                        className="col techCategory"
                        id="municipality_3"
                        onClick={this.handleClick}>
                        <h3>#3 Municipality</h3>
                      </button>

                      <div
                        className="scrollLine"
                        id="municipality_3_scrollLine"></div>
                    </td>
                    <td>
                      <button
                        className="col techCategory"
                        id="municipality_2"
                        onClick={this.handleClick}>
                        <h3>#2 Municipality</h3>
                      </button>
                      <div
                        className="scrollLine"
                        id="municipality_2_scrollLine"></div>
                    </td>

                    <td>
                      <button
                        className="col techCategory"
                        id="municipality_1"
                        onClick={this.handleClick}>
                        <h3>#1 Municipality</h3>
                      </button>
                      <div
                        className="scrollLine"
                        id="municipality_1_scrollLine"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div
              className="d-block container-md expTable expInfo mb-2"
              id="_container">
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

              <div className="row" id="_periodSystem">
                <h2 className="headerTech justify-content-start">0%</h2>
                <h2 className="headerTech mx-auto">Time</h2>
                <h2 className="headerTech justify-content-end">100%</h2>

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
                <div className="techUnderLine mt-2 mb-3"></div>
              </div>

              <div className="techText">
                <ul className="">
                  <li className="row">
                    <p className="li_icon">▹</p>
                    <p className="col-md-auto" id="_descOne"></p>
                  </li>

                  <li className="row">
                    <span className="li_icon" id="_liTwo">
                      ▹
                    </span>
                    <p className="col-md-auto" id="_descTwo"></p>
                  </li>

                  <li className="row" id="_liThree">
                    <p className="li_icon" id="_liThreeIcon">
                      ▹
                    </p>
                    <p className="col-md-auto" id="_descThree"></p>
                  </li>

                  <li className="row" id="_liFour">
                    <p className="li_icon">▹</p>
                    <p className="col" id="_descFour"></p>
                  </li>
                </ul>
              </div>
              <span className="d-block">
                <p id="confidentialParagraph">
                  *Due to confidentiality I cannot share the name of the
                  customer.
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Experiences;
