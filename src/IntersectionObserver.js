import {PlayAnimation} from "./PlayAnimation.js";
import { QuickAboutAnimation } from "./components/QuickFacts/QuickAboutAnimation.js";

  setTimeout(function () {


  const quickFactsSection = document.querySelector("#quickFacts");
  const aboutMeSection = document.querySelector("#aboutMe");
  const skillsSection = document.querySelector("#skills");
  const personalitySection = document.querySelector("#personality");
  const resumeSection = document.querySelector("#resumeOverview");
  const experienceSection = document.querySelector("#experiencesID");
  const portfolioSection = document.querySelector("#portfolioID");

  const wrappers = document.querySelectorAll(".sectionAnimation");
  const animationQuickFactAbout = new QuickAboutAnimation();

    
    const callback = (entries, observer) => {

        entries.forEach((entry) => {
        const currentIndex = Array.from(wrappers).indexOf(entry.target);
        console.log('!!!!!!!!!!!!!!!!! CURRENTINDEX !!!!!!! '+currentIndex);

        if (entry.isIntersecting) {
        switch(currentIndex) {
          
          // Intro Section - Turn ON QuickAboutAnimation  ...
          case 0:
            break;

          // Quick Facts Section - Turn off Skills
          case 1:
            PlayAnimation('SkillAnimation',1);
            animationQuickFactAbout.playOrStop(true);
            break;

          //About me Section - Turn Off Personality
            case 2:
                PlayAnimation('PersonalityAnimation',1);
                animationQuickFactAbout.playOrStop(true);
            break;

          //Skills Section -  Turn OFF QuickAbout
            case 3:
              console.log('SKILLS SECTION');
              animationQuickFactAbout.playOrStop(false);
              PlayAnimation('SkillAnimation',2);
            break;

          //Personality Section -  Turn OFF Skills
            case 4:
              console.log('PERSONALITY SECTION');
              PlayAnimation('SkillAnimation',1);
              PlayAnimation('PersonalityAnimation',2);              
            break;

              //Resume Overview Section - Turn OFF Personality
              case 5:
                PlayAnimation('PersonalityAnimation',1);
                PlayAnimation('PortfolioAnimation',1);

                
              break;

              //Major experiences - Turn OFF Portfolio
              case 6:
                console.log('MAJOR EXPERIENCES SECTION');

                
              break;

               //Portfolio - 
               case 7:
                console.log('PORTFOLIO SECTION');
                PlayAnimation('PortfolioAnimation',2);
              break;

            default:
            // code block
          }
    }
  })
}
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
  }

const myObserver = new IntersectionObserver(callback, options);
myObserver.observe(quickFactsSection);
myObserver.observe(aboutMeSection);
myObserver.observe(skillsSection);
myObserver.observe(personalitySection);
myObserver.observe(resumeSection);
myObserver.observe(experienceSection);
myObserver.observe(portfolioSection);

},100);

