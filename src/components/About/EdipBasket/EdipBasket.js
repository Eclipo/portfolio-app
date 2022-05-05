
import React from 'react';
import './edipGuyBasket.css';
import basketBall from "./images/edipBall.png";
import basketRim from "./images/edipRim.png";

export const EdipBasket = () => {
    return (
    <table id="tableStartBasketGuyID">
        <tr>
        <td>

        <tr>
            <td>
            <div className="headBasket">            
                        <div className="hairMainBasket" style={{background:"#3f2a14"}}>
                        </div>
                    <div className="faceBasket">
                        <div className="nose" id="noseID"></div>
                
                        <div className="eye-shadow" id="left">
                            <div className="eyebrow"></div>
                            <div className="eye" id="eye_one"></div>
                        </div>
                                
                        <div className="eye-shadow" id="right">
                            <div className="eyebrow"></div>
                                <div className="eye" id="eye_two"></div>
                                <div className="sad-eye" id="sadeyeTwo" style={{opacity:"0"}}></div>
                            </div>
                                        
                            <div className="mouth"></div>
                            <div className="shadow-wrapper"></div>
                        </div>
                        
                        <div className="beardBasket"></div>
                </div>  
            </td>
        </tr>

        <tr>
       
            <td >            

                <div className="bodyBasket">
               
                    <div className="left-shoulder" style={{background:"#FFE4BE",width:"5rem",height:"8rem",borderTopLeftRadius:"70%",borderBottomRightRadius:"65%"}}>
                        <div className="left-arm" style={{background:"#FFE4BE",width:"15rem",height:"4rem",marginLeft:"-13rem",marginTop:"1rem"}}>
                            <div className="leftHandBasket"></div>
                        </div>
                    </div>
                    <div className="basketBall">
                    <img src={basketBall} className="basketBall" style={{marginLeft:"-58rem", marginTop:"-2rem", transform:"scale(1.1)"}}></img>

                    </div>


                    <div className="right-shoulder" style={{background:"#FFE4BE",width:"5rem",height:"8rem",borderTopRightRadius:"70%",borderBottomLeftRadius:"65%"}}></div> 
                    <div className="right-arm" style={{background:"#FFE4BE",width:"15rem",height:"4rem",marginLeft:"15rem",marginTop:"-6rem"}}>
                    <div className="rightHandBasket"></div>
                    </div>

                    
                    
           
        </div>
            </td>
         
     
           
                   
        </tr>   

        <tr>
        <td>
            <div className="lowerBody" style={{float:"left"}}>
                <div className="leftLegBasket">
                    <div className="leftShoe"  ></div>
                </div>
            </div>
            <div className="lowerBody"  style={{marginLeft:"9rem"}}>
                <div className="rightLegBasket">
                    <div className="rightShoe"></div>
                </div>
            </div>
        </td>
        </tr>
        </td>
        <td>
            <div className="basketRim">
            <img src={basketRim} ></img>

            </div>
        </td>

        
        </tr>
        
    </table>
    )
}