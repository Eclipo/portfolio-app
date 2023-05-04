import anime from "animejs";
import {
  playPostFunc,
  selectedIndex,
} from "../About/Animations/postAboutAnimation";
export class QuickAboutAnimation {
  constructor() {
    this.firstTimeIntro = true;
    this.firstTimeAbout = true;

    this.firstIntroAnimation = anime.timeline({
      loop: false,
      autoplay: false,
    });

    this.firstAboutAnimation = anime.timeline({
      loop: false,
      autoplay: false,
    });

    this.firstIntroAnimation.add({
      targets: ".edipCircleBackground-circle",
      easing: "linear",
      opacity: [0, 1],
      duration: 250,
      complete: function () {
        if (!this.firstTimeAbout) {
          anime({
            targets: [
              "#bodyStart",
              "#headOne",
              ".right-hand",
              ".left-hand",
              ".coffee-cup-container",
              ".steam-container",
            ],
            easing: "easeInOutSine",
            translateY: ["-2rem", "3rem", 0],
            opacity: [0, 1],
            delay: anime.stagger(150),
          });
        }

        if (this.firstTimeAbout) {
          anime({
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
        }
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

    this.firstAboutAnimation.add({
      targets: ["#bodyStart", "#headOne"],
      opacity: 0,
      duration: 50,
    });
    this.firstAboutAnimation.add({
      targets: ".customLeftArrowBtn",
      easing: "easeInOutSine",
      translateY: ["1rem", "-1rem", 0],
      opacity: [0, 1],
      duration: 350,
      delay: 100,
    });

    this.firstAboutAnimation.add({
      targets: [".customRightArrowBtn"],
      easing: "easeInOutSine",
      translateX: ["-1rem", "1rem", 0],
      opacity: [0, 1],
      duration: 350,
    });

    this.firstAboutAnimation.add({
      targets: [".containerSlide", ".control-dots"],
      easing: "easeInOutSine",
      translateY: ["-1rem", "1rem", 0],
      opacity: [0, 1],
      duration: 650,
      delay: 50,
    });

    this.firstAboutAnimation.add({
      targets: ["#aboutMe h1"],
      easing: "easeInOutSine",
      translateY: ["-1rem", "1rem", 0],
      opacity: [0, 1],
      duration: 500,
      endDelay: 50,
      complete: function () {
        if (!this.firstTimeIntro) {
          anime({
            targets: ["#bodyStart", "#headOne"],
            easing: "easeInOutSine",
            translateY: ["-2rem", "3rem", 0],
            opacity: [0, 1],
            duration: 650,
          });
        }
      },
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
    if (input === 0) {
      if (this.firstTimeIntro) {
        this.firstTimeIntro = false;
        document.getElementById("headOne").style.opacity = 0;
        document.getElementById("bodyStart").style.opacity = 0;
        this.firstIntroAnimation.play();
      }
      this.edipAndFamillyAnimation.play();
      this.quickCoffeeSteam.play();

      if (selectedIndex > 0) {
        playPostFunc(selectedIndex);
      }
    }

    if (input === 1) {
      if (this.firstTimeAbout) {
        this.firstTimeAbout = false;

        this.firstAboutAnimation.play();
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
