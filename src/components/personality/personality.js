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
import { Book } from "./book/book";
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
        <div className="animationPersonaSection">
          <h1 className="personalityFont">
            My<br></br>Persona
          </h1>

          <PlayRefresh
            id="PersonalityAnimation"
            playBoolean={0}
            playText={
              <p className="introPersonalitytext">
                <br></br>A warning <br></br>
                Don't stare at it
                <br></br>I have spoken
              </p>
            }></PlayRefresh>
          <div id="greenSquareTableID" className="flexCenter">
            <PixelHead></PixelHead>
          </div>
          <div
            className="flexCenter"
            id="personalityContainerID"
            style={{ height: "70vh" }}>
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
                    <div
                      className="personalityBaseTraits"
                      id="attributeThreeID">
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
                    <div
                      className="personalityBaseTraits"
                      id="attributeSevenID">
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
                      id="honestyID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeTwo"
                      id="honestyID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeThree"
                      id="honestyID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeFour"
                      id="honestyID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeFive"
                      id="honestyID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeSix"
                      id="honestyID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeSeven"
                      id="honestySevenID"></div>
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
                      id="focusOneID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeTwo"
                      id="focusTwoID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeThree"
                      id="focusThreeID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeFour"
                      id="focusFourID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeFive"
                      id="focusFiveID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeSix"
                      id="focusSixID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeSeven"
                      id="focusSevenID"></div>
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
                      id="structureID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeTwo"
                      id="structureTwoID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeThree"
                      id="structureThreeID"></div>
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
                      id="temperID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeTwo temper"
                      id="temperTwoID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeThree temper"
                      id="temperThreeID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeFour temper"
                      id="temperFourID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeFive temper"
                      id="temperFiveID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeSix temper"
                      id="temperSixID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeSeven temper"
                      id="temperSevenID"></div>
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
                      id="patienceOneID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeTwo"
                      id="patienceTwoID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeThree"
                      id="patienceThreeID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeFour"
                      id="patienceFourID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeFive"
                      id="patienceFiveID"></div>
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
                      id="structureTwoID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeTwo"
                      id="structureThreeID"></div>
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
                      id="empathyID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeTwo"
                      id="empathyID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeThree"
                      id="empathyID"></div>
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
                    <h4 className="personalityTraits">Stubborn</h4>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeOne"
                      id="honestySevenID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeTwo"
                      id="honestySevenID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeThree"
                      id="honestySevenID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeFour"
                      id="honestySevenID"></div>
                  </td>
                  <td>
                    <div
                      className="personalityTraits gradeFive"
                      id="honestySevenID"></div>
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
          </div>
        </div>

        <div className="personalityTextContainer" id="bookSection">
          <h2 className="mt-5 mb-1">
            Don't judge
            <br></br>a book
            <br></br>
            by its cover
          </h2>
          <div className="flexCenter bookContainer">
            <Book></Book>
          </div>
          <div className="mx-auto">
            <p className="duckText mb-0">
              I hope you didn't get too distracted by the personality matrix
              above - it's just a fun way to introduce some of my personal
              attributes.
              <br></br>
              <br></br>
              <span class="highLight">
                But now, let's get to the real me.
              </span>{" "}
              In the cards below, I'll provide some more detail about my
              personal traits. I believe it's important to be open about who we
              are and what we value, so that we can work together effectively
              and authentically. So, take a look and get to know me a little
              better.
            </p>
          </div>

          <div className="container flexCenter">
            <div className="row flexCenter">
              <div className="col flexCenter mb-3">
                <div
                  className="card personalityCard"
                  id="honestyCard"
                  onClick={this.handleClick}>
                  <div>
                    <button
                      id="honestyCard_closeBtn"
                      className="personalityCloseBtn"
                      onClick={this.closeWindow}>
                      <FontAwesomeIcon icon={faClose} id="navIconID" />
                    </button>
                  </div>

                  <div className="card-body">
                    <button className="btnPersonalityCard">
                      <h3 className="card-title" id="honestyCard_h3">
                        Honesty
                      </h3>
                      <h4 id="honestyCard_h4">Runs in the family</h4>
                      <p className="card-text" id="honestyCard_p">
                        Honesty is a core value that I hold dear, but my
                        approach to it may differ from what others consider
                        typical. Growing up, my family often used the phrase{" "}
                        <span className="highLight">
                          "I'm just telling the truth"
                        </span>{" "}
                        in a way that felt abusive at times.
                        <br></br>
                        <br></br>
                        As I've gotten older, I try to be diplomatic when
                        expressing my opinions and hopefully not causing harm to
                        others. I often encourage those around me to be more
                        honest with me, even if it may be uncomfortable at
                        times.
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col flexCenter">
                <div
                  className="card personalityCard"
                  id="stubbornCard"
                  onClick={this.handleClick}>
                  <div>
                    <button
                      id="stubbornCard_closeBtn"
                      className="personalityCloseBtn"
                      onClick={this.closeWindow}>
                      <FontAwesomeIcon icon={faClose} id="navIconID" />
                    </button>
                  </div>

                  <div className="card-body">
                    <button className="btnPersonalityCard">
                      <h3 className="card-title" id="stubbornCard_h3">
                        Stubborn
                      </h3>
                      <h4 id="stubbornCard_h4">The Family Curse</h4>
                      <p className="card-text" id="stubbornCard_p">
                        Being stubborn is another family trait. It certainly
                        helped me when I faced unemployment at times where I
                        refused to give up. When I pursued a career as a
                        developer while studying part-time and working full-time
                        at CGI Sverige was very challenging but I was able to
                        accomplish it due to my stubbornness.
                        <br></br> <br></br>
                        In the end,I've learned that sometimes taking a step
                        back and finding a more elegant solution is better than
                        brute-forcing through obstacles.
                      </p>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col flexCenter">
                <div
                  className="card personalityCard"
                  id="structureCard"
                  onClick={this.handleClick}>
                  <div>
                    <button
                      id="structureCard_closeBtn"
                      className="personalityCloseBtn"
                      onClick={this.closeWindow}>
                      {" "}
                      <FontAwesomeIcon icon={faClose} id="navIconID" />
                    </button>
                  </div>

                  <div className="card-body">
                    <button className="btnPersonalityCard">
                      <h3 className="card-title" id="structureCard_h3">
                        Structure
                      </h3>
                      <h4 id="structureCard_h4">Feng Shui</h4>

                      <p className="card-text" id="structureCard_p">
                        While structure may not be my strongest attribute, I
                        recognize its significance. I need{" "}
                        <span className="highLight"> feng shui </span>
                        to have harmony and balance in whatever I do. The web
                        design needs to be in harmony regarding its usage of
                        colors and the layout having a logical structure. The
                        format on the code needs to be well organized. Working
                        in a project must have a structured plan and goals.
                        <br></br>
                        <br></br>
                        Therefore it is important for me to team up with a
                        skilled project manager who can assist me in
                        prioritizing and direct my effort and focus.
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col flexCenter">
                <div
                  className="card personalityCard"
                  id="focusCard"
                  onClick={this.handleClick}>
                  <div>
                    <button
                      id="focusCard_closeBtn"
                      className="personalityCloseBtn"
                      onClick={this.closeWindow}>
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
                        To reach the very heights of my hyperfocus I need feng
                        shui, honest co-workers I can trust and enjoyable tasks.
                        <br></br>
                        <br></br>
                        In contrast a chaotic environment and boredom will
                        eventually crash my focus into a
                        <span className="highLight"> blue screen of death</span>
                        .
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col flexCenter">
                <div
                  className="card personalityCard"
                  id="multiTaskCard"
                  onClick={this.handleClick}>
                  <div>
                    <button
                      id="multiTaskCard_closeBtn"
                      className="personalityCloseBtn"
                      onClick={this.closeWindow}>
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
                        I have unfortunately multitasked during my career and
                        it's not for me. I am more of a
                        <span className="highLight">
                          {" "}
                          single-core processor
                        </span>{" "}
                        type of person.
                        <br></br>
                        <br></br>
                        Meaning, I do one thing really well at a time.
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col flexCenter">
                <div
                  className="card personalityCard"
                  id="patienceCard"
                  onClick={this.handleClick}>
                  <div>
                    <button
                      id="patienceCard_closeBtn"
                      className="personalityCloseBtn"
                      onClick={this.closeWindow}>
                      {" "}
                      <FontAwesomeIcon icon={faClose} id="navIconID" />
                    </button>
                  </div>

                  <div className="card-body">
                    <button className="btnPersonalityCard">
                      <h3 className="card-title" id="patienceCard_h3">
                        Patience
                      </h3>
                      <h4 id="patienceCard_h4">Right here and right now</h4>

                      <p className="card-text" id="patienceCard_p">
                        I want to see result
                        <span className="highLight">
                          {" "}
                          right here and right now
                        </span>
                        . Consequently, I have suffered from being impatient at
                        times.<br></br>
                        <br></br>
                        Fortunately, I have learned to take a step back, calm
                        down, and breath alot in order to regain more patience.
                        Doing this website and intensive long-term projects at
                        work have increased my patience though.
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col flexCenter">
                <div
                  className="card personalityCard"
                  id="temperCard"
                  onClick={this.handleClick}>
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
                        Most of the time I am calm. Nevertheless, if I am having
                        some sort of a setback such as facing a code-bug from
                        hell then it will trigger me. However, I am truly
                        grateful to have some temper since it is my very
                        <span className="highLight"> engine </span>in life.
                        <br></br>
                        <br></br>
                        My emotions provide me with energy and focus in order to
                        handle various challenging situations.
                      </p>
                    </button>
                  </div>
                </div>
              </div>

              <div className="col flexCenter">
                <div
                  className="card personalityCard"
                  id="empathyCard"
                  onClick={this.handleClick}>
                  <div>
                    <button
                      id="empathyCard_closeBtn"
                      className="personalityCloseBtn"
                      onClick={this.closeWindow}>
                      <FontAwesomeIcon icon={faClose} id="navIconID" />
                    </button>
                  </div>

                  <div className="card-body">
                    <button className="btnPersonalityCard">
                      <h3 className="card-title" id="empathyCard_h3">
                        Leadership
                      </h3>
                      <h4 id="empathyCard_h4">Coordinator</h4>

                      <p className="card-text" id="empathyCard_p">
                        I could be an good leader one day but at the moment I
                        would do okay as the
                        <span className="highLight"> coordinator </span>in a
                        team.
                        <br></br>
                        <br></br>I am very pragmatic and I have my eyes on the
                        target. In addition, I am very keen on hearing others'
                        opinions. The best ideas are made in discussions between
                        people with different perspectives on how a problem can
                        be solved.
                      </p>
                    </button>
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
