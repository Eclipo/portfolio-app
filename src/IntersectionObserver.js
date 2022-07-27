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

//   //Navbar
//   const navbar = document.querySelector(".containerNavbar");

//   // Navbar- handler
// const handleScroll = (entries) => {
//   const spotIsVisible = entries[0].isIntersecting;
//   if (!spotIsVisible){
//     setTimeout(function() {
   
//       // navbar.classList.add("fixed-top");
//       navbar.setAttribute("top",(window.screenY+12).toString());
//       // Run the callback
//       console.log( 'Scrolling has stopped.' );
  
//     }, 66);
//   } 
// };

// const optionsNav = {
//   root: null, 
//   rootMargin: "0px", 
//   threshhold: 0, 
// };
// // initialize and start the observer.
// const observer = new IntersectionObserver(handleScroll, optionsNav);
// observer.observe(navbar);

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
              PlayAnimation('PersonalityAnimation',2);              
            break;

              //Resume Overview Section - Turn OFF Skills & Portfolio
              case 5:
                PlayAnimation('SkillAnimation',1);
                PlayAnimation('PortfolioAnimation',1);
              break;

              //Major experiences - Turn OFF Personality
              case 6:
                console.log('MAJOR EXPERIENCES SECTION');
                PlayAnimation('PersonalityAnimation',1);

                
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
