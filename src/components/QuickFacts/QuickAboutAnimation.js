import anime from "animejs";
import { playPostFunc, selectedIndex } from "../About/Animations/postAboutAnimation";
export class QuickAboutAnimation {
  constructor() {

    this.edipAndFamillyAnimation = anime.timeline({
      loop: true,
      autoplay: false,
      easing: "easeInOutQuad",
      direction: "alternate",
    });

    this.edipAndFamillyAnimation.add({
      targets: ".eyebrow",
      translateY: [0, "-0.5rem", "0.5rem"],
      duration: 750,
      delay:1000,
    });

    this.quickCoffeeSteam = anime.timeline({
      loop: true,
      autoplay: false,
      easing: "linear",
      duration: 1750,
      direction: "alternate",
    });

    this.quickCoffeeSteam.add({
      targets: ["#steamOneID", "#steamTwoID", "#steamThreeID"],
      opacity: [0, 1],
      delay: anime.stagger(500),
      height: ["0%", "100%"],
    });
  }

  async playOrStop(input) {
    if (input === true) {
      this.edipAndFamillyAnimation.play();
      this.quickCoffeeSteam.play();

      if(selectedIndex >0){
        playPostFunc(selectedIndex);
      }
 
    }

    if (input === false) {
      this.edipAndFamillyAnimation.pause();
      this.quickCoffeeSteam.pause();
      playPostFunc(false);
    }
  }
}
