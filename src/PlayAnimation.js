import { IntroAnimation } from "./components/Intro/IntroAnimation.js";
import { PersonalityAnimation } from "../src/components/personality/personalityAnimation.js";
import { PortfolioAnimation } from "./components/Portfolio/PortfolioAnimation.js";

import anime from "animejs";
import { SkillAnimation } from "./components/skills/SkillAnimation.js";

const IntroAnime = new IntroAnimation();
const SkillsAnime = new SkillAnimation();
const PersonalityAnime = new PersonalityAnimation();
const PortfolioAnime = new PortfolioAnimation();

export function AnimationPlayRefreshBegin(
  inputPlayID,
  inputRefreshID,
  inputTextPlayID
) {
  const textPlay = document.getElementById(inputTextPlayID);
  const btnExpPlay = document.getElementById(inputPlayID);
  const btnRefreshExp = document.getElementById(inputRefreshID);

  textPlay.style.display = "none";
  btnExpPlay.style.display = "none";
  btnExpPlay.style.pointerEvents = "none";

  if (btnRefreshExp.style.display === "block") {
    anime({
      targets: "#" + inputRefreshID,
      opacity: 0,
      duration: 500,
      complete: function () {
        btnRefreshExp.style.pointerEvents = "none";
      },
    });
  }

  btnRefreshExp.style.display = "block";
}

export function AnimationPlayRefreshEnd(inputPlayID, inputRefreshID) {
  const btnRefreshExp = document.getElementById(inputRefreshID);
  btnRefreshExp.style.display = "block";

  if (btnRefreshExp.style.display === "block") {
    anime({
      targets: "#" + inputRefreshID,
      opacity: [0, 1],
      duration: 500,
      easing: "easeInOutQuad",
      complete: function () {
        btnRefreshExp.style.pointerEvents = "all";
      },
    });
  } else {
    btnRefreshExp.style.display = "block";
    btnRefreshExp.style.opacity = "1";

    anime({
      targets: "#" + inputRefreshID,
      opacity: [0, 1],
      duration: 500,
      easing: "easeInOutQuad",
      complete: function () {
        btnRefreshExp.style.pointerEvents = "all";
      },
    });
  }
}

export function PlayAnimation(inputID, inputPlayBoolean) {
  const objArray = new Array();
  objArray.push(IntroAnime);
  objArray.push(SkillsAnime);
  objArray.push(PersonalityAnime);
  objArray.push(PortfolioAnime);

  var idEl = "#" + inputID;
  var currentObject = inputID.substring(inputID.indexOf("_") + 1);
  var delayTime = 0;

  if (currentObject === "IntroAnimation") {
    delayTime = 4500;
  }

  if (currentObject === "PersonalityAnimation") {
    //13000
    delayTime = 13000;
  }

  objArray.forEach((element) => {
    if (currentObject === element.constructor.prototype.constructor.name) {
      element.playOrStop(inputPlayBoolean);
    }
  });

  return delayTime;
}
