import { playPostFunc } from "./postAboutAnimation.js";

export class QuickAboutAnimation {
  constructor() {}

  async playOrStop(input) {
      playPostFunc(input);
    }
}
