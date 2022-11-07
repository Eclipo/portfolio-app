import anime from "animejs";
import { playMarioFunc } from "./introPortfolioAnime";
import { playPostFunc } from "./postPortfolioAnime";
// import { playIntroFunc } from "./introSkillAnime";
// import { playPostFunc } from "./postPortfolioAnime";
// const ratio = 0.25 * window.innerWidth;

export class PortfolioAnimation {
  constructor() {}

  async playOrStop(input) {
    if (input === 1) {
           playPostFunc(false);
    }

    if (input === 2) {
        playPostFunc(true);
    }
  }
}
