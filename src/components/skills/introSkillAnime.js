import { faBorderNone } from "@fortawesome/free-solid-svg-icons";
import anime from "animejs";
import { playPostFunc } from "./postSkillAnime";

export async function playIntroFunc() {

  const dividerTable = [1, 5];
  const sunRiseContainer = document.getElementById('sunRiseSkillID');
  const duckContainer = document.getElementById('duckContainerID');
  duckContainer.style.opacity=0;
  

    const introSkillAnimation = anime.timeline({
        loop: false,
        autoplay: false,
        duration: 250,
      });
  
    introSkillAnimation.add({
        targets: ".skillContainer, .skill",
        opacity: [0,1],
        duration: 10,
        complete: function () {
          let elContainer = document.getElementById("skillContainerID");
          elContainer.style.display = "block";
  
          elContainer = document.getElementById("duckContainerID");
          elContainer.style.display = "block";
          sunRiseContainer.style.display='flex';
        },
      });

      
  
      introSkillAnimation.add({
        targets: ".sunRiseContainer",
        opacity: [0,1],
        duration: 250,
        complete:function(){
          changeJourneyScene.play();
          groundAnim.play();
          sunRiseAnim.play();
          mountainOne.play();
          mountainTwp.play();
          mountainThree.play();
          mountainFour.play();
        }
      });
  
      const sunRiseAnim = anime.timeline({
        loop: 1,
        autoplay: false,
        easing:'linear'
      });

      
      const changeJourneyScene = anime.timeline({
        loop: false,
        autoplay: false,
        easing:'linear'
      });


      changeJourneyScene.add({
        targets:'.journeyScene',
        backgroundColor:['#031127','#3F7FBF'],
        duration:5500,
        endDelay:1500
      });

      const groundAnim = anime.timeline({
        loop:false,
        autoplay:false,
        easing:'linear'
      });

      groundAnim.add({
          targets:'.ground',
          backgroundColor:['rgb(54, 46, 29)','rgb(121, 100, 62)'],
          duration:2500,
          endDelay:1500
      });


      
      const mountainOne = anime.timeline({
        loop:false,
        autoplay:false,
        easing:'linear'
      });

      mountainOne.add({
          targets:'#mountainOneID',
          borderBottom:['5rem solid rgb(63, 26, 15)','5rem solid rgb(121, 51, 30)'],
          duration:2500,
          endDelay:1500
      });

      const mountainTwp = anime.timeline({
        loop:false,
        autoplay:false,
        easing:'linear'
      });

      mountainTwp.add({
          targets:'#mountainTwoID',
          borderBottom:['5rem solid rgb(63, 26, 15)','5rem solid rgb(143, 57, 31)'],
          duration:2500,
          endDelay:1500
      });

      const mountainThree = anime.timeline({
        loop:false,
        autoplay:false,
        easing:'linear'
      });

      mountainThree.add({
          targets:'#mountainThreeID',
          borderBottom:['5rem solid rgb(63, 26, 15))','5rem solid rgb(112, 50, 31)'],
          duration:2500,
          endDelay:1500
      });


      const mountainFour = anime.timeline({
        loop:false,
        autoplay:false,
        easing:'linear'
      });

      mountainFour.add({
          targets:'#mountainFourID',
          borderBottom:['5rem solid rgb(63, 26, 15)','5rem solid rgb(132, 55, 31)'],
          duration:2500,
          endDelay:1500
      });


      sunRiseAnim.add({
        targets:'.sunRise',
        translateY:['7rem','5rem'],
        duration:2500,
        endDelay:1500,
        opacity:[0,1],
        complete:function(){
          anime({
            targets:'.sunRiseContainer',
            opacity:[1,0],
            easing:'linear',
            duration:750,
            display:'none',
            complete:function(){
              sunRiseContainer.style.display='none';
              finishIntroSkillAnimation.play();
            }
          });
        }
       
      });
    
      const finishIntroSkillAnimation = anime.timeline({
        loop:false,
        autoplay:false,
        easing:'linear'
      });

      finishIntroSkillAnimation.add({
            targets: ".skillContainer",
            opacity: [0, 1],
            duration: 10
      });
      finishIntroSkillAnimation.add({
  
                targets:
                  "#Beginner, #Elementary, #Intermediate, #Advanced, #Expert, .skillCategory",
                translateX: ["-3rem", 0],
                opacity: [0, 1],
                duration: 500,
                easing: "easeInCirc",
                delay: anime.stagger(125)
      });
      finishIntroSkillAnimation.add({
  
                    targets: ".skill",
                    translateX: ["-120vw", 0],
                    opacity: [0, 1],
                    duration: 1500,
                    delay: anime.stagger(125),
                    endDelay: 250,
       });
       finishIntroSkillAnimation.add({
                        targets: "#skillDividerTd",
                        translateX: ["-120vw", 0],
                        opacity: [0, 1],
                        duration: 1500,
                        delay: anime.stagger(20, {
                          grid: dividerTable,
                          from: "first",
                        }),
                        complete:function(){
                          anime({
                            targets:'#duckContainerID',
                            opacity:1,
                            duration:750,
                            easing: "easeInOutQuad"
                          });
                          playPostFunc(true);
                        }
                      });
  
 introSkillAnimation.play();
}
