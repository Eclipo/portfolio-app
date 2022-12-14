import anime from "animejs";

export async function removePortfolioAnimations() {
  anime.remove(".avatarCircle");
  anime.remove("#avatarMom");
  anime.remove("#avatarDad");
  anime.remove("#avatarEdipID");
  anime.remove(".talkBubble");
  anime.remove(".eyesContainer");
  anime.remove(".eyeBrows");
  anime.remove(".eyeAvatar");
  anime.remove(".eyePupil");
  anime.remove(".avatarMouth");
  anime.remove(".talkBubble");
  anime.remove(".lightYear");
  anime.remove(".rainDropTable");
  anime.remove(".rainDropTable table tbody");
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
}

export async function covidAnimation() {
  const paragraphCovid = document.getElementById("talkCovidParagraphID");

  async function setText(input, inputMouth, inputBackGroundColor) {
    anime({
      targets: inputMouth,
      height: [".5rem", 0, ".5rem", 0, ".5rem"],
      duration: 750,
    });

    anime({
      targets: "#talkCovidID",
      backgroundColor: inputBackGroundColor,
      duration: 150,
      easing: "linear",
    });

    paragraphCovid.innerText = input;
  }

  const talkBubbleCovid = anime.timeline({
    loop: true,
    autoplay: false,
    duration: 750,
    endDelay: 500,
  });

  const blinkEyeBawo = anime.timeline({
    loop: true,
    autoplay: false,
    duration: 1000,
    delay: 750,
  });

  blinkEyeBawo.add({
    targets: "#bawoEyesID",
    opacity: [1, 0, 1],
  });

  blinkEyeBawo.add({
    targets: "#momEyesID",
    opacity: [1, 0, 1],
  });

  talkBubbleCovid.add({
    targets: "#talkCovidID",
    translateX: 0,
    change: function () {
      setText("I will help you!", "#avatarEdipMouthID", "#64ffda");
    },
  });

  talkBubbleCovid.add({
    targets: "#talkCovidID",
    translateX: "2.5rem",
    delay: 750,
    change: function () {
      setText("Thanks son", "#avatarDadMouthID", "#ffe864");
    },
  });

  talkBubbleCovid.add({
    targets: "#talkCovidID",
    translateX: 0,
    delay: 500,
    change: function () {
      setText("I meant mom...", "#avatarEdipMouthID", "#64ffda");
    },
  });

  talkBubbleCovid.add({
    targets: "#talkCovidID",
    translateX: "2.5rem",
    delay: 500,
    change: function () {
      setText("Im dying over here!!!", "#avatarDadMouthID", "#ffe864");
    },
  });

  talkBubbleCovid.add({
    targets: ["#bawoEyesID", "#bawoEyePupilID"],
    scale: [1, 0.75],
    easing: "easeInOutQuad",
    duration: 250,
  });

  talkBubbleCovid.add({
    targets: "#avatarDad",
    backgroundColor: "#7cacfd",
    easing: "linear",
    duration: 100,
  });

  talkBubbleCovid.add({
    targets: "#talkCovidID",
    translateX: "7.25rem",
    change: function () {
      setText("Love you honeybear!", "#avatarMomMouthID", "#fcbfdf");
    },
  });

  talkBubbleCovid.add({
    targets: "#talkCovidID",
    translateX: 0,
    change: function () {
      setText("...", "#avatarEdipMouthID", "#64ffda");
    },
  });

  talkBubbleCovid.add({
    targets: ["#edipEyesID", "#edipEyePupilID"],
    scale: [1, 1.25, 1, 1.25, 1],
    easing: "easeInOutQuad",
    duration: 1250,
  });

  talkBubbleCovid.add({
    targets: "#talkCovidID",
    translateX: 0,
    change: function () {
      setText("HEEELP!!!", "#avatarEdipMouthID", "#64ffda");
    },
    endDelay: 1250,
  });

  eyeBrowAnimation();
  talkBubbleCovid.play();
  edipEyeBlinkAnimation();
  blinkEyeBawo.play();
}

export async function edipEyeBlinkAnimation() {
  const blinkEyeEdip = anime.timeline({
    loop: true,
    autoplay: false,
    duration: 1500,
    delay: 500,
  });

  blinkEyeEdip.add({
    targets: "#edipEyesID",
    opacity: [1, 0, 1],
  });

  blinkEyeEdip.play();
}
export async function eyeBrowAnimation() {
  const eyeBrowAnim = anime.timeline({
    loop: true,
    autoplay: false,
    direction: "alternate",
    easing: "linear",
  });

  eyeBrowAnim.add({
    targets: ".eyeBrows",
    translateY: [0, "-0.25rem", "0.25rem"],
    delay: 750,
    duration: 500,
  });
  eyeBrowAnim.play();
}

export async function heroAnimation() {
  console.log("heroAnimation");
  const firstLightYearAnim = anime.timeline({
    loop: true,
    autoplay: false,
  });

  firstLightYearAnim.add({
    targets: "#firstLight",
    delay: anime.stagger(75, { from: "last" }),
    translateX: ["3rem", 0],
    translateY: ["-3rem", "1rem"],
    opacity: [1, 0],
    rotate: ["45deg", "45deg"],
    complete: function () {
      anime({
        targets: ".lightYear",
        opacity: 0,
      });
    },
  });

  const secondLightYearAnim = anime.timeline({
    loop: true,
    autoplay: false,
    // delay:500
  });

  secondLightYearAnim.add({
    targets: "#secondLight",
    delay: anime.stagger(75, { from: "first" }),
    translateX: ["3rem", 0],
    translateY: ["-3rem", "1rem"],

    opacity: [1, 0],
    rotate: ["45deg", "45deg"],
    complete: function () {
      anime({
        targets: ".lightYear",
        opacity: 0,
      });
    },
  });

  firstLightYearAnim.play();
  secondLightYearAnim.play();
  eyeBrowAnimation();
  edipEyeBlinkAnimation();
}

export async function rainAnimation() {
  const paragraphRegret = document.getElementById("talkRegretsID");

  const talkBubbleRegret = anime.timeline({
    loop: true,
    autoplay: false,
    easing: "easeInCubic",
    duration: 1750,
  });

  talkBubbleRegret.add({
    targets: "#avatarRegretID",
    translateY: [
      0,
      "-0.1rem",
      0,
      "-0.1rem",
      0,
      "-0.1rem",
      0,
      "-0.1rem",
      0,
      "-0.1rem",
      0,
    ],
    change: function () {
      paragraphRegret.innerText = "What have I done!?";
    },
  });

  talkBubbleRegret.add({
    targets: "#avatarRegretID",
    translateY: [
      0,
      "-0.1rem",
      0,
      "-0.1rem",
      0,
      "-0.1rem",
      0,
      "-0.1rem",
      0,
      "-0.1rem",
      0,
    ],
    change: function () {
      paragraphRegret.innerText = "What was I thinking!?";
    },
  });

  talkBubbleRegret.add({
    targets: "#avatarRegretID",
    translateY: [
      0,
      "-0.1rem",
      0,
      "-0.1rem",
      0,
      "-0.1rem",
      0,
      "-0.1rem",
      0,
      "-0.1rem",
      0,
    ],
    change: function () {
      paragraphRegret.innerText = "WHY!!??";
    },
  });

  const rainAnim = anime.timeline({
    loop: true,
    autoplay: false,
    easing: "linear",
    endDelay: 250,
  });

  rainAnim.add({
    targets: ".rainDrop",
    delay: anime.stagger(250),
    translateY: [0, "5rem"],

    opacity: [1, 0],
  });

  rainAnim.play();
  talkBubbleRegret.play();
  edipEyeBlinkAnimation();
}

export async function hitWallAnimation() {
  const forceWallAnim = anime.timeline({
    loop: false,
    autoplay: false,
    easing: "easeInCubic",
  });
  forceWallAnim.add({
    targets: ".forceWall",
    opacity: [1, 0],
    duration: 500,
  });
  const hitHeadWall = anime.timeline({
    loop: true,
    autoplay: false,
    direction: "alternate",
    easing: "easeInCubic",
  });

  hitHeadWall.add({
    loopBegin: function () {
      anime({
        targets: "#headHitWallLeft",
        rotate: 0,
      });
      anime({
        targets: "#headHitWallRight",
        rotate: 0,
      });
    },
    targets: "#headHitWall",
    scaleX: {
      value: 1.05,
      duration: 75,
      delay: 268,
    },
    translateX: [0, "8rem"],
    update: function (anim) {
      if (Math.round(anim.progress) > 95) {
        forceWallAnim.play();

        anime({
          targets: "#headHitWallLeft",
          rotate: [0, "30deg"],
        });
        anime({
          targets: "#headHitWallRight",
          rotate: [0, "-30deg"],
        });
      }
    },
  });
  edipEyeBlinkAnimation();
  hitHeadWall.play();
}

export async function sunRiseAnimation() {
  const sunRiseAnim = anime.timeline({
    loop: true,
    autoplay: false,
    easing: "linear",
  });

  const changeJourneyScene = anime.timeline({
    loop: true,
    autoplay: false,
    easing: "linear",
  });

  changeJourneyScene.add({
    targets: ".journeyScene",
    backgroundColor: ["#0a192f", "#3F7FBF"],
    duration: 5000,
    endDelay: 2500,
    delay: 2000,
  });

  const groundAnim = anime.timeline({
    loop: true,
    autoplay: false,
    easing: "linear",
  });

  groundAnim.add({
    targets: ".ground",
    backgroundColor: ["rgb(54, 46, 29)", "rgb(121, 100, 62)"],
    duration: 5000,
    endDelay: 2500,
    delay: 2000,
  });

  const mountainOne = anime.timeline({
    loop: true,
    autoplay: false,
    easing: "linear",
  });

  mountainOne.add({
    targets: "#mountainOneID",
    borderBottom: ["5rem solid rgb(63, 26, 15)", "5rem solid rgb(121, 51, 30)"],
    duration: 5000,
    endDelay: 2500,
    delay: 2000,
  });

  const mountainTwp = anime.timeline({
    loop: true,
    autoplay: false,
    easing: "linear",
  });

  mountainTwp.add({
    targets: "#mountainTwoID",
    borderBottom: ["5rem solid rgb(63, 26, 15)", "5rem solid rgb(143, 57, 31)"],
    duration: 5000,
    endDelay: 2500,
    delay: 2000,
  });

  const mountainThree = anime.timeline({
    loop: true,
    autoplay: false,
    easing: "linear",
  });

  mountainThree.add({
    targets: "#mountainThreeID",
    borderBottom: [
      "5rem solid rgb(63, 26, 15))",
      "5rem solid rgb(112, 50, 31)",
    ],
    duration: 5000,
    endDelay: 2500,
    delay: 2000,
  });

  const mountainFour = anime.timeline({
    loop: true,
    autoplay: false,
    easing: "linear",
  });

  mountainFour.add({
    targets: "#mountainFourID",
    borderBottom: ["5rem solid rgb(63, 26, 15)", "5rem solid rgb(132, 55, 31)"],
    duration: 5000,
    endDelay: 2500,
    delay: 2000,
  });

  sunRiseAnim.add({
    targets: ".sunRise",
    translateY: ["7rem", "5rem"],
    duration: 5000,
    endDelay: 2500,
    delay: 2000,
    opacity: [0, 1],
  });

  changeJourneyScene.play();
  groundAnim.play();
  sunRiseAnim.play();
  mountainOne.play();
  mountainTwp.play();
  mountainThree.play();
  mountainFour.play();
}

export async function zenAnimation() {
  const zenBigAnim = anime.timeline({
    loop: true,
    autoplay: false,
    direction: "alternate",
    easing: "easeInOutQuad",
  });

  zenBigAnim.add({
    targets: ".zenBigCircle",
    scale: [1, 0.9, 1.15],
    duration: 3000,
  });

  const zenSmallAnim = anime.timeline({
    loop: true,
    autoplay: false,
    direction: "alternate",
    easing: "easeInOutQuad",
  });

  zenSmallAnim.add({
    targets: ".zenBigCircle",
    scale: [1, 0.9, 1.1],
    duration: 3000,
  });

  zenBigAnim.play();
  zenSmallAnim.play();
}

export async function playPostFunc(inputBoolean) {
  if (inputBoolean === false) {
    anime.remove(".animContainer");
    anime.remove(".avatarCircle");
    anime.remove("#avatarMom");
    anime.remove("#avatarDad");
    anime.remove("#avatarEdipID");
    anime.remove(".talkBubble");
    anime.remove(".eyesContainer");
    anime.remove(".eyeBrows");
    anime.remove(".eyeAvatar");
    anime.remove(".eyePupil");
    anime.remove(".avatarMouth");
    anime.remove(".talkBubble");
    anime.remove(".lightYear");
    anime.remove(".rainDropTable");
    anime.remove(".rainDropTable table tbody");
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
  }
}
