
import React from 'react';
import '../edipHead/edipHead.css';

export const EdipHead = () => {
    return (
    <table id="tableHeadID" >
        <tr>
            <td>
                <div className="wrapper">
                    
                    <div className="edipHeadbackground-circle">
                    </div>
            
                    <div className="edipHead" id="headOne">            
                        <div className="hair-main" style={{background:"#3f2a14"}}>


                        </div>
                    

                    <div className="face" id="faceID">
                        <div className="nose" id="noseID"></div>
                
                        <div className="eye-shadow" id="left">
                            <div className="headEyebrow"></div>
                            <div className="eye" id="edip_eye_one"></div>
                        </div>
                                
                        <div className="eye-shadow" id="right">
                            <div className="headEyebrow"></div>
                                <div className="eye" id="edip_eye_two"></div>
                                <div className="sad-eye" id="sadeyeTwo" style={{opacity:"0"}}></div>
                            </div>
                                        
                            <div className="mouth"></div>
                            <div className="shadow-wrapper"></div>
                        </div>
                        
                        <div className="beard"></div>
                      

                </div>            
                </div>
            </td>
        </tr>
    </table>
    
    )
}