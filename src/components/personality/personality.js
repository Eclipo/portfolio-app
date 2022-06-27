import React, { Component,useState } from "react";
import {faArrowDown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import "../personality/personality.css";
import "../../IntersectionObserver.js";
import { PixelHead } from "./pixelHead/pixelHead";
import PlayRefresh from "../PlayRefresh/PlayRefresh.js";
import {startAttributeAnimation, resetAttributeAnimation,closeDialogue} from "./personalityFunctions.js";
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

  closeWindow(event){
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
              CLICKING ON THIS PLAYBUTTON <br></br>
              WILL DISPLAY MY MESSY PERSONALITY WITH <br></br>
              VERY DISTURBING AND FLASHING ANIMATIONS!
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
                <p className="personalityBaseTraits" id="attributeID">
                  Attributes
                </p>
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
                <p className="personalityTraits">Honesty</p>
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
                <p className="personalityTraits">Focus</p>
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
                <p className="personalityTraits">Structure</p>
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
                <p className="personalityTraits">Temper</p>
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
                <p className="personalityTraits">Patience</p>
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
                <p className="personalityTraits">Multitasking</p>
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
                <p className="personalityTraits">Empathy</p>
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
                <p className="personalityTraits">Stubborn</p>
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
            <h2 className="mb-5">My personality</h2>
   
           <h3 className="brokenBanner">
            <span className="brokenLetterC">C</span>
            <span >L</span>
            <span >I</span>
            <span>C</span>
            <span className="brokenLetterK">K</span>
       


          </h3>


           <div className="container flexCenter">
            <div className="row flexCenter">
              <div className="col flexCenter">
                <div 
                  className="card personalityCard" 
                  id="honestyCard" 
                  onClick={this.handleClick}
                  onMouseEnter={this.handleClick}
                  onMouseLeave={this.handleLeave}
                >
                  <div>
                    <button id='honestyCard_closeBtn' className="personalityCloseBtn" onClick={this.closeWindow}>X</button>
                  </div>
                  
                  <div className="card-body">
                    <h3 className="card-title" id="honestyCard_h3">Honesty</h3>
                    <p className="card-text" id="honestyCard_p">
                      Growing up in a Kurdish familly teaches you how to be
                      too <span className="highlighted">honest</span> for your own good.
                      Later in life I have learned to be more diplomatic and restrictive regarding my opinions.</p>
                  </div>
                </div>
              </div>
              
              <div className="col flexCenter">
                <div className="card personalityCard" 
                id="stubbornCard" 
                onClick={this.handleClick}
                onMouseEnter={this.handleClick}
                onMouseLeave={this.handleLeave}
                >
                  <div>
                    <button id='stubbornCard_closeBtn' className="personalityCloseBtn" onClick={this.closeWindow}>X</button>
                  </div>
                  
                  <div className="card-body">
                    <h3 className="card-title" id="stubbornCard_h3">Stubbornness</h3>
                    <p className="card-text" id="stubbornCard_p">
                      <span className="highlighted">Stubbornness</span> is an
                      another familly attribute. My ancestors and familly have overcome
                      various obstacles throughout our history.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col flexCenter">
                <div className="card personalityCard" 
                  id="structureCard" 
                  onClick={this.handleClick}
                  onMouseEnter={this.handleClick}
                  onMouseLeave={this.handleLeave}
                  >
                    <div>
                      <button id='structureCard_closeBtn' className="personalityCloseBtn" onClick={this.closeWindow}>X</button>
                    </div>
                    
                    <div className="card-body">
                      <h3 className="card-title" id="structureCard_h3">Structure</h3>
                      <p className="card-text" id="structureCard_p">
                        The need of <span className="highlighted">structure</span> is of
                        great importance to me but I struggle with it.
                      </p>
                    </div>
                  </div>
              </div>

              <div className="col flexCenter">
                <div className="card personalityCard" 
                    id="multiTaskCard" 
                    onClick={this.handleClick}
                    onMouseEnter={this.handleClick}
                    onMouseLeave={this.handleLeave}
                    >
                      <div>
                        <button id='multiTaskCard_closeBtn' className="personalityCloseBtn" onClick={this.closeWindow}>X</button>
                      </div>
                      
                      <div className="card-body">
                        <h3 className="card-title" id="multiTaskCard_h3">Multitasking</h3>
                        <p className="card-text" id="multiTaskCard_p">
                        I don't like <span className="highlighted">multitasking</span>. It makes my head
                        split.
                        </p>
                      </div>
                  </div>
              </div>

              <div className="col flexCenter">
                <div className="card personalityCard" 
                    id="focusCard" 
                    onClick={this.handleClick}
                    onMouseEnter={this.handleClick}
                    onMouseLeave={this.handleLeave}
                    >
                      <div>
                        <button id='focusCard_closeBtn' className="personalityCloseBtn" onClick={this.closeWindow}>X</button>
                      </div>
                      
                      <div className="card-body">
                        <h3 className="card-title" id="focusCard_h3">Focus</h3>
                        <p className="card-text" id="focusCard_p">
                          In order to utilize my <span className="highlighted">focus</span> besides a structured surrounding and no
                          multitasking are enjoyable challenges.
                        </p>
                      </div>
                  </div>
              </div>

              <div className="col flexCenter">
                <div className="card personalityCard" 
                    id="patienceCard" 
                    onClick={this.handleClick}
                    onMouseEnter={this.handleClick}
                    onMouseLeave={this.handleLeave}
                    >
                      <div>
                        <button id='patienceCard_closeBtn' className="personalityCloseBtn" onClick={this.closeWindow}>X</button>
                      </div>
                      
                      <div className="card-body">
                        <h3 className="card-title" id="patienceCard_h3">Patience</h3>
                        <p className="card-text" id="patienceCard_p">
                          I have some problem with being <span className="highlighted">patient</span>. 
                          Consequently I have suffered when I have been impatient at times. 
                          Nowdays I try to take a step back and breath alot when my patience is running out
                        </p>
                      </div>
                  </div>
              </div>

              <div className="col flexCenter">
                <div className="card personalityCard" 
                    id="temperCard" 
                    onClick={this.handleClick}
                    onMouseEnter={this.handleClick}
                    onMouseLeave={this.handleLeave}
                    >
                      <div>
                        <button id='temperCard_closeBtn' className="personalityCloseBtn" onClick={this.closeWindow}>X</button>
                      </div>
                      
                      <div className="card-body">
                        <h3 className="card-title" id="temperCard_h3">Temper</h3>
                        <p className="card-text" id="temperCard_p">
                         Most often I am very calm but when I suffer some setbacks 
                         I do display some <span className="highlighted">temper</span>.
                        </p>
                      </div>
                  </div>
              </div>

              <div className="col flexCenter">
                <div className="card personalityCard" 
                    id="empathyCard" 
                    onClick={this.handleClick}
                    onMouseEnter={this.handleClick}
                    onMouseLeave={this.handleLeave}
                    >
                      <div>
                        <button id='empathyCard_closeBtn' className="personalityCloseBtn" onClick={this.closeWindow}>X</button>
                      </div>
                      
                      <div className="card-body">
                        <h3 className="card-title" id="empathyCard_h3">Empathy</h3>
                        <p className="card-text" id="empathyCard_p">
                          I am <span className="highlighted">empathic </span>
                           to those I care about and its important to me that they  are okay.
                        </p>
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
