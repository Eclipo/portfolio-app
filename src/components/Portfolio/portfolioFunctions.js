import anime from "animejs";
import disableScroll from 'disable-scroll'

var chapterIndex=0;
const targetStory='story_';



export const leftNavigate = (inputID) => {
    disableScroll.on();
    

    if(chapterIndex < 0 || chapterIndex === 0){
        document.getElementById('leftBtnID').disabled=true;
        anime({
            targets:'.leftBtn',
            opacity:0.5
        })
        chapterIndex=0;
    }

    
    

    if(chapterIndex > 0 && chapterIndex <=5){
        document.getElementById('leftBtnID').disabled=false;
        document.getElementById('rightBtnID').disabled=false;

        // leftBtn.style.opacity="1";
        anime({
            targets:['.leftBtn','.rightBtn'],
            opacity:1
        });

        let currentStory=targetStory+chapterIndex;
    chapterIndex = chapterIndex-1;
    let nextStory=targetStory+chapterIndex;
        
        
        // alert('LEFT current:'+currentStory);
        // alert('LEFT next:'+nextStory);
        anime({
            targets:'#'+currentStory,
            opacity:[1,0],
            duration:750,
            easing:'linear',
            complete:function(){
                document.getElementById(currentStory).style.display="none";
                document.getElementById(nextStory).style.display="block";
                anime({
                    targets:'#'+nextStory,
                    opacity:[0,1],
                    delay:850,
                    easing:'linear',
                    duration:750,
                    complete:function(){
                        disableScroll.off();
                    }
                });
            }
        });            
        
        if(chapterIndex < 0 || chapterIndex === 0){
            document.getElementById('leftBtnID').disabled=true;
            anime({
                targets:'.leftBtn',
                opacity:0.5
            })
            chapterIndex=0;

        }
    }

}

export const rightNavigate = (inputID) => {
    disableScroll.on();
    document.getElementById('leftBtnID').disabled=true;
    document.getElementById('rightBtnID').disabled=true;
    
    let currentStory=targetStory+chapterIndex;
    chapterIndex = chapterIndex+1;
    let nextStory=targetStory+chapterIndex;


    if(chapterIndex > 0 && chapterIndex <=5){
        document.getElementById('leftBtnID').disabled=false;
        document.getElementById('rightBtnID').disabled=false;

        // leftBtn.style.opacity="1";
        anime({
            targets:['.leftBtn','.rightBtn'],
            opacity:1
        });

           
    anime({
        targets:'#'+currentStory,
        opacity:[1,0],
        duration:1250,
        easing:'linear',
        complete:function(){
            document.getElementById(currentStory).style.display="none";
        }
    });

    anime({
        targets:'#'+nextStory,
        opacity:[0,1],
        delay:1350,
        easing:'linear',
        duration:1250,
        begin:function(){
            document.getElementById(nextStory).style.display="block";
        },
        complete:function(){
            disableScroll.off();
        }
    });

    if(chapterIndex === 5){
        document.getElementById('rightBtnID').disabled=true;
        anime({
            targets:'.rightBtn',
            opacity:0.5
        })
        chapterIndex=5;
        // disableScroll.off();
        return;
    }
    }

    if(chapterIndex>5){
        chapterIndex=5;
    }

       

}
