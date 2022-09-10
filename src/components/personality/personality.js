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
              The personality matrix above should not be taken too seriously and hopefully you didn't stare too much! Though I did have great fun doing the animations :-)<br></br><br></br>
              My wish is to raise awereness of how one's personality is quite dynamic rather than static. 
              My personality depends on various conditions where I can either be more or less of a specific trait. I guess it's not unique among other humans.<br></br><br></br>
              Either way! Down below I explain in more detail regarding some of my major attributes in which I hope you can understand me a bit better.
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
                      <h4 id="stubbornCard_h4">A curse and a blessing</h4>
                      <p className="card-text" id="stubbornCard_p">
                        Being stubborn is an another familly attribute
                        and it is both <span className="highlighted"> a curse and a blessing </span>.
                        On one hand my stubborness has taken me where I am today.
                        On the other hand going the hard road ahead does require some sacrifice and sometimes the price is a bit too high and maybe even unnecessary.<br></br><br></br>
                        However with time I have grown wiser and instead of brute-forcing myself through the obstacles I try to take a step back, 
                        breath alot and try to figure out how I will solve it more efficiently.
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
                        Task lists, reminders, labeled boxes but I still end up in a mess.
                        Despite my flaw I still need a structural environment. I need the<span className="highlighted"> feng shui</span> since 
                        it calms my mind and I can channel my focus on more pressing matters such as coding and drinking coffee.
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
                      <span className="highlighted">NO!</span> <br></br><br></br> 
                        "Multitasking" (read too much tasks) makes my head split and I need to reset my focus.<br></br>
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
                        In order to utilize my focus I need feng shui around me, 
                        no multitasking and enjoyable
                        challenges. A little side-note though I will be completely devoured by my focus.<br></br><br></br> 
                        Reaching the realm of my unfocus demands a chaotic environment and boring tasks which will sooner or later crash me into a blue screen of death 
                        (the error page in Windows when the computer doesn't work properly).<br></br><br></br>
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
                      <h4 id="patienceCard_h4">Breath alot</h4>

                      <p className="card-text" id="patienceCard_p">
                        I have some problem with being patient. I want to see result right here and right now.
                        Consequently I have suffered being impatient at times. It is a never ending progress to change one's self but I do try in taking a step back and 
                        <span className="highlighted"> breath alot </span>when my patience is about to meet it's end.
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
                      <h4 id="temperCard_h4">Necessary actions</h4>

                      <p className="card-text" id="temperCard_p">
                        Most often I am very calm but naturally I do display some stronger emotions at times. 
                        Tapping into those more fierce feelings such as anger, sadness, panic or anxiety does me make more capable of taking <span className="highlighted"> necessary actions </span>
                        to handle difficult situations.
                        My temper and its whole spectrum of emotions helps me taking better decisions in life rather than me just listening franatically to logic and reason. <br></br><br></br>
                        Truth to be told you simply need both logic and emotions to handle whatever life throws at you.
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
                        Empathy
                      </h3>
                      <p className="card-text" id="empathyCard_p">
                        People (familly and friends) of whom I trust are those I particularly care about.<br></br> 
                        During the last years I have unfortunately learnt not everyone deserve my empathy where it should be treated as a<span className="highlighted"> scarcity </span>.<br></br><br></br>
                        Thus my empathy is only given to those who are honest and actually does give a damn about me. 
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
