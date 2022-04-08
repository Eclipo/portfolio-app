import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Anime, { anime } from 'react-anime';

// AVATARS IMPORTS
import stadshus from "./images/stadshuset.png";
import cloud from "./images/miniCloud.png";



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
        <div className="main-infoFamily container" style={{background:"#95fcc8",height:"26.5rem"}}>
          <Family></Family>
           <div style={{marginTop:"15rem"}}>
            <h3>Family</h3>
            <p>Me, Erika, our son Noah and baby girl Laleh.</p>
           </div> 
        </div>
      </>

      <>
        <div className="main-infoFamily"  style={{background:"lightBlue"}}>
          <Anime scale={[1,1.05]} loop={true} direction={"alternate"} autoplay={"true"} easing={"easeOutBounce"} duration={"1250"}>
            <img className="cityHall"  src={stadshus} alt="Stockholm Stadshus" style={{transform:"scale(1.5)", marginTop:"5rem"}}/>     
          </Anime>

          <div style={{marginTop:"3rem", marginBottom:"1.15rem", height:"10rem"}}>
            <h3>Stockholm</h3>
            <p>A true Stockholmare</p>
          </div>
        </div>
      </>
    
    <>

      <div className="main-infoFamily" style={{background:"lightBlue",height:"26rem",position:"absolute",marginTop:"2rem",zIndex:"-2"}}>
        
      <img  src={cloud} alt="moln" style={{transform:"scale(0.6)", marginLeft:"-10rem",marginTop:"-15rem",position:"absolute"}}/>     

      
      
      
      <EdipBasket></EdipBasket>
      
      <div style={{backgroundColor:"#cacccf",width:"100%",height:"9rem",marginTop:"13rem", position:"absolute",zIndex:"-1"}}>
      </div>
      <div style={{height:"1rem",position:"absolute",marginTop:"10.25rem"}}>
            <h3>Basket</h3>
            <p>One of my passions. I love the game</p>
          </div>  
      </div>    
       
      </>
      
     
  </Carousel>
  )
}

export default TestimonialsCarousel;
