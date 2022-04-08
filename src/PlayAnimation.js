import { PersonalityAnimation } from "../src/components/personality/personalityAnimation.js";
import { SkillAnimation } from "../src/components/skills/SkillAnimation.js";
import {ResumeAnimation} from "../src/components/resumeOverview/roAnimation.js";
import {ExperienceAnimation} from "../src/components/Experiences/experienceAnimation.js";
import anime from "animejs";
export function AnimationPlayRefreshBegin (inputPlayID, inputRefreshID){

  const btnExpPlay = document.getElementById(inputPlayID);
  const btnRefreshExp = document.getElementById(inputRefreshID);
  btnExpPlay.style.display='none';
  btnExpPlay.style.pointerEvents='none';
  
  if(btnRefreshExp.style.display === 'block'){
    anime({
        targets:'#'+inputRefreshID,
        rotate:'2turn',
        duration:500,
        complete:function(){
          btnRefreshExp.style.pointerEvents='none';
        }
    });
  }
  


  

}

export function AnimationPlayRefreshEnd (inputPlayID, inputRefreshID){
console.log('END IS PLAYING');
  const btnRefreshExp = document.getElementById(inputRefreshID);
  
  
// console.log('btnRef'+btnRefreshExp.style.display);

  if(btnRefreshExp.style.display === 'block'){
    anime({
      targets:'#'+inputRefreshID,
      rotate:'360deg',
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

export function PlayAnimation(inputID, inputPlayBoolean): number{
  console.log('MAIN IS PLAYING');

    const SkillAnime = new SkillAnimation();
    const PersonalityAnime = new PersonalityAnimation();
    const ExperienceAnime = new ExperienceAnimation();
    const ResumeAnime = new ResumeAnimation();
    
    const objArray  = new Array;
    objArray.push(SkillAnime);
    objArray.push(PersonalityAnime);
    objArray.push(ExperienceAnime);
    objArray.push(ResumeAnime);


  //refresh_PersonalityAnime
  //play_PersonalityAnime
  var idEl='#'+inputID;
  var currentObject = inputID.substring(inputID.indexOf("_") + 1);
  console.log('---- INPUTID:'+currentObject)
  var delayTime=0;
  if(currentObject === 'PersonalityAnimation'){
    //13000  
    delayTime = 13000;
  }
    
  if(currentObject === 'ExperienceAnimation'){
    delayTime = 6000;
  } 
  
  if(currentObject === 'ResumeAnimation'){
    delayTime = 7000;
  } 
    
  if(currentObject === 'SkillAnimation'){
    delayTime = 14500;
  } 

  objArray.forEach(element => {
    console.log('its on');
    console.log('---- element from array:'+element.constructor.prototype.constructor.name)


    if(currentObject === element.constructor.prototype.constructor.name){
      console.log('---- ITS a match, INPUTID:'+currentObject+'---- element from array:'+element.constructor.prototype.constructor.name);
      element.playOrStop(inputPlayBoolean);
      if(inputPlayBoolean === false){
        var refreshID = 'refresh_'+currentObject;
        var btnRefrExp = document.getElementById(refreshID);
        btnRefrExp.style.display='none';
        btnRefrExp.style.pointerEvents='none';
        var playID = 'play_'+currentObject;
        var btnPlayExp = document.getElementById(playID);
        btnPlayExp.style.pointerEvents='all';
        btnPlayExp.style.display='block';
        btnPlayExp.style.opacity=1;
        delayTime=0;
      }
    }

  });

  //Behöver hantera när animeringen skall sluta animera och behöver återställa play-knappen... 

  return delayTime;

}