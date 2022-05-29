import anime from "animejs";

export async function playRoFunc() {
    const roGrid = [13, 10];

    const resumeAnimation = anime.timeline({
        loop: false,
        easing: "easeInOutSine",
        autoplay: false,
      });
    
       resumeAnimation.add({
        targets: [".emptyLightSaberSquare", ".baseLeft", ".baseCenter", ".baseRight", ".baseDarkLeft", ".baseDarkCenter", ".baseDarkRight"],
        opacity: [0, 1],
        easing: "linear",
        translateX: 0,
        translateY: 0,
        delay: anime.stagger(50, { grid: roGrid, from: "last" })
      });
    
      resumeAnimation.add({
        targets: ".outerLightSaber, .coreLightSaber",
        opacity: [0, 0.25, 0, 0.5, 0, 1],
        easing: "easeOutElastic(1, .9)",
        duration: 750,
        endDelay: 1250,
        complete: function () {
          anime({
            targets: ".resumeHeaderOne",
            opacity: [0, 1],
            easing: "linear",
            duration: 950,
          });
        },
      });
    
      resumeAnimation.add({
        targets: ".outerLightSaber, .coreLightSaber",
        opacity: [1, 0.25, 1, 0.5, 1, 0],
        easing: "easeOutElastic(1, .9)",
        duration: 750,
      });
    
      resumeAnimation.add({
        targets:
          ".emptyLightSaberSquare, .baseLeft, .baseCenter, .baseRight, .baseDarkLeft, .baseDarkCenter, .baseDarkRight",
        opacity: [1, 0],
        easing: "linear",
        translateX: () => anime.random(-250, 250),
        translateY: () => anime.random(-150, 150),    
        delay: anime.stagger(50, { grid: roGrid, from: "first" }),
        complete: function () {
          let elContainer = document.getElementById("resumeContainerID");
          elContainer.style.display = "block";
    
          elContainer = document.getElementById("lightSaberTableID");
          elContainer.style.display = "none";
    
          anime({
            targets: ".resumeTable",
            opacity: [0, 1],
            easing: "linear",
            duration: 950,
          });
        },
      });

      resumeAnimation.play();
}