import React from "react";
import "../introSkill/introSkill.css";

export const IntroSkill = () => {
  return (
    <div className="sunRiseContainer container-sm" id='sunRiseSkillID'>
      <div className="sunRiseInBlock">
        <div className="journeyScene">
          <div className="sunRise"></div>

          <div className="mountainScene" id="mountainsSkillID">
            <div className="mountain" id="mountainOneID">
              <div className="mountain" id="mountainFourID">
                <div className="smallMountain" id="mountainThreeID"></div>
              </div>
            </div>
            <div className="mountain" id="mountainTwoID"></div>
          </div>
          <div className="ground"></div>
        </div>
      </div>
    </div>
  );
};
