
import React from 'react';
import './duck.css';
import '../SkillAnimation.js';
export const Duck = () => {
    return (
    <table id="duckID">
        <tr>
            <td>
                <div className="wrapper" >
                 
                    <div className="edipCircleBackground-circle">
                        <div className="duckBody" id="duckBodyStart"></div>        
                    </div>
            
                    <div className="duckhead" id="duckHeadOne">            
                
                    <div className="duckFace" id="duckFaceID">
                
                        <div className="duckEye-shadow" id="duckLeft">
                            <div className="duckEyebrow"></div>
                            <div className="duckEye" id="duckEye_one">
                            

                            </div>
                            
                        </div>
                                
                        <div className="duckEye-shadow" id="duckRight">
                            <div className="duckEyebrow"></div>
                                <div className="duckEye" id="duckEye_two">


                                </div>
                            </div>
                                        
                            <div className="duckMouthUpper"></div>
                            <div className="duckMouthUnder"></div>

                            <div className="shadow-wrapper"></div>
                        </div>
                        
                </div>
                
                          
                </div>
            </td>
        </tr>
    </table>
    
    )
}