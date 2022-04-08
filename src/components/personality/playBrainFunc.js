import anime from "animejs";
import { playPersonalityFunc } from "./playPersonalityFunc";

var showPersonality = 0

var playOnce = 0;
const ratio =  0.25*window.innerWidth;

const grid =[13,15];
const personalityGrid = [8,10];

export async function playBrainFunc(){
          
    const playBrain = anime.timeline({
        loop:1,
        autoplay:true
     })

     .add({
        targets:"#personalityTableID",
        opacity:0,
        easing:'linear',
        duration:50
     })

     .add({
        targets:".greenSquare",
  
        backgroundColor:"rgb(240, 122, 185)",
        translateX:0,
        translateY: 0,
        delay:anime.stagger(10, {grid:grid,from:"first"}),
        scale:1,
        borderRadius:["50%","0%"]
    })
    .add({
        targets:".darkGreen",
        backgroundColor:["rgb(240, 122, 185)","rgb(211, 223, 221)","rgb(240, 122, 185)","rgb(211, 223, 221)"],
        delay: anime.stagger(25),

    })
    .add({
        targets:".greenSquare",
        
        translateX: ()=> anime.random(-ratio,ratio),
        translateY: ()=> anime.random(-ratio,ratio),
        delay: anime.stagger(50,{grid:grid,from: "first"}),
        scale:0.5,
        borderRadius: "50%",
        backgroundColor:"rgb(72, 255, 112)"
    })
    .add({
        targets:".greenSquare",
        
        translateX:0,
        translateY:0,
        delay:anime.stagger(50, {grid:grid,from:"center"}),
        backgroundColor:"rgb(72, 255, 112)",
        scale:1,
        borderRadius:"0%"

    })
    
    .add({
        targets:".greenSquare",
        delay: anime.stagger(50,{grid:grid,from: "first"}),
        // scale:[1,0.5],
        translateY: ()=>  anime.random(-ratio,ratio),
        opacity:[1,0],

        complete:function(){
           anime({
               targets: '.personalityTraits',
               opacity:0,
               duration:10,
               complete:function(){
                   anime({
                       targets: '.personalityBaseTraits',
                       opacity:0,
                       duration:10,


                       complete:function(){
                           anime({
                               targets:"#personalityTableID",
                               opacity:[0,1],
                               duration:50,
                               easing:"linear",
                               complete:function(){
                                   anime({
                                       targets: '.personalityBaseTraits',
                                       opacity:[0,1],
                                       translateX:[0,"3rem",0],
                                       easing:"linear",
                                       delay: anime.stagger(25),
                                       complete:function(){
                                       anime({
                                           targets: '.personalityTraits',
                                           opacity:[0,1],
                                           translateY:[0,"3rem",0],
                                           easing:"linear",
                                           delay: anime.stagger(40),
                                           complete:function(){
                                            playPersonalityFunc();
                                           }                                                //    complete: function(){
                                        //        anime({
                                        //             targets:"#honestySevenID",
                                        //             backgroundColor:["#13680a","#1a850e","#28c017","#38ff22"],
                                        //             easing:"easeInOutSine",
                                        //             loop:true,
                                        //             duration:750,
                                        //             direction:"alternate"
                                        //        });

                                        //        anime({
                                        //             targets:"#honestyID",
                                        //             translateY:["-5px",0,"5px"],
                                        //             easing:"easeOutElastic(1, .1)",
                                        //             loop:true,
                                                    
                                        //             duration:50,
                                        //             direction:"alternate",
                                        //             delay:100
                                        //         });

                                                
                                        //    }
                                        })
                                        
                                    }
                                })
                            }
                        })
                    }
                })
            }
        })
           
    }
        
});

playBrain.play();
   
      
}

