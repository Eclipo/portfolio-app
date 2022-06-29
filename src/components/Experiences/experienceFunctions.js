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
                          "Major tech is Angular with Bootstrap coupled with .Net. I have implemented forms, guards, increased mobile responsiveness and occassionaly I code in C#.";
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

                      if (inputID === "municipality_3") {
                        jobTitle = "Developer Consultant";

                        linkCustomerTitle = "#3 MUNICIPALITY";
                        linkToCustomer = "";
                        period.innerText = "2020-08 - 2022-02";
                        system.innerText = "Platina";
                        liTwo.style.display = "flex";
                        liThree.style.display = "flex";
                        liFour.style.display = "flex";
                        descOneEl.innerText =
                          "Deployed configurations into production.";
                        descTwoEl.innerText =
                          "Wrote semi-automatic tests in SQL ensuring the configurations were properly set.";
                        descThreeEl.textContent =
                          "Updated a large set of files and database entries with PowerShell and SQL.";
                        descFourEl.textContent =
                          "Developed a bookmarkscanner application in C# which scanned through several Microsoft Word templates and categorized if the bookmarks either are standard or customized.";
                        chosenTechSkillContainer.style.display = "block";
                        chosenTechSkillContainer.style.opacity = "1";

                        jobTitleEl.innerText = jobTitle;

                        for (const el of linkEl) {
                          el.innerText = linkCustomerTitle;
                          el.href = linkToCustomer;
                        }
                      }

                      if (inputID === "municipality_2") {
                        jobTitle = "Developer Consultant";

                        linkCustomerTitle = "#2 Municipality";
                        linkToCustomer = "";
                        period.innerText = "2020-05 - 2020-10";
                        system.innerText = "Platina (.Net)";

                        descOneEl.innerText =
                          "Coupled together with a projectleader I acted as developer, deployer and solution architect.";
                        descTwoEl.innerText =
                          "Me and my colleague managed to upgrade Platina from its version of 7.2 to 11 and its module Webdiary from version 1.0 to 2.0.";
                        descThreeEl.innerText =
                          "During the project I worked throughout the whole stack consisting of MS SQL, Javascript, HTML/CSS and C#.";
                        descFourEl.innerText =
                          "Some of the major customizations were a simplified admin menu in Platina and for the Webdiary module I implemented customer's design patterns.";
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
                        jobTitle = "Developer Consultant";

                        linkCustomerTitle = "#1 Municipality";
                        linkToCustomer = "";
                        period.innerText = "2020-02 - 2020-06";
                        system.innerText = "Platina (.Net)";

                        descOneEl.innerText =
                          "In this project I acted as a full-stack developer and solution architect.";
                        descTwoEl.innerText =
                          "Together with a senior developer/deployer and a projectleader we upgraded Platina from version 7.2 to 10.3";
                        descThreeEl.innerText =
                          "Among many things we did in this project were improvements  of a customized approvement process and the UI of Platina's meeting-module.";
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
