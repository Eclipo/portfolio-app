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
    objArray.push(SkillAnime);
    objArray.push(PersonalityAnime);
    objArray.push(ExperienceAnime);
    objArray.push(ResumeAnime);
    objArray.push(PortfolioAnime);


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
    if(currentObject === element.constructor.prototype.constructor.name){
      element.playOrStop(inputPlayBoolean);

    }

  });

  return delayTime;

}