import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Anime, { anime } from 'react-anime';

// AVATARS IMPORTS
import stadshus from "./images/stadshuset.png";
import cloud from "./images/miniCloud.png";
import swedishFlag from "./images/Flag_of_Sweden.svg.png";
import turkishFlag from "./images/Flag_of_Turkey.svg.png";

import kurdishFlag from "./images/Flag_of_Kurdistan.svg.png";


//Family
import { Family } from "./Family/Family";
import { EdipBasket } from "./EdipBasket/EdipBasket";
const TestimonialsCarousel = () => {


  return (
    <Carousel
      showArrows={true}
      swipeable={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={5000}
    >

      
      <>
        <div className="containerSlide pt-4" style={{background:"var(--primary-darker-green)",height:"26.5rem"}}>
          <Family></Family>
           <div style={{display:"inline-block",marginTop:"15rem"}}>
            <h2>Family</h2>
            <p>Me, Erika, our son Noah and baby girl Laleh.</p>
           </div> 
        </div>
      </>

      <>
        <div className="containerSlide container"  style={{background:"var(--primary-lightDarkGrey)",height:"26.5rem"}}>
       
        <Anime scale={[1,1.1]} loop={true} direction={"alternate"} autoplay={"true"} easing={"easeOutBounce"} duration={"1250"}>
            <div className="flagContainer">
              <div className="col flag-holder" style={{paddingTop:'0.1rem'}} >
                {/* <Anime scale={[0.75,0.8]} loop={true} direction={"alternate"} autoplay={"true"} easing={"easeOutBounce"} duration={"1250"}> */}
                  <img className="flag"  src={swedishFlag} alt="Swedish flag" />     
                {/* </Anime> */}
              </div>

              <div className="col flag-holder">
                {/* <Anime  scale={[0.75,0.8]} loop={true} direction={"alternate"} autoplay={"true"} easing={"easeOutBounce"} duration={"1250"}> */}
                  <img className="flag"  src={kurdishFlag} alt="Kurdish flag"/>     
                {/* </Anime> */}
              </div>

              <div className="col flag-holder">
                {/* <Anime  scale={[0.75,0.8]} loop={true} direction={"alternate"} autoplay={"true"} easing={"easeOutBounce"} duration={"1250"}> */}
                <img className="flag"  src={turkishFlag} alt="Turkish flag"/>     
                {/* </Anime> */}
              </div>
            </div>
            </Anime>
   
            <div style={{display:"block position-absolute",marginTop:"7rem"}}>
            <h2>My origins</h2>
            <p>I am born in Sweden with Kurdish origins from Turkey.</p>
          </div>
        </div>
      </>


      <>
        <div className="containerSlide container"  style={{background:"var(--primary-darker-blue)"}}>
          <Anime scale={[1,1.05]} loop={true} direction={"alternate"} autoplay={"true"} easing={"easeOutBounce"} duration={"1250"}>
            <img className="cityHall"  src={stadshus} alt="Stockholm Stadshus" style={{transform:"scale(1.5)", marginTop:"5rem"}}/>     
          </Anime>

          <div style={{marginTop:"3rem", marginBottom:"1.15rem", height:"10rem"}}>
            <h2>Stockholm</h2>
            <p>A true Stockholmare</p>
          </div>
        </div>
      </>
    
    <>

      <div className="containerSlide container basketContainer">
        
      <img  src={cloud} alt="moln" style={{transform:"scale(0.6)", marginLeft:"-10rem",marginTop:"-15rem",position:"absolute"}}/>     

      
      <EdipBasket></EdipBasket>
      
      <div style={{backgroundColor:"var(--primary-grey)",width:"100%",height:"9rem",marginTop:"13rem", position:"absolute",zIndex:"-1"}}>
      </div>
      <div style={{height:"1rem",position:"absolute",marginTop:"10rem"}}>
            <h2>Basket</h2>
            <p >One of my passions. I love the game</p>
          </div>  
      </div>    
       
      </>
      
     
  </Carousel>
  )
}

export default TestimonialsCarousel;
