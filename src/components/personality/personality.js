
import React,{Component} from 'react';

import "../personality/personality.css";
import "../../IntersectionObserver.js";
import { PixelHead } from './pixelHead/pixelHead';
import PlayRefresh from '../PlayRefresh/PlayRefresh.js';
class Personality extends Component  {


    
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
    }

  
    render(){
        return(

        <div id="personality" className="sectionAnimation">
            <div  className="header-wraper " style={{marginTop:"-1.5rem",height:"120vh"}} >
            
                <div className="main-info" style={{marginTop:"1rem"}}>
                    <h1>Personality</h1>
                    

                    
                    <PlayRefresh id='PersonalityAnimation' playBoolean={true}></PlayRefresh>
                    
                    <PixelHead></PixelHead>

                    <div style={{width:"100%"}}>
                 


                        <table className="personalityTable .table-striped  .table-responsive" id="personalityTableID" >

                            <tr className="personalityBaseRow">
                                <td><p className="personalityBaseTraits" id="attributeID">Attributes</p></td>
                                <td><div className="personalityBaseTraits" id="attributeOneID">1</div></td>
                                <td><div className="personalityBaseTraits" id="attributeTwoID">2</div></td>
                                <td><div className="personalityBaseTraits" id="attributeThreeID">3</div></td>
                                <td><div className="personalityBaseTraits" id="attributeFourID">4</div></td>
                                <td><div className="personalityBaseTraits" id="attributeFiveID">5</div></td>
                                <td><div className="personalityBaseTraits" id="attributeSixID">6</div></td>
                                <td><div className="personalityBaseTraits" id="attributeSevenID">7</div></td>
                            </tr>

                            <tr className="personalityTraitsRow">
                                <td> <p className="personalityTraits" >Honesty</p></td>
                                <td><div className="personalityTraits gradeOne" id="honestyID"></div></td>
                                <td><div className="personalityTraits gradeTwo" id="honestyID"></div></td>
                                <td><div className="personalityTraits gradeThree" id="honestyID"></div></td>
                                <td><div className="personalityTraits gradeFour" id="honestyID"></div></td>
                                <td><div className="personalityTraits gradeFive" id="honestyID"></div></td>
                                <td><div className="personalityTraits gradeSix" id="honestyID"></div></td>
                                <td><div className="personalityTraits gradeSeven" id="honestySevenID" ></div></td>
                            </tr>

                            <tr >
                                <td> <p className="personalityTraits" >Creativity</p></td>
                                <td><div className="personalityTraits gradeOne" ></div></td>
                                <td><div className="personalityTraits gradeTwo"></div></td>
                                <td><div className="personalityTraits gradeThree" id="creativityThreeID"></div></td>
                                <td><div className="personalityTraits gradeFour" id="creativityFourID"></div></td>
                                <td><div className="personalityTraits"></div></td>
                                <td><div className="personalityTraits"></div></td>
                                <td><div className="personalityTraits" ></div></td>
                            </tr>

                            <tr  className="personalityTraitsRow" >
                                <td> <p className="personalityTraits" >Focus</p></td>
                                <td><div className="personalityTraits gradeOne" id="focusOneID"></div></td>
                                <td><div className="personalityTraits gradeTwo" id="focusTwoID"></div></td>
                                <td><div className="personalityTraits gradeThree" id="focusThreeID"></div></td>
                                <td><div className="personalityTraits gradeFour" id="focusFourID"></div></td>
                                <td><div className="personalityTraits gradeFive" id="focusFiveID"></div></td>
                                <td><div className="personalityTraits gradeSix" id="focusSixID"></div></td>
                                <td><div className="personalityTraits gradeSeven" id="focusSevenID" ></div></td>
                            </tr>

                          
                            <tr>
                               
                                <td> <p className="personalityTraits" >Temper</p></td>
                                <td><div className="personalityTraits gradeOne temper" id="temperID"></div></td>
                                <td><div className="personalityTraits gradeTwo temper" id="temperTwoID"></div></td>
                                <td><div className="personalityTraits gradeThree temper" id="temperThreeID"></div></td>
                                <td><div className="personalityTraits gradeFour temper" id="temperFourID"></div></td>
                                <td><div className="personalityTraits gradeFive temper" id="temperFiveID"></div></td>
                                <td><div className="personalityTraits gradeSix temper" id="temperSixID" ></div></td>
                                <td><div className="personalityTraits gradeSeven temper" id="temperSevenID"></div></td>
                            </tr>

                            <tr  className="personalityTraitsRow" >
                               <td> <p className="personalityTraits" >Structure</p></td>
                               <td><div className="personalityTraits gradeOne" id="structureID"></div></td>
                               <td><div className="personalityTraits gradeTwo" id="structureTwoID"></div></td>
                               <td><div className="personalityTraits gradeThree" id="structureThreeID"></div></td>
                               <td><div className="personalityTraits" ></div></td>
                               <td><div className="personalityTraits"></div></td>
                                <td><div className="personalityTraits"></div></td>
                                <td><div className="personalityTraits" ></div></td>
                           </tr>

                            <tr >
                                <td> <p className="personalityTraits" >Multitasking</p></td>
                                <td><div className="personalityTraits gradeOne" id="multitaskingID"></div></td>
                                <td><div className="personalityTraits gradeTwo" id="multitaskingTwoID"></div></td>
                                <td><div className="personalityTraits gradeThree" id="multitaskingThreeID"></div></td>
                                <td><div className="personalityTraits gradeFour" id="multitaskingFourID"></div></td>
                                <td><div className="personalityTraits"></div></td>
                                <td><div className="personalityTraits"></div></td>
                                <td><div className="personalityTraits" ></div></td>
                            </tr>

                            

                            <tr  className="personalityTraitsRow" >
                                <td> <p className="personalityTraits" >Empathy</p></td>
                                <td><div className="personalityTraits gradeOne" id="empathyID"></div></td>
                                <td><div className="personalityTraits gradeTwo" id="empathyTwoID"></div></td>
                                <td><div className="personalityTraits gradeThree" id="empathyThreeID"></div></td>
                                <td><div className="personalityTraits gradeFour"></div></td>
                                <td><div className="personalityTraits"></div></td>
                                <td><div className="personalityTraits" ></div></td>
                                <td><div className="personalityTraits" ></div></td>
                            </tr>

                            <tr >
                                <td> <p className="personalityTraits" >Teamplayer</p></td>
                                <td><div className="personalityTraits gradeOne" id="teamplayerID"></div></td>
                                <td><div className="personalityTraits gradeTwo" id="teamplayerTwoID"></div></td>
                                <td><div className="personalityTraits gradeThree" id="teamplayerThreeID"></div></td>
                                <td><div className="personalityTraits gradeFour" ></div></td>
                                <td><div className="personalityTraits gradeFive" ></div></td>
                                <td><div className="personalityTraits" ></div></td>
                                <td><div className="personalityTraits" ></div></td>


                            </tr>

                            <tr className="personalityTraitsRow">
                                <td className="columnHeaderTraits"> <p className="personalityTraits" >Details</p></td>
                                <td><div className="personalityTraits gradeOne" id="detailsID"></div></td>
                                <td><div className="personalityTraits gradeTwo" id="detailsTwoID"></div></td>
                                <td><div className="personalityTraits gradeThree" id="detailsThreeID"></div></td>
                                <td><div className="personalityTraits gradeFour" id="detailsFourID"></div></td>
                                <td><div className="personalityTraits gradeFive" id="detailsFiveID"></div></td>
                                <td><div className="personalityTraits " ></div></td>
                                <td><div className="personalityTraits " ></div></td>

                            </tr>
                        </table>
                        
                        
                    </div>
                </div>
            </div>
        </div>


        )
    }
}
    
    export default Personality;
    