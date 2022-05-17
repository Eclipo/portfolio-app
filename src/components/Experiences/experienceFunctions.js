import anime from "animejs";

export const animate = (inputID) => {
  let jobTitle = "";
  let linkCustomerTitle = "";
  let linkToCustomer = "";
  let descpOne = "";
  let descpTwo = "";
  let descpThree = "";
  let descpFour = "";
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
        backgroundColor: "#0a192f",
        color: "#d080ff",
        borderColor: "#64ffda",
        easing: "linear",
        duration: 50,
        complete: function () {
          anime({
            targets: tab,
            color: "#64ffda",
            borderColor: "#d080ff",

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
                        jobTitle = "Developer Consultant";

                        linkCustomerTitle = "fintech industry";
                        linkToCustomer = "";
                        period.innerText = "2020-02 - Present";
                        system.innerText = "Full-stack application";

                        descOneEl.innerText =
                          "Currently active within the fintech industry as a full-stack developer with focus on the front-end. We are building an awesome application.";
                        descTwoEl.innerText =
                          "Major tech is Angular combined with Bootstrap.   I have implemented forms, guards and increased mobile responsiveness. I have also worked a little with C#.";
                        descThreeEl.innerText = "";
                        descFourEl.innerText = "";
                        liThree.style.display = "none";
                        liFour.style.display = "none";
                        chosenTechSkillContainer.style.display = "block";
                        chosenTechSkillContainer.style.opacity = "1";
                        jobTitleEl.innerText = jobTitle;
                        for (const el of linkEl) {
                          el.innerText = linkCustomerTitle;
                          el.href = linkToCustomer;
                        }
                      }

                      if (inputID === "stockholm") {
                        jobTitle = "Developer Consultant";

                        linkCustomerTitle = "City of Stockholm";
                        linkToCustomer = "https://international.stockholm.se/";
                        period.innerText = "2020-08 - 2022-02";
                        system.innerText = "Platina";
                        liTwo.style.display = "flex";
                        liThree.style.display = "flex";
                        liFour.style.display = "flex";
                        descOneEl.innerText =
                          "I wrote several semi-automatic tests consisted of SQL and Excel which confirmed the deployed configurations in the system were properly set.";
                        descTwoEl.innerText =
                          "In a critical project I developed comprehensive customization on several stored procedures and necessary work-arounds due to the existing architecture.";
                        descThreeEl.textContent =
                          "Corrected a large set of files and database entries. PowerShell and SQL were used.";
                        descFourEl.textContent =
                          "Developed a bookmarkscanner application in C# which scanned through several Microsoft Word templates and categorized the bookmarks to be standard or customized.";
                        chosenTechSkillContainer.style.display = "block";
                        chosenTechSkillContainer.style.opacity = "1";

                        jobTitleEl.innerText = jobTitle;

                        for (const el of linkEl) {
                          el.innerText = linkCustomerTitle;
                          el.href = linkToCustomer;
                        }
                      }

                      if (inputID === "falu") {
                        jobTitle = "Developer Consultant";

                        linkCustomerTitle = "Falu Municipality";
                        linkToCustomer = "https://www.falun.se/";
                        period.innerText = "2020-05 - 2020-10";
                        system.innerText = "Platina (.Net)";

                        descOneEl.innerText =
                          "Coupled together with a projectleader I acted as developer, deployer and solution architect.";
                        descTwoEl.innerText =
                          "Me and my colleague managed to upgrade Platina from its version of 7.2 to 11 and its module Webdiary from version 1.0 to 2.0.";
                        descThreeEl.innerText =
                          "During the project I worked throughout the whole stack consisting of MS SQL, Javascript, HTML/CSS and C#.";
                        descFourEl.innerText =
                          "Some of the major customizations were a simplified admin menu in Platina and for the Webdiary module I implemented Falu's design patterns.";
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

                      if (inputID === "motala") {
                        jobTitle = "Developer Consultant";

                        linkCustomerTitle = "Motala Municipality";
                        linkToCustomer = "https://www.motala.se/";
                        period.innerText = "2020-02 - 2020-06";
                        system.innerText = "Platina (.Net)";

                        descOneEl.innerText =
                          "In this project I acted as a full-stack developer and solution architect.";
                        descTwoEl.innerText =
                          "Together with a senior developer/deployer and a projectleader we upgraded Platina from version 7.2 to 10.3";
                        descThreeEl.innerText =
                          "Among many things we did in this project were improvements in Motala's customized approvement process and UI of the meeting-module.";
                        descFourEl.innerText = "";
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
