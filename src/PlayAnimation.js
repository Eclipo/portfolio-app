import { IntroAnimation } from "./components/Intro/IntroAnimation.js";
import { PersonalityAnimation } from "../src/components/personality/personalityAnimation.js";

import anime from "animejs";


const IntroAnime = new IntroAnimation();
const PersonalityAnime = new PersonalityAnimation();


export function AnimationPlayRefreshBegin (inputPlayID, inputRefreshID,inputTextPlayID){
  const textPlay = document.getElementById(inputTextPlayID);
  const btnExpPlay = document.getElementById(inputPlayID);
  const btnRefreshExp = document.getElementById(inputRefreshID);

  textPlay.style.display='none';
  btnExpPlay.style.display='none';
  btnExpPlay.style.pointerEvents='none';
  
  if(btnRefreshExp.style.display === 'block'){
    anime({
        targets:'#'+inputRefreshID,
        rotate:'2turn',
        opacity:0,
        duration:500,
        complete:function(){
          btnRefreshExp.style.pointerEvents='none';
        }
    });
  }

  btnRefreshExp.style.display='block';

}

export function AnimationPlayRefreshEnd (inputPlayID, inputRefreshID){
  const btnRefreshExp = document.getElementById(inputRefreshID);
  btnRefreshExp.style.display='block';
  

  if(btnRefreshExp.style.display === 'block'){
    anime({
      targets:'#'+inputRefreshID,
      rotate:'360deg',
      opacity:[0,1],
      duration:500,
      easing:'easeInOutQuad',
      complete:function(){
        btnRefreshExp.style.pointerEvents='all';
      }
    });
  }

  else{
    btnRefreshExp.style.display='block';
    btnRefreshExp.style.opacity='1';

    anime({
      targets:'#'+inputRefreshID,
      rotate:'360deg',
      opacity:[0,1],
      duration:500,
      easing:'easeInOutQuad',
      complete:function(){
        btnRefreshExp.style.pointerEvents='all';
      }
    });
  }
}

export function PlayAnimation(inputID, inputPlayBoolean){

    const objArray  = new Array;
    objArray.push(IntroAnime);
    objArray.push(PersonalityAnime);



  var idEl='#'+inputID;
  var currentObject = inputID.substring(inputID.indexOf("_") + 1);
  var delayTime=0;

  if(currentObject === 'IntroAnimation'){
    delayTime = 4500;

  }

  if(currentObject === 'PersonalityAnimation'){
    //13000  
    delayTime = 13000;
  }
   

  objArray.forEach(element => {
    if(currentObject === element.constructor.prototype.constructor.name){
      element.playOrStop(inputPlayBoolean);
    }

  });

  return delayTime;

}