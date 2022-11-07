import { playPostFunc } from "./postPortfolioAnime";
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
