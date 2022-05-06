import anime from "animejs";
import disableScroll from 'disable-scroll';
import { playBrainFunc } from "./playBrainFunc";
// import { playPersonalityFunc } from "./playPersonalityFunc";

const ratio =  0.25*window.innerWidth;
export class PersonalityAnimation{

    constructor(){
        this.grid =[13,15];
    }

    waitForPlayCharacteristics(){
   
            return new Promise((resolve) => {
                setTimeout(function(){
                    resolve();
                    console.log('NU ÄR JAG KLAR BRAINER!');
                }, 14000);
              });
    }

    playCharecteristics(){

        
        this.playShakingHonesty.restart();
        this.playHonesty.restart();
        this.playTemper.restart();
        this.playFocus.restart();
        this.playCreativity.restart();
        this.playStructure.restart()

    }

    
    async playAfterBrain(){
        
        await this.waitForPlayCharacteristics();
        playBrainFunc();
        console.log('NU ÄR JAG KLAR CHARACTERISTICS!')           
    }

    playPersonality(){
        //playBrainFunc();
        // this.playBrain.restart();
        playBrainFunc.play();
    }

        

    async playOrStop(input){
        if(input === true){
            anime.remove("#personalityTable");
            anime.remove("#personalityTable td");
            anime.remove(".personalityTraits");
            anime.remove(".personalityBaseTraits");

            playBrainFunc();
            // this.playPersonality();
        }

        if(input === false){
            // anime.remove("#personalityTableID");
            // anime.remove("#personalityTableID td");
            // anime.remove(".personalityTraits");
            // // anime.remove(".personalityBaseTraits");

            // anime({
            //     targets:'.personalityTraits',
            //     opacity:[1,0],
            //     easing:"easeOutElastic(1, .5)",
            //     duration:50,
            //     complete: function(){
            //         // var personalityTraits = document.querySelector(".personalityTraits");
            //         // personalityTraits.setAttribute("opacity",1);
    
            //         var personalityBaseTraits = document.querySelector(".personalityBaseTraits");
            //         personalityBaseTraits.setAttribute("opacity",0);
            //     }
            // })
            
            // anime({
            //     targets:"#personalityTableID",
            //     opacity:0,
            //     duration:50
            // })
    
            // anime({     
            //     targets:".greenSquareTable",
            //     opacity:[0,1],
            //     delay:500,            
            //     duration:550,
            //     easing:"linear"
            // })

            //playPersonalityFunc(false) => Gör så att personlighetsanimeringarna ev startas om... 
            //får se och testa mer sen.
            this.playHonesty.pause();
            this.playShakingHonesty.pause();
            this.playTemper.pause();
            this.playFocus.pause();
            this.playCreativity.pause();
            this.playStructure.pause()
           
        
        }
    }
}