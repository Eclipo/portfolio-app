import anime from "animejs";
import {
  playPostFunc,
  selectedIndex,
} from "../About/Animations/postAboutAnimation";
export class QuickAboutAnimation {
  constructor() {
    this.firstTimeIntro = true;

    this.firstIntroAnimation = anime.timeline({
      loop: false,
      autoplay: false,
    });

    this.firstIntroAnimation.add({
      targets: ".edipCircleBackground-circle",
      easing: "linear",
      opacity: [0, 1],
      duration: 250,
      complete: function () {
        anime({
          targets: [
            "#quickFacts #bodyStart",
            "#quickFacts #headOne",
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
      },
    });

    this.firstIntroAnimation.add({
      targets: "#quickFacts h1",
      easing: "linear",
      opacity: [0, 1],
      duration: 250,
      delay: 100,
    });

    this.firstIntroAnimation.add({
      targets: "#quickFacts h3",
      easing: "linear",
      opacity: [0, 1],
      duration: 250,
      delay: 100,
    });

    this.firstIntroAnimation.add({
      targets: ".scrollIntro",
      easing: "easeInOutSine",
      opacity: [0, 1],
      translateY: ["-2rem", "2rem", 0],
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

    this.scrollIntro = anime.timeline({
      loop: true,
      autoplay: false,
    });

    this.scrollIntro.add({
      targets: [".scrollIntro", ".scrollDown"],
      easing: "easeInOutSine",
      translateY: [0, "-0.25rem", "0.25rem", 0],
      duration: 750,
      endDelay: 1750,
    });
  }

  async playOrStop(input) {
    if (input === 0) {
      if (this.firstTimeIntro) {
        document.getElementById("headOne").style.opacity = 0;
        document.getElementById("bodyStart").style.opacity = 0;
        this.firstTimeIntro = false;
        this.firstIntroAnimation.play();
        this.scrollIntro.play();
      }
      this.edipAndFamillyAnimation.play();
      this.quickCoffeeSteam.play();

      if (selectedIndex > 0) {
        playPostFunc(selectedIndex);
      }
    }

    if (input === 1) {
      this.edipAndFamillyAnimation.play();
      this.quickCoffeeSteam.play();

      if (selectedIndex > 0) {
        playPostFunc(selectedIndex);
      }
    }

    if (input === false) {
      this.edipAndFamillyAnimation.pause();
      this.quickCoffeeSteam.pause();
      this.scrollIntro.pause();
      playPostFunc(false);
    }
  }
}
