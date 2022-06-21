import anime from "animejs";
import { playPostFunc } from "./postPortfolioAnime";

export async function playMarioFunc() {
  const ratio = 0.25 * window.innerWidth;
  const marioContainer = document.getElementById('marioContainer');
  const portfolioContainer = document.getElementById('portfolioContainerID');
  portfolioContainer.style.display='none';
  marioContainer.style.display='';
  marioContainer.style.opacity=0;
  const marioAnimation = anime.timeline({
    loop: false,
    autoplay: false,
    duration: 350,

    easing:'linear',
    endDelay:250,
    direction:'alternate'
  });

    const marioArmHandRightAnimation = anime.timeline({
        loop: false,
        autoplay: false,
        duration: 350,

        easing:'linear',
        delay:1500,
        endDelay:250,
        direction:'alternate'
      });

      const marioLegRightAnimation = anime.timeline({
        loop: false,
        autoplay: false,
        duration: 350,

        easing:'linear',
        delay:1500,
        endDelay:250,
        direction:'alternate'
      });

      const marioLegLeftAnimation = anime.timeline({
        loop: false,
        autoplay: false,
        duration: 350,
    
        easing:'linear',
        delay:1500,
        endDelay:250,
        direction:'alternate'
        });
    
        
        const marioArmHandLeftAnimation = anime.timeline({
          loop: false,
          autoplay: false,
          duration: 350,
          delay:1500,
          easing:'linear',
          endDelay:250,
          direction:'alternate'
          });

      marioAnimation.add({
        targets:[".marioRed",".marioBlue",".marioYellow",".marioBrown",".marioSkin", ".marioEye",'.emptyMario',
        '.emptyMarioNoFloat','.marioRedNoFLoat', '.marioBlueNoFLoat','.marioBrownNoFLoat','.marioSkinNoFLoat'],
        translateY:0,
        delay: anime.stagger(24,{grid:[45,45],from: "first"})
      })


      marioAnimation.add({
        targets:'#marioContainer',
        translateY:[0,'-3rem']      })

        marioAnimation.add({
            targets:[".marioRed",".marioBlue",".marioYellow",".marioBrown",".marioSkin", ".marioEye",'.emptyMario',
            '.emptyMarioNoFloat','.marioRedNoFLoat', '.marioBlueNoFLoat','.marioBrownNoFLoat','.marioSkinNoFLoat'],
            delay: anime.stagger(24,{grid:[45,45],from: "last"}),
            // scale:[1,0.5],
            translateY: ()=>  anime.random(-ratio,ratio),
            opacity:[1,0],
            endDelay:150,
            loopComplete:function(){
              if(marioContainer.style.display===''){
              marioContainer.style.display="none";
              portfolioContainer.style.display='block';
              }
            }
        });

        marioAnimation.add({
          targets:'#portfolioContainerID',
          opacity:[0,1],
          loopComplete:function(){
            playPostFunc(true);
          }
        })



      

    marioLegRightAnimation.add({
      targets:'.marioLegShoeRight',
      translateY:[0,'6rem'],
      translateX:[0,'-8rem'],
    rotate:[0,'-45deg'],
    // scale:0.8

  });

    marioArmHandRightAnimation.add({
      targets:'.marioArmRight',
      translateY:[0,'-6rem'],
      translateX:[0,'0.25rem'],
    rotate:[0,'-180deg'],
    // scale:0.8

  });

  
 

    marioLegLeftAnimation.add({
      targets:'.marioLegShoeLeft',
      translateY:[0,'3rem'],
      translateX:[0,'4.5rem'],
    rotate:[0,'25deg'],
    // scale:0.8

  });


      marioArmHandLeftAnimation.add({
        targets:'.marioArmLeft',
        translateY:[0,'-2rem'],
        translateX:[0,'-1.25rem'],
      rotate:[0,'90deg'],
      // scale:0.8

    });


    anime({
      targets:'#marioContainer',
      opacity:[0,1],
      easing:'linear',
      duration:1000
    });

    marioArmHandRightAnimation.play();
    marioLegRightAnimation.play();
    marioArmHandLeftAnimation.play();
    marioLegLeftAnimation.play();
    marioAnimation.play();


    
}

