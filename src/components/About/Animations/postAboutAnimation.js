import anime from "animejs";

async function bounceFlagAnimation() {
  console.log("WE ONLY DECLARE ONCE FLAG!!!!");
  const windowHeight = window.outerHeight;
  const windowWidht = window.outerWidth;

  const windowArea = windowWidht / 100;
  let flagSize = windowArea * 0.3;
  let flagSizeIncrease = flagSize + 0.3;

  if (windowWidht > 1200) {
    flagSize = 1.9;
    flagSizeIncrease = 2;
  }

  const bounceFlag = anime.timeline({
    loop: true,
    autoplay: false,
    easing: "easeOutBounce",
    duration: 1250,
    direction: "alternate",
  });

  bounceFlag.add({
    targets: ".flag",
    scale: [flagSize, flagSizeIncrease],
  });

  bounceFlag.play();
}

async function bounceCityHallAnimation() {
  const bounceCityHall = anime.timeline({
    loop: true,
    autoplay: false,
    easing: "easeOutBounce",
    duration: 1250,
    direction: "alternate",
  });

  bounceCityHall.add({
    targets: ".cityHall",
    scale: [1.4, 1.5],
  });

  bounceCityHall.play();
}

async function basketAnimation() {
  console.log("WE ONLY DECLARE ONCE BAAASKET!!!!");
  const basketAnimation = anime.timeline({
    loop: true,
    autoplay: false,
    duration: 1500,
    easing: "linear",
  });

  basketAnimation.add({
    targets: [
      ".headBasket",
      ".bodyBasket",
      ".lowerBody",
      ".leftLegBasket",
      ".leftShoe",
      ".rightShoe",
      ".left-arm",
      ".right-arm",
    ],
    duration: 5,
    translateX: 0,
    translateY: 0,
    rotate: "0deg",
  });

  basketAnimation.add({
    targets: [".rightLegBasket", "rightShoe "],
    duration: 5,
    translateX: 0,
    rotate: "0deg",
  });

  basketAnimation.add({
    targets: [".basketBall", ".left-arm"],
    translateY: 80,
    translateX: 40,
    duration: 200,
    rotate: "-35deg",
  });

  basketAnimation.add({
    targets: [".basketBall"],
    translateY: [80, 125, 180, 100, -30],
    translateX: [40, 100, 200, 300, 400],
    duration: 150,
  });

  basketAnimation.add({
    targets: [".basketBall", ".right-arm"],
    translateY: 80,
    duration: 150,
    rotate: "35deg",
  });

  basketAnimation.add({
    targets: [".basketBall"],
    translateY: [80, 100, 180, 125, -30],
    translateX: [400, 300, 200, 100, 40],
    rotate: "-35deg",
    duration: 250,
    easing: "linear",
  });

  basketAnimation.add({
    targets: [".basketBall"],
    translateY: [80, 125, 180, 100, -30],
    translateX: [40, 100, 200, 300, 400],
    duration: 250,
  });

  basketAnimation.add({
    targets: [".leftLegBasket"],
    duration: 5,
    rotate: "-5deg",
  });

  basketAnimation.add({
    targets: [".rightLegBasket"],
    duration: 5,
    rotate: "5deg",
  });
  basketAnimation.add({
    targets: [".leftLegBasket"],
    duration: 5,
    rotate: "5deg",
  });
  basketAnimation.add({
    targets: [".leftShoe"],
    duration: 5,
    rotate: "-15deg",
  });
  basketAnimation.add({
    targets: [".rightLegBasket", ".rightShoe"],
    duration: 5,
    translateY: 40,
    marginTop: "6rem",
    rotate: "5deg",
  });

  basketAnimation.add({
    targets: [".right-arm"],
    translateY: -40,
    duration: 5,
    rotate: "-20deg",
  });
  basketAnimation.add({
    targets: [".headBasket", ".bodyBasket", ".lowerBody"],
    translateY: -450,
    translateX: 100,
    duration: 150,
  });

  basketAnimation.add({
    targets: [".right-arm", ".basketBall"],
    rotate: ["-15deg", "0deg", "30deg"],
    scale: [1, 1.1, 1],
    translateY: [-40, 0, 60],
    duration: 250,
  });

  basketAnimation.add({
    targets: [".basketBall"],
    translateY: [10, 400, 400],
    translateX: [400, 400, 200],
    duration: 100,
  });

  basketAnimation.add({
    targets: [".basketRim"],
    translateY: [0, 100, 0, 50, 0],
    duration: 50,
    scale: [3.2, 3.4],
    easing: "easeOutExpo",
  });

  basketAnimation.add({
    targets: [".basketBall"],
    translateY: [400, 200, 50],
    translateX: [200, 100, 40],
    duration: 150,
  });

  basketAnimation.add({
    targets: [".leftLegBasket"],
    duration: 5,
    rotate: "-5deg",
  });

  basketAnimation.add({
    targets: [".leftShoe"],
    duration: 5,
    rotate: "15deg",
  });

  basketAnimation.add({
    targets: [".rightLegBasket", ".rightShoe"],
    duration: 5,
    translateY: 40,
    marginTop: "6rem",
    rotate: "-15deg",
  });

  basketAnimation.add({
    targets: [".headBasket", ".bodyBasket", ".lowerBody"],
    translateY: 0,
    translateX: 0,
    duration: 250,
  });

  basketAnimation.play();
}

async function weightsAnimation() {
  const weights = anime.timeline({
    loop: true,
    autoplay: false,
    easing: "linear",
    duration: 1750,
    direction: "alternate",
  });

  weights.add({
    targets: ".faceWeights",
    backgroundColor: ["#ffe4be", "#fbbdbd"],
    duration: 750,
  });

  weights.add({
    targets: [".bodyWeights", "#upperBody_1"],
    translateY: [0, -10, 0, -10, 0, -15, -100],
    easing: "easeOutQuad",
  });

  weights.play();
}

async function lightSaberAnimation() {
  const roGrid = [13, 10];

  const lightSaber = anime.timeline({
    loop: true,
    easing: "easeInOutSine",
    autoplay: false,
  });

  lightSaber.add({
    targets: ".outerLightSaber, .coreLightSaber",
    opacity: 0,
    easing: "linear",
    duration: 10,
  });

  lightSaber.add({
    targets: ".stars",
    scale: [0.05, 0.65],
    easing: "easeOutQuad",
    duration: 1000,
    delay: 250,
  });

  lightSaber.add({
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

  lightSaber.add({
    targets: ".outerLightSaber, .coreLightSaber",
    opacity: [0, 0.25, 0, 0.5, 0, 1],
    easing: "easeOutElastic(1, .9)",
    duration: 500,
    endDelay: 1500,
  });

  lightSaber.add({
    targets: ".outerLightSaber, .coreLightSaber",
    opacity: [1, 0.25, 1, 0.5, 1, 0],
    easing: "easeOutElastic(1, .9)",
    duration: 500,
  });

  lightSaber.add({
    targets:
      ".emptyLightSaberSquare, .baseLeft, .baseCenter, .baseRight, .baseDarkLeft, .baseDarkCenter, .baseDarkRight",
    opacity: [1, 0],
    easing: "linear",
    translateX: () => anime.random(-250, 250),
    translateY: () => anime.random(-150, 150),
    delay: anime.stagger(40, { grid: roGrid, from: "first" }),
  });

  lightSaber.play();
}

async function marioAnimation() {
  const marioContainer = document.getElementById("marioContainer");

  const marioAnimation = anime.timeline({
    loop: true,
    autoplay: false,
    duration: 250,

    easing: "linear",
    endDelay: 100,
    direction: "alternate",
  });

  const marioArmHandRightAnimation = anime.timeline({
    loop: true,
    autoplay: false,
    duration: 350,

    easing: "linear",
    delay: 500,
    endDelay: 100,
    direction: "alternate",
  });

  const marioLegRightAnimation = anime.timeline({
    loop: true,
    autoplay: false,
    duration: 350,

    easing: "linear",
    delay: 500,
    endDelay: 100,
    direction: "alternate",
  });

  const marioLegLeftAnimation = anime.timeline({
    loop: true,
    autoplay: false,
    duration: 350,

    easing: "linear",
    delay: 500,
    endDelay: 100,
    direction: "alternate",
  });

  const marioArmHandLeftAnimation = anime.timeline({
    loop: true,
    autoplay: false,
    duration: 350,

    easing: "linear",
    delay: 500,
    endDelay: 100,
    direction: "alternate",
  });

  marioLegRightAnimation.add({
    targets: ".marioLegShoeRight",
    translateY: [0, "6rem"],
    translateX: [0, "-8rem"],
    rotate: [0, "-45deg"],
    // scale:0.8
  });

  marioArmHandRightAnimation.add({
    targets: ".marioArmRight",
    translateY: [0, "-6rem"],
    translateX: [0, "0.25rem"],
    rotate: [0, "-180deg"],
    // scale:0.8
  });

  marioLegLeftAnimation.add({
    targets: ".marioLegShoeLeft",
    translateY: [0, "3rem"],
    translateX: [0, "4.5rem"],
    rotate: [0, "25deg"],
  });

  marioArmHandLeftAnimation.add({
    targets: ".marioArmLeft",
    translateY: [0, "-2rem"],
    translateX: [0, "-1.25rem"],
    rotate: [0, "90deg"],
  });

  const marioCloud = anime.timeline({
    easing: "easeInOutQuad",
    duration: 5250,
    direction: "alternate",
    loop: true,
    autoplay: false,
  });

  marioCloud.add({
    targets: ".marioCloud",
    translateY: ["0", "-1rem"],
  });

  marioArmHandRightAnimation.play();
  marioLegRightAnimation.play();
  marioArmHandLeftAnimation.play();
  marioLegLeftAnimation.play();
  marioAnimation.play();
  marioCloud.play();
}

export async function playPostFunc(index) {
  console.log("we declare all this shit...again");
  removeAboutAnimations();

  if (index !== false)
    switch (index) {
      case 0:

      case 1:
        console.log("postAbout OMG !!!");
        // basketAnimation.pause();
        bounceFlagAnimation();
        break;
      case 2:
        bounceCityHallAnimation();
        break;
      case 3:
        console.log("postAbout OMG basket");
        // basketAnimation.restart();
        // basketAnimation.pause();
        // removeAboutAnimations();
        basketAnimation();
        break;

      case 4:
        console.log("Weights");
        // removeAboutAnimations();
        weightsAnimation();
        break;
      case 5:
        lightSaberAnimation();
        break;
      case 6:
        marioAnimation();
        break;
      default:
        break;
    }

  if (index === false) {
    console.log("TURN IT ALL OFF");
    removeAboutAnimations();
  }
}

async function removeAboutAnimations() {
  console.log("REEEEMOVING");
  //FLAG
  anime.remove(".flag");

  //CITYHALL
  anime.remove(".cityHall");
  //BASKET
  anime.remove("#tableStartBasketGuyID");
  anime.remove(".row");
  anime.remove(".col");
  anime.remove(".headBasket");
  anime.remove(".hairMainBasket");
  anime.remove(".faceBasket");

  anime.remove(".bodyBasket");

  anime.remove(".left-shoulder");
  anime.remove(".left-arm");
  anime.remove(".leftHandBasket");
  anime.remove(".basketBall");

  anime.remove(".right-shoulder");
  anime.remove(".right-arm");
  anime.remove(".rightHandBasket");

  anime.remove(".lowerBody");
  anime.remove("#lowerBodyLeft");

  anime.remove(".leftLegBasket");
  anime.remove(".leftShoe");

  anime.remove("#lowerBodyRight");
  anime.remove(".rightLegBasket");
  anime.remove(".rightShoe");
  anime.remove(".basketRim");

  //WEIGHTS
  anime.remove(".faceWeights");
  anime.remove(".bodyWeights");
  anime.remove("#upperBody_1");

  //LIGHTSABER
  anime.remove(".stars");
  anime.remove(".emptyLightSaberSquare");
  anime.remove(".baseLeft");
  anime.remove(".baseCenter");
  anime.remove(".baseRight");
  anime.remove(".baseDarkLeft");
  anime.remove(".baseDarkCenter");
  anime.remove(".baseDarkRight");
  anime.remove(".outerLightSaber");
  anime.remove(".coreLightSaber");
  anime.remove(".emptyLightSaberSquare");

  //Mario
  anime.remove(".marioCloud");
  anime.remove(".marioArmLeft");
  anime.remove(".marioLegShoeLeft");
  anime.remove(".marioArmRight");
  anime.remove(".marioLegShoeRight");
}
