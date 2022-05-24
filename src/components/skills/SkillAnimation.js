import anime from "animejs";
import { playIntroFunc } from "./introSkillAnime";
import { playPostFunc } from "./postSkillAnime";
const ratio = 0.25 * window.innerWidth;

export class SkillAnimation {
  constructor() {
    var playedZero = false;
  }

  async playOrStop(input) {
    if (input === 0) {
      console.log("!!!!!! SKILLS PLAYING 0 !!!!");
      this.playedZero = true;
      console.log("!!!!!! playedZero ÄR !!!! : "+this.playedZero);

      anime.remove(".skillContainer");
      anime.remove(".skillTable");
      anime.remove(".skillTable tbody thead tr td p div");
      anime.remove(".skillCategory");
      anime.remove(".skillPointGround");
      anime.remove("#skillDividerTd");
      anime.remove("#skillElemAndInter");
      anime.remove("#skillElemAndNoob");
      anime.remove("#skillNoobElemAndInter");
      anime.remove("#duckContainerID");
      anime.remove(".duckMouthUpper");
      anime.remove(".duckMouthUnder");
      anime.remove(".duckEyebrow");

      anime({
        targets: [".skillContainer", "#skillDividerTd"],
        opacity: 0,
      });
      playIntroFunc();
    }

    if (input === 1) {
      console.log("!!!!!! SKILLS IS TURNING OFF 1 !!!!");
      playPostFunc(false);       
    }

    if (input === 2) {
      console.log("!!!!!! SKILLS IS RESUMING 2!!!!");
      console.log("!!!!!! playedZero ÄR !!!! : "+this.playedZero);
      if(this.playedZero === true){  
        playPostFunc(true);

      }
    }
  }
}
