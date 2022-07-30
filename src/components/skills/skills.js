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
                  <p className="skill backEndTheme" id="skillElemAndInter">
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
                    Business<br></br>Consultant
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
                A duck can swim, go on land and fly but not being best in any of those skills. 
                In my case being a "duck" as a fullstack developer 
                being  <span className="skillHighLighted"> "Lagom" </span> (just the right amount in Swedish) 
                I am comfortable in flying thorugh <span className="skillHighLighted">HTML, CSS and Javascript </span>, 
                paddle among <span className="skillHighLighted"> MS SQL databases </span> and finally I can waddle up some <span className="skillHighLighted"> C# </span> code.   
                <br></br><br></br>
                In order for me to be an efficient developer I need to get familliar 
                with the codebase and <span className="skillHighLighted"> occasionally </span> 
                I need support from senior developers
                who can guide and exchange ideas with me.
                <br></br>
              </p>
            </div>
          </div>
      </div>
    );
  }
}

export default Skills;
