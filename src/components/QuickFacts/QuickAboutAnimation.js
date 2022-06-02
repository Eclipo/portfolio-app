import anime from "animejs";

export class QuickAboutAnimation {
  constructor() {
    var windowHeight = window.outerHeight;
    var windowWidht = window.outerWidth;
    var windowArea = windowHeight * windowWidht;
    var flagSize = windowArea * 0.0000045;
    var flagSizeIncrease = flagSize + 0.3;
    if (windowWidht > 1200) {
      flagSize = 1.9;
      flagSizeIncrease = 2;
    }

    // this.familyBlinkAnimation = anime.timeline({
    //   loop: true,
    //   autoplay: false,
    //   easing: "easeInOutQuad",
    //   direction: "alternate",
    // });

    // this.familyBlinkAnimation.add({
    //   targets: ["#erikaEyeLeftID", "#noahEyeLeftID", "#lalehEyeLeftID"],
    //   height: ["1.75rem", "0.5rem", "1.75rem"],
    //   duration: 500,
    //   delay: 750,
    // });

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
  }

  playOrStop(input) {
    console.log("!!!!!! QUICKABOUT IS TURNING ON!!!!");

    if (input === true && this.edipAndFamillyAnimation.paused) {
      console.log("NOW IT IS GOING TO PLAY!!!");
      this.edipAndFamillyAnimation.play();
      // this.familyBlinkAnimation.play();
      this.quickCoffeeSteam.play();
      this.bounceCityHall.play();
      this.bounceFlag.play();
      this.basketAnimation.play();
    }

    if (input === false) {
      console.log("!!!!!! QUICKABOUT IS TURNING OFF!!!!");

      this.edipAndFamillyAnimation.pause();
      // this.familyBlinkAnimation.pause();
      this.quickCoffeeSteam.pause();
      this.bounceCityHall.pause();
      this.bounceFlag.pause();
      this.basketAnimation.pause();
    }
  }
}
