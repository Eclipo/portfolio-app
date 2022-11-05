import {PlayAnimation} from "./PlayAnimation.js";
import { QuickAboutAnimation } from "./components/QuickFacts/QuickAboutAnimation.js";

  setTimeout(function () {

  //Sections
  const introSection = document.querySelector("#introSectionID");
  const quickFactsSection = document.querySelector("#quickFacts");
  const aboutMeSection = document.querySelector("#aboutMe");
  const skillsSection = document.querySelector("#skills");
  const personalitySection = document.querySelector("#personality");
  const resumeSection = document.querySelector("#resumeOverview");
  const experienceSection = document.querySelector("#experiencesID");
  const portfolioSection = document.querySelector("#portfolioID");
  const contactSection = document.querySelector("#contactID");


  const firstWrapper = [
    introSection,
    quickFactsSection,
    aboutMeSection
  ];

  const secondWrapper = [
    skillsSection,
    experienceSection,
    resumeSection,
    personalitySection,
    portfolioSection,
    contactSection
  ];
  
  //Nav-link
  const navLinkHomeID = document.getElementById("navLinkHomeID");
  const navLinkQuickID = document.getElementById("navLinkQuickFactsID");
  const navLinkAboutID = document.getElementById("navLinkAboutID");
  const navLinkSkillsID = document.getElementById("navLinkSkillsID");
  const navLinkExperienceID = document.getElementById("navLinkExperiencesID");
  const navLinkResumeID = document.getElementById("navLinkResumeOverviewID");
  const navLinkPersonalityID = document.getElementById("navLinkPersonalityID");
  const navLinkPortfolioID = document.getElementById("navLinkPortfolioID");
  const navLinkContactID = document.getElementById("navLinkContactID");

  const navLinksID = [
    navLinkHomeID,
    navLinkQuickID,
    navLinkAboutID,
    navLinkSkillsID,
    navLinkExperienceID,
    navLinkResumeID,
    navLinkPersonalityID,
    navLinkPortfolioID,
    navLinkContactID
  ];

  const navLinks = document.querySelectorAll(".nav-link");

  const animationQuickFactAbout = new QuickAboutAnimation();
  
  let oldIndex = -1;
  function currentNavLink(inputIndex){
    if(inputIndex !== oldIndex){
      if(oldIndex === -1){
      oldIndex=inputIndex;
      }

      else{
        navLinksID[oldIndex].blur();
        oldIndex=inputIndex;
      }
    }

    navLinks.forEach((el) => {
        el.classList.remove("navFocus");      
    });
  
    navLinks[inputIndex].classList.add("navFocus");
  };
    
  const firstHandleScrollPosY = (entries, observer) => {
    entries.forEach((entry) => {
    const currentIndex = Array.from(firstWrapper).indexOf(entry.target);
    
    if (entry.isIntersecting) {
    switch(currentIndex) {
      
      // Intro Section - Turn ON QuickAboutAnimation  ...
      case 0:
        currentNavLink(0);
      break;

      // Quick Facts Section - Turn off Skills
      case 1:
        currentNavLink(1);
        PlayAnimation('SkillAnimation',1);
        animationQuickFactAbout.playOrStop(true);
      break;

      //About me Section - Turn Off Personality
      case 2:
        currentNavLink(2);
        animationQuickFactAbout.playOrStop(true);
      break;

      default:
      // code block
        }
      }
    })
  }

  const secondHandleScrollPosY = (entries, observer) => {
    entries.forEach((entry) => {
      const currentIndex = Array.from(secondWrapper).indexOf(entry.target);
        if (entry.isIntersecting) {
          switch(currentIndex) {

          //Skills Section -  Turn OFF QuickAbout
            case 0:
              currentNavLink(3);
              animationQuickFactAbout.playOrStop(false);
              PlayAnimation('SkillAnimation',2);
            break;

            //Major experiences - Turn OFF Skills
            case 1:
              currentNavLink(4);
              PlayAnimation('PersonalityAnimation',1);
            break;

            //Resume Overview Section - Turn OFF Personality
            case 2:
              currentNavLink(5);
              PlayAnimation('SkillAnimation',1);
              PlayAnimation('PortfolioAnimation',1);                
            break;

            case 3:
              currentNavLink(6);
              PlayAnimation('PersonalityAnimation',2);
            break;

            //Portfolio - Turn Off Personality 
            case 4:
              currentNavLink(7);
              PlayAnimation('PortfolioAnimation',2);
            break;

            case 5:
              currentNavLink(8);
            break;

            default:
          }
        }
      })
    }

  const firstOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
  }

  const secondOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  }

  const firstObserver = new IntersectionObserver(firstHandleScrollPosY, firstOptions);
  firstObserver.observe(introSection);
  firstObserver.observe(quickFactsSection);
  firstObserver.observe(aboutMeSection);

  const myObserver = new IntersectionObserver(secondHandleScrollPosY, secondOptions);
  myObserver.observe(skillsSection);
  myObserver.observe(personalitySection);
  myObserver.observe(resumeSection);
  myObserver.observe(experienceSection);
  myObserver.observe(portfolioSection);
  myObserver.observe(contactSection);
},100);