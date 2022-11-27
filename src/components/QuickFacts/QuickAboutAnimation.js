import anime from "animejs";
import { KnucklesSvgAnimation } from "../Experiences/KnucklesSvg/KnucklesSvgAnimation";
export class QuickAboutAnimation {
  constructor() {
    var windowHeight = window.outerHeight;
    var windowWidht = window.outerWidth;
    var windowArea = windowHeight * windowWidht;
    var flagSize = windowArea * 0.0000045;
    var flagSizeIncrease = flagSize + 0.3;

    var setDashoffset = function (el) {
      var l = el.getTotalLength();
      el.setAttribute("stroke-dasharray", l);
      return [l, 0];
    };

    const roGrid = [13, 10];

    if (windowWidht > 1200) {
      flagSize = 1.9;
      flagSizeIncrease = 2;
    }

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

    this.bounceCityHall = anime.timeline({
      loop: true,
      autoplay: false,
      easing: "easeOutBounce",
      duration: 1250,
      direction: "alternate",
    });

    this.bounceCityHall.add({
      targets: ".cityHall",
      scale: [1.4, 1.5],
    });

    this.bounceFlag = anime.timeline({
      loop: true,
      autoplay: false,
      easing: "easeOutBounce",
      duration: 1250,
      direction: "alternate",
    });

    this.bounceFlag.add({
      targets: ".flag",
      scale: [flagSize, flagSizeIncrease],
    });

    this.basketAnimation = anime.timeline({
      loop: true,
      autoplay: false,
      duration: 1500,
      easing: "linear",
    });

    this.basketAnimation.add({
      targets: [".basketBall", ".left-arm"],
      translateY: 80,
      translateX: 40,
      duration: 200,
      rotate: "-35deg",
    });

    this.basketAnimation.add({
      targets: [".basketBall"],
      translateY: [80, 125, 180, 100, -30],
      translateX: [40, 100, 200, 300, 400],
      duration: 150,
    });

    this.basketAnimation.add({
      targets: [".basketBall", ".right-arm"],
      translateY: 80,
      duration: 150,
      rotate: "35deg",
    });

    this.basketAnimation.add({
      targets: [".basketBall"],
      translateY: [80, 100, 180, 125, -30],
      translateX: [400, 300, 200, 100, 40],
      rotate: "-35deg",
      duration: 250,
      easing: "linear",
    });

    this.basketAnimation.add({
      targets: [".basketBall"],
      translateY: [80, 125, 180, 100, -30],
      translateX: [40, 100, 200, 300, 400],
      duration: 250,
    });

    this.basketAnimation.add({
      targets: [".leftLegBasket"],
      duration: 5,
      rotate: "-5deg",
    });

    this.basketAnimation.add({
      targets: [".rightLegBasket"],
      duration: 5,
      rotate: "5deg",
    });
    this.basketAnimation.add({
      targets: [".leftLegBasket"],
      duration: 5,
      rotate: "5deg",
    });
    this.basketAnimation.add({
      targets: [".leftShoe"],
      duration: 5,
      rotate: "-15deg",
    });
    this.basketAnimation.add({
      targets: [".rightLegBasket", ".rightShoe"],
      duration: 5,
      translateY: 40,
      marginTop: "6rem",
      rotate: "5deg",
    });

    this.basketAnimation.add({
      targets: [".right-arm"],
      translateY: -40,
      duration: 5,
      rotate: "-20deg",
    });
    this.basketAnimation.add({
      targets: [".headBasket", ".bodyBasket", ".lowerBody"],
      translateY: -450,
      translateX: 100,
      duration: 150,
    });

    this.basketAnimation.add({
      targets: [".right-arm", ".basketBall"],
      rotate: ["-15deg", "0deg", "30deg"],
      scale: [1, 1.1, 1],
      translateY: [-40, 0, 60],
      duration: 250,
    });

    this.basketAnimation.add({
      targets: [".basketBall"],
      translateY: [10, 400, 400],
      translateX: [400, 400, 200],
      duration: 100,
    });

    this.basketAnimation.add({
      targets: [".basketRim"],
      translateY: [0, 100, 0, 50, 0],
      duration: 50,
      scale: [3.2, 3.4],
      easing: "easeOutExpo",
    });

    this.basketAnimation.add({
      targets: [".basketBall"],
      translateY: [400, 200, 50],
      translateX: [200, 100, 40],
      duration: 150,
    });

    this.basketAnimation.add({
      targets: [".leftLegBasket"],
      duration: 5,
      rotate: "-5deg",
    });

    this.basketAnimation.add({
      targets: [".leftShoe"],
      duration: 5,
      rotate: "15deg",
    });

    this.basketAnimation.add({
      targets: [".rightLegBasket", ".rightShoe"],
      duration: 5,
      translateY: 40,
      marginTop: "6rem",
      rotate: "-15deg",
    });

    this.basketAnimation.add({
      targets: [".headBasket", ".bodyBasket", ".lowerBody"],
      translateY: 0,
      translateX: 0,
      duration: 250,
    });

    this.weights = anime.timeline({
      loop: true,
      autoplay: false,
      easing: "linear",
      duration: 1750,
      direction: "alternate",
    });

    this.weights.add({
      targets: ".faceWeights",
      backgroundColor: ["#ffe4be", "#fbbdbd"],
      duration: 750,
    });
    this.weights.add({
      targets: [".bodyWeights", "#upperBody_1"],
      translateY: [0, -10, 0, -10, 0, -15, -100],
      easing: "easeOutQuad",
    });

    this.lightSaberAnimation = anime.timeline({
      loop: true,
      easing: "easeInOutSine",
      autoplay: false,
    });

    this.lightSaberAnimation.add({
      targets: ".stars",
      scale: [0.05, 0.65],
      easing: "easeOutQuad",
      duration: 750,
    });

    this.lightSaberAnimation.add({
      targets: [
        ".emptyLightSaberSquare",
        ".baseLeft",
        ".baseCenter",
        ".baseRight",
        ".baseDarkLeft",
        ".baseDarkCenter",
        ".baseDarkRight",
      ],
      opacity: [0, 1],
      easing: "linear",
      translateX: 0,
      translateY: 0,
      delay: anime.stagger(10, { grid: roGrid, from: "last" }),
    });

    this.lightSaberAnimation.add({
      targets: ".outerLightSaber, .coreLightSaber",
      opacity: [0, 0.25, 0, 0.5, 0, 1],
      easing: "easeOutElastic(1, .9)",
      duration: 500,
      endDelay: 1500,
    });

    this.lightSaberAnimation.add({
      targets: ".outerLightSaber, .coreLightSaber",
      opacity: [1, 0.25, 1, 0.5, 1, 0],
      easing: "easeOutElastic(1, .9)",
      duration: 500,
    });

    this.lightSaberAnimation.add({
      targets:
        ".emptyLightSaberSquare, .baseLeft, .baseCenter, .baseRight, .baseDarkLeft, .baseDarkCenter, .baseDarkRight",
      opacity: [1, 0],
      easing: "linear",
      translateX: () => anime.random(-250, 250),
      translateY: () => anime.random(-150, 150),
      delay: anime.stagger(40, { grid: roGrid, from: "first" }),
    });

    const ratio = 0.25 * window.innerWidth;
    const marioContainer = document.getElementById("marioContainer");

    this.marioAnimation = anime.timeline({
      loop: true,
      autoplay: false,
      duration: 250,

      easing: "linear",
      endDelay: 100,
      direction: "alternate",
    });

    this.marioArmHandRightAnimation = anime.timeline({
      loop: true,
      autoplay: false,
      duration: 350,

      easing: "linear",
      delay: 500,
      endDelay: 100,
      direction: "alternate",
    });

    this.marioLegRightAnimation = anime.timeline({
      loop: true,
      autoplay: false,
      duration: 350,

      easing: "linear",
      delay: 500,
      endDelay: 100,
      direction: "alternate",
    });

    this.marioLegLeftAnimation = anime.timeline({
      loop: true,
      autoplay: false,
      duration: 350,

      easing: "linear",
      delay: 500,
      endDelay: 100,
      direction: "alternate",
    });

    this.marioArmHandLeftAnimation = anime.timeline({
      loop: true,
      autoplay: false,
      duration: 350,

      easing: "linear",
      delay: 500,
      endDelay: 100,
      direction: "alternate",
    });

    this.marioLegRightAnimation.add({
      targets: ".marioLegShoeRight",
      translateY: [0, "6rem"],
      translateX: [0, "-8rem"],
      rotate: [0, "-45deg"],
      // scale:0.8
    });

    this.marioArmHandRightAnimation.add({
      targets: ".marioArmRight",
      translateY: [0, "-6rem"],
      translateX: [0, "0.25rem"],
      rotate: [0, "-180deg"],
      // scale:0.8
    });

    this.marioLegLeftAnimation.add({
      targets: ".marioLegShoeLeft",
      translateY: [0, "3rem"],
      translateX: [0, "4.5rem"],
      rotate: [0, "25deg"],
    });

    this.marioArmHandLeftAnimation.add({
      targets: ".marioArmLeft",
      translateY: [0, "-2rem"],
      translateX: [0, "-1.25rem"],
      rotate: [0, "90deg"],
    });

    this.marioCloud = anime.timeline({
      easing: "easeInOutQuad",
      duration: 5250,
      direction: "alternate",
      loop: true,
      autoplay: false,
    });

    this.marioCloud.add({
      targets: ".marioCloud",
      translateY: ["0", "-1rem"],
    });
  }

  playOrStop(input) {
    if (input === true && this.edipAndFamillyAnimation.paused) {
      this.edipAndFamillyAnimation.play();
      this.rightHand.play();
      this.leftHand.play();
      this.quickCoffeeSteam.play();
      this.bounceCityHall.play();
      this.bounceFlag.play();
      this.basketAnimation.play();
      this.weights.play();
      this.lightSaberAnimation.play();
      this.marioArmHandRightAnimation.play();
      this.marioLegRightAnimation.play();
      this.marioArmHandLeftAnimation.play();
      this.marioLegLeftAnimation.play();
      this.marioAnimation.play();
      this.marioCloud.play();

      function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
    }

    if (input === false) {
      this.edipAndFamillyAnimation.pause();
      this.quickCoffeeSteam.pause();
      this.bounceCityHall.pause();
      this.bounceFlag.pause();
      this.basketAnimation.pause();
      this.weights.pause();
      this.lightSaberAnimation.pause();
      this.marioArmHandRightAnimation.pause();
      this.marioLegRightAnimation.pause();
      this.marioArmHandLeftAnimation.pause();
      this.marioLegLeftAnimation.pause();
      this.marioAnimation.pause();
    }
  }
}
