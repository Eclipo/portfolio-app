
import React, { Component } from 'react';
import "../skills/skills.css";
import {IntroSkill } from "./introSkill/introSkill";
import SkillDivider from './skillDivider/skillDivider';
import "../../IntersectionObserver.js";
import PlayRefresh from '../PlayRefresh/PlayRefresh.js';
import {Duck} from './duck/duck.js';

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
                        <td> <h3 className="skillPointGround" id="Intermediate" style={{marginBottom:'2%'}}>Lagom</h3></td>
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

            <div className='container skill' style={{backgroundColor:'transparent'}}> 
             
             <div className='flexCenter mt-2'>
                <Duck></Duck>
             </div>
             

            <div className='col col-md-6 mx-auto mb-5'>
                <p className='duckText w-100 p-3'>
                    I'm a duck. <br></br>
                    I can't fly in the front-end like a hummingbird. <br></br>
                    I can't dash in the back-end like a dog doing agility.<br></br>
                    I can't swim in the database like a deep-sea-fish.
                    <br></br> <br></br>Quack! Quack!<br></br><br></br>
                    I can flap my wings around in the front-end.<br></br> 
                    I can waddle myself through the back-end. <br></br>
                    I can paddle and even dive (for a short while!) in the database.
                    <br></br><br></br>  
                    In other words I am a full-stack developer. 
                    <br></br><br></br> 
                
                    So how good am I?<br></br>
                    If I am famillar with the application and its code then I am somewhat self-going.
                    However I will occassionally need the support from my senior colleagues of how I should 
                    solve a rather complex problem or facing a new technical concept. 
                    <br></br><br></br>
                    Simply put I am a duck who is either just below or perfectly "Lagom" as we say in Swedish.
                </p>
            </div>  
        </div>
        </div>
    </div>        
</div>
);
}
}

export default Skills;
