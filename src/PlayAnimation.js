import { IntroAnimation } from "./components/Intro/IntroAnimation.js";
import { PersonalityAnimation } from "./components/personality/personalityAnimation.js";
import { PortfolioAnimation } from "./components/Portfolio/PortfolioAnimation.js";

import anime from "animejs";
import { SkillAnimation } from "./components/skills/SkillAnimation.js";
import { QuickAboutAnimation } from "./components/About/Animations/AboutAnimation.js";

const IntroAnime = new IntroAnimation();
const SkillsAnime = new SkillAnimation();
const PersonalityAnime = new PersonalityAnimation();
const PortfolioAnime = new PortfolioAnimation();
const QuickAboutAnime = new QuickAboutAnimation();

export async function PlaySlide(selectedIndex) {
  QuickAboutAnime.playOrStop(selectedIndex);
}

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
  var idEl = "#" + inputID;
  var currentObject = inputID.substring(inputID.indexOf("_") + 1);
  var delayTime = 0;

  if (currentObject === "IntroAnimation") {
    delayTime = 4500;
    IntroAnime.playOrStop(inputPlayBoolean);
    return delayTime;
  }

  if (currentObject === "SkillAnimation") {
    SkillsAnime.playOrStop(inputPlayBoolean);
  }

  if (currentObject === "PersonalityAnimation") {
    PersonalityAnime.playOrStop(inputPlayBoolean);
    delayTime = 13000;
    return delayTime;
  }

  if (currentObject === "PortfolioAnimation") {
    PortfolioAnime.playOrStop(inputPlayBoolean);
  }

  return delayTime;
}
