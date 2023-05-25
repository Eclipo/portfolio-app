import anime from "animejs";

export const animateResume = (inputID) => {
  const langSection = document.getElementById("resumeLangSectionID");
  const expSection = document.getElementById("resumeExpSectionID");
  const eduSection = document.getElementById("resumeEduSectionID");

  const langBtn = document.getElementById("resumeLangID");
  const expBtn = document.getElementById("resumeExpID");
  const eduBtn = document.getElementById("resumeEduID");

  const resumeNavs = document.querySelectorAll(".resumeNav");

  resumeNavs.forEach((el) => {
    el.classList.remove("resumeNavFocus");
  });

  let section = "#" + inputID.slice(0, -2) + "SectionID";

  let animate = anime.timeline({});
  animate.add({
    begin: function () {
      resetSections();
    },
  });

  switch (inputID) {
    case "resumeLangID":
      animate.add({
        targets: section,
        opacity: [0, 1],
        easing: "easeInOutSine",
        duration: 250,
        begin: function () {
          langSection.style.display = "block";
          langBtn.classList.add("resumeNavFocus");
        },
      });

      animate.play();

      break;

    case "resumeExpID":
      animate.add({
        targets: section,
        opacity: [0, 1],
        easing: "easeInOutSine",
        duration: 250,
        begin: function () {
          expSection.style.display = "block";
          expBtn.classList.add("resumeNavFocus");
        },
      });

      animate.play();

      break;

    case "resumeEduID":
      animate.add({
        targets: section,
        opacity: [0, 1],
        easing: "easeInOutSine",
        duration: 250,
        begin: function () {
          eduSection.style.display = "block";
          eduBtn.classList.add("resumeNavFocus");
        },
      });

      animate.play();

      break;

    default:
      break;
  }

  function resetSections() {
    langSection.style.display = "none";
    expSection.style.display = "none";
    eduSection.style.display = "none";

    langSection.style.opacity = "0";
    expSection.style.opacity = "0";
    eduSection.style.opacity = "0";
  }
};
