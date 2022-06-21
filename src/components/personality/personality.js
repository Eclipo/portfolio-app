import React, { Component } from "react";

import "../personality/personality.css";
import "../../IntersectionObserver.js";
import { PixelHead } from "./pixelHead/pixelHead";
import PlayRefresh from "../PlayRefresh/PlayRefresh.js";
class Personality extends Component {
  constructor(props) {
    super(props);
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
            <h2>My personality</h2>
            <p>
              The attributes matrix does not fully represent my
              personality because I want to raise an awereness that a personality is
              dynamic rather than constant.
              <br></br>
              <br></br>Growing up in a Kurdish familly teaches you how to be
              too <span className="highlighted">honest</span> for your own good.
              Late in life I have learned to be more diplomatic and restrictive regarding my opinions.
              <br></br>
              <br></br>
              <span className="highlighted">Stubbornness</span> is an
              another familly attribute. My ancestors and familly have overcome
              various obstacles throughout our history.
              <br></br>
              <br></br>
              The need of <span className="highlighted">structure</span> is of
              great importance to me but I struggle with it.
              <br></br>
              <br></br>
              Furthermore I don't like <span className="highlighted">multitasking</span>. It makes my head
              split and I can't <span className="highlighted">focus</span>. In
              order to utilize my focus besides a structured surrounding and no
              multitasking are enjoyable challenges.
              <br></br>
              <br></br>I have some problem with being <span className="highlighted">patient</span>. 
              Consequently I have suffered when I have been impatient at times. 
              Nowdays I try to take a step back and breath alot when my patience is running out.<br></br>
              <br></br>
              Most often I am very calm but when I suffer some setbacks
              I do display some <span className="highlighted">temper</span>.
              <br></br><br></br>
              Last but not least <span className="highlighted">empathy</span>. 
              I do care about people and its important to me that those who matters to me are okay.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Personality;
