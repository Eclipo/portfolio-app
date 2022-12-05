import anime from "animejs";
import { wiggleCard } from "./playPersonalityFunc";
var closeWindow = false;

export const startAttributeAnimation = (inputID) => {
  if (closeWindow === false) {
    let card = "#" + inputID;
    anime.remove(card);

    anime({
      targets: card,
      backgroundColor: "#041122",
      // easing:'linear',
      scale: [1, 1.15],
      duration: 250,
    });

    anime({
      targets: [card + "_h3", card + "_h4"],
      color: "#33d684",
      duration: 250,
    });

    anime({
      targets: card + "_p",
      color: "#a8b2d1",
      duration: 250,
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
    backgroundColor: "#33d684",
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
      wiggleCard.restart();
    },
  });
};
