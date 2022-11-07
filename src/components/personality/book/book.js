import React from "react";
import "./book.css";
import "../playPersonalityFunc.js";
export const Book = () => {
  return (
    <div id="bookID">
          <div className="wrapper">
            <div className="bookBackground-circle">
            <div className="bookFace_2"></div>
              <div className="bookBody" id="bookBodyStart">

              </div>

            </div>

            <div className="bookhead" id="bookHeadOne">
              <div className="bookFace" id="bookFaceID">
                <div className="bookEye-shadow" id="bookLeft">
                  <div className="bookEyebrow"></div>
                  <div className="bookEye" id="bookEye_one"></div>
                </div>

                <div className="bookEye-shadow" id="bookRight">
                  <div className="bookEyebrow"></div>
                  <div className="bookEye" id="bookEye_two"></div>
                </div>

                <div className="bookMouthUpper"></div>
                <div className="bookMouthUnder"></div>

                <div className="shadow-wrapper"></div>
              </div>
            </div>
          </div>
    </div>
  );
};
