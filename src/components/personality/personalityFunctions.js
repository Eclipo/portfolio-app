import anime from "animejs";
var closeWindow = false;

export const startAttributeAnimation = (inputID) => {
  if (closeWindow === false) {
    let card = "#" + inputID;

    anime({
      targets: card,
      backgroundColor: "#fcfaee",
      scale: [1, 1.15],
      duration: 150,
      easing: "easeInOutSine",
    });

    anime({
      targets: [card + "_h3", card + "_h4"],
      color: "rgba(245, 237, 237, 0.993)",
      duration: 150,
      easing: "easeInOutSine",
    });

    anime({
      targets: [card + "_h3"],
      color: "#5c3e03",
      duration: 150,
      easing: "easeInOutSine",
    });

    anime({
      targets: [card + "_h4"],
      color: "#462f02",
      duration: 150,
      easing: "easeInOutSine",
    });

    anime({
      targets: card + "_p",
      color: "#1d232f",
      duration: 150,
      easing: "easeInOutSine",
      begin: function () {
        document.getElementById(inputID + "_p").style.display = "block";
        document.getElementById(inputID + "_closeBtn").style.display = "block";
        document
          .getElementById(inputID)
          .classList.add("selectedPersonalityCard");
      },
    });
  }
};

export const closeDialogue = (inputID) => {
  let resetCard = inputID.replace("_closeBtn", "");
  closeWindow = true;
  resetAttributeAnimation(resetCard);
};
export const resetAttributeAnimation = (inputID) => {
  let card = "#" + inputID;

  anime({
    targets: card,
    backgroundColor: "#cf9625",
    scale: [1.15, 1],
    duration: 1250,
    complete: function () {
      closeWindow = false;
    },
  });

  anime({
    targets: [card + "_h3", card + "_h4"],
    color: "#233554",
  });

  anime({
    targets: card + "_p",
    color: "#233554",
    begin: function () {
      document.getElementById(inputID + "_p").style.display = "none";
      document.getElementById(inputID + "_closeBtn").style.display = "none";
      document
        .getElementById(inputID)
        .classList.remove("selectedPersonalityCard");
    },
  });
};
