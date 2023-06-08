import React, { Component } from "react";
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
import { PlaySlide } from "../../PlayAnimation.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
class ArtExhibition extends Component {
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
        infiniteLoop={true}
        renderArrowPrev={(clickHandler, hasPrev, labelPrev) =>
          (hasPrev = true && (
            <button
              className="customArrowBtn customLeftArrowBtn"
              onClick={clickHandler}>
              <FontAwesomeIcon
                icon={faPlay}
                className="leftBtn"></FontAwesomeIcon>
            </button>
          ))
        }
        renderArrowNext={(clickHandler, hasNext, labelNext) =>
          (hasNext = true && (
            <button
              className="customArrowBtn customRightArrowBtn"
              onClick={clickHandler}>
              <FontAwesomeIcon
                icon={faPlay}
                className="rightBtn"></FontAwesomeIcon>
            </button>
          ))
        }>
        <>
          <div
            className="containerSlide PT-4"
            style={{
              background: "var(--primary-darker-blue)",
              height: "26.5rem",
            }}>
            <div className="d-flex" style={{ marginTop: "-19.5rem" }}>
              <Family></Family>
            </div>

            <div className="d-block " style={{ marginTop: "-21.5rem" }}>
              <h3>Family</h3>
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
              background: "var(--primary-grey)",
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
              <h3>Origin</h3>
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
              <h3>Stockholm</h3>
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
            <EdipBasket></EdipBasket>

            <div className="basketBg">
              <h3 className="mt-4">Basket</h3>
              <p>I like to play basketball</p>
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
              <h3 className="weightsText">Weights</h3>
              <p>Trying to workout sometimes</p>
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
              <h3>Star Wars</h3>
              <p style={{ backgroundColor: "black", width: "fit-content" }}>
                A huge inspiration to me.
              </p>
            </div>
          </div>
        </>
      </Carousel>
    );
  }
}

export default ArtExhibition;
