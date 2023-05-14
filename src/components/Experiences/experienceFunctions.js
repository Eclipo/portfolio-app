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
  var confidentialParagraph = document.getElementById("confidentialParagraph");

  confidentialParagraph.style.display = "none";
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

  var contentHeader = "#_header";

  var contentPeriod = "#_periodSystem";
  const objRef = document.body;

  anime({
    targets: [
      contentHeader,
      contentPeriod,
      ".techText",
      ".techText ul li",
      ".techRow",
      ".li_icon",
    ],
    opacity: 0.25,
    duration: 250,
    complete: function () {
      expCategoryMenu.style.pointerEvents = "none";

      anime({
        targets: ".techCategory",
        backgroundColor: "#cf9625",
        duration: 50,
        easing: "linear",
        scale: 1,
        endDelay: 0,
        beginDelay: 0,
        complete: function () {
          anime({
            targets: tab,
            backgroundColor: "#ac7b1b",
            scale: 0.98,
            duration: 150,
            easing: "linear",
            endDelay: 0,
            beginDelay: 0,
            complete: function () {
              document.getElementById(inputID).classList.add("expNavFocus");

              if (inputID === "fintech") {
                confidentialParagraph.style.display = "block";
                jobTitle = "Web developer";
                linkCustomerTitle = "Fintech *";
                linkToCustomer = "";
                period.innerText = "02/22 - Present";
                system.innerText = "Custom SPA";
                descOneEl.innerHTML =
                  'We are building a new application within fintech where I work as a<span class="highLight"> web developer</span>.';
                descTwoEl.innerHTML =
                  'From the specifications and requirements I have been able to code and design the solution in the front-end where I have used <span class="highLight">Angular,TypeScript, HTML and CSS </span>.';
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
                confidentialParagraph.style.display = "block";
                jobTitle = "Handyman";
                linkCustomerTitle = "#3 Municipality *";
                linkToCustomer = "";
                period.innerText = "08/20 - 02/22";
                system.innerText = "Platina (.Net)";
                liTwo.style.display = "flex";
                liThree.style.display = "flex";
                liFour.style.display = "flex";
                descOneEl.innerHTML =
                  'Experienced in <span class="highLight"> various roles</span> including solution architecture, development, deployment, business consulting, application specialization, and system testing.';
                descTwoEl.innerHTML =
                  'Designed and developed solution documents using <span class="highLight"> SQL and PowerShell</span>, taking into consideration the existing architecture, integrations, and legacy code.';
                descThreeEl.innerHTML =
                  'Successfully deployed and verified configurations using <span class="highLight">custom SQL test scripts</span>, <span class="highLight">reducing the testing process</span>, improving bug detection and project efficiency.';
                descFourEl.innerHTML =
                  'Furthermore I developed a <span class="highLight">bookmarkscanner</span> application in<span class="highLight"> C# </span>which scanned through several Microsoft Word templates and classified if the bookmarks were either standard or customized.';
                chosenTechSkillContainer.style.display = "block";
                chosenTechSkillContainer.style.opacity = "1";

                jobTitleEl.innerText = jobTitle;

                for (const el of linkEl) {
                  el.innerText = linkCustomerTitle;
                  el.href = linkToCustomer;
                }
              }

              if (inputID === "municipality_2") {
                confidentialParagraph.style.display = "block";
                jobTitle = "Handyman";

                linkCustomerTitle = "#2 Municipality *";
                linkToCustomer = "";
                period.innerText = "05/20 - 10/20";
                system.innerText = "Platina (.Net)";
                descOneEl.innerHTML =
                  'Together with a project leader, I acted as a<span class="highLight"> developer, deployer and solution architect</span>.';
                descTwoEl.innerHTML =
                  "We upgraded Platina from version 7.2 to 11 and its module Webdiary from version 1.0 to 2.0.";
                descThreeEl.innerHTML =
                  "I worked throughout the whole stack, consisting of MS SQL, JavaScript, HTML/CSS and C#.";
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
                confidentialParagraph.style.display = "block";
                jobTitle = "Handyman";

                linkCustomerTitle = "#1 Municipality *";
                linkToCustomer = "";
                period.innerText = "02/20 - 06/20";
                system.innerText = "Platina (.Net)";

                descOneEl.innerHTML =
                  'In this project, I acted as a<span class="highLight"> full-stack developer and solution architect</span>.';
                descTwoEl.innerHTML =
                  "We upgraded Platina from version 7.2 to 10.3.";
                descThreeEl.innerHTML =
                  "I improved the customer's customized approval process and the UI of the meeting-module.";
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
                  ".techRow",
                  ".li_icon",
                  ".techText",
                  ".techText ul li",
                ],
                opacity: [0.25, 1],
                display: "block",
                duration: 500,
                easing: "linear",
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
};
