import React, { Component } from "react";
import "./experiences.css";
import "../../IntersectionObserver.js";
import { ExperienceAnimation } from "./experienceAnimation.js";
import { animate } from "./experienceFunctions.js";
import { KnucklesSvg } from "./KnucklesSvg/KnucklesSvg.js";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlayRefresh from "../PlayRefresh/PlayRefresh.js";

class Experiences extends Component {
  expAnime = new ExperienceAnimation();
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.playAnimation = this.playAnimation.bind(this);
    this.arrowLeft = this.arrowLeft.bind(this);
    this.arrowRight = this.arrowRight.bind(this);
  }

  handleClick(event) {
    animate(event.currentTarget.id);
  }

  playAnimation() {
    this.expAnime.playOrStop(true);
  }

  arrowLeft(event) {
    alert("No scrolling here. I'm just an arrow after all.");
  }

  arrowRight(event) {
    alert("I'm just an arrow pointing to the right. I'm not scrolling around.");
  }

  render() {
    return (
      <div className="sectionAnimation" id="experiencesID">
      <div className='sectionLine' style={{backgroundColor:'var(--primary-purple)'}}></div>

            <h1 style={{ color: "var(--primary-purple)" }}>
              Major Experiences
            </h1>
            <PlayRefresh
            className="mb-5"
              id="ExperienceAnimation"
              playBoolean={true}
            ></PlayRefresh>

            <div className="d-flex justify-content-center" id="KnucklesContainerID">
              <KnucklesSvg></KnucklesSvg>
            </div>

            <div className="container row" id="expMenu">
              <div className="row mx-auto ">
                <div className="col">
                  <FontAwesomeIcon
                    className="scrollArrow"
                    onClick={this.arrowLeft}
                    icon={faArrowLeft}
                    color="var(--primary-purple)"
                  ></FontAwesomeIcon>
                </div>

                <div className="col-8">
                  <p className="header3Tech infoTech mx-auto">
                    Click on one of the major experience to see its content.<br></br>If you have a smaller screen then you
                    can scroll to left and right on the major experiences.{" "}
                  </p>
                </div>

                <div className="col">
                  <FontAwesomeIcon
                    className="scrollArrow"
                    onClick={this.arrowRight}
                    icon={faArrowRight}
                    color="var(--primary-purple)"
                  ></FontAwesomeIcon>
                </div>
              </div>

              <table
                className="overflow-auto d-block mx-auto justify-content-center"
                id="expCategoryMenu"
              >
                <tr>
                  <td>
                    <div
                      className="col techCategory"
                      id="fintech"
                      onClick={this.handleClick}
                    >
                      <h2>Fintech Industry</h2>
                    </div>
                    <div className="scrollLine" id="fintech_scrollLine"></div>
                  </td>

                  <td>
                    <div
                      className="col techCategory"
                      id="stockholm"
                      onClick={this.handleClick}
                    >
                      <h2>City of Stockholm</h2>
                    </div>
                    <div className="scrollLine" id="stockholm_scrollLine"></div>
                  </td>
                  <td>
                    <div
                      className="col techCategory"
                      id="falu"
                      onClick={this.handleClick}
                    >
                      <h2>Falu Municipality</h2>
                    </div>
                    <div className="scrollLine" id="falu_scrollLine"></div>
                  </td>
                  <td>
                    <div
                      className="col techCategory"
                      id="motala"
                      onClick={this.handleClick}
                    >
                      <h2>Motala Municipality</h2>
                    </div>
                    <div className="scrollLine" id="motala_scrollLine"></div>
                  </td>
                </tr>
              </table>
            </div>

            <div className="container expTable expInfo mb-2" id="_container">
              <div className="row expInfo" id="_periodSystem">
                <div className="row">
                  <h4 className="header3Tech">Employer:</h4>

                  <h4
                    className="header3Tech"
                    style={{ color: "var(--primary-light-green)" }}
                  >
                    CGI Sverige AB
                  </h4>
                </div>

                <div className="row">
                  <h4 className="header3Tech">Customer:</h4>
                  <h4 className="header3Tech">
                    <a className="link" href="" target="_blank" id="linkID"></a>
                  </h4>
                </div>

                <div className="row">
                  <h4 className="header3Tech">Role:</h4>
                  <h4
                    className="header3Tech"
                    id="jobTitleID"
                    style={{ color: "var(--primary-light-green)" }}
                  ></h4>
                </div>

                <span className="row">
                  <h4 className="header3Tech">Period:</h4>
                  <h4
                    className="header3Tech"
                    id="period"
                    style={{ color: "var(--primary-light-green)" }}
                  ></h4>
                </span>
                <span className="row">
                  <h4 className="header3Tech">System:</h4>
                  <h4
                    className="header3Tech"
                    id="system"
                    style={{ color: "var(--primary-light-green)" }}
                  ></h4>
                </span>
                <div className="techUnderLine mt-2 mb-3"></div>

              </div>

              <div className="row" id="_periodSystem">
              <h2 className="headerTech justify-content-start">0%</h2>
                <h2 className="headerTech mx-auto">Tech</h2>
                <h2 className="headerTech justify-content-end">100%</h2>

                {/* <p className='techUnderLine'></p> */}

                <div className="techSkillContainer" id="stockholm_tech">
                  <div className="techRow" id="stockholm_sql">
                    <h4 className="techSkill">MS SQL</h4>
                  </div>
                  <div className="techRow" id="stockholm_ps1">
                    <h4 className="techSkill">Powershell</h4>
                  </div>
                  <div className="techRow" id="stockholm_csharp">
                    <h4 className="techSkill">C#</h4>
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
                    <h4 className="techSkill">Angular</h4>
                  </div>
                </div>

                <div className="techSkillContainer" id="falu_tech">
                  <div className="techRow" id="falu_sql">
                    <h4 className="techSkill">MS SQL</h4>
                  </div>
                  <div className="techRow" id="falu_javascript">
                    <h4 className="techSkill">Javascript</h4>
                  </div>
                  <div className="techRow" id="falu_htmlcss">
                    <h4 className="techSkill">HTML/CSS</h4>
                  </div>
                  <div className="techRow" id="falu_csharp">
                    <h4 className="techSkill">C#</h4>
                  </div>
                </div>

                <div className="techSkillContainer" id="motala_tech">
                  <div className="techRow" id="falu_sql">
                    <h4 className="techSkill">MS SQL</h4>
                  </div>
                  <div className="techRow" id="falu_javascript">
                    <h4 className="techSkill">Javascript</h4>
                  </div>
                  <div className="techRow" id="falu_htmlcss">
                    <h4 className="techSkill">HTML/CSS</h4>
                  </div>
                  <div className="techRow" id="falu_csharp">
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
                  <br></br>

                  <li className="row">
                    <p className="li_icon" id="_liTwo">
                      ▹
                    </p>
                    <p className="col-md-auto" id="_descTwo"></p>
                  </li>
                  <br></br>

                  <li className="row" id="_liThree">
                    <p className="li_icon" id="_liThreeIcon">
                      ▹
                    </p>
                    <p className="col-md-auto" id="_descThree"></p>
                  </li>
                  <br></br>

                  <li className="row" id="_liFour">
                    <p className="li_icon">▹</p>
                    <p className="col" id="_descFour"></p>
                  </li>
                  <br></br>
                </ul>
              </div>
             
              </div>
            </div>
    );
  }
}

export default Experiences;
