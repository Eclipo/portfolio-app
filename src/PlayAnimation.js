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
  console.log("here we are PlayAnimation", selectedIndex);
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
  // const objArray = new Array();
  // objArray.push(IntroAnime);
  // objArray.push(SkillsAnime);
  // objArray.push(PersonalityAnime);
  // objArray.push(PortfolioAnime);

  var idEl = "#" + inputID;
  var currentObject = inputID.substring(inputID.indexOf("_") + 1);
  var delayTime = 0;

  if (currentObject === "IntroAnimation") {
    delayTime = 4500;
    IntroAnime.playOrStop(inputPlayBoolean);
    return delayTime;
    console.log("hheeeelloooo Intro PlayAnimation");
  }

  if (currentObject === "SkillAnimation") {
    //13000
    SkillsAnime.playOrStop(inputPlayBoolean);
    // delayTime = 13000;
    // return 0;
  }

  if (currentObject === "PersonalityAnimation") {
    //13000
    PersonalityAnime.playOrStop(inputPlayBoolean);
    delayTime = 13000;
    return delayTime;
  }

  if (currentObject === "PortfolioAnimation") {
    //13000
    PortfolioAnime.playOrStop(inputPlayBoolean);
    // delayTime = 13000;
    // return delayTime;
  }

  // objArray.forEach((element) => {
  //   if (currentObject === element.constructor.prototype.constructor.name) {
  //     element.playOrStop(inputPlayBoolean);
  //     console.log("BOOM IS GOING TO PLAY - PlayAnimation");
  //   }
  // });

  return delayTime;
}
