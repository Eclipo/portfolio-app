
import React from 'react';
import ReactAnime from 'react-animejs'

import './edipGuyBasket.css';
import basketBall from "./images/edipBall.png";
import basketRim from "./images/edipRim.png";

export const EdipBasket = () => {
    const {Anime, stagger} = ReactAnime
    return (
<Anime
animeConfig={{
    loop:true,
    duration: 1500,
    easing: "linear"
  }}

      initial={[
        
        { //1st
            targets: [".basketBall",".left-arm"],
            translateY:80,
            translateX:40,
            duration:200,
            rotate: "-35deg"
          },


          { //2st
            targets: [".basketBall"],
            translateY:[80,125,180,100,-30],
            translateX:[40,100,200,300,400],
            duration:150,
            
          },

          { //1st
            targets: [".basketBall",".right-arm"],
            translateY:80,
            duration:150,
            rotate: "35deg",
          },

       

          { //2st
            targets: [".basketBall"],
            translateY:[80,100,180,125,-30],
            translateX:[400,300,200,100,40],
            rotate: "-35deg",
            duration:250,
            easing:"linear"
            
          },

          { //2st
            targets: [".basketBall"],
            translateY:[80,125,180,100,-30],
            translateX:[40,100,200,300,400],
            duration:250,
            
          },

          { //1st
            targets: [".leftLegBasket"],
            duration:5,
            rotate: "-5deg"
           
          },

          { //1st
            targets: [".rightLegBasket"],
            duration:5,
            rotate: "5deg"
          },

       

        { //1st
            targets: [".leftLegBasket"],
            duration:5,
            rotate: "5deg"
          },
          { //1st
            targets: [".leftShoe"],
            duration:5,
            rotate: "-15deg"
          },

          { //1st
            targets: [".rightLegBasket", ".rightShoe"],
            duration:5,
            translateY:40,
            marginTop:"6rem",
            rotate: "5deg"
          },
          
          
          { //1st
            targets: [".right-arm"],
            translateY:-40,
            duration:5,
            rotate: "-20deg"
          },

          { //2st segment
            targets: [".headBasket",".bodyBasket", ".lowerBody"],
            translateY:-450,
            translateX:100,
            duration:150
          },

          { //1st
            targets: [".right-arm",".basketBall"],
            rotate: ["-15deg","0deg","30deg"],
            scale:[1,1.1,1],
            translateY:[-40,0,60],  
            duration:250,
            
           
          },

          { //1st
            targets: [".basketBall"],
            translateY:[10,400,400],
            translateX:[400,400,200],  
            duration:100
          },

          { //2st segment
            targets: [".basketRim"],
            translateY:[0,100,0,50,0],
            duration:50,
            scale:[3.2,3.4],
            easing:"easeOutExpo"
          },
         
          { //1st
            targets: [".basketBall"],
            translateY:[400,200,50],
            translateX:[200,100,40],  
            duration:150
          },

          { //1st
            targets: [".leftLegBasket"],
            duration:5,
            rotate: "-5deg"
          },
          { //1st
            targets: [".leftShoe"],
            duration:5,
            rotate: "15deg"
          },

          { //1st
            targets: [".rightLegBasket", ".rightShoe"],
            duration:5,
            translateY:40,
            marginTop:"6rem",
            rotate: "-15deg"
          },

          { //2st segment
            targets: [".headBasket",".bodyBasket", ".lowerBody"],
            translateY:0,
            translateX:0,
            duration:250
           
          },




          /*{ //2st segment
            targets: [".basketBall"],
            translateY:[-20,-160,-360],
            translateX:[-375,-275,-175],
            duration:250
          },  */
          
        
      ]}
    >

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

    </Anime>              
    )
}