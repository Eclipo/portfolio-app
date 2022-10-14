import anime from "animejs";

export function KnucklesSvgAnimation () {

  const expMenu = document.getElementById('expMenu');
  const displayKnuckles = document.getElementById('displayKnucklesID');

  const knuckles = document.getElementById('KnucklesContainerID');
  const knucklesSVG = document.getElementById('KnucklesSvgID');
  expMenu.style.display='inline-flex';
  knuckles.style.opacity='0';
  knucklesSVG.style.display='';

      anime({
        targets:['#expMenu','#_container'],
        opacity:0,
        duration:50,
        complete:function(){
          displayKnuckles.style.display='flex';


          anime({
            targets:'#KnucklesContainerID',
            opacity:1,
            duration:2000,
            delay:250
          });

          anime({
            targets:['#darkRedHeadID','#darkRedSkinID','#redSkinID','#testLines path',
            '#faceID','#shoeOrangeID','#greenShoeID','#noseAndShoeGreyID','#eyesGlovesWhiteID',],
            fill:'#031127',
            duration:50,
            complete:function(){
              anime({
                targets:'#KnucklesSvgID',
                opacity:1,
                duration:50,      
                complete:function(){
                  anime({
                  targets: '#testLines path',
                  strokeDashoffset: [anime.setDashoffset,0],
                  easing: 'easeInElastic(1, 0.2)',                  
                  duration: 750,
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
                      delay:2500,
                      complete:function(){
                        knucklesSVG.style.display='none';
                        displayKnuckles.style.display='none';

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
