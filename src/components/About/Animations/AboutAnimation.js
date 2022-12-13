import { playPostFunc } from "./postAboutAnimation.js";
const ratio = 0.25 * window.innerWidth;

export class QuickAboutAnimation {
  constructor() {}

  async playOrStop(input) {
    playPostFunc(input);
  }
}
