import anime from "animejs";
import { playBrainFunc } from "./playBrainFunc";
import { playPersonalityFunc } from "./playPersonalityFunc";
const ratio = 0.25 * window.innerWidth;
export class PersonalityAnimation {

  constructor() {
    var  playedPersonalityZero = false;

    this.grid = [13, 15];
  }

  async playOrStop(input) {
    if (input === 0) {
      this.playedPersonalityZero = true;

      anime.remove("#personalityContainerID");
      anime.remove("#personalityTableID");
      anime.remove("#personalityTableID td");
      anime.remove(".personalityTraits");
      anime.remove(".personalityBaseTraits");
      let elContainer = document.getElementById("greenSquareTableID");
      elContainer.style.display = "";
      elContainer.style.opacity = 1;
      playBrainFunc();
    }

    if (input === 1) {
      playPersonalityFunc(false);
    }

    if (input === 2) {

      if (this.playedPersonalityZero === true) {
        playPersonalityFunc(true);
      }
    }
  }
}
