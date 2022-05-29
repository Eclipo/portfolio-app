import anime from "animejs";
import { playRoFunc } from "./roAnimationFunc";
export class ResumeAnimation {
  constructor() {}

  playOrStop(input) {
    if (input === true) {
      let elContainer = document.getElementById("lightSaberTableID");
      elContainer.style.display = "block";

      anime({
        targets: ".resumeTable",
        opacity: 0,
        easing: "linear",
        duration: 10,
      });
      playRoFunc();
    }

    if (input === false) {
      anime({
        targets: ".resumeTable",
        opacity: 0,
        easing: "linear",
        duration: 10,
      });
    }
  }
}
