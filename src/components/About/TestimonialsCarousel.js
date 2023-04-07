import React, { Component } from "react";
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
import { PlaySlide } from "../../PlayAnimation.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
class TestimonialsCarousel extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Carousel
        showArrows={true}
        swipeable={true}
        showThumbs={false}
        showStatus={false}
        onChange={PlaySlide}
        // infiniteLoop={true}
        // autoPlay={true}
        // interval={17500}
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
          hasPrev && (
            <button
              class="customArrowBtn customLeftArrowBtn"
              onClick={clickHandler}>
              <FontAwesomeIcon
                icon={faPlay}
                className="leftBtn"></FontAwesomeIcon>
            </button>
          )
        }
        renderArrowNext={(clickHandler, hasNext, labelNext) =>
          hasNext && (
            <button
              class="customArrowBtn customRightArrowBtn"
              onClick={clickHandler}>
              <FontAwesomeIcon
                icon={faPlay}
                className="rightBtn"></FontAwesomeIcon>
            </button>
          )
        }>
        <>
          <div
            className="containerSlide PT-4"
            style={{
              background: "var(--primary-darker-green)",
              height: "26.5rem",
            }}>
            <div className="d-block" style={{ marginTop: "-13rem" }}>
              <Family></Family>
            </div>

            <div className="d-block " style={{ marginTop: "-15.5rem" }}>
              <h2>Family</h2>
              <p>
                Me, Erika, our son Noah<br></br> and baby girl Laleh
              </p>
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
            <div style={{ marginTop: "4rem" }}>
              <img
                className="flag"
                src={flags}
                alt="Swedish, kurdish and turkish flag"
              />
            </div>

            <div
              style={{
                display: "block position-absolute",
                marginTop: "3.5rem",
              }}>
              <h2>Origin</h2>
              <p>
                I am born in Sweden with <br></br>Kurdish origin from Turkey
              </p>
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
              <p>My beautiful hometown</p>
            </div>
          </div>
        </>

        <>
          <div
            className="containerSlide container basketContainer PT-4"
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
              <h2 style={{ marginTop: "2.7rem" }}>Basket</h2>
              <p>
                I play basketball<br></br>from time to time
              </p>
            </div>
          </div>
        </>

        <>
          <div
            className="containerSlide container basketContainer"
            style={{
              background: "var(--primary-lightDarkGrey)",
              height: "26.5rem",
            }}>
            <Weights></Weights>

            <div className="basketBg">
              <h2 className="weightsText">Weights</h2>
              <p>
                Nowdays I try<br></br>lifting some weights
              </p>
            </div>
          </div>
        </>

        <>
          <div
            className="containerSlide container basketContainer starWarsBg"
            id="starsWarsID">
            <span className="stars" id="starsID"></span>
            <div className="flexCenter">
              <LightSaber></LightSaber>
            </div>

            <div
              style={{
                width: "110%",
                height: "65%",
                marginTop: "-6.75rem",
              }}>
              <h2>Star Wars</h2>
              <p style={{ backgroundColor: "black", width: "fit-content" }}>
                A huge inspiration to me.
              </p>
            </div>
          </div>
        </>

        <>
          <div
            className="containerSlide container basketContainer starWarsBg"
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
                  I have a passion<br></br> for retrogames
                </p>
              </span>
            </div>
          </div>
        </>
      </Carousel>
    );
  }
}

export default TestimonialsCarousel;
