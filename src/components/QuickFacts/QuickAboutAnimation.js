import anime from "animejs";
import { playPostFunc } from "../About/Animations/postAboutAnimation";
export class QuickAboutAnimation {
  constructor() {
    this.rightHand = anime.timeline({
      loop: true,
      autoplay: false,
      easing: "easeInOutQuad",
      direction: "alternate",
    });

    this.rightHand.add({
      targets: [".right-hand", "#steamContainerId", ".coffee-cup-container"],
      translateY: [0, "-0.15rem", "0.15rem"],
      duration: 1750,
    });

    this.leftHand = anime.timeline({
      loop: true,
      autoplay: false,
      easing: "easeInOutQuad",
      direction: "alternate",
    });

    this.leftHand.add({
      targets: ".left-hand",
      translateY: [0, "-0.15rem", "0.15rem"],
      duration: 1750,
    });

    this.edipAndFamillyAnimation = anime.timeline({
      loop: true,
      autoplay: false,
      easing: "easeInOutQuad",
      direction: "alternate",
    });

    this.edipAndFamillyAnimation.add({
      targets: ".head",
      translateY: [5, -5, 5],
      rotate: ["4deg", "-4deg"],
      duration: 750,
      easing: "easeInOutQuad",
    });

    this.edipAndFamillyAnimation.add({
      targets: ".eyebrow",
      translateY: [0, "-0.5rem", "0.5rem"],
      duration: 500,
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
    if (input === true && this.edipAndFamillyAnimation.paused) {
      this.edipAndFamillyAnimation.play();
    }

    if (input === false) {
      this.edipAndFamillyAnimation.pause();
      this.quickCoffeeSteam.pause();
      playPostFunc(false);
    }
  }
}
