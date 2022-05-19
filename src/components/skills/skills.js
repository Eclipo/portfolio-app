
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
        {/* <div  className="header-wraper">
            
            <div className="main-info"> */}
                <h1  style={{color:"var(--primary-blue"}}>Skills</h1>

                
                {/* </div> */}
                <PlayRefresh id='SkillAnimation' playBoolean={true}></PlayRefresh>

                <div className='flexCenter'>
                    <IntroSkill></IntroSkill>
                </div>
                

                
        <div className="skillContainer" id="skillContainerID" style={{width:"100%", marginTop:"-15rem"}}>


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
                        <td> <h3 className="skillPointGround m-1 p-1" id="Beginner" style={{marginBottom:'2%'}}>Noob</h3></td>
                        <td> <h3 className="skillPointGround m-1 p-1" id="Elementary" style={{marginBottom:'2%'}}>Basic</h3></td>
                        <td> <h3 className="skillPointGround m-1 p-1" id="Intermediate" style={{marginBottom:'2%'}}>Lagom</h3></td>
                        <td> <h3 className="skillPointGround m-1 p-1" id="Advanced" style={{marginBottom:'2%'}}>Pro</h3></td>
                        <td> <h3 className="skillPointGround " id="Expert" style={{marginBottom:'2%'}}>Expert</h3></td>
                    
                        </tr>
                     </thead>
                    <tbody>
                        <tr>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill frontEndTheme" id='skillElemAndNoob'>Angular</p></td>
                            <td> <p className="skillPointGround" style={{opacity:"0"}}></p></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                        </tr>

                        <tr>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill frontEndTheme" id="skillElemAndNoob">ReactJS</p></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>                       
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                        </tr>
                        <tr> 
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill frontEndTheme" id="skillElemAndNoob">Typescript</p></td>
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
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill frontEndTheme" id="skillElemAndInter">AnimeJS</p></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                        </tr>
                   
                        <SkillDivider className="frontEndTheme"></SkillDivider>

              

                        <tr>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill backEndTheme" id="skillElemAndNoob" >Powershell</p></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}} ></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                        </tr>

                        <tr>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill backEndTheme" id="skillElemAndInter">SQL</p></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}} ></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                        </tr>

                        <tr>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill backEndTheme" id="skillNoobElemAndInter">C#</p></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}} ></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                        </tr>
                   
                        

                        <SkillDivider className="backEndTheme"></SkillDivider>


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


                        <tr>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <p className="skill rolesTheme" id="skillNoobElemAndInter">Developer</p></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                            <td> <div className="skillPointGround" style={{opacity:"0"}}></div></td>
                        </tr>
                        <SkillDivider className="rolesTheme"></SkillDivider>

                    </tbody>
                </table>
            </div>

            <div className='skill container' id='duckContainerID'> 
             
             <div className='row'>
             <div className='flexCenter'>

             
                <Duck></Duck>
                </div>
             </div>
             

            <div className='row'>
                <p className='duckText p-3'>
                    I'm a duck. <br></br>
                    I can't fly in the front-end like a hummingbird. <br></br>
                    I can't dash in the back-end like a greyhound.<br></br>
                    I can't swim in the database like a fish.
                    <br></br> <br></br>However...<br></br><br></br>
                    I can flap my wings around in the front-end.<br></br> 
                    I can waddle myself through the back-end. <br></br>
                    I can paddle in the database.
                    <br></br><br></br>  
                    In other words I am a full-stack developer. 
                    <br></br><br></br> 
                
                    So how good am I?<br></br>
                    If I am famillar with the application and its code then I am somewhat self-going.
                    However I will occassionally need the support from my senior colleagues of how I should 
                    solve a complex problem or facing a new technical concept. 
                    <br></br><br></br>
                    But to be honest....<br></br> 
                    It's quite difficult to know how good I actually am. <br></br>
                    That's why the skills are all over the place.<br></br>
                    I hope I am at least good enough of being a duck who is "Lagom" as we say in Swedish.
                </p>
            </div>  
        </div>
        {/* </div>
    </div>         */}
</div>
);
}
}

export default Skills;
