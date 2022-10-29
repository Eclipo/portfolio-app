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
              CLICKING ON THIS PLAY BUTTON <br></br>
              WILL DISPLAY VERY FLASHING <br></br> ANIMATIONS!
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
              Don't judge a book <br></br>by its cover
            </h2>
            <div className="duckText mx-auto">
              The purpose of the personality matrix above is to display two facts:
              <ul className="skillBullet">
                <li>It is quite <span className="highLight"> easy to label </span>a person based on the very first impression.</li>
                <li>A personality is rather <span className="highLight"> dynamic </span> than static.</li>
              </ul>
              My particular personality depends on a variety of conditions where I can be either more or less of a specific trait.<br></br><br></br>
              In the cards shown below, I will go through some of my personal attributes in more detail.
            </div>
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
                        In my family, the phrase <span className="highLight"> "I'm just telling the truth" </span> 
                        was and is still abusively applied.
                        Later in life (30+ years), I finally understood I have another take on honesty compared to most people.<br></br><br></br>
                        Nowadays, I try to be more diplomatic while expressing my opinion. 
                        Often, I encourage others to be more honest with me. Honesty is a trait I value very highly.
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
                        Being stubborn is another family attribute and it is both<span className="highLight"> a curse and a blessing </span>.
                        Thanks to my stubbornness, it has taken me where I am today.
                        <br></br><br></br>
                        On the other hand, I might have overdone it at times. Thankfully, I have grown wiser with the years.
                        Rather than brute-forcing myself through the obstacles I face nowadays, I try to take a step back, breathe a lot, and find a more elegant solution to the problem.
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
                        Even though I write task lists and set reminders, being structured isn't my core attribute. 
                        Despite this, I still need<span className="highLight"> feng shui </span>where everything is in harmonious order. 
                        Feng shui calms my mind and I can channel my focus on more pressing matters Besides a structured environment, it is also important for me to team up with someone who is great at project management.
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
                      <h4 id="focusCard_h4">Blue screen of death</h4>

                      <p className="card-text" id="focusCard_p">
                        To reach the very heights of my hyperfocus, I need feng shui and enjoyable tasks.                        
                        <br></br><br></br>
                        In contrast a chaotic environment and boredom will eventually crash my focus into a<span className="highLight"> blue screen of death</span>.
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
                      <h4 id="multiTaskCard_h4">Single-core processor</h4>

                      <p className="card-text" id="multiTaskCard_p">
                        I have unfortunately multitasked during my career, and it's not for me.
                        I am more of a<span className="highLight"> single-core processor</span> type of person.
                        <br></br><br></br>
                        Meaning, I do one thing really well at a time. In contrast to shuffling between completely different tasks.
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
                      <h4 id="patienceCard_h4">Right here and now</h4>

                      <p className="card-text" id="patienceCard_p">
                        I want to see result<span className="highLight"> right here and now</span>.
                        Consequently, I have suffered from being impatient at times.<br></br><br></br> 
                        With time, I have learned to take a step back, calm down, and breath alot in order to regain more patience.
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
                      <h4 id="temperCard_h4">Engine</h4>

                      <p className="card-text" id="temperCard_p">
                        Most of the time, I am calm. It's true!
                        Nevertheless, if I am having some sort of a setback, such as facing a code-bug from hell, it does trigger some stronger emotions in me.
                        However, I am truly grateful to have some temper since it is my very<span className="highLight"> engine </span>in life.
                        My emotions provide me with energy and focus in order to handle various challenging situations.
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
                        It is possible I could be an good leader one day but at the moment in terms of anything that resemble leadership 
                        then I guess I would do fine as the<span className="highLight"> coordinator </span>in a team.
                        <br></br><br></br>
                        I am very pragmatic and I have my eyes on the target. 
                        In addition, I am very keen on hearing others' opinions since the best ideas and strategies are created in discussions 
                        between people who have different perspectives on how a problem can be solved.
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
