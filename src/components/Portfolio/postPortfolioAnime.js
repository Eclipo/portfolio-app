import anime from "animejs";



export async function playPostFunc(inputBoolean) {

  const wall = document.getElementById("avatarWall");
  const moveRight = (wall.offsetWidth+50).toString() + "px";

  async function setText(input,inputMouth){
    anime({
      targets:inputMouth,
      height:['.5rem',0,'.5rem',0,'.5rem'],
      duration:750,
      
    });

    
    paragraphCovid.innerText=input;

  }

  const paragraphCovid = document.getElementById('talkCovidParagraphID');

    
    const talkBubbleCovid = anime.timeline({
        loop: true,
        autoplay: false,
        duration:1250,
        endDelay:750
      });

      const blinkEyeEdip = anime.timeline({
        loop: true,
        autoplay: false,
        duration:750,
        delay:500      
      });

      blinkEyeEdip.add({
        targets:'#edipEyesID',
        opacity:[1,0,1]
      });

      const blinkEyeBawo = anime.timeline({
        loop: true,
        autoplay: false,
        duration:1000,
        delay:750      
      });

      blinkEyeBawo.add({
        targets:'#bawoEyesID',
        opacity:[1,0,1]
      });

      blinkEyeBawo.add({
        targets:'#momEyesID',
        opacity:[1,0,1]
      });
      
      const eyeBrowAnim = anime.timeline({
        loop: true,
        autoplay: false,
        direction: "alternate",
        easing: "easeInOutQuad",
      });

      eyeBrowAnim.add({
        targets: ".eyeBrows",
        translateY: [0, "-0.25rem", "0.25rem"],
        delay: 750,
        duration: 500,
      });
      
      
      talkBubbleCovid.add({
        targets:'#talkCovidID',
        change:function(){
          setText('I will help you!','#avatarEdipMouthID');
        }
      });
      
 
      talkBubbleCovid.add({
        targets:'#talkCovidID',
        translateX:'2.5rem',
        delay:750,
        change:function(){
          setText('Thanks son','#avatarDadMouthID');
        }
      });

      talkBubbleCovid.add({
        targets:'#talkCovidID',
        translateX:0,
        delay:500,
        change:function(){
          setText('I meant mom...','#avatarEdipMouthID');
        }
      });

      talkBubbleCovid.add({
        targets:'#talkCovidID',
        translateX:'2.5rem',
        delay:500,
        change:function(){
          setText('Im dying over here!!!','#avatarDadMouthID');
        }
      });

      talkBubbleCovid.add({
        targets:'#talkCovidID',
        translateX:'7.25rem',
        delay:500,
        change:function(){
          setText('Love you honeybear!','#avatarMomMouthID');
        }
      });

      talkBubbleCovid.add({
        targets:'#talkCovidID',
        translateX:0,
        change:function(){
          setText("HEEELP!!!",'#avatarEdipMouthID');
        }
      });


      
      const firstLightYearAnim = anime.timeline({
        loop: true,
        autoplay: false
      });

      firstLightYearAnim.add({
        targets:'#firstLight',
        delay:anime.stagger(125, {from: 'center'}),
        translateX:['3rem',0],
        translateY:['-3rem','1rem'],
        opacity:[1,0],
        rotate:['45deg','45deg'],
        complete:function(){
          anime({
            targets:'.lightYear',
            opacity:0
          })
        }
      })

      const secondLightYearAnim = anime.timeline({
        loop: true,
        autoplay: false      
      });

      secondLightYearAnim.add({
        targets:'#secondLight',
        delay:anime.stagger(75, {from: 'center'}),
        translateX:['3rem',0],
        translateY:['-3rem','1rem'],

        opacity:[1,0],
        rotate:['45deg','45deg'],
        complete:function(){
          anime({
            targets:'.lightYear',
            opacity:0
          })
        }
      })

      const hitHeadWall = anime.timeline({
        loop: true,
        autoplay: false,
        direction:'alternate',
        easing: 'easeInCubic'
      });

      hitHeadWall.add({
        loopBegin:function(){
          anime({
            targets:'#headHitWallLeft',
            rotate:0
          });
          anime({
            targets:'#headHitWallRight',
            rotate:0
          });
        },
        targets: '#headHitWall',
        scaleX: {
          value: 1.05,
          duration: 75,
          delay: 268
        },
        translateX: [0,moveRight],
        changeComplete:function(){
          anime({
            targets:'#headHitWallLeft',
            rotate:[0,'15deg']
          });
          anime({
            targets:'#headHitWallRight',
            rotate:[0,'-15deg']
          });
        }
      });

      const rainAnim = anime.timeline({
        loop: true,
        autoplay: false,
        easing:'linear'
      });

      rainAnim.add({
        targets:'.rainDrop',
        delay:anime.stagger(250),
        translateY:[0,'5rem','4.5rem'],

        opacity:[0,1,0],
        // update:function(){
        //   anime({
        //     targets:'.rainDrop',
        //     opacity:0
        //   });
        // }
        
      
      })

      const sunRiseAnim = anime.timeline({
        loop: true,
        autoplay: false,
        easing:'linear'
      });

      
      const changeJourneyScene = anime.timeline({
        loop: true,
        autoplay: false,
        easing:'linear'
      });


      changeJourneyScene.add({
        targets:'.journeyScene',
        backgroundColor:['#0a192f','#3F7FBF'],
        duration:5000,
        endDelay:3500
      });

      sunRiseAnim.add({
        targets:'.sunRise',
        
        translateY:['7rem','5rem'],
        duration:5000,
        endDelay:3500,
        opacity:[0,1],
        // update:function(){
        //   anime({
        //     targets:'.rainDrop',
        //     opacity:0
        //   });
        // }
      });

        
      const zenBigAnim = anime.timeline({
        loop: true,
        autoplay: false,
        direction:'alternate',
        easing: "easeInOutQuad"      
      });

      zenBigAnim.add({
        targets:'.zenBigCircle', 
        scale:[1,0.9,1.2],
        duration:2500
      })
  
      const zenSmallAnim = anime.timeline({
        loop: true,
        autoplay: false,
        direction:'alternate',
        easing: "easeInOutQuad"      
      });

      zenSmallAnim.add({
        targets:'.zenBigCircle', 
        scale:[1,0.9,1.25],
        duration:2500
      })

    
  if(inputBoolean === true){
    talkBubbleCovid.play();
    blinkEyeEdip.play();
    blinkEyeBawo.play();
    eyeBrowAnim.play();
    firstLightYearAnim.play();
    secondLightYearAnim.play();
    hitHeadWall.play();
    rainAnim.play();
    changeJourneyScene.play();
    sunRiseAnim.play();
    zenBigAnim.play();
    zenSmallAnim.play();    
    console.log('...play...already bubble');

  }

  if(inputBoolean === false){
    
    // anime.remove("#skillElemAndInter");
    // anime.remove("#skillElemAndNoob");
    // anime.remove("#skillNoobElemAndInter");

    // anime.remove(".duckMouthUpper");
    // anime.remove(".duckMouthUnder");
    // anime.remove(".duckEyebrow");
  }
  //   duckEyeBrowAnim.pause();
  //   duckMouthUnderAnim.pause();
  //   duckMouthUppderAnim.pause();
  // }

  
}

