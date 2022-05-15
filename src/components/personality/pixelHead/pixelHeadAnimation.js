import anime from "animejs";

export function pixelHeadAnimation () {
    let elContainer = document.getElementById('greenSquareTableID');
    elContainer.style.display='block';

    const playBrain = anime.timeline({
        loop:1,
        autoplay:false
     }).add({
    targets:"#personalityTableID",
    opacity:0,
    easing:'linear',
    duration:50
    }).
    add({
        targets:".greenSquare",
  
        backgroundColor:"rgb(240, 122, 185)",
        translateX:0,
        translateY: 0,
        delay:anime.stagger(10, {grid:this.grid,from:"first"}),
        scale:1,
        borderRadius:["50%","0%"]
    }).add({
        targets:".darkGreen",
        backgroundColor:["rgb(240, 122, 185)","rgb(211, 223, 221)","rgb(240, 122, 185)","rgb(211, 223, 221)"],
        delay: anime.stagger(25),

    }).add({
        targets:".greenSquare",
        
        translateX: ()=> anime.random(-ratio,ratio),
        translateY: ()=> anime.random(-ratio,ratio),
        delay: anime.stagger(50,{grid:this.grid,from: "first"}),
        scale:0.5,
        borderRadius: "50%",
        backgroundColor:"rgb(72, 255, 112)"
    }).add({
        targets:".greenSquare",
        
        translateX:0,
        translateY:0,
        delay:anime.stagger(50, {grid:this.grid,from:"center"}),
        backgroundColor:"rgb(72, 255, 112)",
        scale:1,
        borderRadius:"0%"

    }).add({
        targets:".greenSquare",
        delay: anime.stagger(50,{grid:this.grid,from: "first"}),
        // scale:[1,0.5],
        translateY: ()=>  anime.random(-ratio,ratio),
        opacity:[1,0],

        complete:function(){
            let elContainer = document.getElementById('greenSquareTableID');
            elContainer.style.display='none';
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
                                           delay: anime.stagger(40)                                                //    complete: function(){
                            
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