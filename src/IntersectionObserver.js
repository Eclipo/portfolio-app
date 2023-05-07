import { PlayAnimation } from "./PlayAnimation";
import { QuickAboutAnimation } from "./components/QuickFacts/QuickAboutAnimation.js";

setTimeout(function () {
  //Sections
  const quickFactsSection = document.querySelector("#quickFacts");
  const aboutMeSection = document.querySelector("#about");
  const skillsSection = document.querySelector("#skills");
  const personalitySection = document.querySelector("#personality");
  const resumeSection = document.querySelector("#resumeOverview");
  const experienceSection = document.querySelector("#experiencesID");
  const contactSection = document.querySelector("#contactID");

  const observerWrapper = [
    quickFactsSection,
    skillsSection,
    experienceSection,
    resumeSection,
    aboutMeSection,
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
    navLinkSkillsID,
    navLinkExperienceID,
    navLinkResumeID,
    navLinkAboutID,
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

  const secondHandleScrollPosY = (entries, observer) => {
    entries.forEach((entry) => {
      const currentIndex = Array.from(observerWrapper).indexOf(entry.target);
      if (entry.isIntersecting) {
        console.log("currentIndex:" + currentIndex);

        switch (currentIndex) {
          //Skills Section

          case 0:
            currentNavLink(0);
            animationQuickFactAbout.playOrStop(0);
            PlayAnimation("SkillAnimation", 1);
            break;

          case 1:
            currentNavLink(1);
            PlayAnimation("SkillAnimation", 2);
            break;

          //Selected Work - Turn OFF QuickAbout and Personality
          case 2:
            currentNavLink(2);
            animationQuickFactAbout.playOrStop(false);
            PlayAnimation("PersonalityAnimation", 1);
            break;

          //Resume Overview Section - Turn OFF Skills
          case 3:
            PlayAnimation("SkillAnimation", 1);

            currentNavLink(3);
            // PlayAnimation("PortfolioAnimation", 1);

            break;
          case 4:
            currentNavLink(4);
            animationQuickFactAbout.playOrStop(1);
            break;
          //Personality
          case 5:
            currentNavLink(5);
            PlayAnimation("PersonalityAnimation", 2);
            break;

          case 6:
            currentNavLink(6);

            break;

          default:
        }
      }
    });
  };

  const secondOptions = {
    root: null,
    rootMargin: "10px",
    threshold: 0.2,
  };

  const myObserver = new IntersectionObserver(
    secondHandleScrollPosY,
    secondOptions
  );
  myObserver.observe(quickFactsSection);
  myObserver.observe(skillsSection);
  myObserver.observe(resumeSection);
  myObserver.observe(experienceSection);
  myObserver.observe(aboutMeSection);
  myObserver.observe(personalitySection);
  myObserver.observe(contactSection);
}, 100);
