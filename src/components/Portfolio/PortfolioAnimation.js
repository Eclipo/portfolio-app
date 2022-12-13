import { chapterIndex, playStory } from "./portfolioFunctions";
import { covidAnimation, playPostFunc } from "./postPortfolioAnime";
let firstTime = false;
export class PortfolioAnimation {
  constructor() {}

  async playOrStop(input) {
    if (input === 1) {
      playPostFunc(false);
    }

    if (input === 2) {
      if (!firstTime) {
        firstTime = true;
        covidAnimation();
      }
      let currentStory = "story_" + chapterIndex;
      playStory(currentStory);
      playPostFunc(true);
    }
  }
}
