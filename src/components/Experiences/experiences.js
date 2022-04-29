import React,{Component} from 'react';
import './experiences.css';
import "../../IntersectionObserver.js";
import {ExperienceAnimation} from "./experienceAnimation.js";
import {animate} from "./experienceFunctions.js";
import {KnucklesSvg} from "./KnucklesSvg/KnucklesSvg.js";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import PlayRefresh from '../PlayRefresh/PlayRefresh.js';

class Experiences extends Component  {

    expAnime = new ExperienceAnimation();
    constructor(props) {
        super(props);
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
        this.playAnimation = this.playAnimation.bind(this);
        this.arrowLeft = this.arrowLeft.bind(this);
        this.arrowRight = this.arrowRight.bind(this);
        
    }

    handleClick(event) {
        animate(event.currentTarget.id);
    }

    playAnimation() {
        this.expAnime.playOrStop(true);
    }

    arrowLeft(event){
        alert("No scrolling here. I'm just an arrow after all.");
    }

    arrowRight(event){
        alert("I'm just an arrow pointing to right. I'm not scrolling around.");
    }

    render(){
    return (
        
      <div className='sectionAnimation' id="experiencesID">
             <div  className="header-wraper">
               <div className="main-info">
             

                    <h1>Major Experiences</h1>
                    <PlayRefresh id='ExperienceAnimation' playBoolean={true}></PlayRefresh>

      

                
                    <div className='container' id="KnucklesContainerID">
                    <KnucklesSvg></KnucklesSvg>
                    </div>
                   
                    <div className='container row' id='expMenu'>
                        <div className='row mx-auto '>
                          <div className='col'>
                              <FontAwesomeIcon className='scrollArrow' onClick={this.arrowLeft} icon={faArrowLeft} color='var(--primary-light-green)'></FontAwesomeIcon>
                          </div>
                        
                          <div className='col-8' >
                            <p className='header3Tech text-align-left'>Scroll the major experiences down below to left and right if you have a smaller screen. Click on the chosen major experience to view its information.</p>
                          </div>

                          <div className='col' >
                              <FontAwesomeIcon className='scrollArrow' onClick={this.arrowRight} icon={faArrowRight} color='var(--primary-light-green)'></FontAwesomeIcon>
                          </div>
                        </div>
                    
                      <table className="row overflow-auto d-block" id='expCategoryMenu'>
                     
                        <tr>
                        <td>
                                <div className="col techCategory" id="fintech" onClick={this.handleClick}><p className='techHeader'>Fintech Industry</p></div>
                                <div className='scrollLine' id="fintech_scrollLine"></div>
                            </td>

                            <td>
                                <div className="col techCategory" id="stockholm" onClick={this.handleClick}><p className='techHeader'>City of Stockholm</p></div>
                                <div className='scrollLine' id="stockholm_scrollLine"></div>
                            </td>
                            <td>
                                    <div className="col techCategory" id="falu" onClick={this.handleClick}><p className='techHeader'>Falu Municipality</p></div>
                                    <div className='scrollLine' id="falu_scrollLine"></div>

                            </td>
                            <td>
                                <div className="col techCategory" id="motala"  onClick={this.handleClick}><p className='techHeader'>Motala Municipality</p></div>  
                                <div className='scrollLine' id="motala_scrollLine"></div>
            
                            </td>
                            
                        </tr>

                    </table>
                    </div>

                    
                    <div className='container expTable expInfo mb-2' id="_container">
                        <div className='row container expInfo' id="_header">
                            <span className='header2Tech' id='jobTitleID'></span>
                            <span className='header2Tech' id="jobAtID">&nbsp;@&nbsp;</span>
                            <a className ="link" href='' target='_blank' id="linkID"></a>
                        </div>

                        <div className='container expInfo' id="_periodSystem">
                            <div className='row header3Tech mt-3'>Employer:&nbsp;<p className ="header3Tech" style={{color:'var(--primary-light-green)'}}> CGI Sverige AB</p></div>
                            <span className='row header3Tech'>Period:&nbsp;<p className ="header3Tech" id='period' style={{color:'var(--primary-light-green)'}}></p></span>
                            <span className='row header3Tech'>System:&nbsp;<p className ="header3Tech" id='system' style={{color:'var(--primary-light-green)'}}></p></span>
                        </div>

                        <div className=' techText' >
                            <ul className=''>
                                <li className='row'>
                                <p className='li_icon'>▹</p>
                                <p className='col-md-auto' id="_descOne"></p></li>
                                <br></br>

                                <li  className='row'>
                                    <p className='li_icon' id="_liTwo">▹</p>
                                    <p className='col-md-auto'  id="_descTwo"></p>
                                </li>
                                <br></br>

                                <li  className='row'  id="_liThree">
                                    <p className='li_icon' id='_liThreeIcon'>▹</p>
                                    <p className='col-md-auto' id="_descThree"></p>
                                </li>
                                <br></br>

                                <li  className='row' id="_liFour">
                                    <p className='li_icon'>▹</p>
                                    <p className='col' id="_descFour"></p>
                                </li>
                                <br></br>
                            </ul>
                        </div>
                        <div className='col'>
                            <p className='row header2Tech mx-auto'>Tech</p>
                           <div className='techUnderLine'></div>
                            {/* <p className='techUnderLine'></p> */}
                     
                    
                        <div className='techSkillContainer' id="stockholm_tech">
                            <div className='techRow' id='stockholm_sql'>
                                <p className='techSkill'>MS SQL</p>
                            </div>
                            <div className='techRow' id='stockholm_ps1'>
                                <p className='techSkill'>Powershell</p>
                            </div>
                            <div className='techRow'  id='stockholm_csharp'>
                                <p className='techSkill' >C#</p>
                            </div>
                        </div>

                        <div className='techSkillContainer' id="fintech_tech">
                            <div className='techRow' id='fintech_sql'>
                                <p className='techSkill'>MS SQL</p>
                            </div>
                            <div className='techRow' id='fintech_csharp'>
                                <p className='techSkill'>C#</p>
                            </div>
                            <div className='techRow' id='fintech_angular'>
                                <p className='techSkill'>Angular</p>
                            </div>
                        </div>

                        <div className='techSkillContainer' id="falu_tech">
                            <div className='techRow' id='falu_sql'>
                                <p className='techSkill'>MS SQL</p>
                            </div>
                            <div className='techRow' id='falu_javascript'>
                                <p className='techSkill'>Javascript</p>
                            </div>
                            <div className='techRow' id='falu_htmlcss'>
                                <p className='techSkill'>HTML/CSS</p>
                            </div>
                            <div className='techRow'  id='falu_csharp'>
                                <p className='techSkill'>C#</p>
                            </div>
                        </div>

                        <div className='techSkillContainer' id="motala_tech">
                            <div className='techRow' id='falu_sql'>
                                <p className='techSkill'>MS SQL</p>
                            </div>
                            <div className='techRow' id='falu_javascript'>
                                <p className='techSkill'>Javascript</p>
                            </div>
                            <div className='techRow' id='falu_htmlcss'>
                                <p className='techSkill'>HTML/CSS</p>
                            </div>
                            <div className='techRow'  id='falu_csharp'>
                                <p className='techSkill'>C#</p>
                            </div>
                        </div>
                      

                                
                        </div>
                    </div>
                        
                    
                       

                </div>
            </div>
        </div>
        )
        }
}
    
    export default Experiences;
