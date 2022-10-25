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
          className="container-sm skillContainer"
          id="skillContainerID"
          
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
                  JOB<br></br> roles
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
                    className="skillPointGround"
                    id="Beginner"
                    style={{ marginBottom: "2%" }}
                  >
                    Noob
                  </h3>
                </td>
                <td>
                  {" "}
                  <h3
                    className="skillPointGround"
                    id="Elementary"
                    style={{ marginBottom: "2%" }}
                  >
                    Basic
                  </h3>
                </td>
                <td>
                  {" "}
                  <h3
                    className="skillPointGround"
                    id="Intermediate"
                    style={{ marginBottom: "2%" }}
                  >
                    Lagom
                  </h3>
                </td>
                <td>
                  {" "}
                  <h3
                    className="skillPointGround"
                    id="Advanced"
                    style={{ marginBottom: "2%" }}>
                    Pro
                  </h3>
                </td>
                <td>
                  {" "}
                  <h3
                    className="skillPointGround "
                    id="Expert"
                    style={{ marginBottom: "2%" }}>
                    Legend
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
                  <p className="skill frontEndTheme">
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
                  <p className="skill frontEndTheme">
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
                  <p className="skill frontEndTheme">
                    Redux
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
                    TypeScript
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

              {/* <SkillDivider className="frontEndTheme"></SkillDivider> */}

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

              {/* <SkillDivider className="backEndTheme"></SkillDivider> */}

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
              {/* <SkillDivider className="rolesTheme"></SkillDivider> */}
            </tbody>
          </table>
        </div>
      
        <div className="container-sm" id="duckContainerID">          
          <div className="row">
          <h2 style={{ color: "var(--primary-blue"}}>I am a duck</h2>

            <div className="flexCenter">
            
              <Duck></Duck>
            </div>
          </div>

            <div className="row">
              <div className="duckText">
                As a developer, I slowly became <span className="highLight"> multidisciplinary </span> just like a <span className="highLight"> duck</span>:
                <br></br><br></br> 
                <ul className="skillBullet">
                  <li>I can fly through <span className="highLight"> HTML, CSS and JavaScript</span>.</li><br></br>
                  <li>I can waddle in the dale of<span className="highLight"> .Net </span>and pull off some<span className="highLight"> C#</span>.</li><br></br>
                  <li>I can even paddle among<span className="highLight"> MSSQL databases</span>.</li>
                </ul>
                <span className="highLight">So how good of a duck am I?</span><br></br>
                  I can get by in the whole stack where front-end is my stronger forte. 
                  Occasionally I need support from the senior developers when facing a code-bug from hell or in the making of a solid plan before getting my hands dirty.<br></br><br></br>
                  The bottom line is I am not a senior (pro) and I am absolutely not a Bill Gates (legend) but hopefully I am good enough or as we say in Swedish<span className="highLight"> Lagom </span>. 
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Skills;
