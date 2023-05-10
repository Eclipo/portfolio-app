import React from "react";
import "./edipBrand.css";
import anime from "animejs";

export const EdipBrand = () => {
  const hoverEnterAnimation = () => {
    console.log("hoooover");

    anime({
      targets: "#eyeBrowLeftID",
      translateY: [0, ".1rem"],
      duration: 500,
      easing: "linear",
    });
    anime({
      targets: "#eyeBrownRightID",
      translateY: [0, "-.1rem"],
      duration: 500,
      easing: "linear",
    });
  };

  const hoverLeaveAnimation = () => {
    anime({
      targets: ["#eyeBrowLeftID", "#eyeBrownRightID"],
      translateY: 0,
      duration: 500,
      easing: "easeInOutSine",
    });
  };

  const clickAnimation = () => {
    anime({
      targets: ["#eyeBrowLeftID", "#eyeBrownRightID"],
      translateY: [0, "0.1rem", "-0.1rem", 0],
      duration: 750,
      easing: "easeInOutSine",
    });
  };

  return (
    <div
      className="wrapper-brand"
      id="brandGuyID"
      onMouseEnter={hoverEnterAnimation}
      onMouseLeave={hoverLeaveAnimation}
      onClick={clickAnimation}>
      <div className="background-circle-brand">
        <div className="triangle-light-brand"></div>

        <div className="body-brand"></div>
      </div>
      <div className="head-brand">
        <div
          className="hair-main-brand"
          style={{ background: "#3f2a14" }}></div>
        <div className="face-brand" id="faceID">
          <div className="nose-brand" id="noseID"></div>
          <div className="eye-shadow-brand" id="left">
            <div className="eyebrow-brand" id="eyeBrowLeftID"></div>
            <div className="eye-brand" id="eye_one">
              <div className="laleh-kawai-brand"></div>
            </div>
          </div>
          <div className="eye-shadow-brand" id="right">
            <div className="eyebrow-brand" id="eyeBrownRightID"></div>
            <div className="eye-brand" id="eye_two">
              <div className="laleh-kawai-brand"></div>
            </div>
          </div>
          <div className="mouth-brand"></div>
          <div className="shadow-wrapper-brand"></div>
        </div>
        <div className="beard-brand"></div>
      </div>
    </div>
  );
};
