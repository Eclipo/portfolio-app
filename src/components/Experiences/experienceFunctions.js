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
        backgroundColor: "#aa9f5a",
        duration: 50,
        easing: "linear",
        scale: 1,
        endDelay: 0,
        beginDelay: 0,
        complete: function () {
          anime({
            targets: tab,
            backgroundColor: "#aa9f5a",
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
                  'As a web developer, I closely collaborated with the team to design and code the front-end solution using <span class="highLight">Angular, TypeScript, HTML and CSS</span>.';
                descTwoEl.innerHTML =
                  'Leveraging my expertise in Angular, I built robust <span class="highLight">forms, validators, services, and form guards</span> . I also worked closely with the back-end team to integrate the front-end and back-end components seamlessly using <span class="highLight">C#</span>.';
                descThreeEl.innerHTML =
                  "My focus on <span class='highLight'>user interface and robost made components</span> ensures that our applications meet the high standards of our users.";

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
                liFour.style.display = "none";
                descOneEl.innerHTML =
                  'As a <span class="highLight">multi-faceted developer and solution architect</span>, I specialize in various areas including business consulting, application development, system testing, and deployment.';
                descTwoEl.innerHTML =
                  'Utilizing <span class="highLight">SQL and PowerShell</span>, I design and develop solution documents while ensuring seamless integration with existing architecture, integrations, and legacy code.';
                descThreeEl.innerHTML =
                  'I deployed and verified configurations using <span class="highLight">custom SQL test scripts</span>, reducing the testing process and improving bug detection. Additionally, I have developed a bookmarkscanner application in <span class="highLight">C#</span> that scans through Microsoft Word templates.';
                descFourEl.style.display = "none";
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
                  'Tri-fold role as <span class="highLight">developer, deployer, and solution architect</span>.';
                descTwoEl.innerHTML =
                  "Successfully upgraded Platina from version 7.2 to 11 and its module Webdiary from version 1.0 to 2.0.";
                descThreeEl.innerHTML =
                  "Worked throughout the entire stack, utilizing expertise in <span class='highLight'>MS SQL, JavaScript, HTML/CSS, and C#</span>";
                descFourEl.innerHTML =
                  "Major customizations included <span class='highLight'>streamlining the admin menu in Platina and implementing customized design patterns for the Webdiary module</span>";
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
                  'As a full-stack developer <span class="highLight"> full-stack developer and solution architect</span>, I upgraded Platina from version 7.2 to 10.3.';
                descTwoEl.innerHTML =
                  "I enhanced the customer's customized approval process and improved the user interface of the meeting module.";

                descThreeEl.innerHTML = "";
                descFourEl.innerHTML = "";
                liTwo.style.display = "flex";
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
