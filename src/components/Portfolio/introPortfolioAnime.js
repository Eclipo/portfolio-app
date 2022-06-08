import anime from "animejs";

export async function playMarioFunc() {
  const ratio = 0.25 * window.innerWidth;
  const marioContainer = document.getElementById('marioContainer');
  const portfolioContainer = document.getElementById('portfolioContainerID');
  portfolioContainer.style.display='none';
  marioContainer.style.display='';
  const marioAnimation = anime.timeline({
    loop: false,
    autoplay: false,
    duration: 500,

    easing:'linear',
    endDelay:250,
    direction:'alternate'
  });

    const marioArmHandRightAnimation = anime.timeline({
        loop: false,
        autoplay: false,
        duration: 500,

        easing:'linear',
        delay:1500,
        endDelay:250,
        direction:'alternate'
      });

      const marioLegRightAnimation = anime.timeline({
        loop: false,
        autoplay: false,
        duration: 500,

        easing:'linear',
        delay:1500,
        endDelay:250,
        direction:'alternate'
      });

      const marioLegLeftAnimation = anime.timeline({
        loop: false,
        autoplay: false,
        duration: 500,
    
        easing:'linear',
        delay:1500,
        endDelay:250,
        direction:'alternate'
        });
    
        
        const marioArmHandLeftAnimation = anime.timeline({
          loop: false,
          autoplay: false,
          duration: 500,
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
          opacity:[0,1]      
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


    marioArmHandRightAnimation.play();
    marioLegRightAnimation.play();
    marioArmHandLeftAnimation.play();
    marioLegLeftAnimation.play();
    marioAnimation.play();
    // marioShoulderLeftAnimation.play();


    
}
// import { playPostFunc } from "./postPortfolioAnime";

// export async function playIntroFunc() {
//   console.log('playINtroFunc');
//   const mokaTopTableGrid = [3, 11];
//   const mokaCenterTableGrid = [7, 10];
//   const mokaBaseTableGrid = [5, 10];
//   const dividerTable = [1, 5];
//   const ratio = 0.25 * window.innerWidth;
//   const duckContainer = document.getElementById('duckContainerID');
//   duckContainer.style.opacity=0;
  

//     const introSkillAnimation = anime.timeline({
//         loop: false,
//         autoplay: false,
//         duration: 250,
//       });
  
//     introSkillAnimation.add({
//         targets: ".skillContainer, .skill",
//         opacity: [0,1],
//         duration: 10,
//         complete: function () {
//           let elContainer = document.getElementById("skillContainerID");
//           elContainer.style.display = "block";
  
//           elContainer = document.getElementById("duckContainerID");
//           elContainer.style.display = "block";
//         },
//       });
  
//       introSkillAnimation.add({
//         targets: ".mokaTableContainer",
//         opacity: 1,
//         duration: 10,
//       });
  
//       introSkillAnimation.add({
//         targets: "#mokaTopPixelID #mokaCenterPixelID #mokaBasePixelID",
//         backgroundColor: ["rgba(70, 39, 22,0)", "rgb(70, 39, 22)"],
//         easing: "easeInOutQuad",
  
//         delay: 500,
//         endDelay: 500,
//         duration: 1250,
//       });
  
//       introSkillAnimation.add({
//         targets: "#mokaBasePixelID",
//         translateX: () => 0,
//         translateY: () => 0,
//         delay: anime.stagger(20, { grid: mokaBaseTableGrid, from: "last" }),
//         scale: [0.5, 1],
//         borderRadius: ["50%", "0%"],
//       });
  
//       introSkillAnimation.add({
//         targets: "#mokaCenterPixelID",
//         translateX: () => 0,
//         translateY: () => 0,
//         delay: anime.stagger(20, {
//           grid: mokaCenterTableGrid,
//           from: "last",
//         }),
//         scale: [0.5, 1],
//         borderRadius: ["50%", "0%"],
//       });
  
//       introSkillAnimation.add({
//         targets: "#mokaTopPixelID",
//         translateX: () => 0,
//         translateY: () => 0,
//         delay: anime.stagger(20, { grid: mokaTopTableGrid, from: "last" }),
//         scale: [0.5, 1],
//         borderRadius: ["50%", "0%"],
//       });
  
//       introSkillAnimation.add({
//         targets: ".emptyMokaSquare",
//         backgroundColor: ["rgb(70, 39, 22)", "rgba(255, 255, 255, 0)"],
//         borderRadius: ["50%", "0%"],
//         easing: "linear",
//         duration: 500,

//       });
  
//       introSkillAnimation.add({
//         targets: ".mokaTop",
//         backgroundColor: ["rgb(70, 39, 22)", "rgb(53, 52, 52)"],
//         borderRadius: ["50%", "0%"],
//         easing: "linear",
//         duration: 500,

//       });
  
//       introSkillAnimation.add({
//         targets: ".mokaBaseLeft",
//         backgroundColor: ["rgb(70, 39, 22)", "rgb(226, 226, 226)"],
//         borderRadius: ["50%", "0%"],
//         easing: "linear",
//         duration: 150,
//       });
  
//       introSkillAnimation.add({
//         targets: ".mokaBaseCenter",
//         backgroundColor: ["rgb(70, 39, 22)", "rgb(170, 170, 170)"],
//         borderRadius: ["50%", "0%"],
//         easing: "linear",
//         duration: 150,
//       });
  
//       introSkillAnimation.add({
//         targets: ".mokaBaseRight",
//         backgroundColor: ["rgb(70, 39, 22)", "rgb(133, 133, 133)"],
//         borderRadius: ["50%", "0%"],
//         easing: "linear",
//         duration: 50,
//       });
  
//       introSkillAnimation.add({
//         targets: ".mokaMiddleWhite",
//         backgroundColor: ["rgb(70, 39, 22)", "rgb(117, 115, 115)"],
//         easing: "linear",
//         duration: 50,
//       });
  
//       introSkillAnimation.add({
//         targets: ".mokaMiddleLightBrown",
//         backgroundColor: ["rgb(70, 39, 22)", "rgb(80, 78, 78)"],
//         easing: "linear",
//         duration: 50,
//       });
  
//       introSkillAnimation.add({
//         targets: ".mokaMiddleDarkBrown",
//         backgroundColor: ["rgb(70, 39, 22)", "rgb(53, 52, 52)"],
//         easing: "linear",
//         duration: 50,
//       });
  
//       introSkillAnimation.add({
//         targets: ".mokaHandle",
//         backgroundColor: ["rgb(70, 39, 22)", "rgb(53, 52, 52)"],
//         easing: "linear",
//         duration: 50,
//       });
  
//       introSkillAnimation.add({
//         targets: ".espressoDrop",
//         backgroundColor: ["rgb(70, 39, 22)", "rgb(75, 50, 36)"],
  
//         translateY: [0, 50],
//         borderRadius: "50%",
//         easing: "linear",
//         duration: 500,

//       });
  
//       introSkillAnimation.add({
//         targets: ".espressoDrop",
//         translateY: [0, 50],
//         borderRadius: "50%",
//         easing: "linear",
//         duration: 450,
//       });
  
//       introSkillAnimation.add({
//         targets: ".espressoDrop",
//         translateY: [0, 50],
//         borderRadius: "50%",
//         easing: "linear",
//         duration: 400,
//       });
  
//       introSkillAnimation.add({
//         targets: ".espressoDrop",
//         translateY: [0, 50],
//         borderRadius: "50%",
//         easing: "linear",
//         duration: 350,
//       });
  
//       introSkillAnimation.add({
//         targets: ".espressoDrop",
//         translateY: [0, 50],
//         borderRadius: "50%",
//         easing: "linear",
//         duration: 500,

//       });
  
//       introSkillAnimation.add({
//         targets: ".espressoDrop",
//         translateY: [0, 50],
//         borderRadius: "50%",
//         easing: "linear",
//         duration: 250,
//       });
  
//       introSkillAnimation.add({
//         targets: ".espressoDrop",
//         translateY: [0, 50],
//         borderRadius: "50%",
//         easing: "linear",
//         duration: 150,
//       });
  
//       introSkillAnimation.add({
//         targets: ".espressoDrop",
//         translateY: [0, 50],
//         easing: "linear",
//         duration: 100,
//       });
  
//       introSkillAnimation.add({
//         targets: ".mokaTableContainer",
//         translateX: [10, -10, 10, -10, 0],
//         easing: "easeOutElastic(1, .1)",
//         duration: 150,
//         loop: 20,
//       });
  
//       introSkillAnimation.add({
//         targets: ["#mokaTopPixelID", "#mokaCenterPixelID", "#mokaBasePixelID"],
//         translateY: () => anime.random(-ratio, ratio),
//         translateX: () => anime.random(-ratio, ratio),
//         delay: anime.stagger(25, { grid: [15, 31], from: "center" }),
//         borderRadius: ["0%", "50%"],
//         opacity: [1, 0],
//         scale: [1, 0.5],
//         backgroundColor: ["rgb(70, 39, 22)", "rgb(128, 62, 26)"],
//         easing: "steps(100)",
//       });
  
//       introSkillAnimation.add({
//         targets: ".mokaTableContainer",
//         opacity: 0,
//         duration: 10});
  
  
//       introSkillAnimation.add({
//             targets: ".skillContainer",
//             opacity: [0, 1],
//             duration: 10
//       });
//       introSkillAnimation.add({
  
//                 targets:
//                   "#Beginner, #Elementary, #Intermediate, #Advanced, #Expert, .skillCategory",
//                 translateX: ["-3rem", 0],
//                 opacity: [0, 1],
//                 duration: 500,

//                 easing: "easeInCirc",
//                 delay: anime.stagger(125)
//       });
//       introSkillAnimation.add({
  
//                     targets: ".skill",
//                     translateX: ["-60rem", 0],
//                     opacity: [0, 1],
//                     duration: 1500,
//                     delay: anime.stagger(125),
//                     endDelay: 250,
//        });
//        introSkillAnimation.add({
//                         targets: "#skillDividerTd",
//                         translateX: ["-120vw", 0],
//                         opacity: [0, 1],
//                         duration: 1500,
//                         delay: anime.stagger(20, {
//                           grid: dividerTable,
//                           from: "first",
//                         }),
//                         complete:function(){
//                           anime({
//                             targets:'#duckContainerID',
//                             opacity:[0,1],
//                             duration:500,
//                             easing: "easeInOutQuad"
//                           });
//                           playPostFunc(true);
//                         }
//                       });
  

//  introSkillAnimation.play();
// }
