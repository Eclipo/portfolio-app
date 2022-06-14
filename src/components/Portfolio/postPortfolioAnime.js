import anime from "animejs";



export async function playPostFunc(inputBoolean) {

  
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
        autoplay: false,
      });

      firstLightYearAnim.add({
        targets:'#firstLight',
        delay:anime.stagger(75, {from: 'center'}),
        translateX:['7rem','-10rem'],
        translateY:['-7rem','10rem'],

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
        autoplay: false,
        endDelay:350,
      });

      secondLightYearAnim.add({
        targets:'#secondLight',
        delay:anime.stagger(100, {from: 'center'}),
        translateX:['7rem','-10rem'],
        translateY:['-7rem','10rem'],

        opacity:[1,0],
        rotate:['45deg','45deg'],
        complete:function(){
          anime({
            targets:'.lightYear',
            opacity:0
          })
        }
      })




    
  if(inputBoolean === true){
    talkBubbleCovid.play();
    blinkEyeEdip.play();
    blinkEyeBawo.play();
    eyeBrowAnim.play();
    firstLightYearAnim.play();
    secondLightYearAnim.play();
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

