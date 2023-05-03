import anime from "animejs";
import {
  playPostFunc,
  selectedIndex,
} from "../About/Animations/postAboutAnimation";
export class QuickAboutAnimation {
  constructor() {
    this.firstTime = true;

    this.firstAnimation = anime.timeline({
      loop: false,
      autoplay: false,
    });

    this.firstAnimation.add({
      targets: ".edipCircleBackground-circle",
      easing: "linear",
      opacity: [0, 1],
      duration: 250,
    });

    this.firstAnimation.add({
      targets: [
        "#bodyStart",
        "#headOne",
        ".right-hand",
        ".left-hand",
        ".coffee-cup-container",
        ".steam-container",
      ],
      easing: "easeInOutSine",
      translateY: ["-2rem", "2rem", 0],
      opacity: [0, 1],
      delay: anime.stagger(150),
    });

    this.firstAnimation.add({
      targets: "#quickFacts h1",
      easing: "linear",
      opacity: [0, 1],
      duration: 250,
      delay: 100,
    });

    this.firstAnimation.add({
      targets: "#quickFacts h3",
      easing: "linear",
      opacity: [0, 1],
      duration: 250,
      delay: 100,
    });

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
      delay: 1000,
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
      if (this.firstTime) {
        this.firstTime = false;

        this.firstAnimation.play();
      }
      this.edipAndFamillyAnimation.play();
      this.quickCoffeeSteam.play();

      if (selectedIndex > 0) {
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
