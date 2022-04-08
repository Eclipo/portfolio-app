import anime from "animejs";

export function KnucklesSvgAnimation () {

  const expMenu = document.getElementById('expMenu');
  const knuckles = document.getElementById('KnucklesContainerID');
  expMenu.style.display='inline-flex';
  knuckles.style.opacity='0';

      anime({
        targets:['#expMenu','#_container'],
        opacity:0,
        duration:50,
        complete:function(){
         

          anime({
            targets:'#KnucklesContainerID',
            opacity:1,
            duration:2000,
            delay:250
          });

          anime({
            targets:['#darkRedHeadID','#darkRedSkinID','#redSkinID','#testLines path',
            '#faceID','#shoeOrangeID','#greenShoeID','#noseAndShoeGreyID','#eyesGlovesWhiteID',],
            fill:'#0a192f',
            duration:50,
            complete:function(){
              anime({
                targets:'#KnucklesSvgID',
                opacity:1,
                duration:50,      
                complete:function(){
                  anime({
                  targets: '#testLines path',
                  strokeDashoffset: [anime.setDashoffset, 0],
                  easing: 'easeInElastic(1, .1)',
                  duration: 1250,
                  delay: function(el, i) { return i * 150 },
                  complete:function(){
                    //Face
                    anime({
                      targets: '#darkRedHeadID',
                      fill:'#611211',
                      opacity:[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
                      easing: 'steps(20)',
                      duration:750
                    });

                    anime({
                      targets: '#darkRedSkinID',
                      fill:'#a51515',
                      opacity:[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
                      easing: 'steps(20)',
                      duration:750
                    });

                    anime({
                      targets: '#redSkinID',
                      fill:'#e21b19',
                      opacity:[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
                      easing: 'steps(20)',
                      duration:750
                    });

                    anime({  
                      targets: '#faceID',
                      fill:'#fbccad',
                      opacity:[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
                      easing: 'steps(20)',
                      duration:750
                    });

                    anime({
                      targets: '#shoeOrangeID',
                      fill:'#f0a51d',
                      
                      opacity:[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
                      easing: 'steps(20)',
                      duration:750
                    });
                                      
                    anime({
                      targets: '#greenShoeID',
                      fill:'#00a819',
                      opacity:[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
                      easing: 'steps(20)',
                      duration:750
                    });
                                    
                    anime({
                      targets: '#noseAndShoeGreyID',
                      fill:'#524f4f',
                      opacity:[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
                      easing: 'steps(20)',
                      duration:750
                    });

                    anime({
                      targets: '#eyesGlovesWhiteID',
                      fill:'#f5f5f5',
                      opacity:[0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1],
                      easing: 'steps(20)',
                      duration:750
                    });
              
                    anime({
                      targets:'#KnucklesSvgID',
                      opacity:[1,0],
                      easing: 'linear',
                      duration:750,
                      delay:2000,
                      complete:function(){

                          anime({
                            targets:['#expMenu', '#_container'],
                            opacity:[0,1],
                            easing:'linear',
                            duration:750 
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
      });
}
