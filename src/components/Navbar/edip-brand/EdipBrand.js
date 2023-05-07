import React from "react";
import "./edipBrand.css";
export const EdipBrand = () => {
  return (
    <div className="wrapper-brand" id="brandGuyID">
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
            <div className="eyebrow-brand"></div>
            <div className="eye-brand" id="eye_one">
              <div className="laleh-kawai-brand"></div>
            </div>
          </div>
          <div className="eye-shadow-brand" id="right">
            <div className="eyebrow-brand"></div>
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
