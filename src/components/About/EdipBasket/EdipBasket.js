import React from "react";
import "./edipGuyBasket.css";
import basketBall from "./images/edipBall.png";
import basketRim from "./images/edipRim.png";
import cloud from "../images/miniCloud.png";

export const EdipBasket = () => {
  return (
    <div id="tableStartBasketGuyID">
      <div className="row">
        <div className="col-1">
          <img
            src={cloud}
            alt="moln"
            style={{
              transform: "scale(2.75)",
              padding: "0",
              left: "-25rem",
              top: "-15rem",
              position: "absolute",
            }}
          />
        </div>
        <div className="col">
          <div className="row">
            <div className="col">
              <div className="headBasket">
                <div className="hairMainBasket"></div>
                <div className="faceBasket">
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

                <div className="beardBasket"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="bodyBasket">
                <div className="left-shoulder">
                  <div className="left-arm">
                    <div className="leftHandBasket"></div>
                  </div>
                </div>
                <div className="basketBall">
                  <img src={basketBall} className="basketBall"></img>
                </div>

                <div className="right-shoulder"></div>
                <div className="right-arm">
                  <div className="rightHandBasket"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col">
              <div className="lowerBody" id="lowerBodyLeft">
                <div className="leftLegBasket">
                  <div className="leftShoe"></div>
                </div>
              </div>
              <div className="lowerBody" id="lowerBodyRight">
                <div className="rightLegBasket">
                  <div className="rightShoe"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="basketRim" style={{ zIndex: "-1" }}>
            <img src={basketRim}></img>
          </div>
        </div>
      </div>
    </div>
  );
};
