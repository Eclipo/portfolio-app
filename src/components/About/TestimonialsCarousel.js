import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// AVATARS IMPORTS
import stadshus from "./images/stadshuset.png";
import cloud from "./images/miniCloud.png";
import flags from "./images/flags.png";

//Family
import { Family } from "./Family/Family";
import { EdipBasket } from "./EdipBasket/EdipBasket";
import { Weights } from "./Weights/Weights";
import { LightSaber } from "./lightSaber/lightSaber";
import {KnucklesSvg} from "../Experiences/KnucklesSvg/KnucklesSvg";
import { Mario } from "./Mario/mario";
const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      swipeable={true}
      showThumbs={false}
      showStatus={false}
      // infiniteLoop={true}
      // autoPlay={true}
      // interval={17500}
    >
      <>
        <div
          className="containerSlide PT-4"
          style={{
            background: "var(--primary-darker-green)",
            height: "26.5rem",
          }}
        >
          <div className="d-block" style={{ marginTop: "-11rem" }}>
            <Family></Family>
          </div>

          <div className="d-block " style={{ marginTop: "-14.75rem" }}>
            <h2>Family</h2>
            <p>Me, Erika, our son Noah and baby girl Laleh.</p>
          </div>
        </div>
      </>

      <>
        <div
          className="containerSlide container"
          style={{
            background: "var(--primary-lightDarkGrey)",
            height: "26.5rem",
          }}
        >
          <div className="mt-4">
            <img
              className="flag"
              src={flags}
              alt="Swedish, kurdish and turkish flag"
            />
          </div>

          <div
            style={{ display: "block position-absolute", marginTop: "3rem" }}
          >
            <h2>Origin</h2>
            <p>I am born in Sweden with Kurdish origin from Turkey.</p>
          </div>
        </div>
      </>

      <>
        <div
          className="containerSlide pt-4"
          style={{
            background: "var(--primary-darker-blue)",
            height: "26.5rem",
          }}
        >
          <img className="cityHall" src={stadshus} alt="Stockholm Stadshus" />

          <div
            style={{
              marginTop: "3rem",
              marginBottom: "1.15rem",
              height: "10rem",
            }}
          >
            <h2>Stockholm</h2>
            <p>Borned in this beautiful city.</p>
          </div>
        </div>
      </>

      <>
        <div
          className="containerSlide container basketContainer position-absolute"
          style={{
            background: "var(--primary-darker-blue)",
            height: "26.5rem",
          }}
        >
          <img
            src={cloud}
            alt="moln"
            style={{
              transform: "scale(0.25)",
              padding: "0",
              left: "0",
              top: "-5vh",
              position: "absolute",
            }}
          />

          <EdipBasket></EdipBasket>

          <div
            style={{
              backgroundColor: "var(--primary-grey)",
              width: "110%",
              height: "55%",
              marginTop: "12.5rem",
            }}
          >
            <h2 className="mt-5">Basket</h2>
            <p>I play basketball<br></br>from time to time</p>
          </div>
        </div>
      </>

      <>
        <div
          className="containerSlide container basketContainer position-absolute"
          style={{
            background: "var(--primary-lightDarkGrey)",
            height: "26.5rem",
          }}
        >
          

        <Weights></Weights>

          <div
            style={{
              backgroundColor: "var(--primary-grey)",
              width: "110%",
              height: "55%",
              marginTop: "12.5rem",
            }}
          >
            <h2 className="mt-4">Weights</h2>
            <p>Nowdays I try<br></br>lifting some weights</p>
          </div>
        </div>
      </>

      <>
        <div
          className="containerSlide container basketContainer starWarsBg position-absolute"
            id="starsWarsID"
        >
        <span className="stars" id="starsID"></span>
        <div className="flexCenter">
        <LightSaber></LightSaber>
        </div>

        
          <div
            style={{
              width: "110%",
              height: "65%",
              marginTop: "-7rem",
            }}
          >
            <h2 className="mt-3">Star Wars</h2>
            <p>One of my favorite series<br></br>is The Mandalorian.</p>
          </div>
        </div>
      </>

      <>
        <div
          className="containerSlide container basketContainer starWarsBg position-absolute"
          style={{
            background: "var(--primary-blue)",
          }}
        >
        <div className="flexCenter">
        <Mario></Mario>

        </div>

          <div
            style={{
              backgroundColor: "var(--primary-dark-brown)",
              width: "110%",
              height: "65%",
              marginTop: "14.75rem",
              
            }}
          >
            <h2 className="">Video games</h2>
            <p>I love retrogames<br></br> from the 80s and 90s.</p>
          </div>
        </div>
      </>

    </Carousel>
  );
};

export default TestimonialsCarousel;
