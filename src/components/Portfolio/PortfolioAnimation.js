import anime from "animejs";
import { playMarioFunc } from "./introPortfolioAnime";
import { playPostFunc } from "./postPortfolioAnime";
// import { playIntroFunc } from "./introSkillAnime";
// import { playPostFunc } from "./postPortfolioAnime";
// const ratio = 0.25 * window.innerWidth;

export class PortfolioAnimation {
  constructor() {
    var playedZero = false;
  }

  async playOrStop(input) {
    if (input === 0) {
      this.playedZero = true;

      anime.remove(".portfolioTextContainer");
      anime.remove(".animContainer");
      anime.remove(".avatarCircle");
      anime.remove(".eyesContainer");
      anime.remove(".eyeBrows");
      anime.remove(".eyeAvatar");
      anime.remove(".eyePupil");
      anime.remove(".avatarMouth");
      anime.remove(".talkBubble");
      anime.remove(".lightYear");
      anime.remove(".rainDropTable");
      anime.remove(".rainDropTable tbody");

      anime.remove(".rainDrop");
      anime.remove(".journeyScene");
      anime.remove(".sunRise");
      anime.remove(".mountain");
      anime.remove(".smallMountain");
      anime.remove(".ground");
      anime.remove("#headHitWall");
      anime.remove(".wall");
      anime.remove(".forceWall");
      anime.remove(".zenBigCircle");
      anime.remove(".zenSmallCircle");
      anime.remove(".zenAvatarCircle");

      anime({
        targets: "#portfolioContainer",
        opacity: 0,
      });
      playMarioFunc().then(playPostFunc(true));
    }

    if (input === 1) {
           playPostFunc(false);
    }

    if (input === 2) {
      if(this.playedZero === true){  
        playPostFunc(true);
      }
    }
  }
}
