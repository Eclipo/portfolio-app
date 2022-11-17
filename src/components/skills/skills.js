import React, { Component } from "react";
import "../skills/skills.css";
import "../../IntersectionObserver.js";
import { Duck } from "./duck/duck.js";
import anime from "animejs";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Skills extends Component {
  frontEndTheme = "frontEndTheme";
  backEndTheme = "backEndTheme";
  appTheme = "applicationsTheme";
  rolesTheme = "rolesTheme";

  constructor(props) {
    super(props);
  }

  resetSkills(event) {
    anime({
      targets: ".skill",
      easing: "linear",
      opacity: 1,
    });
  }

  filterSkills(event) {
    let filter = event.currentTarget.id;
    console.log(event.currentTarget.id);
    const skillsFrontEnd = document.querySelectorAll(".skill.frontEndTheme");
    const skillsBackend = document.querySelectorAll(".skill.backEndTheme");
    const skillsRoles = document.querySelectorAll(".skill.rolesTheme");
    switch (filter) {
      case "frontEnd":
        anime({
          targets: ".skill",
          easing: "linear",
          opacity: 0.25,
          complete: function () {
            anime({
              targets: skillsFrontEnd,
              easing: "linear",
              opacity: 1,
            });
          },
        });
        break;

      case "backEnd":
        anime({
          targets: ".skill",
          easing: "linear",
          opacity: 0.25,
          complete: function () {
            anime({
              targets: skillsBackend,
              easing: "linear",
              opacity: 1,
            });
          },
        });
        break;

      case "roles":
        anime({
          targets: ".skill",
          easing: "linear",
          opacity: 0.25,
          complete: function () {
            anime({
              targets: skillsRoles,
              easing: "linear",
              opacity: 1,
            });
          },
        });
        break;

      default:
    }
  }

  render() {
    return (
      <div id="skills" className="sectionAnimation">
        <div
          className="sectionLine"
          style={{ backgroundColor: "var(--primary-blue)" }}></div>
        <h1 style={{ color: "var(--primary-blue" }}>Skills</h1>

        <div className="container-sm skillContainer" id="skillContainerID">
          <div className="row"></div>
          <div className="row m-auto">
            <div className="col">
              <button
                className="bg-transparent"
                id="frontEnd"
                onClick={this.filterSkills}>
                <h2 className="skillCategory frontEndTheme">
                  Front <br></br> end
                </h2>
              </button>
            </div>
            <div className="col">
              <button
                className="bg-transparent"
                id="backEnd"
                onClick={this.filterSkills}>
                <h2 className="skillCategory backEndTheme">
                  Back <br></br> end
                </h2>
              </button>
            </div>
            <div className="col">
              <button
                className="bg-transparent"
                id="roles"
                onClick={this.filterSkills}>
                <h2 className="skillCategory rolesTheme">
                  JOB<br></br> roles
                </h2>
              </button>
            </div>
          </div>
          <div className="row m-auto">
            <div className="col"></div>
            <div className="col">
              <div className="flexCenter">
                <button id="resetSkills" onClick={this.resetSkills}>
                  <FontAwesomeIcon
                    className="fntAwesome p-2"
                    icon={faSyncAlt}
                    color="var(--slate)"
                    style={{ margin: "auto" }}></FontAwesomeIcon>
                </button>
              </div>
            </div>
            <div className="col"></div>
          </div>

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
                  <p className="skill frontEndTheme">HTML</p>
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
                  <p>
                    I can fly through{" "}
                    <span className="highLight"> HTML, CSS and JavaScript</span>
                    .
                  </p>
                </li>
                <li>
                  <p>
                    {" "}
                    I can waddle in the dale of
                    <span className="highLight"> .Net </span>and pull off some
                    <span className="highLight"> C#</span>.
                  </p>
                </li>
                <li>
                  <p>
                    I can even paddle in the great seas of
                    <span className="highLight"> MSSQL databases</span>.
                  </p>
                </li>
              </ul>

              <p>
                I can get by in the whole stack where front-end is my stronger
                forte. Occasionally, I seek support from the senior developers
                when the code-terrain is a bit too complex and I need a plan
                before getting into some action.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
