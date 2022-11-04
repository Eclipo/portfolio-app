import React from "react";
import "./weights.css";


export const Weights = () => {
  return (
    <div id="tableStartWeightsGuyID">
      <div className="row">
        <div className="col p-0 m-0">
          <div className="row" id="upperBody_1">
            <div className="col p-0 m-0">
              <div className="headWeights">
                <div className="hairMainWeights"></div>
                <div className="faceWeights">
                  <div className="nose" id="noseID"></div>

                  <div className="eye-shadow" id="left">
                    <div className="eyebrow eyeBrow_left"></div>
                    <div className="eye" id="eye_one">
                    <div className="laleh-kawai"></div>

                    </div>
                  </div>

                  <div className="eye-shadow" id="right">
                    <div className="eyebrow eyeBrow_right"></div>
                    <div className="eye" id="eye_two">
                    <div className="laleh-kawai"></div>

                    </div>
                  </div>

                  <div className="mouthWeights"></div>
                  <div className="shadow-wrapper"></div>
                </div>

                <div className="beardWeights"></div>
              </div>
            </div>
          </div>

          <div className="row"  id="upperBody_2">
            <div className="col" >
              <div className="bodyWeights">
                <div className="left-shoulder-weights">
                  <div className="left-arm-weights">
                    <div className="leftHandWeights"></div>
                  </div>
                </div>

                <div className="right-shoulder-weights"></div>
                <div className="right-arm-weights">
                </div>
                <div className="deadLift">
                <div className="weight_left"></div>

                  <div className="bar"></div>
                  <div className="weight_right"></div>

                </div>

              </div>

            </div>

          </div>
          

          <div className="row">
            <div className="col">
            
              <div className="lowerBodyWeights" id="lowerBodyLeftWeights">
                <div className="leftLegWeights">
                  <div className="leftShoeWeight"></div>
                </div>
              </div>
              <div className="lowerBodyWeights" id="lowerBodyRightWeights">
                <div className="rightLegWeights">
                  <div className="rightShoeWeight"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
