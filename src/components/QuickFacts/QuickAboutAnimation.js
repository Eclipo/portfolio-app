import anime from "animejs";
import { stagger } from "animejs";

export class QuickAboutAnimation{


    constructor(){
       
        this.quickAboutAnimation = anime.timeline({
            loop:true, 
            autoplay:false,
            easing:'easeInOutQuad',

            direction:'alternate',
            // duration:950
            // delay:50,
            // endDelay:10
          });

          
                // translateX: [10,-10,10,-10,0],

        this.quickAboutAnimation.add({
            targets:'.head',
            // rotate:['-10deg',0,'5deg'],
            translateY:[5,-5,5],
            duration:650,
            easing:'easeInOutQuad'

        
            })

            this.quickAboutAnimation.add({
              
                targets:'.eyebrow',
                // rotate:['-5deg','5deg'],
                translateY:[0,'-0.5rem','0.5rem'],
                duration:500
              
            })

            
            this.quickCoffeeSteam = anime.timeline({
              loop:true, 
              autoplay:false,
              easing:'linear',
              duration:1750,
              direction:'alternate'
              // delay:50,
              // endDelay:10
            });

            this.quickCoffeeSteam.add({
              targets: ['#steamOneID','#steamTwoID','#steamThreeID'],
              opacity:[0,1],
              delay:anime.stagger(500),
              height:['0%','100%']
          });

      

            

    }


    playOrStop(input){
        console.log('!!!!!! FamillyAnimation IS TURNING ON!!!!');

        if(input === true){
        //   anime.remove(".head");
        console.log('NOW IT IS GOING TO PLAY!!!');
          this.quickAboutAnimation.play();
          this.quickCoffeeSteam.play();
        }

        if(input === false){
          console.log('!!!!!! FamillyAnimation IS TURNING OFF!!!!');
          
          this.famillyAnimation.pause();

        }
      }
}