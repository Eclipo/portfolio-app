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
      console.log("!!!!!!!!! PERSONALITY ANIMATION IS TURNING ON");
      this.playedPersonalityZero = true;

      console.log("!!!!!! PLAYEDZERO ÄR !!!! : "+this.playedPersonalityZero);

      anime.remove("#personalityTable");
      anime.remove("#personalityTable td");
      anime.remove(".personalityTraits");
      anime.remove(".personalityBaseTraits");
      let elContainer = document.getElementById("greenSquareTableID");
      elContainer.style.display = "";
      elContainer.style.opacity = 1;
      playBrainFunc();
    }

    if (input === 1) {
      console.log("!!!!!!!!! PERSONALITY ANIMATION IS TURNING OFF");
      playPersonalityFunc(false);
    }

    if (input === 2) {
      console.log('STARTA OM FÖR FAN PERSONALITY!');
      console.log("!!!!!! PLAYEDZERO ÄR !!!! : "+this.playedPersonalityZero);

      if (this.playedPersonalityZero === true) {
        console.log('STARTA OM FÖR FAN PERSONALITY! TRUUUUUUEEEEE');
        playPersonalityFunc(true);
      }
    }
  }
}
