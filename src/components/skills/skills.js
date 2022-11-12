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
          style={{ backgroundColor: "var(--primary-blue)" }}></div>
        <h1 style={{ color: "var(--primary-blue" }}>Skills</h1>

        <div className="container-sm skillContainer" id="skillContainerID">
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
                  <h3
                    className="skillPointGround"
                    id="Beginner"
                    style={{ marginBottom: "2%" }}>
                    Novice
                  </h3>
                  <div className="sectionLine "></div>
                </td>
                <td>
                  <h3
                    className="skillPointGround"
                    id="Elementary"
                    style={{ marginBottom: "2%" }}>
                    Junior
                  </h3>
                  <div className="sectionLine "></div>
                </td>
                <td>
                  <h3
                    className="skillPointGround"
                    id="Intermediate"
                    style={{ marginBottom: "2%" }}>
                    Mid-level
                  </h3>
                  <div className="sectionLine "></div>
                </td>
                {/* <td>
                  <h3
                    className="skillPointGround"
                    id="Advanced"
                    style={{ marginBottom: "2%" }}>
                    Senior
                  </h3>
                  <div className="sectionLine "></div>
                </td> */}
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <p className="skill frontEndTheme">ReactJS</p>
                </td>

                <td>
                  <p className="skill frontEndTheme">Angular</p>
                </td>

                <td>
                  <p className="skill frontEndTheme" id="skillElemAndInter">
                    TypeScript
                  </p>
                </td>
              </tr>

              <tr>
                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>

                <td>
                  <p className="skill frontEndTheme">Redux</p>
                </td>

                <td>
                  <p className="skill frontEndTheme" id="skillElemAndInter">
                    HTML
                  </p>
                </td>
              </tr>

              <tr>
                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>

                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>

                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>
              </tr>

              <tr>
                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>

                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>
                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>
              </tr>

              <tr>
                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>

                <td>
                  <p className="skill backEndTheme">PowerShell</p>
                </td>

                <td>
                  <p className="skill frontEndTheme" id="skillElemAndInter">
                    CSS
                  </p>
                </td>
              </tr>

              <tr>
                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>

                <td>
                  <p className="skill backEndTheme">C#</p>
                </td>
                <td>
                  <p className="skill frontEndTheme" id="skillElemAndInter">
                    AnimeJS
                  </p>
                </td>
              </tr>

              <tr>
                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>

                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>

                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>
              </tr>

              {/* <SkillDivider className="frontEndTheme"></SkillDivider> */}

              <tr>
                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>

                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>
                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>
              </tr>

              <tr>
                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>

                <td>
                  <p className="skill rolesTheme" id="skillElemAndInter">
                    Coordinator
                  </p>
                </td>
                <td>
                  <p className="skill backEndTheme" id="skillElemAndInter">
                    SQL
                  </p>
                </td>
              </tr>

              <tr>
                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>
                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>

                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>
              </tr>

              {/* <SkillDivider className="backEndTheme"></SkillDivider> */}

              <tr>
                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>

                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>
                <td>
                  <p className="skill rolesTheme">Tester</p>
                </td>
              </tr>

              <tr>
                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>
                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>
                <td>
                  <p className="skill rolesTheme">Developer</p>
                </td>
              </tr>

              <tr>
                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>
                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>

                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>

        <div className="container-sm" id="duckContainerID">
          <div className="row">
            <h2 style={{ color: "var(--primary-blue" }}>I am a duck</h2>

            <div className="flexCenter duckContainer">
              <Duck></Duck>
            </div>
          </div>

          <div className="row">
            <div className="duckText">
              <p>
                As a developer, I slowly became{" "}
                <span className="highLight"> multidisciplinary </span> just like
                a <span className="highLight"> duck</span>:
              </p>
              <ul className="skillBullet">
                <li>
                  I can fly through{" "}
                  <span className="highLight"> HTML, CSS and JavaScript</span>.
                </li>
                <br></br>
                <li>
                  I can waddle in the dale of
                  <span className="highLight"> .Net </span>and pull off some
                  <span className="highLight"> C#</span>.
                </li>
                <br></br>
                <li>
                  I can even paddle in the great seas of
                  <span className="highLight"> MSSQL databases</span>.
                </li>
              </ul>

              <p>
                I can get by in the whole stack where front-end is my stronger
                forte. Occasionally I need support from the senior developers
                when facing a code-bug from hell or in the making of a solid
                plan before getting my hands dirty.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
