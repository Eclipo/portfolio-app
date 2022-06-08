import { IntroAnimation } from "./components/Intro/IntroAnimation.js";
import { PersonalityAnimation } from "../src/components/personality/personalityAnimation.js";
import { SkillAnimation } from "../src/components/skills/SkillAnimation.js";
import {ResumeAnimation} from "../src/components/resumeOverview/roAnimation.js";
import {ExperienceAnimation} from "../src/components/Experiences/experienceAnimation.js";
import { PortfolioAnimation } from "./components/Portfolio/PortfolioAnimation.js";
import anime from "animejs";


const IntroAnime = new IntroAnimation();
const SkillAnime = new SkillAnimation();
const PersonalityAnime = new PersonalityAnimation();
const ExperienceAnime = new ExperienceAnimation();
const ResumeAnime = new ResumeAnimation();
const PortfolioAnime = new PortfolioAnimation();

export function AnimationPlayRefreshBegin (inputPlayID, inputRefreshID,inputTextPlayID){
  console.log('!!!!!!!!!!!!  '+inputTextPlayID);
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
  


  

}

export function AnimationPlayRefreshEnd (inputPlayID, inputRefreshID){
console.log('END IS PLAYING');
  const btnRefreshExp = document.getElementById(inputRefreshID);
  
  
// console.log('btnRef'+btnRefreshExp.style.display);

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
  console.log('MAIN IS PLAYING');

    
    const objArray  = new Array;
    objArray.push(IntroAnime);
    objArray.push(SkillAnime);
    objArray.push(PersonalityAnime);
    objArray.push(ExperienceAnime);
    objArray.push(ResumeAnime);
    objArray.push(PortfolioAnime);


  //refresh_PersonalityAnime
  //play_PersonalityAnime
  var idEl='#'+inputID;
  var currentObject = inputID.substring(inputID.indexOf("_") + 1);
  console.log('---- INPUTID:'+currentObject)
  var delayTime=0;

  if(currentObject === 'IntroAnimation'){
    delayTime = 4500;

  }

  if(currentObject === 'PersonalityAnimation'){
    //13000  
    delayTime = 13000;
  }
    
  if(currentObject === 'SkillAnimation'){
    delayTime = 13500;
  } 

  if(currentObject === 'ResumeAnimation'){
    delayTime = 7000;
  } 

  if(currentObject === 'ExperienceAnimation'){
    delayTime = 6000;
  } 
  
  if(currentObject === 'PortfolioAnimation'){
    delayTime = 4000;
  } 
  
 

  objArray.forEach(element => {
    console.log('its on');
    console.log('---- element from array:'+element.constructor.prototype.constructor.name)

    

    if(currentObject === element.constructor.prototype.constructor.name){
      console.log('---- ITS a match, INPUTID:'+currentObject+'---- element from array:'+element.constructor.prototype.constructor.name);
      element.playOrStop(inputPlayBoolean);
      // if(inputPlayBoolean === false){
      //   var refreshID = 'refresh_'+currentObject;
      //   var btnRefrExp = document.getElementById(refreshID);
      //   btnRefrExp.style.display='none';
      //   btnRefrExp.style.pointerEvents='none';
      //   var playID = 'play_'+currentObject;
      //   var btnPlayExp = document.getElementById(playID);
      //   btnPlayExp.style.pointerEvents='all';
      //   btnPlayExp.style.display='block';
      //   btnPlayExp.style.opacity=1;
      //   delayTime=0;
      // }
    }

  });

  //Behöver hantera när animeringen skall sluta animera och behöver återställa play-knappen... 

  return delayTime;

}