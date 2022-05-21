import anime from "animejs";
import { playBrainFunc } from "./playBrainFunc";

const ratio = 0.25 * window.innerWidth;
export class PersonalityAnimation {
  constructor() {
    this.grid = [13, 15];
  }

  waitForPlayCharacteristics() {
    return new Promise((resolve) => {
      setTimeout(function () {
        resolve();
      }, 14000);
    });
  }

  playCharecteristics() {
    this.playShakingHonesty.restart();
    this.playHonesty.restart();
    this.playTemper.restart();
    this.playFocus.restart();
    this.playCreativity.restart();
    this.playStructure.restart();
  }

  async playAfterBrain() {
    await this.waitForPlayCharacteristics();
    playBrainFunc();
  }

  playPersonality() {
    playBrainFunc.play();
  }

  async playOrStop(input) {
    if (input === true) {
      console.log('!!!!!!!!! PERSONALITY ANIMATION IS TURNING ON');

      anime.remove("#personalityTable");
      anime.remove("#personalityTable td");
      anime.remove(".personalityTraits");
      anime.remove(".personalityBaseTraits");
      let elContainer = document.getElementById("greenSquareTableID");
      elContainer.style.display = "";
      elContainer.style.opacity = 1;
      playBrainFunc();
    }

    if (input === false) {
      console.log('!!!!!!!!! PERSONALITY ANIMATION IS TURNING OFF');
      this.playHonesty.pause();
      this.playShakingHonesty.pause();
      this.playTemper.pause();
      this.playFocus.pause();
      this.playCreativity.pause();
      this.playStructure.pause();
    }
  }
}
