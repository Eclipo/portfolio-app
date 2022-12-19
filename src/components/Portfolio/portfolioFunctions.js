import anime from "animejs";
import disableScroll from "disable-scroll";
import {
  covidAnimation,
  heroAnimation,
  hitWallAnimation,
  rainAnimation,
  removePortfolioAnimations,
  sunRiseAnimation,
  zenAnimation,
} from "./postPortfolioAnime";
export var chapterIndex = 0;
const targetStory = "story_";

export async function playStory(story) {
  removePortfolioAnimations();

  switch (story) {
    case "story_0":
      covidAnimation();
      break;
    case "story_1":
      heroAnimation();
      break;
    case "story_2":
      rainAnimation();
      break;
    case "story_3":
      sunRiseAnimation();
      break;
    case "story_4":
      hitWallAnimation();
      break;
    case "story_5":
      zenAnimation();
      break;
    default:
      covidAnimation();
      break;
  }
}

export const leftNavigate = (inputID) => {
  disableScroll.on();
  let checkNext = { ...(chapterIndex - 1) };

  if (chapterIndex > 0 && chapterIndex <= 5) {
    document.getElementById("leftBtnID").disabled = false;
    document.getElementById("rightBtnID").disabled = false;

    anime({
      targets: [".leftBtn", ".rightBtn"],
      opacity: 1,
    });

    let currentStory = targetStory + chapterIndex;
    chapterIndex = chapterIndex - 1;
    let nextStory = targetStory + chapterIndex;

    anime({
      targets: "#" + currentStory,
      opacity: 0,
      duration: 250,
      delay: 150,
      easing: "linear",
      complete: function () {
        document.getElementById(nextStory).style.display = "block";
        document.getElementById(currentStory).style.display = "none";
        anime({
          targets: "#" + nextStory,
          opacity: 1,
          delay: 150,
          easing: "linear",
          duration: 500,
          complete: function () {
            playStory(nextStory);
            disableScroll.off();
          },
        });
      },
    });
    let checkNext = { ...(chapterIndex - 1) };

    if (chapterIndex < 0 || chapterIndex === 0 || checkNext === 0) {
      document.getElementById("leftBtnID").disabled = true;
      anime({
        targets: ".leftBtn",
        opacity: 0,
      });
      chapterIndex = 0;
    }
  }
};

export const rightNavigate = (inputID) => {
  disableScroll.on();
  document.getElementById("leftBtnID").disabled = true;
  document.getElementById("rightBtnID").disabled = true;

  let currentStory = targetStory + chapterIndex;
  chapterIndex = chapterIndex + 1;
  let nextStory = targetStory + chapterIndex;

  if (chapterIndex > 0 && chapterIndex <= 5) {
    document.getElementById("leftBtnID").disabled = false;
    document.getElementById("rightBtnID").disabled = false;

    anime({
      targets: [".leftBtn", ".rightBtn"],
      opacity: 1,
    });

    anime({
      targets: "#" + currentStory,
      opacity: 0,
      duration: 250,
      easing: "linear",
      delay: 150,
      complete: function () {
        anime({
          targets: "#" + nextStory,
          opacity: 1,
          delay: 150,
          easing: "linear",
          duration: 500,
          begin: function () {
            document.getElementById(nextStory).style.display = "block";
            document.getElementById(currentStory).style.display = "none";
            playStory(nextStory);
          },
          complete: function () {
            disableScroll.off();
          },
        });
      },
    });

    let checkNext = { ...(chapterIndex + 1) };

    if (chapterIndex === 5 || checkNext === 5) {
      document.getElementById("rightBtnID").disabled = true;
      anime({
        targets: ".rightBtn",
        opacity: 0,
      });
      chapterIndex = 5;
      disableScroll.off();
      return;
    }

  }

  if (chapterIndex > 5) {
    chapterIndex = 5;
  }
};
