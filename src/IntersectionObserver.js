import { PlayAnimation } from "./PlayAnimation";
import { QuickAboutAnimation } from "./components/QuickFacts/QuickAboutAnimation.js";

setTimeout(function () {
  //Sections
  const quickFactsSection = document.querySelector("#quickFacts");
  const aboutMeSection = document.querySelector("#aboutMe");
  const skillsSection = document.querySelector("#skills");
  const personalitySection = document.querySelector("#personality");
  const resumeSection = document.querySelector("#resumeOverview");
  const experienceSection = document.querySelector("#experiencesID");
  const contactSection = document.querySelector("#contactID");

  const firstWrapper = [quickFactsSection, aboutMeSection];

  const secondWrapper = [
    skillsSection,
    experienceSection,
    resumeSection,
    personalitySection,
    contactSection,
  ];

  //Nav-link
  const navLinkQuickID = document.getElementById("navLinkQuickFactsID");
  const navLinkAboutID = document.getElementById("navLinkAboutID");
  const navLinkSkillsID = document.getElementById("navLinkSkillsID");
  const navLinkExperienceID = document.getElementById("navLinkExperiencesID");
  const navLinkResumeID = document.getElementById("navLinkResumeOverviewID");
  const navLinkPersonalityID = document.getElementById("navLinkPersonalityID");
  const navLinkContactID = document.getElementById("navLinkContactID");

  const navLinksID = [
    navLinkQuickID,
    navLinkAboutID,
    navLinkSkillsID,
    navLinkExperienceID,
    navLinkResumeID,
    navLinkPersonalityID,
    navLinkContactID,
  ];

  const navLinks = document.querySelectorAll(".nav-link");

  const animationQuickFactAbout = new QuickAboutAnimation();

  let oldIndex = -1;
  function currentNavLink(inputIndex) {
    if (inputIndex !== oldIndex) {
      if (oldIndex === -1) {
        oldIndex = inputIndex;
      } else {
        navLinksID[oldIndex].blur();
        oldIndex = inputIndex;
      }
    }

    navLinks.forEach((el) => {
      el.classList.remove("navFocus");
    });

    navLinks[inputIndex].classList.add("navFocus");
  }

  const firstHandleScrollPosY = (entries, observer) => {
    entries.forEach((entry) => {
      const currentIndex = Array.from(firstWrapper).indexOf(entry.target);

      if (entry.isIntersecting) {
        switch (currentIndex) {
          // Quick Facts Section - TURN ON QuickFacts&About + Turn OFF Skills
          case 0:
            currentNavLink(0);
            animationQuickFactAbout.playOrStop(true);
            PlayAnimation("SkillAnimation", 1);
            break;

          //About me Section - Turn ON QuickFacts&About and Skills
          case 1:
            currentNavLink(1);
            animationQuickFactAbout.playOrStop(true);
            break;

          default:
          // code block
        }
      }
    });
  };

  const secondHandleScrollPosY = (entries, observer) => {
    entries.forEach((entry) => {
      const currentIndex = Array.from(secondWrapper).indexOf(entry.target);
      if (entry.isIntersecting) {
        switch (currentIndex) {
          //Skills Section
          case 0:
            currentNavLink(2);
            PlayAnimation("SkillAnimation", 2);

            break;

          //Major experiences - Turn OFF QuickAbout and Personality
          case 1:
            currentNavLink(3);
            animationQuickFactAbout.playOrStop(false);


            PlayAnimation("PersonalityAnimation", 1);
            break;

          //Resume Overview Section - Turn ON Personality + Turn OFF Skills and Portfolio
          case 2:
            PlayAnimation("SkillAnimation", 1);

            currentNavLink(4);
            // PlayAnimation("PortfolioAnimation", 1);

            break;

          //Personality
          case 3:
            currentNavLink(5);
            PlayAnimation("PersonalityAnimation", 2);

            break;

          case 4:
            currentNavLink(6);
            PlayAnimation("PersonalityAnimation", 1);

            break;

          default:
        }
      }
    });
  };

  const firstOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  };

  const secondOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.15,
  };

  const firstObserver = new IntersectionObserver(
    firstHandleScrollPosY,
    firstOptions
  );
  firstObserver.observe(quickFactsSection);
  firstObserver.observe(aboutMeSection);

  const myObserver = new IntersectionObserver(
    secondHandleScrollPosY,
    secondOptions
  );
  myObserver.observe(skillsSection);
  myObserver.observe(personalitySection);
  myObserver.observe(resumeSection);
  myObserver.observe(experienceSection);
  myObserver.observe(contactSection);
}, 100);
