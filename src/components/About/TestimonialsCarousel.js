import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

// AVATARS IMPORTS
import stadshus from "./images/stadshuset.png";
import cloud from "./images/miniCloud.png";
import marioCloud from "./images/cloud-small.png";
import flags from "./images/flags.png";

//Family
import { Family } from "./Family/Family";
import { EdipBasket } from "./EdipBasket/EdipBasket";
import { Weights } from "./Weights/Weights";
import { LightSaber } from "./lightSaber/lightSaber";
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
          }}>
          <div className="d-block" style={{ marginTop: "-11rem" }}>
            <Family></Family>
          </div>

          <div className="d-block " style={{ marginTop: "-15.5rem" }}>
            <h2>Family</h2>
            <p>Me, Erika, our son Noah and baby girl Laleh</p>
          </div>
        </div>
      </>

      <>
        <div
          className="containerSlide container"
          style={{
            background: "var(--primary-lightDarkGrey)",
            height: "26.5rem",
          }}>
          <div className="mt-4">
            <img
              className="flag"
              src={flags}
              alt="Swedish, kurdish and turkish flag"
            />
          </div>

          <div
            style={{ display: "block position-absolute", marginTop: "3rem" }}>
            <h2>Origin</h2>
            <p>I am born in Sweden with Kurdish origin from Turkey</p>
          </div>
        </div>
      </>

      <>
        <div
          className="containerSlide pt-4"
          style={{
            background: "var(--primary-darker-blue)",
            height: "26.5rem",
          }}>
          <img className="cityHall" src={stadshus} alt="Stockholm Stadshus" />

          <div
            style={{
              marginTop: "3rem",
              marginBottom: "1.15rem",
              height: "10rem",
            }}>
            <h2>Stockholm</h2>
            <p>My hometown</p>
          </div>
        </div>
      </>

      <>
        <div
          className="containerSlide container basketContainer position-absolute"
          style={{
            background: "var(--primary-darker-blue)",
            height: "26.5rem",
          }}>
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

          <div className="basketBg">
            <h2 className="mt-5">Basket</h2>
            <p>
              I play basketball<br></br>from time to time
            </p>
          </div>
        </div>
      </>

      <>
        <div
          className="containerSlide container basketContainer position-absolute"
          style={{
            background: "var(--primary-lightDarkGrey)",
            height: "26.5rem",
          }}>
          <Weights></Weights>

          <div className="basketBg">
            <h2 className="mt-4">Weights</h2>
            <p>
              Nowdays I try<br></br>lifting some weights
            </p>
          </div>
        </div>
      </>

      <>
        <div
          className="containerSlide container basketContainer starWarsBg position-absolute"
          id="starsWarsID">
          <span className="stars" id="starsID"></span>
          <div className="flexCenter">
            <LightSaber></LightSaber>
          </div>

          <div
            style={{
              width: "110%",
              height: "65%",
              marginTop: "-7rem",
            }}>
            <h2 className="mt-3">Star Wars</h2>
            <p>
              The Mandalorian <br></br>is my favorite tv-show!
            </p>
          </div>
        </div>
      </>

      <>
        <div
          className="containerSlide container basketContainer starWarsBg position-absolute"
          style={{
            background: "var(--primary-blue)",
          }}>
          <img className="marioCloud" src={marioCloud} alt="mario cloud" />

          <div className="flexCenter marioAvatar">
            <Mario></Mario>
          </div>

          <div className="brickFloor">
            <span className="marioText">
              <h2 className="">Video games</h2>
              <p className="">
                I have a passion for retrogames from the late 80s and the 90s
              </p>
            </span>
          </div>
        </div>
      </>
    </Carousel>
  );
};

export default TestimonialsCarousel;
