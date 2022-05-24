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

        <PlayRefresh id="PersonalityAnimation" playBoolean={0} 
          playText="WARNING! CLICKING ON THIS PLAYBUTTON WILL TRIGGER A HIGHLY DISTURBING ANIMATION CONTAINING FLASHING LIGHTS! MY PERSONALITY IS A MESS! YOU HAVE BEEN WARNED!" textColor="var(--primary-green)">
          
        </PlayRefresh>
        <div id="greenSquareTableID" className="flexCenter">
          <PixelHead></PixelHead>
        </div>
        <div className="flexCenter" id="personalityContainerID">
          <table className="personalityTable" id="personalityTableID">
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
                  id="empathyTwoID"
                ></div>
              </td>
              <td>
                <div
                  className="personalityTraits gradeThree"
                  id="empathyThreeID"
                ></div>
              </td>
              <td>
                <div className="personalityTraits gradeFour"
                  id="empathyFourID">
                  </div>
              </td>
              <td>
                <div className="personalityTraits gradeFive"
                 id="empathyFourID"></div>
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
                <div className="personalityTraits gradeFour" id="honestySevenID"></div>
              </td>
              <td>
                <div className="personalityTraits gradeFive" id="honestySevenID"></div>
              </td>
              <td>
                <div className="personalityTraits"></div>
              </td>
              <td>
                <div className="personalityTraits"></div>
              </td>
            </tr>

           
          </table>
          <div className="personalityTextContainer">
            
            <h4>Honesty</h4>
            <p>
              I have been raised up in a Kurdish familly and it has taught me how to give and take feedback in the rawest of formats.<br></br><br></br>
              Being honest with good intention is an attribute I value very highly. <br></br>
              However I have gotten a bit wiser and I have learned that honest opinions are best delivered in a more sophisticated and diplomatic manner.
              <br></br><br></br>
              </p>
              <p></p>
              <p></p>
              <p></p>
              
          </div>
        </div>
      </div>
    );
  }
}

export default Personality;
