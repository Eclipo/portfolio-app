import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import "../personality/personality.css";
import "../../IntersectionObserver.js";
import { PixelHead } from "./pixelHead/pixelHead";
import PlayRefresh from "../PlayRefresh/PlayRefresh.js";
import {
  startAttributeAnimation,
  resetAttributeAnimation,
  closeDialogue,
} from "./personalityFunctions.js";
class Personality extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.closeWindow = this.closeWindow.bind(this);
  }

  handleClick(event) {
    startAttributeAnimation(event.currentTarget.id);
  }

  handleLeave(event) {
    resetAttributeAnimation(event.currentTarget.id);
  }

  closeWindow(event) {
    closeDialogue(event.currentTarget.id);
  }

  render() {
    return (
      <div id="personality" className="sectionAnimation">
        <div
          className="sectionLine"
          style={{ backgroundColor: "var(--primary-green)" }}
        ></div>

        <h1 style={{ color: "var(--primary-green)" }}>Personality</h1>

        <PlayRefresh
          id="PersonalityAnimation"
          playBoolean={0}
          playText={
            <p>
              WARNING <br></br>
              CLICKING THIS PLAYBUTTON <br></br>
              WILL DISPLAY VERY DISTURBING AND FLASHING ANIMATIONS!
            </p>
          }
          textColor="var(--primary-green)"
        ></PlayRefresh>
        <div id="greenSquareTableID" className="flexCenter">
          <PixelHead></PixelHead>
        </div>
        <div className="flexCenter" id="personalityContainerID">
          <table className="personalityTable" id="personalityTableID">
            <tbody>
              <tr className="personalityBaseRow">
                <td>
                  <h4 className="personalityBaseTraits" id="attributeID">
                    Attributes
                  </h4>
                </td>
                <td>
                  <div className="personalityBaseTraits" id="attributeOneID">
                    1
                  </div>
                </td>
                <td>
                  <div className="personalityBaseTraits" id="attributeTwoID">
                    2
                  </div>
                </td>
                <td>
                  <div className="personalityBaseTraits" id="attributeThreeID">
                    3
                  </div>
                </td>
                <td>
                  <div className="personalityBaseTraits" id="attributeFourID">
                    4
                  </div>
                </td>
                <td>
                  <div className="personalityBaseTraits" id="attributeFiveID">
                    5
                  </div>
                </td>
                <td>
                  <div className="personalityBaseTraits" id="attributeSixID">
                    6
                  </div>
                </td>
                <td>
                  <div className="personalityBaseTraits" id="attributeSevenID">
                    7
                  </div>
                </td>
              </tr>

              <tr className="personalityTraitsRow">
                <td>
                  {" "}
                  <h4 className="personalityTraits">Honesty</h4>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeOne"
                    id="honestyID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeTwo"
                    id="honestyID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeThree"
                    id="honestyID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeFour"
                    id="honestyID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeFive"
                    id="honestyID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeSix"
                    id="honestyID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeSeven"
                    id="honestySevenID"
                  ></div>
                </td>
              </tr>

              <tr className="personalityTraitsRow">
                <td>
                  {" "}
                  <h4 className="personalityTraits">Focus</h4>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeOne"
                    id="focusOneID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeTwo"
                    id="focusTwoID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeThree"
                    id="focusThreeID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeFour"
                    id="focusFourID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeFive"
                    id="focusFiveID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeSix"
                    id="focusSixID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeSeven"
                    id="focusSevenID"
                  ></div>
                </td>
              </tr>

              <tr className="personalityTraitsRow">
                <td>
                  {" "}
                  <h4 className="personalityTraits">Structure</h4>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeOne"
                    id="structureID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeTwo"
                    id="structureTwoID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeThree"
                    id="structureThreeID"
                  ></div>
                </td>
                <td>
                  <div className="personalityTraits"></div>
                </td>
                <td>
                  <div className="personalityTraits"></div>
                </td>
                <td>
                  <div className="personalityTraits"></div>
                </td>
                <td>
                  <div className="personalityTraits"></div>
                </td>
              </tr>
              <tr>
                <td>
                  {" "}
                  <h4 className="personalityTraits">Temper</h4>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeOne temper"
                    id="temperID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeTwo temper"
                    id="temperTwoID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeThree temper"
                    id="temperThreeID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeFour temper"
                    id="temperFourID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeFive temper"
                    id="temperFiveID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeSix temper"
                    id="temperSixID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeSeven temper"
                    id="temperSevenID"
                  ></div>
                </td>
              </tr>

              <tr className="personalityTraitsRow">
                <td className="columnHeaderTraits">
                  {" "}
                  <h4 className="personalityTraits">Patience</h4>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeOne patience"
                    id="patienceOneID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeTwo"
                    id="patienceTwoID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeThree"
                    id="patienceThreeID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeFour"
                    id="patienceFourID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeFive"
                    id="patienceFiveID"
                  ></div>
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <h4 className="personalityTraits">Multitasking</h4>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeOne"
                    id="structureTwoID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeTwo"
                    id="structureThreeID"
                  ></div>
                </td>
                <td>
                  <div className="personalityTraits"></div>
                </td>
                <td>
                  <div className="personalityTraits"></div>
                </td>
                <td>
                  <div className="personalityTraits"></div>
                </td>
                <td>
                  <div className="personalityTraits"></div>
                </td>
                <td>
                  <div className="personalityTraits"></div>
                </td>
              </tr>

              <tr className="personalityTraitsRow">
                <td>
                  {" "}
                  <h4 className="personalityTraits">Empathy</h4>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeOne"
                    id="empathyID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeTwo"
                    id="empathyID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeThree"
                    id="empathyID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeFour"
                    id="empathyID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeFive"
                    id="empathyID"
                  ></div>
                </td>
                <td>
                  <div className="personalityTraits"></div>
                </td>
                <td>
                  <div className="personalityTraits"></div>
                </td>
              </tr>

              <tr>
                <td>
                  {" "}
                  <h4 className="personalityTraits">Stubborn</h4>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeOne"
                    id="honestySevenID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeTwo"
                    id="honestySevenID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeThree"
                    id="honestySevenID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeFour"
                    id="honestySevenID"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits gradeFive"
                    id="honestySevenID"
                  ></div>
                </td>
                <td>
                  <div className="personalityTraits"></div>
                </td>
                <td>
                  <div className="personalityTraits"></div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="personalityTextContainer">
            <h2 className="mb-1">
              About <br></br>My personality
            </h2>
            <p className="duckText mt-0">
              The personality matrix above should not be taken too seriously. I
              had great fun doing the animations for them. On the other hand I
              do want to be a bit more personal with who I am.
            </p>
            <h3 className="brokenBanner">
              <div className="d-inline-block brokenLetterC">C</div>
              <span>L</span>
              <span>I</span>
              <span>C</span>
              <span className="d-inline-block brokenLetterK">K</span>
            </h3>

            <div className="container flexCenter">
              <div className="row flexCenter">
                <div className="col flexCenter">
                  <div
                    className="card personalityCard"
                    id="honestyCard"
                    onClick={this.handleClick}
                  >
                    <div>
                      <button
                        id="honestyCard_closeBtn"
                        className="personalityCloseBtn"
                        onClick={this.closeWindow}
                      >
                        <FontAwesomeIcon icon={faClose} id="navIconID" />
                      </button>
                    </div>

                    <div className="card-body">
                    <button className="btnPersonalityCard">

                      <h3 className="card-title" id="honestyCard_h3">
                        Honesty
                      </h3>
                      <h4 id="honestyCard_h4">I'm just telling the truth</h4>
                      <p className="card-text" id="honestyCard_p">
                        In my familly the phrase 
                        <span className="highlighted"> "I'm just telling the truth" </span> 
                        was abusively applied. Later in life (30+ years) I finally understood I have
                        another take on honesty compared to most native swedes.
                        Nowdays I try to be more diplomatic while I encourage
                        others to be more honest with me.
                      </p>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col flexCenter">
                  <div
                    className="card personalityCard"
                    id="stubbornCard"
                    onClick={this.handleClick}
                  >
                    <div>
                      <button
                        id="stubbornCard_closeBtn"
                        className="personalityCloseBtn"
                        onClick={this.closeWindow}
                      >
                        <FontAwesomeIcon icon={faClose} id="navIconID" />
                      </button>
                    </div>

                    <div className="card-body">
                    <button className="btnPersonalityCard">

                      <h3 className="card-title" id="stubbornCard_h3">
                        Stubborn
                      </h3>
                      <h4 id="stubbornCard_h4">Familly attribute</h4>
                      <p className="card-text" id="stubbornCard_p">
                        Being stubborn is an another{" "}
                        <span className="highlighted"> familly attribute </span>{" "}
                        and it is both a curse and a blessing.
                        Previously I had really hard time to accept failures
                        but I have grown wiser and nowdays I avoid
                        brute-forcing myself through the obstacles I face.
                      </p>
                      </button>

                    </div>
                  </div>
                </div>
                <div className="col flexCenter">
                  <div
                    className="card personalityCard"
                    id="structureCard"
                    onClick={this.handleClick}
                  >
                    <div>
                      <button
                        id="structureCard_closeBtn"
                        className="personalityCloseBtn"
                        onClick={this.closeWindow}
                      >
                        {" "}
                        <FontAwesomeIcon icon={faClose} id="navIconID" />
                      </button>
                    </div>

                    <div className="card-body">
                    <button className="btnPersonalityCard">

                      <h3 className="card-title" id="structureCard_h3">
                        Structure
                      </h3>
                      <h4 id="structureCard_h4">panicked fish on land</h4>

                      <p className="card-text" id="structureCard_p">
                        Task lists, reminders, labeled boxes but in the end I still end up in a mess.
                        When I try hard to be structured I feel like a <span className="highlighted"> panicked fish holding its breath </span> 
                        whereas others can breath freely.<br></br><br></br>
                        Despite my flaw I truly need a structural environment.
                        It calms my mind and I can channel my focus on more pressing matters like coding and drinking coffee. 

                      </p>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col flexCenter">
                  <div
                    className="card personalityCard"
                    id="multiTaskCard"
                    onClick={this.handleClick}
                  >
                    <div>
                      <button
                        id="multiTaskCard_closeBtn"
                        className="personalityCloseBtn"
                        onClick={this.closeWindow}
                      >
                        {" "}
                        <FontAwesomeIcon icon={faClose} id="navIconID" />
                      </button>
                    </div>

                    <div className="card-body">
                    <button className="btnPersonalityCard">

                      <h3 className="card-title" id="multiTaskCard_h3">
                        Multitasking
                      </h3>
                      <h4 id="multiTaskCard_h4">NO!</h4>

                      <p className="card-text" id="multiTaskCard_p">
                      <span className="highlighted">NO!</span> I have tried it it's horrible.<br></br><br></br> 
                        It makes my head split and I need to reset my focus for every task I have at hand.<br></br>
                        I rather spend my time doing one thing and doing it as best I can then I go on to the next task. 
                      </p>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col flexCenter">
                  <div
                    className="card personalityCard"
                    id="focusCard"
                    onClick={this.handleClick}
                  >
                    <div>
                      <button
                        id="focusCard_closeBtn"
                        className="personalityCloseBtn"
                        onClick={this.closeWindow}
                      >
                        {" "}
                        <FontAwesomeIcon icon={faClose} id="navIconID" />
                      </button>
                    </div>

                    <div className="card-body">
                    <button className="btnPersonalityCard">

                      <h3 className="card-title" id="focusCard_h3">
                        Focus
                      </h3>
                      <h4 id="focusCard_h4">Double-edged sword</h4>

                      <p className="card-text" id="focusCard_p">
                        In order to utilize my focus besides a
                        structured surrounding and no multitasking are enjoyable
                        challenges where I will be completely devoured by my focus. 
                        The opposite would be chaos and boring tasks which immediately crashes my focus into a blue screen of death.
                        It has taken my some time to figure out how my focus works and it is a 
                        <span className="highlighted"> double-edged sword</span>.<br></br><br></br>
                        Too much fun and I will have trouble doing anything else whereas too much of boredom will take me into a dark path of pain and suffering.
                      </p>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col flexCenter">
                  <div
                    className="card personalityCard"
                    id="patienceCard"
                    onClick={this.handleClick}
                  >
                    <div>
                      <button
                        id="patienceCard_closeBtn"
                        className="personalityCloseBtn"
                        onClick={this.closeWindow}
                      >
                        {" "}
                        <FontAwesomeIcon icon={faClose} id="navIconID" />
                      </button>
                    </div>

                    <div className="card-body">
                    <button className="btnPersonalityCard">

                      <h3 className="card-title" id="patienceCard_h3">
                        Patience
                      </h3>
                      <h4 id="patienceCard_h4">Breath in and breath out</h4>

                      <p className="card-text" id="patienceCard_p">
                        I have some problem with being{" "}
                        <span className="highlighted">patient</span>.
                        Consequently I have suffered when I have been impatient
                        at times. Nowdays I try to take a step back and breath
                        alot when my patience is running out
                      </p>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col flexCenter">
                  <div
                    className="card personalityCard"
                    id="temperCard"
                    onClick={this.handleClick}
                  >
                    <div>
                      <button
                        id="temperCard_closeBtn"
                        className="personalityCloseBtn"
                        onClick={this.closeWindow}
                      >
                        {" "}
                        <FontAwesomeIcon icon={faClose} id="navIconID" />
                      </button>
                    </div>

                    <div className="card-body">
                    <button className="btnPersonalityCard">

                      <h3 className="card-title" id="temperCard_h3">
                        Temper
                      </h3>
                      <p className="card-text" id="temperCard_p">
                        Most often I am very calm but when I suffer some
                        setbacks I do display some{" "}
                        <span className="highlighted">temper</span>.
                      </p>
                      </button>
                    </div>
                  </div>
                </div>

                <div className="col flexCenter">
                  <div
                    className="card personalityCard"
                    id="empathyCard"
                    onClick={this.handleClick}
                  >
                    <div>
                      <button
                        id="empathyCard_closeBtn"
                        className="personalityCloseBtn"
                        onClick={this.closeWindow}
                      >
                        {" "}
                        <FontAwesomeIcon icon={faClose} id="navIconID" />
                      </button>
                    </div>

                    <div className="card-body">
                    <button className="btnPersonalityCard">

                      <h3 className="card-title" id="empathyCard_h3">
                        Empathy
                      </h3>
                      <p className="card-text" id="empathyCard_p">
                        I am <span className="highlighted">empathic </span>
                        to those I care about and its important to me that they
                        are okay.
                      </p>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Personality;
