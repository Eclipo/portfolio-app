import anime from "animejs";

export const animateResume = (inputID) => {
    const langSection = document.getElementById('resumeLangSectionID');
    const expSection = document.getElementById('resumeExpSectionID');
    const eduSection = document.getElementById('resumeEduSectionID');    
    const resumeNavs = document.querySelectorAll(".resumeNav");

    const resumeNavH2 = document.querySelectorAll(".resumeNavH2");

    resumeNavs.forEach((el) => {
          el.classList.remove("resumeNavFocus");
        });
    
    let section ='#'+inputID.slice(0,-2)+'SectionID';

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

            animate.add({
                targets:section,
                opacity:[0,1],
                easing:'easeInOutQuad',
                begin(){
                    langSection.style.display='block';
                    
                }
            });
                
            break;

        case 'resumeExpID': 
            document.getElementById(inputID).classList.add("resumeNavFocus");
            animate.add({
                begin(){
                    resetSections();
                },
                endDelay:100
            })

            animate.add({
                targets:section,
                opacity:[0,1],
                easing:'easeInOutQuad',
                begin(){
                    expSection.style.display='block';
                }
            });
            
        break;

        case 'resumeEduID':
            document.getElementById(inputID).classList.add("resumeNavFocus");
            animate.add({
                begin(){
                    resetSections();
                },
                endDelay:100
            })

            animate.add({
                targets:section,
                opacity:[0,1],
                easing:'easeInOutQuad',
                begin(){
                    eduSection.style.display='block';
                }
            });
            break;
    
        default:
            break;
    }


    function resetSections(){
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