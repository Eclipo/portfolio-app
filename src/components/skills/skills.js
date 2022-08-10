import React, { Component } from "react";
import "../skills/skills.css";
import { IntroSkill } from "./introSkill/introSkill";
import SkillDivider from "./skillDivider/skillDivider";
import "../../IntersectionObserver.js";
import PlayRefresh from "../PlayRefresh/PlayRefresh.js";
import { Duck } from "./duck/duck.js";

class Skills extends Component {
  frontEndTheme = "frontEndTheme";
  backEndTheme = "backEndTheme";
  appTheme = "applicationsTheme";
  rolesTheme = "rolesTheme";

  render() {
    return (
      <div id="skills" className="sectionAnimation">
        <div
          className="sectionLine"
          style={{ backgroundColor: "var(--primary-blue)" }}
        ></div>
        <h1 style={{ color: "var(--primary-blue" }}>Skills</h1>
        <PlayRefresh id="SkillAnimation" playBoolean={0}></PlayRefresh>

        <div className="flexCenter">
          <IntroSkill></IntroSkill>
        </div>

        <div
          className="skillContainer"
          id="skillContainerID"
          style={{ width: "100%"}}
        >
          <table className="skillTable">
          <tbody>
            <tr>
              <td>
                <h2 className="skillCategory frontEndTheme">
                  Front <br></br> end
                </h2>
              </td>
              <td>
                <h2 className="skillCategory backEndTheme">
                  Back <br></br> end
                </h2>
              </td>

              <td>
                <h2 className="skillCategory rolesTheme d-inline-flex justify-content-center">
                  Work <br></br> roles
                </h2>
              </td>
            </tr>
            </tbody>
          </table>

          <table className="skillTable">
            <thead>
              <tr>
                <td>
                  {" "}
                  <h3
                    className="skillPointGround m-1 p-1"
                    id="Beginner"
                    style={{ marginBottom: "2%" }}
                  >
                    Noob
                  </h3>
                </td>
                <td>
                  {" "}
                  <h3
                    className="skillPointGround m-1 p-1"
                    id="Elementary"
                    style={{ marginBottom: "2%" }}
                  >
                    Basic
                  </h3>
                </td>
                <td>
                  {" "}
                  <h3
                    className="skillPointGround m-1 p-1"
                    id="Intermediate"
                    style={{ marginBottom: "2%" }}
                  >
                    Lagom
                  </h3>
                </td>
                <td>
                  {" "}
                  <h3
                    className="skillPointGround m-1 p-1"
                    id="Advanced"
                    style={{ marginBottom: "2%" }}
                  >
                    Pro
                  </h3>
                </td>
                <td>
                  {" "}
                  <h3
                    className="skillPointGround "
                    id="Expert"
                    style={{ marginBottom: "2%" }}
                  >
                    Expert
                  </h3>
                </td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <p className="skill frontEndTheme" id="skillElemAndNoob">
                    Angular
                  </p>
                </td>
                <td>
                  {" "}
                  <p className="skillPointGround" style={{ opacity: "0" }}></p>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <p className="skill frontEndTheme" id="skillElemAndNoob">
                    ReactJS
                  </p>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <p className="skill frontEndTheme" id="skillElemAndNoob">
                    Typescript
                  </p>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <p className="skill frontEndTheme" id="skillElemAndInter">
                    Javascript
                  </p>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <p className="skill frontEndTheme" id="skillElemAndInter">
                    HTML
                  </p>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <p className="skill frontEndTheme" id="skillElemAndInter">
                    CSS
                  </p>
                </td>
                <td>
                  {" "}
                  <div
                    className=" skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <p className="skill frontEndTheme" id="skillElemAndInter">
                    AnimeJS
                  </p>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
              </tr>

              <SkillDivider className="frontEndTheme"></SkillDivider>

              <tr>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <p className="skill backEndTheme" id="skillElemAndNoob">
                    Powershell
                  </p>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <p className="skill backEndTheme" id="skillElemAndInter">
                    SQL
                  </p>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <p className="skill backEndTheme">
                    C#
                  </p>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
              </tr>

              <SkillDivider className="backEndTheme"></SkillDivider>

              <tr>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <p className="skill rolesTheme">
                    Tester
                  </p>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <p className="skill rolesTheme">
                    Consultant
                  </p>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <p className="skill rolesTheme" id="skillElemAndInter">
                    Developer
                  </p>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
                <td>
                  {" "}
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}
                  ></div>
                </td>
              </tr>
              <SkillDivider className="rolesTheme"></SkillDivider>
            </tbody>
          </table>
        </div>

        <div className="container" id="duckContainerID">          
          <div className="row">
          <h2 style={{ color: "var(--primary-blue"}}>I am a duck</h2>

            <div className="flexCenter">
            
              <Duck></Duck>
            </div>
          </div>

            <div className="row">
              <p className="duckText">
                I have worked professionally with IT in various roles for seven years.  
                In my initial start as a professional software developer I had to learn a broad set of skills in order to be 
                <span className="skillHighLighted"> "Lagom" </span> (just the right amount in Swedish).<br></br><br></br> 
                Simply put as a software developer I became duck.
                <br></br><br></br> 
                <ul className="skillBullet">
                  <li>I can fly through <span className="skillHighLighted"> HTML, CSS and Javascript</span>.</li><br></br>
                  <li>I can waddle in the dale of <span className="skillHighLighted"> .Net </span>and <br></br>
                      pull off some <span className="skillHighLighted"> C#</span>.</li><br></br>
                  <li>I can even paddle among <span className="skillHighLighted">MSSQL databases</span> without drowning.</li>
                </ul>
                Being a duck has it drawbacks...<br></br>
                I am not great in any of the skills I possess... 
                <br></br>
                It sucks...
                <br></br><br></br>
                In order for me to do accomplish any work at work I seek wisdom among more experienced colleagues and 
                at the sacred temple for software developers namely <span className="skillHighLighted">StackOverflow</span>.
                <br></br><br></br>
                To read more about what I have accomplished related to software development you can check out the Major Experiences section.
               
              </p>
            </div>
          </div>
      </div>
    );
  }
}

export default Skills;
