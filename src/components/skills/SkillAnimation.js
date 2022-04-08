import anime from "animejs";
import disableScroll from 'disable-scroll';
const ratio =  0.25*window.innerWidth;

export class SkillAnimation{

    constructor(){
        this.mokaTopTableGrid =[3,11];
        this.mokaCenterTableGrid =[7,10];
        this.mokaBaseTableGrid = [5,10];
        this.dividerTable = [1,5];
        
       this.moveBetweenWidth=document.getElementById('skillBetweenJavascriptID');
       const moveLeft='-'+this.moveBetweenWidth.offsetWidth.toString()+'px';
       
       const moveRight=this.moveBetweenWidth.offsetWidth.toString()+'px';
        this.introSkillAnimation = anime.timeline({
            loop:false, 
            autoplay:false,
            duration:250
            // delay:50,
            // endDelay:10
    
            
          });
    
    
          this.introSkillAnimation.add({
            targets:".skillContainer, .skill",
            opacity:0,
            duration:10
          })
    
          this.introSkillAnimation.add({
            targets:".mokaTableContainer",
            opacity:1,
            duration:10
          })
          
          this.introSkillAnimation.add({
          targets:"#mokaTopPixelID #mokaCenterPixelID #mokaBasePixelID",
          backgroundColor:["rgba(70, 39, 22,0)","rgb(70, 39, 22)"],
          easing:"easeInOutQuad",
          
          delay:500,
          endDelay:500,
          duration:1250
          })
    
    
    
          this.introSkillAnimation.add({
            targets:"#mokaBasePixelID",
            translateX: ()=>0,
            translateY: ()=>  0,
            delay: anime.stagger(20,{grid:this.mokaBaseTableGrid,from: "last"}),
            scale:[0.5,1],
            borderRadius: ["50%","0%"]
          })
    
          this.introSkillAnimation.add({
            targets:"#mokaCenterPixelID",
            translateX: ()=> 0,
            translateY: ()=>  0,
            delay: anime.stagger(20,{grid:this.mokaCenterTableGrid,from: "last"}),
            scale:[0.5,1],
            borderRadius: ["50%","0%"]
          })
    
          this.introSkillAnimation.add({
            targets:"#mokaTopPixelID",
            translateX: ()=> 0,
            translateY: ()=> 0,
            delay: anime.stagger(20,{grid:this.mokaTopTableGrid,from: "last"}),
            scale:[0.5,1],
            borderRadius: ["50%","0%"]
          })
    
          this.introSkillAnimation.add({
            targets:".emptyMokaSquare",
            backgroundColor:["rgb(70, 39, 22)","rgba(255, 255, 255, 0)"],
            borderRadius: ["50%","0%"],
            easing:"linear",
            duration:500
             })
          
          
            this.introSkillAnimation.add({
            targets:".mokaTop",
            backgroundColor:["rgb(70, 39, 22)","rgb(53, 52, 52)"],
            borderRadius: ["50%","0%"],
            easing:"linear",
            duration:500
           })
            
          
            this.introSkillAnimation.add({
              targets:".mokaBaseLeft",
              backgroundColor:["rgb(70, 39, 22)","rgb(226, 226, 226)"],
              borderRadius: ["50%","0%"],
              easing:"linear",
              duration:150
               })
          
              this.introSkillAnimation.add({
              targets:".mokaBaseCenter",
              backgroundColor:["rgb(70, 39, 22)","rgb(170, 170, 170)"],
              borderRadius: ["50%","0%"],
              easing:"linear",
              duration:150
              })
              
              
              this.introSkillAnimation.add({
              targets:".mokaBaseRight",
              backgroundColor:["rgb(70, 39, 22)","rgb(133, 133, 133)"],
              borderRadius: ["50%","0%"],
              easing:"linear",
              duration:50          })
              
              
              this.introSkillAnimation.add({
                targets:".mokaMiddleWhite",
                backgroundColor:["rgb(70, 39, 22)","rgb(117, 115, 115)"],
                easing:"linear",
                duration:50
              })
    
                this.introSkillAnimation.add({
                targets:".mokaMiddleLightBrown",
                backgroundColor:["rgb(70, 39, 22)","rgb(80, 78, 78)"],
                easing:"linear",
                duration:50        })
                
                this.introSkillAnimation.add({
                targets:".mokaMiddleDarkBrown",
                backgroundColor:["rgb(70, 39, 22)","rgb(53, 52, 52)"],
                easing:"linear",
                duration:50        })
    
                this.introSkillAnimation.add({
                targets:".mokaHandle",
                backgroundColor:["rgb(70, 39, 22)","rgb(100, 100, 100)"],
                easing:"linear",
                duration:50        })
    
            this.introSkillAnimation.add({
                targets:".espressoDrop",
                backgroundColor:["rgb(70, 39, 22)","rgb(75, 50, 36)"],
    
                translateY:[0,50],
                borderRadius:"50%",
                easing:"linear",
                duration:500
            })
    
            this.introSkillAnimation.add({
              targets:".espressoDrop",
              translateY:[0,50],
              borderRadius:"50%",
              easing:"linear",
                duration:450
          })
    
          this.introSkillAnimation.add({
            targets:".espressoDrop",
            translateY:[0,50],
            borderRadius:"50%",
            easing:"linear",
                duration:400
        })
    
        this.introSkillAnimation.add({
          targets:".espressoDrop",
          translateY:[0,50],
          borderRadius:"50%",
          easing:"linear",
                duration:350
      })
    
      this.introSkillAnimation.add({
        targets:".espressoDrop",
        translateY:[0,50],
        borderRadius:"50%",
        easing:"linear",
        duration:300})
    
    this.introSkillAnimation.add({
      targets:".espressoDrop",
      translateY:[0,50],
      borderRadius:"50%",
      easing:"linear",
      duration:250})
    
    this.introSkillAnimation.add({
      targets:".espressoDrop",
      translateY:[0,50],
      borderRadius:"50%",
      easing:"linear",
      duration:150})
    
    
            this.introSkillAnimation.add({
                targets:".espressoDrop",
                translateY:[0,50],
                easing:"linear",
                duration:100
            })
            
    
             this.introSkillAnimation.add({
                targets:".mokaTableContainer",
                translateX: [10,-10,10,-10,0],
                easing:"easeOutElastic(1, .1)",
                duration:150,
                loop:20
            })
        
          
            this.introSkillAnimation.add({
              targets:["#mokaTopPixelID","#mokaCenterPixelID","#mokaBasePixelID"],
              translateY: ()=>  anime.random(-ratio,ratio),
              translateX: ()=> anime.random(-ratio,ratio),
              delay: anime.stagger(25,{grid:[15,31],from: "center"}),
              borderRadius: ["0%","50%"],
              opacity:[1,0],
              scale:[1,0.5],
              backgroundColor:["rgb(70, 39, 22)","rgb(128, 62, 26)"],
              easing:'steps(100)'
            })
    

      
            this.introSkillAnimation.add({
        
                            targets:".mokaTableContainer",
                            opacity:0,
                            duration:10,
                            complete:function(){
                              anime({
                                targets:".skillContainer",
                                opacity:[0,1],
                                duration:10,
                                complete:function(){
                                  anime({
                                    targets: '#Beginner, #Elementary, #Intermediate, #Advanced, #Expert, .skillCategory',
                                    translateX: ["-3rem",0],
                                    opacity:[0,1],
                                    duration:500,
                                    easing:"easeInCirc",
                                    delay: anime.stagger(125),
                                    complete:function(){
                                      anime({
                                        targets: '.skill',
                                        translateX:["-30rem",0],
                                        opacity:[0,1],
                                        duration:1500,
                                        delay: anime.stagger(125),
                                        endDelay:250,
                                        complete:function(){
                                          anime({
                                            targets:'#skillDividerTd',
                                            translateX:["-30rem",0],
                                            opacity:[0,1],
                                            duration:1500,
                                            delay: anime.stagger(20,{grid:this.dividerTable,from: "first"}),
                                            endDelay:250
                                          })
    
                                          anime({
                                            targets: '#htmlPoint',
                                            opacity:1,
                                            translateX:["-10rem",0],
                                            duration:1500,
                                            complete:function(){
                                            disableScroll.off(); // re-enable scroll
                                            // alert(moveRight);

                                            anime({
                                              targets:'#skillBetweenJavascriptID',
                                              translateX:[0,moveRight],
                                              easing:'easeInOutQuad',
                                              direction:'alternate',
                                              loop:true
                                            });
                                            }
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


    

    playOrStop(input){

        if(input === true){
          anime.remove(".skillContainer");
              anime.remove(".skillTable .table td");
              anime.remove(".skillCategory");
              anime.remove(".skillPointGround");
              anime.remove("#skillDividerTd");
              anime.remove("#skillBetweenJavascriptID");
              
            anime({
              targets:['.skillContainer','#skillDividerTd'],
              opacity:0
            })
            this.introSkillAnimation.play();
        }

        if(input === false){
          console.log('!!!!!! SKILS IS TURNING OFF!!!!');
            this.introSkillAnimation.restart();
            this.introSkillAnimation.pause();
              anime.remove(".skillContainer");
              anime.remove(".skillTable .table td");
              anime.remove(".skillCategory");
              anime.remove(".skillPointGround");
              anime.remove("#skillDividerTd");
              anime.remove("#skillBetweenJavascriptID");
              
            anime({
              targets:['.skillContainer','#skillDividerTd'],
              opacity:0
            })
        }
      }

    

    explodeCoffee(){
    //   const explodeTop=
    //   anime({
    //     targets:"#mokaTopPixelID",
    //     translateY: ()=>  anime.random(-ratio,ratio),
    //     translateX: ()=> anime.random(-ratio,ratio),
    //     delay: anime.stagger(25,{grid:this.mokaTopTableGrid,from: "first"}),
    //     borderRadius:'50%',
    //     opacity:[1,0],
    //     backgroundColor:["rgb(70, 39, 22)","rgb(128, 62, 26)"],
    //     easing:'steps(50)',
    //     autoplay:false
    //    });

    //    const explodeCenter=anime({
    //       targets:"#mokaCenterPixelID",
    //    translateY: ()=>  anime.random(-ratio,ratio),
    //    translateX: ()=> anime.random(-ratio,ratio),
    //    delay: anime.stagger(50,{grid:this.mokaCenterTableGrid,from: "first"}),
    //    borderRadius: ["0%","50%"],
    //    opacity:[1,0],
    //    backgroundColor:["rgb(70, 39, 22)","rgb(128, 62, 26)"],
    //    easing:'steps(50)',
    //    autoplay:false
    //      });

    //      const explodeLow=anime({
    //       targets:"#mokaBasePixelID",
    //       translateY: ()=>  anime.random(-ratio,ratio),
    //       translateX: ()=> anime.random(-ratio,ratio),
    //       delay: anime.stagger(50,{grid:this.mokaBaseTableGrid,from: "first"}),
    //       borderRadius: ["0%","50%"],
    //       opacity:[1,0],
    //       backgroundColor:["rgb(70, 39, 22)","rgb(128, 62, 26)"],
    //       easing:'steps(50)',
    //       autoplay:false
    //    });

      
    }
  }

  
  