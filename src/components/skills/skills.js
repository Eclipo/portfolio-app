
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
        <div  className="header-wraper">
            
            <div className="main-info">
                <h1 className="headerSkills">Skills</h1>
                <PlayRefresh id='SkillAnimation' playBoolean={true}></PlayRefresh>

                <IntroSkill></IntroSkill>

                
        <div className="skillContainer" style={{width:"100%", marginTop:"-15rem"}}>


                    <table className="skillTable .table">
                        <tr>
                            <td>
                                <div className="skillCategory frontEndTheme">Front-End</div> 
                            </td>
                            <td>
                                <div className="skillCategory backEndTheme">Back-End</div>
                            </td>
                            <td>
                                <div className="skillCategory applicationsTheme">Applications</div>
                            </td>
                            <td>
                                <div className="skillCategory rolesTheme">Roles</div>              
                            </td>
                        </tr>
                    </table>

                     <table className="skillTable .table" >
                     <thead >
                        <tr>
                        <td> <div className="skillPointGround" id="Beginner">Beginner</div></td>
                        <td> <div className="skillPointGround" id="Elementary">Elementary</div></td>
                        <td> <div className="skillPointGround" id="Intermediate">Intermediate</div></td>
                        <td> <div className="skillPointGround" id="Advanced">Advanced</div></td>
                        <td> <div className="skillPointGround" id="Expert">Expert</div></td>
                    
                        </tr>
                     </thead>
                    <tbody>
                    <tr >
                        
                    <td> <div className="skillPointGround" style={{opacity:"0"}}>Beginner</div></td>
                    <td> <div className="skill frontEndTheme">Boostrap</div></td>
                       
                        <td> <div className=" skillPointGround" style={{opacity:"0"}}>Intermediate</div></td>
                       
                        <td> <div className="skillPointGround" style={{opacity:"0"}}>Advanced</div></td>
                        <td> <div className="skillPointGround"style={{opacity:"0"}}>Expert</div></td>
                    </tr>
                    <tr >
                        
                    <td> <div className="skillPointGround" style={{opacity:"0"}}>Beginner</div></td>
                    <td> <div className="skill frontEndTheme" id="skillBetweenJavascriptID">Javascript</div></td>
                       
                        <td> <div className="skillPointGround" style={{opacity:"0"}}>Intermediate</div></td>
                       
                        <td> <div className="skillPointGround" style={{opacity:"0"}}>Advanced</div></td>
                        <td> <div className="skillPointGround" style={{opacity:"0"}}>Expert</div></td>
                    </tr>
                    <tr >
                    <td> <div className="skillPointGround"style={{opacity:"0"}}>Beginner</div></td>
                    <td> <div className="skill frontEndTheme">AnimeJS</div></td>
                       
                        <td> <div className="skill frontEndTheme">HTML5</div></td>
                       
                        <td> <div className="skillPointGround" style={{opacity:"0"}}>Advanced</div></td>
                        <td> <div className="skillPointGround"style={{opacity:"0"}}>Expert</div></td>
                    </tr>
                    <tr >
                    <td> <div className="skillPointGround"style={{opacity:"0"}}>Beginner</div></td>
                    <td> <div className="skill frontEndTheme">ReactJS</div></td>

                        <td> <div className="skill frontEndTheme">CSS</div></td>
                       
                        <td> <div className="skillPointGround" style={{opacity:"0"}}>Advanced</div></td>
                        <td> <div className="skillPointGround"style={{opacity:"0"}}>Expert</div></td>
                    </tr>
                    <SkillDivider className="frontEndTheme"></SkillDivider>

    
                        <tr >
                        <td> <div className="skill backEndTheme ">C++</div></td>
                        <td> <div className="skill backEndTheme" >Powershell</div></td>
                        
                            <td> <div className="skill backEndTheme ">C#</div></td>
                        
                            <td> <div className="skillPointGround" style={{opacity:"0"}}>Advanced</div></td>
                            <td> <div className="skillPointGround"style={{opacity:"0"}}>Expert</div></td>
                        </tr>
                        <tr >
                        <td> <div className="skill backEndTheme " >PostgreSQL</div></td>
                        <td> <div className="skill backEndTheme" >Java</div></td>
                        
                            <td> <div className="skill backEndTheme" id="javascriptPoint">SQL</div></td>
                        
                            <td> <div className="skillPointGround" style={{opacity:"0"}}>Advanced</div></td>
                            <td> <div className="skillPointGround"style={{opacity:"0"}}>Expert</div></td>

                        </tr>
                        <SkillDivider className="backEndTheme"></SkillDivider>

                            <tr >
                            <td> <div className="skill applicationsTheme " >SAP</div></td>
                            <td> <div className="skill applicationsTheme">Public 360</div></td>
                            
                                <td> <div className="skillPointGround" style={{opacity:"0"}}>Intermediate</div></td>
                            
                                <td> <div className="skill applicationsTheme" >Platina</div></td>
                                <td> <div className="skillPointGround"style={{opacity:"0"}}>Expert</div></td>
                            </tr>
                        
                            <SkillDivider className="applicationsTheme"></SkillDivider>

                    <tr >
                        <td> <div className="skillPointGround"style={{opacity:"0"}}>Beginner</div></td>
                        <td> <div className="skill rolesTheme">Developer</div></td>
                    
                        <td> <div className="skill rolesTheme ">Tester</div></td>
                    
                        <td> <div className="skillPointGround" style={{opacity:"0"}}>Advanced</div></td>
                        <td> <div className="skillPointGround"style={{opacity:"0"}}>Expert</div></td>
                    </tr>

                    <tr >
                        <td> <div className="skillPointGround"style={{opacity:"0"}}>Beginner</div></td>
                        <td> <div className="skillPointGround" style={{color:"transparent",background:"transparent"}}>Elementar</div></td>
                    
                        <td> <div className="skill rolesTheme ">Consultant</div></td>
                    
                        <td> <div className="skillPointGround" style={{opacity:"0"}}>Advanced</div></td>
                        <td> <div className="skillPointGround"style={{opacity:"0"}}>Expert</div></td>
                    </tr>
                    {/* <SkillDivider className="rolesTheme" style={{paddingBottom:"2rem"}}></SkillDivider> */}


                </tbody>
                </table>
            
                  

            </div>

            
            
            </div>
        </div>
        
    </div>
        );
    }
}

export default Skills;
