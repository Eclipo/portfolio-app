import React from "react";
import "./edipguy.css";
import "../QuickAboutAnimation.js";
export const EdipGuy = () => {
  return (
    <div className="wrapper" id="tableStartGuyID">
      <div className="edipCircleBackground-circle">
        <div className="triangle-light"></div>

        <div className="body" id="bodyStart"></div>
      </div>

      <div className="head" id="headOne">
        <div className="hair-main" style={{ background: "#3f2a14" }}></div>

        <div className="face" id="faceID">
          <div className="nose" id="noseID"></div>

          <div className="eye-shadow" id="left">
            <div className="eyebrow"></div>
            <div className="eye" id="eye_one">
              <div className="laleh-kawai"></div>
            </div>
          </div>

          <div className="eye-shadow" id="right">
            <div className="eyebrow"></div>
            <div className="eye" id="eye_two">
              <div className="laleh-kawai"></div>
            </div>
          </div>

          <div className="mouth"></div>
          <div className="shadow-wrapper"></div>
        </div>

        <div className="beard"></div>
      </div>

      <div className="position-absolute cupSteamContainerTable ">
        <div className="right-hand" id="rightAnim"></div>
        <div className="left-hand"></div>

        <div className="col">
          <div className="row">
            <div className="steam-container mx-auto" id="steamContainerId">
              <div className="squiggle-container squiggle-container-1">
                <div className="squiggle ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28.1 80.6">
                    <path
                      id="steamOneID"
                      className="steamPath steamPath_one"
                      d="M22.6 75.1c-8-5.6-15.2-10.5-15.2-19.9 0-12.1 14.1-17.2 14.1-29.6 0-9.1-6.7-15.7-16-20.1"
                    />
                  </svg>
                </div>
              </div>

              <div className="squiggle-container squiggle-container-2">
                <div className="squiggle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28.1 80.6">
                    <path
                      id="steamTwoID"
                      className="steamPath steamPath_two"
                      d="M22.6 75.1c-8-5.6-15.2-10.5-15.2-19.9 0-12.1 14.1-17.2 14.1-29.6 0-9.1-6.7-15.7-16-20.1"
                    />
                  </svg>
                </div>
              </div>

              <div className="squiggle-container squiggle-container-3">
                <div className="squiggle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 28.1 80.6">
                    <path
                      id="steamThreeID"
                      className="steamPath steamPath_three"
                      d="M22.6 75.1c-8-5.6-15.2-10.5-15.2-19.9 0-12.1 14.1-17.2 14.1-29.6 0-9.1-6.7-15.7-16-20.1"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="coffee-cup-container">
              <div className="cupA">
                <svg
                  className="coffee-cup"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 42.2 31">
                  <defs>
                    <style></style>
                  </defs>

                  <path
                    className="cupA"
                    d="M40.6 9.5a10.2 10.2 0 0 0-8.6-5V0.1H0V23.8a7 7 0 0 0 7.1 7.2H24.9c2.3 0 6.1-0.8 6.9-5.2a10.6 10.6 0 0 0 8.9-5.3A11.3 11.3 0 0 0 40.6 9.5ZM28 23.8c0 2.1-0.4 3.3-3.1 3.3H7.1A3 3 0 0 1 4 23.8V4.1H28V23.8Zm9.3-5.2A7.1 7.1 0 0 1 32 21.8V8.5a7 7 0 0 1 5.2 3.1A7.2 7.2 0 0 1 37.3 18.6Z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
