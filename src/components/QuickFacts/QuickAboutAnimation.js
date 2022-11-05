import anime from "animejs";
import { KnucklesSvgAnimation } from "../Experiences/KnucklesSvg/KnucklesSvgAnimation";
export class QuickAboutAnimation {
  constructor() {
    var windowHeight = window.outerHeight;
    var windowWidht = window.outerWidth;
    var windowArea = windowHeight * windowWidht;
    var flagSize = windowArea * 0.0000045;
    var flagSizeIncrease = flagSize + 0.3;

    const displayKnuckles = document.getElementById('displayKnucklesID');
    const knuckles = document.getElementById('KnucklesContainerID');
    const knucklesSVG = document.getElementById('KnucklesSvgID');

    var setDashoffset = function(el) {
      var l = el.getTotalLength();
      el.setAttribute('stroke-dasharray', l);
      return [l,0];
    }
  
    const roGrid = [13, 10];

    if (windowWidht > 1200) {
      flagSize = 1.9;
      flagSizeIncrease = 2;
    }
    
    this.rightHand = anime.timeline({
      loop: true,
      autoplay: false,
      easing: "easeInOutQuad",
      direction: "alternate"

    });

    this.rightHand.add({
      targets:['.right-hand','#steamContainerId','.coffee-cup-container',],
      translateY: [0, "-0.15rem", "0.15rem"],
      duration: 1750
    })

    this.leftHand = anime.timeline({
      loop: true,
      autoplay: false,
      easing: "easeInOutQuad",
      direction: "alternate"
    });

    this.leftHand.add({
      targets:'.left-hand',
      translateY: [0, "-0.15rem", "0.15rem"],
      duration: 1750

    })

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
      duration: 500      
    
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
      targets:'.faceWeights',
      backgroundColor:['#ffe4be','#fbbdbd'],
      duration:750
    })
    this.weights.add({
      targets: [".bodyWeights", "#upperBody_1"],
      translateY: [0, -10,0,-10,0,-15,-100],
      easing:'easeOutQuad',
    })
    


    this.lightSaberAnimation = anime.timeline({
      loop: true,
      easing: "easeInOutSine",
      autoplay: false,
    });
    
     this.lightSaberAnimation.add({
      targets: [".emptyLightSaberSquare", ".baseLeft", ".baseCenter", ".baseRight", ".baseDarkLeft", ".baseDarkCenter", ".baseDarkRight"],
      opacity: [0, 1],
      easing: "linear",
      translateX: 0,
      translateY: 0,
      delay: anime.stagger(50, { grid: roGrid, from: "last" })
    });
    
    this.lightSaberAnimation.add({
      targets: ".outerLightSaber, .coreLightSaber",
      opacity: [0, 0.25, 0, 0.5, 0, 1],
      easing: "easeOutElastic(1, .9)",
      duration: 750,
      endDelay: 1250
    });
    
    this.lightSaberAnimation.add({
      targets: ".outerLightSaber, .coreLightSaber",
      opacity: [1, 0.25, 1, 0.5, 1, 0],
      easing: "easeOutElastic(1, .9)",
      duration: 750,
    });
    
    this.lightSaberAnimation.add({
      targets:
        ".emptyLightSaberSquare, .baseLeft, .baseCenter, .baseRight, .baseDarkLeft, .baseDarkCenter, .baseDarkRight",
      opacity: [1, 0],
      easing: "linear",
      translateX: () => anime.random(-250, 250),
      translateY: () => anime.random(-150, 150),    
      delay: anime.stagger(50, { grid: roGrid, from: "first" })
    });
    
    
  this.knucklesAnime = anime.timeline({
    loop: true,
    autoplay: false
  });

  this.knucklesAnime.add({
            targets:'#KnucklesContainerID',
            opacity:1,
            duration:2000,
            delay:250});

          
            this.knucklesAnime.add({         
              targets:['#darkRedHeadID','#darkRedSkinID','#redSkinID','#testLines path',
              '#faceID','#shoeOrangeID','#greenShoeID','#noseAndShoeGreyID','#eyesGlovesWhiteID',],
              fill:'#000000',
              duration:50,
            });
  
          this.knucklesAnime.add({         
                targets:'#KnucklesSvgID',
                opacity:1,
                duration:50});

                this.knucklesAnime.add({         

                  targets: '#testLines path',
                  strokeDashoffset: [anime.setDashoffset,0],
                  easing: 'easeInElastic(1, 0.2)',                  
                  duration: 2500,
                  delay: function(el, i) { return i * 150 },
                  endDelay:2000,
                });

                  this.knucklesAnime.add({
                      targets: '#darkRedHeadID',
                      fill:'#611211',
                      opacity:1,
                      duration:150,
                      endDelay:100
                    });

                    this.knucklesAnime.add({
                      targets: '#darkRedSkinID',
                      fill:'#a51515',
                      opacity:1,
                      duration:150,
                      endDelay:100
                    });

                    this.knucklesAnime.add({
                      targets: '#redSkinID',
                      fill:'#e21b19',
                      opacity:1,
                      duration:150,
                      endDelay:100
                    });

                    this.knucklesAnime.add({
                      targets: '#faceID',
                      fill:'#fbccad',
                      opacity:1,
                      duration:150,
                      endDelay:100
                    });

                    this.knucklesAnime.add({
                      targets: '#shoeOrangeID',
                      fill:'#f0a51d',
                      
                      opacity:1,
                      duration:150,
                      endDelay:100
                    });
                                      
                    this.knucklesAnime.add({
                      targets: '#greenShoeID',
                      fill:'#00a819',
                      opacity:1,
                      duration:150,
                      endDelay:100
                    });
                                    
                    this.knucklesAnime.add({
                      targets: '#noseAndShoeGreyID',
                      fill:'#524f4f',
                      opacity:1,
                      duration:150,
                      endDelay:100

                    });

                    this.knucklesAnime.add({
                      targets: '#eyesGlovesWhiteID',
                      fill:'#f5f5f5',
                      opacity:1,
                      duration:150,
                      endDelay:1500
                    });

                    this.knucklesAnime.add({         
                      targets:'#KnucklesSvgID',
                      opacity:[1,0],
                      duration:1150,
                      endDelay:250,
                      easing:'linear'
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
      this.knucklesAnime.play();

      function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }
    
    const STAR_COUNT = 100
    let result = ""
    for(let i = 0; i < STAR_COUNT; i++){
        result += `${randomNumber(-30, 30)}rem ${randomNumber(-15, 15)}rem ${randomNumber(0, 3)}px ${randomNumber(0, 3)}px #fff,`
    }
    console.log(result.substring(0, result.length - 1))
    
    }

    if (input === false) {
      this.edipAndFamillyAnimation.pause();
      this.quickCoffeeSteam.pause();
      this.bounceCityHall.pause();
      this.bounceFlag.pause();
      this.basketAnimation.pause();
      this.weights.pause();
      this.lightSaberAnimation.pause();
      this.knucklesAnime.pause();    
    }
  }
}
