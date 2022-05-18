import React from "react";
import "./edipGuyBasket.css";
import basketBall from "./images/edipBall.png";
import basketRim from "./images/edipRim.png";

export const EdipBasket = () => {
  return (
    <table id="tableStartBasketGuyID">
      <tr>
        <td>
          <tr>
            <td>
              <div className="headBasket">
                <div
                  className="hairMainBasket"
                  
                ></div>
                <div className="faceBasket">
                  <div className="nose" id="noseID"></div>

                  <div className="eye-shadow" id="left">
                    <div className="eyebrow"></div>
                    <div className="eye" id="eye_one"></div>
                  </div>

                  <div className="eye-shadow" id="right">
                    <div className="eyebrow"></div>
                    <div className="eye" id="eye_two"></div>
                  </div>

                  <div className="mouth"></div>
                  <div className="shadow-wrapper"></div>
                </div>

                <div className="beardBasket"></div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
              <div className="bodyBasket">
                <div
                  className="left-shoulder"
               
                >
                  <div
                    className="left-arm"
                  
                  >
                    <div className="leftHandBasket"></div>
                  </div>
                </div>
                <div className="basketBall">
                  <img
                    src={basketBall}
                    className="basketBall"
                  
                  ></img>
                </div>

                <div
                  className="right-shoulder"
                 
                ></div>
                <div
                  className="right-arm"
                 
                >
                  <div className="rightHandBasket"></div>
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td>
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
            </td>
          </tr>
        </td>
        <td>
          <div className="basketRim" style={{zIndex:'-1'}}>
            <img src={basketRim}></img>
          </div>
        </td>
      </tr>
    </table>
  );
};
