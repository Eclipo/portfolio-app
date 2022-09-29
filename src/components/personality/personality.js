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
          textColor="var(--primary-red)"
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
                  <h4 className="personalityTraits">Leadership</h4>
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
                    className="personalityTraits"
                  ></div>
                </td>
                <td>
                  <div
                    className="personalityTraits"
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
              The purpose of the personality is to display two facts:
              <ul className="skillBullet">
                <li>It is <span className="skillHighLighted"> easy to label </span>a person based on the first impressions.</li>
                <li>A personality is rather <span className="skillHighLighted"> dynamic </span> than static.</li>
              </ul>
              My particular personality depends on a variety of conditions where I can be either more or less of a specific trait.<br></br><br></br>
              Down below I will go through some of my personal attributes in more detail.
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
                        was and is still today abusively applied. Later in life (30+ years) I finally understood I have
                        another take on honesty compared to most people.
                        Nowdays I try to be more diplomatic while expressing my opinion while I encourage
                        others to be more honest with me.Honesty is a trait I value very highly.
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
                      <h4 id="stubbornCard_h4">A curse and a blessing</h4>
                      <p className="card-text" id="stubbornCard_p">
                        Being stubborn is an another familly attribute
                        and it is both <span className="highlighted"> a curse and a blessing </span>.
                        Thanks to my stubborness it has taken me where I am today.
                        On the other hand I might have overdone it at times and thankfully I have grown wiser. 
                        Rather than brute-forcing myself through the obstacles I face nowdays I try to take a step back, 
                        breath alot and find a more elegant solution to the problem.
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
                      <h4 id="structureCard_h4">Feng shui</h4>

                      <p className="card-text" id="structureCard_p">
                        Even though I write task lists and setting reminders I still don't feel great at being structured. 

                        Despite this I still need <span className="highlighted"> feng shui </span>since 
                        it calms my mind and I can channel my focus on more pressing matters such as coding and drinking coffee.
                        That's why it is important for me to be in a structured environment and team up with someone who is great at project management.
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
                      <span className="highlighted">No!</span> 
                        "Multitasking" (read too much tasks) makes my head split and I continually need to reset my focus.<br></br>
                        I rather spend my time doing one thing at a time to the best of my ability.
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
                        To reach the very heights of my hyperfocus I need feng shui and enjoyable tasks. 
                        The consequence of having too much fun will result into me being completely devoured by my hyperfocus.
                        In contrast a chaotic environment and boredome will eventually crash me into a blue screen of death.
                        My focus is a <span className="highlighted"> double-edged sword</span>.</p>
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
                      <h4 id="patienceCard_h4">Breath alot</h4>

                      <p className="card-text" id="patienceCard_p">
                        I want to see result right here and right now.
                        Consequently I have suffered being impatient at times. But I have learned to take a step back and 
                        <span className="highlighted"> breath alot </span>in order to regain more patience.
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
                        onClick={this.closeWindow}>
                          <FontAwesomeIcon icon={faClose} id="navIconID" />
                      </button>
                    </div>

                    <div className="card-body">
                    <button className="btnPersonalityCard">

                      <h3 className="card-title" id="temperCard_h3">
                        Temper
                      </h3>
                      <h4 id="temperCard_h4">Compass & Engine</h4>

                      <p className="card-text" id="temperCard_p">
                        Often I am very calm but when encountering a setback I do experience a range of fierce emotions.<br></br> 
                        Thank goodness I do calm down again quite quickly where my emotions will act as the<span className="highlighted"> compass </span> 
                        for my more rational being who then can focus on the solution.  
                        <br></br><br></br>
                        Furthermore my emotions are also my very<span className="highlighted"> engine </span>where they give me 
                        the necessary energy and focus in order to sustain and deal with various difficult situations.
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
                        onClick={this.closeWindow}>
                        <FontAwesomeIcon icon={faClose} id="navIconID"/>
                      </button>
                    </div>

                    <div className="card-body">
                    <button className="btnPersonalityCard">
                      <h3 className="card-title" id="empathyCard_h3">
                        Leadership
                      </h3>
                      <h4 id="empathyCard_h4">Coordinator</h4>

                      <p className="card-text" id="empathyCard_p">
                        I don't particular fancy leading others.It is time consuming and discussing salaries is a subject I really don't enjoy.<br></br>
                        However if there would be a situation where the leader in a group continually takes the wrong decisions then and only then would I rather see myself as the teamleader and take full responsibility. 
                        I guess I would do fine as a<span className="highlighted"> coordinator </span>since I am very pragmatic, result-oriented and very keen to hear others opinions.<br></br><br></br>
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
