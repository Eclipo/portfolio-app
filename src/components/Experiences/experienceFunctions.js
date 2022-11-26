import anime from "animejs";

export const animate = (inputID) => {
  let jobTitle = "";
  let linkCustomerTitle = "";
  let linkToCustomer = "";

  const allTechSkillContainer = document.querySelectorAll("div[id$=_tech]");
  const expCategoryMenu = document.getElementById("expCategoryMenu");

  var period = document.getElementById("period");
  var system = document.getElementById("system");
  var jobTitleEl = document.getElementById("jobTitleID");
  const linkEl = document.querySelectorAll("[id=linkID]");
  var liTwo = document.getElementById("_liTwo");
  var liThree = document.getElementById("_liThree");
  var liFour = document.getElementById("_liFour");

  var techSkills = inputID + "_tech";
  var chosenTechSkillContainer = document.getElementById(techSkills);
  var descOneEl = document.getElementById("_descOne");
  var descTwoEl = document.getElementById("_descTwo");
  var descThreeEl = document.getElementById("_descThree");
  var descFourEl = document.getElementById("_descFour");

  for (const el of allTechSkillContainer) {
    el.style.display = "none";
    el.style.opacity = 0;
  }

  var tab = "#" + inputID;

  var tabScrollLine = "#" + inputID + "_scrollLine";

  var tabScrollLineEl = document.getElementById(inputID + "_scrollLine");

  var rect = tabScrollLineEl.getBoundingClientRect();

  var tabContent = "#_container";

  var contentHeader = "#_header";

  var contentPeriod = "#_periodSystem";
  const objRef = document.body;

  anime({
    targets: [
      contentHeader,
      contentPeriod,
      ".techText ul li",
      ".techRow",
      ".li_icon",
    ],
    opacity: 0,
    duration: 50,
    complete: function () {
      expCategoryMenu.style.pointerEvents = "none";

      anime({
        targets: ".techCategory",
        //backgroundColor: "#0a192f",
        color: "#d080ff",
        // borderColor: "#64ffda",
        easing: "linear",
        duration: 50,
        complete: function () {
          anime({
            targets: tab,
            color: "#64ffda",
            //borderColor: "#d080ff",

            easing: "linear",
            duration: 50,
            complete: function () {
              anime({
                targets: ".scrollLine",
                opacity: 0,
                duration: 50,
                complete: function () {
                  anime({
                    targets: tabScrollLine,
                    opacity: [0, 1],
                    translateX: ["-50px", "50px", 0],
                    width: [0, 100],
                    duration: 350,
                    easing: "easeInOutQuad",
                    complete: function () {
                      if (inputID === "fintech") {
                        jobTitle = "Webdeveloper";
                        linkCustomerTitle = "Fintech company";
                        linkToCustomer = "";
                        period.innerText = "22-02 - Present";
                        system.innerText = "Custom SPA";
                        descOneEl.innerHTML =
                          'I am currently active within the fintech industry as a<span class="highLight"> front-end developer</span>. We are building an awesome application.';
                        descTwoEl.innerHTML =
                          'The major technologies are<span class="highLight"> Angular, Bootstrap and .Net</span>.';
                        descThreeEl.innerHTML =
                          'I have improved the<span class="highLight"> UX </span>and in<span class="highLight"> Angular </span>I have worked with forms, validators, services, and formguards. Occasionally I code in<span class="highLight"> C# </span>to ensure the front-/and the back-end work well with each other.';
                        descFourEl.innerText = "";
                        liThree.style.display = "";
                        liFour.style.display = "none";
                        chosenTechSkillContainer.style.display = "block";
                        chosenTechSkillContainer.style.opacity = "1";
                        jobTitleEl.innerText = jobTitle;
                        for (const el of linkEl) {
                          el.innerText = linkCustomerTitle;
                          el.href = linkToCustomer;
                        }
                      }

                      if (inputID === "municipality_3") {
                        jobTitle = "Handyman";
                        linkCustomerTitle = "#3 Municipality";
                        linkToCustomer = "";
                        period.innerText = "20-08 - 22-02";
                        system.innerText = "Platina (.Net)";
                        liTwo.style.display = "flex";
                        liThree.style.display = "flex";
                        liFour.style.display = "flex";
                        descOneEl.innerHTML =
                          'Due to my broad set of skills and experience regarding the ECM-system Platina and the Swedish public sector, I have had<span class="highLight"> many different roles</span>: solution architect, developer, deployer, business consultant, application specialist, and system tester. To put it simply, I was a<span class="highLight"> handyman</span>.';
                        descTwoEl.innerHTML =
                          'I have formulated solution documents and developed in<span class="highLight"> SQL and PowerShell </span>where I had to take into account of the existing architecture, integrations and legacy-code.';
                        descThreeEl.innerHTML =
                          'I deployed the configurations into production, where I later verified the deployment with my<span class="highLight"> custom SQL test scripts</span>.';
                        descFourEl.innerHTML =
                          'I developed a bookmarkscanner application in<span class="highLight"> C# </span>which scanned through several Microsoft Word templates and classified if the bookmarks were either standard or customized.';
                        chosenTechSkillContainer.style.display = "block";
                        chosenTechSkillContainer.style.opacity = "1";

                        jobTitleEl.innerText = jobTitle;

                        for (const el of linkEl) {
                          el.innerText = linkCustomerTitle;
                          el.href = linkToCustomer;
                        }
                      }

                      if (inputID === "municipality_2") {
                        jobTitle = "Handyman";

                        linkCustomerTitle = "#2 Municipality";
                        linkToCustomer = "";
                        period.innerText = "20-05 - 20-10";
                        system.innerText = "Platina (.Net)";
                        descOneEl.innerHTML =
                          'Together with a project leader, I acted as a<span class="highLight"> developer, deployer and solution architect</span>.';
                        descTwoEl.innerHTML =
                          "My colleague and I managed to upgrade Platina from version 7.2 to 11 and its module Webdiary from version 1.0 to 2.0.";
                        descThreeEl.innerHTML =
                          "During the project, I worked throughout the whole stack, consisting of MS SQL, JavaScript, HTML/CSS and C#.";
                        descFourEl.innerHTML =
                          "Some of the major customizations were a simplified admin menu in Platina and implementing the customized design patterns for the Webdiary module.";
                        liTwo.style.display = "flex";
                        liThree.style.display = "flex";
                        liFour.style.display = "flex";

                        chosenTechSkillContainer.style.display = "block";
                        chosenTechSkillContainer.style.opacity = "1";
                        jobTitleEl.innerText = jobTitle;

                        for (const el of linkEl) {
                          el.innerText = linkCustomerTitle;
                          el.href = linkToCustomer;
                        }
                      }

                      if (inputID === "municipality_1") {
                        jobTitle = "Handyman";

                        linkCustomerTitle = "#1 Municipality";
                        linkToCustomer = "";
                        period.innerText = "20-02 - 20-06";
                        system.innerText = "Platina (.Net)";

                        descOneEl.innerHTML =
                          'In this project, I acted as a<span class="highLight"> full-stack developer and solution architect</span>.';
                        descTwoEl.innerHTML =
                          "Together with a senior developer/deployer and a project leader, we upgraded Platina from version 7.2 to 10.3.";
                        descThreeEl.innerHTML =
                          "Among many things we did in this project were improvements to a customized approval process and the UI of the meeting-module.";
                        descFourEl.innerHTML = "";
                        liTwo.style.display = "flex";
                        liThree.style.display = "flex";
                        liFour.style.display = "none";
                        chosenTechSkillContainer.style.display = "block";
                        chosenTechSkillContainer.style.opacity = "1";

                        jobTitleEl.innerText = jobTitle;

                        for (const el of linkEl) {
                          el.innerText = linkCustomerTitle;
                          el.href = linkToCustomer;
                        }
                      }

                      anime({
                        targets: [
                          contentHeader,
                          contentPeriod,
                          ".techText ul li",
                          ".techRow",
                          ".li_icon",
                        ],
                        opacity: [0, 1],
                        translateX: ["-10px", 0],
                        display: "block",
                        delay: anime.stagger(75),
                        complete: function () {
                          expCategoryMenu.style.pointerEvents = "all";
                        },
                      });
                    },
                  });
                },
              });
            },
          });
        },
      });
    },
  });
};
