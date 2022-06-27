import anime from "animejs";

var closeWindow = false;

export const startAttributeAnimation = (inputID) => {

    anime({
        targets:['.brokenLetterC','.brokenLetterK'],
        opacity:[0,1,0,0,1],
        direction:'alternate',
        delay:anime.stagger(500),
        duration:1050,
        endDelay:500,
        loop:true
    });

    if(closeWindow === false){        
        let card='#'+inputID;
        anime.remove(card);

        anime({
            targets:card,
            backgroundColor:'#112240',
            // easing:'linear',
            scale:[1,1.15],
            duration:750,
        });

        anime({
            targets:card+'_h3',
            color:'#33d684'
        });
        
        anime({
            targets:card+'_p',
            color:'#a8b2d1',
            begin:function(){
                document.getElementById(inputID+'_p').style.display='block';
                document.getElementById(inputID+'_closeBtn').style.display='block';

            }
        });
    }
}

export const closeDialogue = (inputID) => {
    let resetCard = inputID.replace('_closeBtn','');
    closeWindow=true;
    resetAttributeAnimation(resetCard);
}
export const resetAttributeAnimation = (inputID) => {
   console.log('reset:'+inputID)
    let card='#'+inputID;

    anime({
        targets:card,
        backgroundColor:'#33d684',
        scale:[1.15,1],
        duration:750,
        complete:function(){
            closeWindow = false;
            anime({
                targets:card,
                scale:[1,1.1],
                rotate:['2deg','-2deg'],
                direction:'alternate',
                duration:750,
                loop:true
            })
        }

    });

    anime({
        targets:card+'_h3',
        color:'#233554'    
    });

    anime({
        targets:card+'_p',
        color:'#233554',
        begin:function(){
            document.getElementById(inputID+'_p').style.display='none';
            document.getElementById(inputID+'_closeBtn').style.display='none';

        }
    });
}