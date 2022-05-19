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
import flags from "./images/flags.png";

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
      interval={7500}
    >

      
      <>
        <div className="containerSlide PT-4" style={{background:"var(--primary-darker-green)",height:"26.5rem"}}>
          <div className="d-block" style={{marginTop:'-11rem'}}>
          <Family></Family>
          </div>
          
           <div className="d-block " style={{marginTop:'-14rem'}}>
            <h2>Family</h2>
            <p>Me, Erika, our son Noah and baby girl Laleh.</p>
           </div> 
        </div>
      </>

      <>
        <div className="containerSlide container"  style={{background:"var(--primary-lightDarkGrey)",height:"26.5rem"}}>
       
              <div className="mt-4">
                  <img className="flag" src={flags}  alt="Swedish, kurdish and turkish flag" />     
              </div>

           
   
            <div style={{display:"block position-absolute",marginTop:"3rem"}}>
            <h2>Origin</h2>
            <p>I am born in Sweden with Kurdish origin from Turkey.</p>
          </div>
        </div>
      </>


      <>
        <div className="containerSlide pt-4"  style={{background:"var(--primary-darker-blue)", height:"26.5rem"}}>
            <img className="cityHall"  src={stadshus} alt="Stockholm Stadshus"/>     

          <div style={{marginTop:"3rem", marginBottom:"1.15rem", height:"10rem"}}>
            <h2>Stockholm</h2>
            <p>A true Stockholmare</p>
          </div>
        </div>
      </>
    
    <>

      <div className="containerSlide container basketContainer position-absolute" style={{background:"var(--primary-darker-blue)", height:"26.5rem"}} >
        
      <img  src={cloud} alt="moln" style={{transform:"scale(0.25)",padding:'0', left:"0", top:'-5vh',position:"absolute"}}/>     

      <EdipBasket></EdipBasket>
      
      <div style={{backgroundColor:"var(--primary-grey)",width:"110%",height:"55%",marginTop:"12rem"}}>
            <h2 className="mt-5">Basket</h2>
            <p >One of my passions. I love the game</p>
          </div>  
  
      </div>    
       
      </>
      
     
  </Carousel>
  )
}

export default TestimonialsCarousel;
