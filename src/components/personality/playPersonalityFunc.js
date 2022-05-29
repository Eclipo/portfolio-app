import anime from "animejs";

// changeBegin:function(){
//   randomPatienceEl = randomPatience[Math.floor(Math.random() * randomPatience.length)];
//   console.log('randomEl is...'+randomPatienceEl.toString());
//  randomPatienceEl="'"+randomPatienceEl+"'";

// },


// var randomPatience_target = null;
var randomPatience = ['#patienceOneID','#patienceTwoID','#patienceThreeID','#patienceFourID','#patienceFiveID'];
var random_target = null;

function getRandomTarget() {
  return randomPatience[Math.floor(Math.random() * randomPatience.length)];
}

 function animatePatience(inputTarget){
  anime({
    targets:inputTarget,
    opacity:[0,1,0],
    easing: "easeInOutSine",
    duration:750  
  })
}

var randomEmpathy =['#ff0000','#e71bf2','#ffc0cb','#90ee90','#add8e6','#eb9e34','#345ceb','#f2eb1b','#fffafa'];
var random_empathy = null;

function getRandomEmpathy() {
  return randomEmpathy[Math.floor(Math.random() * randomEmpathy.length)];
}

 function animateEmpathy(inputTarget){
  anime({
    targets:'#empathyID',
    backgroundColor:inputTarget,
    easing: "easeInOutSine",
    duration:250
  })
}




export async function playPersonalityFunc(inputBoolean) {

const playPatience = anime({
  loopBegin:function(){
    animatePatience(getRandomTarget());
  },
  loopComplete: function() {
    
    setTimeout(animatePatience(getRandomTarget()),1000);
  },
  loop:true,
  autoplay:false,
  duration:500,

});

const playEmpathy = anime({
  loopBegin:function(){
    animateEmpathy(getRandomEmpathy());
  },
  loopComplete: function() {
    
    setTimeout(animateEmpathy(getRandomEmpathy()),1000);
  },
  loop:true,
  autoplay:false,
  duration:500,

});

  const playHonesty = anime({
    targets: "#honestySevenID",
    loop: true,
    autoplay: false,
    backgroundColor: [
      "#13680a",
      "#1a850e",
      "#28c017",
      "rgba(107, 255, 139, 1.0)",
    ],
    easing: "easeInOutSine",
    duration: 750,
    direction: "alternate",
  });

  const playShakingHonesty = anime({
    targets: "#honestyID",
    loop: true,
    autoplay: false,
    translateY: ["-5px", 0, "5px"],
    easing: "easeOutElastic(1, .1)",
    duration: 50,
    direction: "alternate",
    delay: 100,
  });

  const playCreativity = anime.timeline({
    direction: "alternate",
    easing: "easeInOutSine",
    delay: anime.stagger(100),
  });

  playCreativity.add({
    targets: "#creativityFourID",
    backgroundColor: ["#69c85d", "#73de66"],
    easing: "linear",
    scale: [1, 1.1],
    opacity: [1, 0],
    duration: 750,
    endDelay: 500,
  });

  const playFocus = anime.timeline({
    loop: true,
    autoplay: false,
    direction: "alternate",
    easing: "easeInOutSine",
    delay: anime.stagger(100),
  });

  playFocus
    .add({
      targets: "#focusSevenID",
      backgroundColor: ["#cfedff", "#96d7ff", "#cfedff"],
      opacity: [1, 0, 1, 0, 1, 0],
      duration: 250,
      scale: [1, 1.1, 1],
    })

    .add({
      targets: "#focusSixID",
      opacity: [1, 0],
      duration: 150,
    })

    .add({
      targets: "#focusFiveID",
      opacity: [1, 0],
      duration: 150,
    })

    .add({
      targets: "#focusFourID",
      opacity: [1, 0],
      duration: 150,
    })
    .add({
      targets: "#focusThreeID",
      opacity: [1, 0],
      duration: 150,
    })
    .add({
      targets: "#focusTwoID",
      opacity: [1, 0],
      duration: 150,
    })
    .add({
      targets: "#focusOneID",
      duration: 450,
      endDelay: 750,
    });

  const playStructure = anime.timeline({
    loop: true,
    autoplay: false,
    direction: "alternate",
    easing: "linear",
    duration: 225,
  });

  playStructure
    .add({
      targets: "#structureThreeID",
      delay: 100,
      opacity: [1, 0],
      translateY: [0, "-0.25rem", "-0.15rem"],
    })

    .add({
      targets: "#structureTwoID",
      translateY: [0, "-0.25rem"],
    })

    .add({
      targets: "#structureID",
      translateY: [0, "-0.25rem"],
      endDelay: 150,
    });

  const playTemper = anime.timeline({
    loop: true,
    direction: "alternate",
    easing: "easeInOutSine",
    delay: anime.stagger(100),
    autoplay: false,
  });

  playTemper
    .add({
      targets: ".temper",
      backgroundColor: [0, "#ffcd03", "#ffa703", "#ff1803", 0],
      easing: "linear",
      scale: [1, 1.5, 2, 1],
      duration: 500,
    })

    .add({
      targets: "#temperSevenID",
      backgroundColor: ["#f50000", "#38ff22"],
      scale: [1, 1.5, 1],
      opacity: [1, 0],
      duration: 250,
    })

    .add({
      targets: "#temperSixID",
      opacity: [1, 0],
      duration: 150,
    })
    .add({
      targets: "#temperFiveID",
      opacity: [1, 0],
      duration: 150,
    })

    .add({
      targets: "#temperFourID",
      opacity: [1, 0],
      duration: 150,
    })
    .add({
      targets: "#temperThreeID",
      opacity: [1, 0],
      duration: 150,
    })
    .add({
      targets: "#temperTwoID",
      duration: 150,
    });

    if(inputBoolean === true){ 
      console.log('STARTA OM FÖR FAAAAN');
    playShakingHonesty.restart();
    playHonesty.restart();
    playTemper.restart();
    playFocus.restart();
    playPatience.restart();
    playCreativity.restart();
    playStructure.restart();
    playEmpathy.restart();
  }

  if(inputBoolean === false){
    // anime.remove("#personalityTable td");
    // anime.remove("#honestySevenID");
    // anime.remove('#honestyID');
    // anime.remove(".personalityBaseTraits");
    anime.remove(".personalityTraits");
    

  }
}
