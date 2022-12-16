import React from "react";
import "./familly.css";

export const Family = () => {
  return (
    <table id="tableFamilyID">
      <tbody>
        <tr>
          <td>
            {/* Edip */}
            <div className="wrapper">
              <div className="background-circle" style={{ background: "none" }}>
                <div className="edip-body" id="bodyStart"></div>
              </div>

              <div className="head" id="headOne">
                <div className="hair-main"></div>

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
            </div>
          </td>

          <td>
            {/* Erika */}
            <div
              className="wrapper"
              style={{
                marginTop: "-12rem",
                marginLeft: "-5rem",
                position: "absolute",
              }}>
              <div className="background-circle" style={{ background: "none" }}>
                <div className="erika-body"></div>
              </div>

              <div className="head erika-head">
                <div className="hair-ball"></div>
                <div className="erika-hair"></div>
                <div className="face erika-face">
                  <div className="freckles-left">
                    <div className="freckle freckle_1"></div>
                    <div className="freckle freckle_2"></div>
                    <div className="freckle freckle_3"></div>
                  </div>

                  <div className="freckles-right">
                    <div className="freckle freckle_1"></div>
                    <div className="freckle freckle_2"></div>
                    <div className="freckle freckle_3"></div>
                  </div>

                  <div className="nose erika-nose"></div>
                  <div className="eye-shadow" id="left">
                    <div className="eyebrow erika-brow"></div>
                    <div className="eye erika-eye" id="erikaEyeLeftID">
                      <div className="laleh-kawai"></div>
                    </div>
                  </div>
                  <div className="eye-shadow" id="right">
                    <div className="eyebrow erika-brow"></div>
                    <div className="eye erika-eye">
                      <div className="laleh-kawai"></div>
                    </div>
                  </div>
                  <div className="mouth erika-mouth"></div>

                  <div className="shadow-wrapper"></div>
                </div>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            {/* NOAH */},
            <div
              className="wrapper"
              style={{
                transform: "scale(0.9)",
                marginLeft: "5rem",
                marginTop: "-16rem",
                position: "absolute",
              }}>
              <div className="background-circle" style={{ background: "none" }}>
                <div className="noah-body"></div>
              </div>

              <div className="head noah-head">
                <div className="noah-hair">
                  <div className="noah-hair-top">
                    <div className="noah-hair-side-right">
                      <div
                        id="firstRightCurly"
                        className="curly-ball-right"
                        style={{ width: "4rem", marginLeft: "-2rem" }}></div>

                      <div
                        className="curly-ball-right"
                        style={{ width: "4.8rem" }}></div>
                      <div className="curly-ball-right"></div>
                      <div
                        className="curly-ball-right"
                        style={{ width: "5rem" }}></div>
                      <div
                        className="curly-ball-right"
                        style={{ width: "5rem" }}></div>

                      <div
                        className="curly-ball-right"
                        style={{
                          width: "4.5rem",
                          height: "2.5rem",
                          marginLeft: "1rem",
                        }}></div>
                    </div>
                  </div>
                  <div className="noah-hair-side-left">
                    <div
                      id="firstLeftCurly"
                      className="curly-ball-left"
                      style={{ marginTop: ".75rem" }}></div>

                    <div className="curly-ball-left"></div>
                    <div className="curly-ball-left"></div>
                    <div
                      className="curly-ball-left"
                      style={{ width: "5rem" }}></div>
                    <div
                      className="curly-ball-left"
                      style={{ width: "5rem" }}></div>
                  </div>
                </div>

                <div className="face noah-face">
                  <div className="nose noah-nose"></div>
                  <div className="eye-shadow" id="left">
                    <div className="eyebrow erika-brow"></div>
                    <div className="eye noah-eye" id="noahEyeLeftID">
                      <div className="laleh-kawai"></div>
                    </div>
                  </div>
                  <div className="eye-shadow" id="right">
                    <div className="eyebrow erika-brow"></div>
                    <div className="eye noah-eye">
                      <div className="laleh-kawai"></div>
                    </div>
                  </div>
                  <div className="mouth noah-mouth"></div>
                  <div className="shadow-wrapper"></div>
                  <div className=".hair-sling-left"></div>
                </div>
              </div>
            </div>
          </td>

          <td>
            {/* LALEH */}
            <div
              className="wrapper"
              style={{
                transform: "scale(0.5)",
                bottom: "5rem",
                right: "5rem",
              }}>
              <div className="head laleh-head">
                <div className="laleh-hair-bg">
                  <div
                    className="laleh-hair"
                    style={{ marginLeft: "-4rem" }}></div>
                  <div
                    className="laleh-hair"
                    style={{ marginLeft: "-3rem" }}></div>
                  <div
                    className="laleh-hair"
                    style={{ marginLeft: "-2rem" }}></div>
                  <div
                    className="laleh-hair"
                    style={{ marginLeft: "-1rem" }}></div>
                  <div className="laleh-hair"></div>
                  <div
                    className="laleh-hair"
                    style={{ marginLeft: "1rem" }}></div>
                  <div
                    className="laleh-hair"
                    style={{ marginLeft: "2rem" }}></div>
                  <div
                    className="laleh-hair"
                    style={{ marginLeft: "3rem" }}></div>
                  <div
                    className="laleh-hair"
                    style={{ marginLeft: "4rem" }}></div>
                  <div
                    className="laleh-hair"
                    style={{ marginLeft: "5rem" }}></div>
                </div>
                <div className="face laleh-face">
                  <div className="nose laleh-nose"></div>
                  <div className="eye-shadow" id="left">
                    <div className="eyebrow erika-brow"></div>
                    <div className="eye laleh-eye" id="lalehEyeLeftID">
                      <div className="laleh-kawai"></div>
                    </div>
                  </div>
                  <div className="eye-shadow" id="right">
                    <div className="eyebrow erika-brow"></div>
                    <div className="eye laleh-eye">
                      <div className="laleh-kawai"></div>
                    </div>
                  </div>

                  <div className="mouth laleh-mouth"></div>
                  <div className="cheek cheek-left"></div>
                  <div className="cheek cheek-right"></div>
                  <div className="shadow-wrapper"></div>
                </div>
              </div>
              <div className="laleh-body"></div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
