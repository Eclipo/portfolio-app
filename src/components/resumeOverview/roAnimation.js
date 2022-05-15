import anime from "animejs";
import disableScroll from 'disable-scroll';

export class ResumeAnimation{

    constructor(){
        this.grid =[13,10];
        
        this.resumeAnimation = anime.timeline({
            loop:false,
            easing:"easeInOutSine",
            autoplay: false
    
          });

        this.resumeAnimation.add({
            targets:".emptyLightSaberSquare, .baseLeft, .baseCenter, .baseRight, .baseDarkLeft, .baseDarkCenter, .baseDarkRight",
            opacity:[0,1],
            easing:"linear",
            translateX:0,
            translateY: 0,
            duration:2000,

            delay: anime.stagger(100,{grid:this.grid,from: "last"}),
            //translateY:["0.25rem",0],
            duration:750
        })

        this.resumeAnimation.add({
            targets:".outerLightSaber, .coreLightSaber",
            opacity:[0,0.25,0,0.5,0,1],
            easing:"easeOutElastic(1, .9)",
            //translateY:["0.25rem",0],
            duration:750,
            endDelay:1250,
            complete:function(){
                anime({
                    targets:".resumeHeaderOne",
                    opacity:[0,1],
                    easing:"linear",
                    duration:950
                })
            }
        })

        this.resumeAnimation.add({
            targets:".outerLightSaber, .coreLightSaber",
            opacity:[1,0.25,1,0.5,1,0],
            easing:"easeOutElastic(1, .9)",
            //translateY:["0.25rem",0],
            duration:750
        })

        this.resumeAnimation.add({
            targets:".emptyLightSaberSquare, .baseLeft, .baseCenter, .baseRight, .baseDarkLeft, .baseDarkCenter, .baseDarkRight",
            opacity:[1,0],
            easing:"linear",
            translateX: ()=> anime.random(-250,250),
            translateY: ()=> anime.random(-150,150),
            duration:700,

            delay: anime.stagger(100,{grid:this.grid,from: "first"}),
            complete:function(){
               
                let elContainer = document.getElementById('resumeContainerID');
                elContainer.style.display='block'; 

                elContainer = document.getElementById('lightSaberTableID');
                elContainer.style.display='none'; 
       
                anime({
                    targets:".resumeTable",
                    opacity:[0,1],
                    easing:"linear",
                    duration:950
                })
                disableScroll.off();

                
            }
            //translateY:["0.25rem",0],
        });
    }

    playOrStop(input){

        if(input === true){
            let elContainer = document.getElementById('lightSaberTableID');
            elContainer.style.display='block'; 
            
            anime({
                targets:".resumeTable",
                opacity:0,
                easing:"linear",
                duration:10,
            });
            this.resumeAnimation.play();
        }

        if(input === false){
            anime({
                targets:".resumeTable",
                opacity:0,
                easing:"linear",
                duration:10,
            });
        }

    }
}





