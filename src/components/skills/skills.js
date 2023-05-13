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
    const frontEnd = document.getElementById("frontEnd");
    const backEnd = document.getElementById("backEnd");
    const roles = document.getElementById("roles");

    frontEnd.classList.remove("selectedBtn");
    backEnd.classList.remove("selectedBtn");
    roles.classList.remove("selectedBtn");

    anime({
      targets: ".skill",
      easing: "linear",
      opacity: 1,
    });
  }

  filterSkills(event) {
    let filter = event.currentTarget.id;
    const skillsFrontEnd = document.querySelectorAll(".skill.frontEndTheme");
    const skillsBackend = document.querySelectorAll(".skill.backEndTheme");
    const skillsRoles = document.querySelectorAll(".skill.rolesTheme");
    const frontEnd = document.getElementById("frontEnd");
    const backEnd = document.getElementById("backEnd");
    const roles = document.getElementById("roles");

    frontEnd.classList.remove("shadowAnimation");
    backEnd.classList.remove("shadowAnimation_2");
    roles.classList.remove("shadowAnimation_3");

    switch (filter) {
      case "frontEnd":
        frontEnd.classList.add("selectedBtn");

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

            backEnd.classList.remove("selectedBtn");
            roles.classList.remove("selectedBtn");
          },
        });
        break;

      case "backEnd":
        backEnd.classList.add("selectedBtn");

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
            frontEnd.classList.remove("selectedBtn");
            roles.classList.remove("selectedBtn");
          },
        });
        break;

      case "roles":
        roles.classList.add("selectedBtn");

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
            frontEnd.classList.remove("selectedBtn");
            backEnd.classList.remove("selectedBtn");
          },
        });
        break;

      default:
    }
  }

  render() {
    return (
      <div id="skills" className="sectionAnimation">
        <div className="container-sm skillContainer" id="skillContainerID">
          <h2>Skills</h2>

          <div className="resumeNavMenu align-items-center">
            <div className="resumeNavRow">
              <button
                className="col skillNav frontEndTheme shadowAnimation"
                id="frontEnd"
                onClick={this.filterSkills}>
                <h3 className="skillNavh3">Frontend</h3>
              </button>

              <button
                className="skillNav col backEndTheme shadowAnimation_2"
                id="backEnd"
                onClick={this.filterSkills}>
                <h3 className="skillNavh3">Backend</h3>
              </button>

              <button
                className="skillNav col rolesTheme shadowAnimation_3"
                id="roles"
                onClick={this.filterSkills}>
                <h3 className="skillNavh3">Profession</h3>
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
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>
                  <p className="skill frontEndTheme skillP">ReactJS</p>
                </td>

                <td>
                  <p className="skill frontEndTheme skillP">Angular</p>
                </td>

                <td>
                  <p
                    className="skill frontEndTheme skillP"
                    id="skillElemAndInter">
                    TypeScript
                  </p>
                </td>
              </tr>

              <tr>
                <td>
                  <p className="skill backEndTheme skillP">C++</p>
                </td>

                <td>
                  <p className="skill frontEndTheme skillP">Redux</p>
                </td>

                <td>
                  <p className="skill frontEndTheme skillP">HTML</p>
                </td>
              </tr>

              <tr>
                <td>
                  <p className="skill backEndTheme skillP">Java</p>
                </td>

                <td>
                  <p className="skill backEndTheme skillP">PowerShell</p>
                </td>

                <td>
                  <p
                    className="skill frontEndTheme skillP"
                    id="skillElemAndInter">
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
                  <p className="skill backEndTheme skillP">C#</p>
                </td>
                <td>
                  <p
                    className="skill frontEndTheme skillP"
                    id="skillElemAndInter">
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
                  <p className="skill rolesTheme skillP" id="skillElemAndInter">
                    Coordinator
                  </p>
                </td>
                <td>
                  <p
                    className="skill backEndTheme skillP"
                    id="skillElemAndInter">
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
                  <p className="skill rolesTheme skillP">UI designer</p>
                </td>
                <td>
                  <p className="skill rolesTheme skillP">Tester</p>
                </td>
              </tr>

              <tr>
                <td>
                  <div
                    className="skillPointGround"
                    style={{ opacity: "0" }}></div>
                </td>
                <td>
                  <p className="skill rolesTheme skillP" id="skillElemAndInter">
                    Presale
                  </p>
                </td>
                <td>
                  <p className="skill rolesTheme skillP">Developer</p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="container-sm primaryContainer" id="duckContainerID">
          <div className="row m-0 p-0">
            <h2>
              My spirit<br></br> animal
            </h2>

            <div className="flexCenter duckContainer m-0 p-0">
              <Duck></Duck>
            </div>
          </div>

          <div className="row m-0 p-0">
            <div className="duckText">
              <p className="mb-0">
                As a developer I am
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
                Simply put, I am a full-stack developer where front-end is my
                stronger forte. Occasionally, I seek support from senior
                developers when the code-terrain is a bit too complex before
                getting into some action.
                <br></br>
                <br></br>
                Even though I am a software developer, I still understand the
                importance of sales and having good relationships with the
                customers.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
