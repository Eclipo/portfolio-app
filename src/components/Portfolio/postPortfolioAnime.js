import anime from "animejs";



export async function playPostFunc(inputBoolean) {

  
  async function setText(input,inputMouth){
    anime({
      targets:inputMouth,
      height:['.5rem',0,'.5rem',0,'.5rem'],
      duration:750
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
      
      
      
      talkBubbleCovid.add({
        targets:'#talkCovidID',
        change:function(){
          setText('You hang in there! I will help you!','#avatarEdipMouthID');
        }
      });
      
 
      talkBubbleCovid.add({
        targets:'#talkCovidID',
        translateX:'2.65rem',
        delay:500,
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
        translateX:'2.65rem',
        delay:500,
        change:function(){
          setText('Im at the hospital!','#avatarDadMouthID');
        }
      });

      talkBubbleCovid.add({
        targets:'#talkCovidID',
        translateX:'9.25rem',
        delay:500,
        change:function(){
          setText('Love you honeybear!','#avatarMomMouthID');
        }
      });

      talkBubbleCovid.add({
        targets:'#talkCovidID',
        translateX:0,
        delay:500,
        change:function(){
          setText('You hang in there! I will help you!','#avatarEdipMouthID');
        }
      });





      // const postAnimationElemAndNoob = anime.timeline({
      //   loop: true,
      //   autoplay: false,
      //   direction:'alternate'
      // });
      
      // const postAnimationNoobElemAndInter = anime.timeline({
      //   loop: true,
      //   autoplay: false,
      //   direction:'alternate'
      // });
      
      // postAnimationElemAndInter.add({
      //   targets: "#skillElemAndInter",
      //   translateX: [0, moveRight],
      //   easing: "easeInOutQuad",
      //   direction: "alternate",
      //   delay: anime.stagger(250)
      // });
    
      // postAnimationElemAndNoob.add({
      //   targets: "#skillElemAndNoob",
      //   translateX: [0, moveLeft],
      //   easing: "easeInOutQuad",
      //   direction: "alternate",
      //   delay: anime.stagger(250)
      // });
    
      // postAnimationNoobElemAndInter.add({
      //   targets: "#skillNoobElemAndInter",
      //   translateX: [moveRightNoobinter, moveLeftNoobinter],
      //   easing: "easeInOutQuad",
      //   direction: "alternate",
      //   delay: anime.stagger(250)
      // });

      // const duckMouthUppderAnim = anime.timeline({
      //   loop: true,
      //   autoplay: false,
      //   direction: "alternate",
      //   easing: "easeInOutQuad",
      // });
  
      // const duckMouthUnderAnim = anime.timeline({
      //   loop: true,
      //   autoplay: false,
      //   direction: "alternate",
      //   easing: "easeInOutQuad",
      // });
  
      // const duckEyeBrowAnim = anime.timeline({
      //   loop: true,
      //   autoplay: false,
      //   direction: "alternate",
      //   easing: "easeInOutQuad",
      // });
  
      // duckMouthUppderAnim.add({
      //   targets: ".duckMouthUpper",
      //   translateY: ["-0.25rem", 0, "-0.25rem", 0],
      //   rotate: ["10deg", 0, "10deg", 0],
      //   endDelay: 500,
      //   duration: 500,
      // });
  
      // duckMouthUnderAnim.add({
      //   targets: ".duckMouthUnder",
      //   translateY: ["0.25rem", 0, "0.25rem", 0],
      //   rotate: ["-10deg", 0, "-10deg", 0],
      //   endDelay: 500,
      //   duration: 500,
      // });
  
      // duckEyeBrowAnim.add({
      //   targets: ".duckEyebrow",
      //   translateY: [0, "-0.5rem", "0.5rem"],
      //   delay: 500,
      //   duration: 500,
      // });
    
  if(inputBoolean === true){
    talkBubbleCovid.play();
    blinkEyeEdip.play();
    blinkEyeBawo.play();
    console.log('...play...already bubble');
      // postAnimationElemAndInter.play();
      // postAnimationElemAndNoob.play();
      // postAnimationNoobElemAndInter.play();

      // duckEyeBrowAnim.play();
      // duckMouthUnderAnim.play();
      // duckMouthUppderAnim.play();
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

