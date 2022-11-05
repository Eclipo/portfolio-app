import anime from "animejs";
import { playIntroFunc } from "./introSkillAnime";
import { playPostFunc } from "./postSkillAnime";
const ratio = 0.25 * window.innerWidth;

export class SkillAnimation {
  constructor() {
  }

  async playOrStop(input) {
    
    if (input === 1) {
      playPostFunc(false);       
    }

    if (input === 2) {
        playPostFunc(true);

      }
    
  }
}
