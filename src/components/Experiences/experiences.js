import React, { Component, useState } from "react";
import "./experiences.css";
import "../../IntersectionObserver.js";
import { ExperienceAnimation } from "./experienceAnimation.js";
import { animate } from "./experienceFunctions.js";
import { KnucklesSvg } from "./KnucklesSvg/KnucklesSvg.js";
import { faArrowLeft, faArrowRight,faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PlayRefresh from "../PlayRefresh/PlayRefresh.js";

class Experiences extends Component {
  expAnime = new ExperienceAnimation();
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.playAnimation = this.playAnimation.bind(this);
  }

  handleClick(event) {
    animate(event.currentTarget.id);
  }

  playAnimation() {
    this.expAnime.playOrStop(true);
  }

  render() {

    return (
      <div className="sectionAnimation" id="experiencesID">
        <div
          className="sectionLine"
          style={{ backgroundColor: "var(--primary-purple)" }}
        ></div>

        <h1 style={{ color: "var(--primary-purple)" }}>Major Experiences</h1>
        <PlayRefresh
          className="mb-5"
          id="ExperienceAnimation"
          playBoolean={true}
        ></PlayRefresh>

        <div className="d-flex justify-content-center" id="KnucklesContainerID">
          <KnucklesSvg></KnucklesSvg>
        </div>

        <div className="backgroundMajorExp">

        <div className="container-md row" id="expMenu">
          <div className="row mx-auto ">
            <div className="col">
            <button 
                type="button" className="mt-2 btn bg-transparent" data-bs-toggle="modal" data-bs-target="#modal">
              <FontAwesomeIcon
                className="scrollArrow"
                icon={faArrowLeft}
                color="var(--primary-purple)"
              ></FontAwesomeIcon>
              </button>
            </div>

            <div className="col-8">
              <p className="header3Tech infoTech mb-3">
                Click on a major experience to see its content.
              </p>
            </div>

            <div className="col">
              <button 
                type="button" className="mt-2 btn bg-transparent" data-bs-toggle="modal" data-bs-target="#modal"
 >
                <FontAwesomeIcon
                  className="scrollArrow"
                  icon={faArrowRight}
                  color="var(--primary-purple)"
                  >
                </FontAwesomeIcon>              
              </button>
              
            </div>
          </div>

          <table
            className="overflow-auto d-block mx-auto justify-content-center"
            id="expCategoryMenu"
          >
          <tbody>

          
            <tr>
              <td>
                <button
                  className="col techCategory"
                  id="fintech"
                  onClick={this.handleClick}
                >
                  <h2>Fintech Industry</h2>
                </button>
                <div className="scrollLine" id="fintech_scrollLine"></div>
              </td>

              <td>
                <button
                  className="col techCategory"
                  id="municipality_3"
                  onClick={this.handleClick}
                >
                  <h2>#3 Municipality</h2>
                </button>
                <div className="scrollLine" id="municipality_3_scrollLine"></div>
              </td>
              <td>
                <button
                  className="col techCategory"
                  id="municipality_2"
                  onClick={this.handleClick}
                >
                  <h2>#2 Municipality</h2>
                </button>
                <div className="scrollLine" id="municipality_2_scrollLine"></div>
              </td>
              <td>
                <button
                  className="col techCategory"
                  id="municipality_1"
                  onClick={this.handleClick}
                >
                  <h2>#1 Municipality</h2>
                </button>
                <div className="scrollLine" id="municipality_1_scrollLine"></div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>

        <div className="d-block container-md expTable expInfo mb-2" id="_container">
          <div className="row expInfo" id="_periodSystem">
            <div className="col m-1">
              <div className="row">
                <h4 className="header3Tech pb-0 mb-0">Employer:</h4>
              </div>

              <div className="row">
              <h4
                className="header3Tech pt-0 mt-0"
                style={{ color: "var(--primary-light-green)" }}
              >
                CGI Sverige AB
              </h4>
              </div>
            </div>

            <div className="col m-1">
              <div className="row">
                <h4 className="header3Tech pb-0 mb-0">Customer:</h4>
              </div>
              
              <div className="row">
                <h4 
                  className="header3Tech pt-0 mt-0" 
                  id="linkID" 
                  style={{ color: "var(--primary-light-green)" }}>
                </h4>
              </div>
            </div>

            <div className="col m-1">
              <div className="row">
                <h4 className="header3Tech pb-0 mb-0" >Role:</h4>
              </div>

              <div className="row">
                <h4
                  className="header3Tech pt-0 mt-0"
                  id="jobTitleID"
                  style={{ color: "var(--primary-light-green)" }}
                ></h4>
              </div>
            </div>

            <div className="col m-1">
              <div className="row">
                <h4 className="header3Tech pb-0 mb-0">Period (YY/MM):</h4>
              </div>

              <div className="row">
                <h4
                  className="header3Tech pt-0 mt-0"
                  id="period"
                  style={{ color: "var(--primary-light-green)" }}
                ></h4>
              </div>

            </div>
            <div className="col m-1">
              <div className="row">
                <h4 className="header3Tech pb-0 mb-0">System:</h4>
              </div>
              <div className="row">
                <h4
                  className="header3Tech pt-0 mt-0"
                  id="system"
                  style={{ color: "var(--primary-light-green)" }}
                ></h4>
              </div>
              
             
            </div>
            <div className="techUnderLine mt-2 mb-3"></div>
          </div>

          <div className="row" id="_periodSystem">
            <h2 className="headerTech justify-content-start">0%</h2>
            <h2 className="headerTech mx-auto">Tech</h2>
            <h2 className="headerTech justify-content-end">100%</h2>

            <div className="techSkillContainer" id="municipality_3_tech">
              <div className="techRow" id="municipality_3_sql">
                <h4 className="techSkill">MS SQL</h4>
              </div>
              <div className="techRow" id="municipality_3_ps1">
                <h4 className="techSkill">Powershell</h4>
              </div>
              <div className="techRow" id="municipality_3_csharp">
                <h4 className="techSkill">C#</h4>
              </div>
            </div>

            <div className="techSkillContainer" id="fintech_tech">
              <div className="techRow" id="fintech_csharp">
                <h4 className="techSkill">C#</h4>
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
        </div>
      </div>


<div className="modal fade" id="modal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content techCategory">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">I'm an arrow...?</h5>
      </div>
      <div className="modal-body">
       <p>I'm not scrolling around.</p>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn" style={{backgroundColor:'var(--primary-light-green)'}} data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


      </div>

      
    );
  }
}

export default Experiences;
