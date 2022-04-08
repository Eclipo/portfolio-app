
import React from 'react';
import '../erikaBody.css';

export const Erika = () => {
    return (
        <table id="tableErika">
        <tr>
        <td>

        <tr>
            <td>
            <div className="head erika-head">  
                <div className="hair-ball"></div>          
                <div className="erika-hair"></div>
                <div className="face erika-face">
                    <div className="nose erika-nose"></div>
                    <div className="eye-shadow" id="left">
                        <div className="eyebrow erika-brow"></div>
                        <div className="eye erika-eye"></div>
                    </div>
                                
                    <div className="eye-shadow" id="right">
                        <div className="eyebrow erika-brow"></div>
                                <div className="eye erika-eye" ></div>
                            </div>
                                        
                            <div className="mouth erika-mouth"></div>
                            <div className="shadow-wrapper"></div>
                        </div>
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
        </tr>
    </table>

       

        
       
    
    )
}