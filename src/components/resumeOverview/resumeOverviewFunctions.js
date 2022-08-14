import anime from "animejs";

// const sections= document.querySelectorAll('.resumeSection');

export const animateResume = (inputID) => {
    const langSection = document.getElementById('resumeLangSectionID');
    const expSection = document.getElementById('resumeExpSectionID');
    const eduSection = document.getElementById('resumeEduSectionID');    
    const resumeNavs = document.querySelectorAll(".resumeNav");

    const resumeNavH2 = document.querySelectorAll(".resumeNavH2");
    // // console.log(inputID);
    resumeNavs.forEach((el) => {
          el.classList.remove("resumeNavFocus");
        });
      
        
    //     // document.getElementById('resumeLangID').classList.remove("resumeNavFocus");
    //     // document.getElementById('langH2').classList.remove("resumeNavFocus");

    // // document.getElementById(inputID).classList.add("resumeNavFocus");

    
    let section ='#'+inputID.slice(0,-2)+'SectionID';
    // console.log(section);
    // console.log(section.slice(1));

    let animate = anime.timeline({});
    
    switch (inputID) {
        case 'resumeLangID':
            document.getElementById(inputID).classList.add("resumeNavFocus");

            animate.add({
                begin(){
                    resetSections();
                },
                endDelay:100
            })

            //KOlla på NAV, göra likadant som du gjorde med Nav-sectior med animeringarna... 
            // Du måste ha en tredje färgsättning, kanske gradient...

            //  .navFocus !!!!!!!!!!!!!




            // animate.add({
            //     targets:'#'+inputID,
            //     background:'#fa4545',
            //     color:'#041122',
            //     borderColor: '#0a192f',
            //     borderStyle: 'double',
            //     borderWidth: '0.4rem',
            //     outline: '#fa4545 outset 0.25rem'
            // })

            // animate.add({
            //     targets:'#langH2',
            //     color:'#041122'
            // })

            animate.add({
                targets:section,
                opacity:[0,1],
                easing:'easeInOutQuad',
                begin(){
                    console.log('setting:'+section+'to block')
                    langSection.style.display='block';
                    
                }
            });
                
            break;

        case 'resumeExpID': 
            animate.add({
                begin(){
                    resetSections();
                },
                endDelay:100
            })


            // animate.add({
            //     targets:'#'+inputID,
            //     background:'#fa4545',
            //     color:'#041122',
            //     borderColor: '#0a192f',
            //     borderStyle: 'double',
            //     borderWidth: '0.4rem',
            //     outline: '#fa4545 outset 0.25rem'
            // })

            // animate.add({
            //     targets:'#expH2',
            //     color:'#041122'
            // })

            animate.add({
                targets:section,
                opacity:[0,1],
                easing:'easeInOutQuad',
                begin(){
                    console.log('setting:'+section+'to block')
                    expSection.style.display='block';
                }
            });
            
        break;

        case 'resumeEduID':
            animate.add({
                begin(){
                    resetSections();
                },
                endDelay:100
            })


            // animate.add({
            //     targets:'#'+inputID,
            //     background:'#fa4545',
            //     color:'#041122',
            //     borderColor: '#0a192f',
            //     borderStyle: 'double',
            //     borderWidth: '0.4rem',
            //     outline: '#fa4545 outset 0.25rem'
            // })

            // animate.add({
            //     targets:'#eduH2',
            //     color:'#041122'
            // })

            animate.add({
                targets:section,
                opacity:[0,1],
                easing:'easeInOutQuad',
                begin(){
                    console.log('setting:'+section+'to block')
                    eduSection.style.display='block';
                }
            });
            break;
    
        default:
            break;
    }


    function resetSections(){
        console.log('reseting...');
        anime({
            targets:['#resumeLangSectionID','#resumeExpSectionID','#resumeEduSectionID'],
            opacity:0,
            duration:10,
            complete:function(){        
                langSection.style.display='none';
                expSection.style.display='none';
                eduSection.style.display='none';
    
            }
        });
    
    }
}