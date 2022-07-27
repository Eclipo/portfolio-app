import {PlayAnimation} from "./PlayAnimation.js";
import { QuickAboutAnimation } from "./components/QuickFacts/QuickAboutAnimation.js";

  setTimeout(function () {

  //Sections
  const quickFactsSection = document.querySelector("#quickFacts");
  const aboutMeSection = document.querySelector("#aboutMe");
  const skillsSection = document.querySelector("#skills");
  const personalitySection = document.querySelector("#personality");
  const resumeSection = document.querySelector("#resumeOverview");
  const experienceSection = document.querySelector("#experiencesID");
  const portfolioSection = document.querySelector("#portfolioID");

  const navLinkHome = document.getElementById("navLinkHomeID");
  const navLinkHomeH3 = document.getElementById("navLinkHomeH3ID");

  const navLinkPersonality = document.getElementById("navLinkPersonalityID");
  const navLinkPersonalityH3 = document.getElementById("navLinkPersonalityH3ID");


  const colorDarkestNavy = "var(--darkest-navy)"; 

  const wrappers = document.querySelectorAll(".sectionAnimation");

  const navLinks = document.querySelectorAll(".nav-link");

  const navLinksH3 = document.querySelectorAll(".navLinkH3");

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
            navLinks.forEach((el) => {
              el.style.background = "transparent";
            });

            navLinksH3.forEach((el) => {
              el.style.color = "var(--primary-white)";
            });

            navLinkHome.style.background = "linear-gradient(to right, var(--primary-white), var(--darkest-navy))";
            navLinkHomeH3.style.color =colorDarkestNavy;
            PlayAnimation('SkillAnimation',1);
            animationQuickFactAbout.playOrStop(true);
            break;

          //About me Section - Turn Off Personality
            case 2:
              navLinks.forEach((el) => {
                el.style.background = "transparent";
              });
  
              navLinksH3.forEach((el) => {
                el.style.color = "var(--primary-white)";
              });
                PlayAnimation('PersonalityAnimation',1);
                animationQuickFactAbout.playOrStop(true);
            break;

          //Skills Section -  Turn OFF QuickAbout
            case 3:
              navLinks.forEach((el) => {
                el.style.background = "transparent";
              });
  
              navLinksH3.forEach((el) => {
                el.style.color = "var(--primary-white)";
              });
              console.log('SKILLS SECTION');
              animationQuickFactAbout.playOrStop(false);
              PlayAnimation('SkillAnimation',2);
            break;

          //Personality Section -  Turn OFF Skills
            case 4:
              navLinks.forEach((el) => {
                el.style.background = "transparent";
              });
  
              navLinksH3.forEach((el) => {
                el.style.color = "var(--primary-white)";
              });
              
              navLinkPersonality.style.background = "linear-gradient(to right, var(--primary-green), var(--darkest-navy))";
              navLinkPersonalityH3.style.color =colorDarkestNavy;
              console.log('PERSONALITY SECTION');
              PlayAnimation('PersonalityAnimation',2);              
            break;

              //Resume Overview Section - Turn OFF Skills & Portfolio
              case 5:
                navLinks.forEach((el) => {
                  el.style.background = "transparent";
                });
    
                navLinksH3.forEach((el) => {
                  el.style.color = "var(--primary-white)";
                });
                PlayAnimation('SkillAnimation',1);
                PlayAnimation('PortfolioAnimation',1);
              break;

              //Major experiences - Turn OFF Personality
              case 6:
                navLinks.forEach((el) => {
                  el.style.background = "none";
                });
    
    
                navLinksH3.forEach((el) => {
                  el.style.color = "var(--primary-white)";
                });
                console.log('MAJOR EXPERIENCES SECTION');
                PlayAnimation('PersonalityAnimation',1);

                
              break;

               //Portfolio - 
               case 7:
                navLinks.forEach((el) => {
                  el.style.backgroundColor = "none";
                });
    
                navLinksH3.forEach((el) => {
                  el.style.color = "var(--primary-white)";
                });
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


// var navbar = document.querySelector(".containerNavbar");

// Setup isScrolling variable
// var isScrolling;

// // Listen for scroll events
// window.addEventListener('scroll', function ( event ) {
//   var navbar = document.querySelector(".containerNavbar");

// 	// Clear our timeout throughout the scroll
// 	window.clearTimeout( isScrolling );
//   // navbar.classList.remove("fixed-top");
// 	// Set a timeout to run after scrolling ends
// 	isScrolling = setTimeout(function() {
   
//     // navbar.classList.add("fixed-top");
//     navbar.setAttribute("top",(window.screenY+12).toString());
// 		// Run the callback
// 		console.log( 'Scrolling has stopped.' );

// 	}, 66);

// }, false);
