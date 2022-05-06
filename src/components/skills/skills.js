
import React, { Component } from 'react';
import "../skills/skills.css";
import {IntroSkill } from "./introSkill/introSkill";
import SkillDivider from './skillDivider/skillDivider';
import "../../IntersectionObserver.js";
import PlayRefresh from '../PlayRefresh/PlayRefresh.js';


class Skills extends Component {
    frontEndTheme="frontEndTheme";
    backEndTheme="backEndTheme";
    appTheme="applicationsTheme";
    rolesTheme="rolesTheme";

    render() {
        return(
        <div id="skills" className="sectionAnimation">
        <div className='sectionLine' style={{backgroundColor:'var(--primary-blue)'}}></div>
        <div  className="header-wraper">
            
            <div className="main-info">
                <h1  style={{color:"var(--primary-blue"}}>Skills</h1>

                
                {/* </div> */}
                <PlayRefresh id='SkillAnimation' playBoolean={true}></PlayRefresh>

                <IntroSkill></IntroSkill>

                
        <div className="skillContainer" style={{width:"100%", marginTop:"-15rem"}}>


                    <table className="skillTable">
                        <tr>
                            <td>
                                <h2 className="skillCategory frontEndTheme">Front <br></br> end</h2> 
                            </td>
                            <td>
                                <h2 className="skillCategory backEndTheme">Back <br></br> end</h2>
                            </td>
                          
                            <td>
                                <h2 className="skillCategory rolesTheme d-inline-flex justify-content-center">Work <br></br> roles</h2>              
                            </td>
                        </tr>
                    </table>

                     <table className="skillTable" >
                     <thead >
                        <tr>
                        <td> <h3 className="skillPointGround" id="Beginner" style={{marginBottom:'2%'}}>Noob</h3></td>
                        <td> <h3 className="skillPointGround" id="Elementary" style={{marginBottom:'2%'}}>Basic</h3></td>
                        <td> <h3 className="skillPointGround" id="Intermediate" style={{marginBottom:'2%'}}>Solid</h3></td>
                        <td> <h3 className="skillPointGround" id="Advanced" style={{marginBottom:'2%'}}>Pro</h3></td>
                        <td> <h3 className="skillPointGround" id="Expert" style={{marginBottom:'2%'}}>Expert</h3></td>
                    
                        </tr>
                     </thead>
                    <tbody>
                        <tr>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill frontEndTheme">Angular</p></td>
                            <td> <p className="skillPointGround" style={{opacity:"0"}}></p></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                        </tr>

                        <tr>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill frontEndTheme">ReactJS</p></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>                       
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                        </tr>
                        <tr> 
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill frontEndTheme">Typescript</p></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                        </tr>

                        <tr> 
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill frontEndTheme" id="skillElemAndInter">Javascript</p></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                        </tr>

                        <tr> 
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill frontEndTheme" id="skillElemAndInter">HTML</p></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                        </tr>

                        <tr>   
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill frontEndTheme" id="skillElemAndInter">CSS</p></td>
                            <td> <div className=" skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                        </tr>

                        <tr>
                            <td> <div cclassName="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill frontEndTheme" id="skillElemAndInter">AnimeJS</p></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                        </tr>
                   
                        <SkillDivider className="frontEndTheme"></SkillDivider>

                        <tr>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill backEndTheme" id="skillElemAndInter">C#</p></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}} ></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                        </tr>

                        <tr>
                            <td> <div cclassName="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill backEndTheme" id="skillElemAndInter">SQL</p></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}} ></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                        </tr>
    
                        <tr>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill backEndTheme" >Powershell</p></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}} ></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                        </tr>
                        

                        <SkillDivider className="backEndTheme"></SkillDivider>

                        <tr>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill rolesTheme" id="skillElemAndInter">Developer</p></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                        </tr>

                        <tr>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill rolesTheme" id="skillElemAndInter">Solution <br></br>Architect</p></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                        </tr>

                        <tr>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill rolesTheme">Business<br></br>Consultant</p></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                        </tr>

                        <SkillDivider className="rolesTheme"></SkillDivider>

                    </tbody>
                </table>
                
              
                
            </div>
            <div className='card mx-auto skill mt-1 p-3' style={{backgroundColor:'transparent'}}> 
                    <p className='mx-auto' 
                    style={{color:'var(--light-slate)', textAlign:'left', fontSize:'0.8375rem', fontWeight:'625'}}>
                    My craftmanship as a software developer would perhaps be best described as a 'jack of all trades' or 'handyman'. 
                    <br></br>
                    I am not an expert in any particular field but I am certainly not a noob (novice) either. 
                    <br></br>
                    The section 'Major Experiences' goes further into what I have developed and accomplished. <br></br>
                    </p>
               
                    </div>
            </div>
        </div>
        
    </div>
        );
    }
}

export default Skills;
