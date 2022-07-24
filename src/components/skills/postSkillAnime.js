import anime from "animejs";


export async function playPostFunc(inputBoolean) {

    const moveBetweenWidth_Inter = document.getElementById("skillElemAndInter");
    const moveBetweenWidth_Noob = document.getElementById("skillElemAndNoob");
    // const moveBetweenWidth_Noob_To_Inter = document.getElementById(
    //   "skillNoobElemAndInter"
    // );
    
    // const moveLeftNoobinter =
    //   "-" + moveBetweenWidth_Noob_To_Inter.offsetWidth.toString() + "px";
    // const moveRightNoobinter =
    //   moveBetweenWidth_Noob_To_Inter.offsetWidth.toString() + "px";
    
    const moveLeft =
      "-" + moveBetweenWidth_Noob.offsetWidth.toString() + "px";
    
    const moveRight = moveBetweenWidth_Inter.offsetWidth.toString() + "px";
    
    const postAnimationElemAndInter = anime.timeline({
        loop: true,
        autoplay: false,
        direction:'alternate'
      });
      
      const postAnimationElemAndNoob = anime.timeline({
        loop: true,
        autoplay: false,
        direction:'alternate'
      });
      
      // const postAnimationNoobElemAndInter = anime.timeline({
      //   loop: true,
      //   autoplay: false,
      //   direction:'alternate'
      // });
      
      postAnimationElemAndInter.add({
        targets: "#skillElemAndInter",
        translateX: [0, moveRight],
        easing: "easeInOutQuad",
        direction: "alternate",
        delay: anime.stagger(250)
      });
    
      postAnimationElemAndNoob.add({
        targets: "#skillElemAndNoob",
        translateX: [0, moveLeft],
        easing: "easeInOutQuad",
        direction: "alternate",
        delay: anime.stagger(250)
      });
    
      // postAnimationNoobElemAndInter.add({
      //   targets: "#skillNoobElemAndInter",
      //   translateX: [moveRightNoobinter, moveLeftNoobinter],
      //   easing: "easeInOutQuad",
      //   direction: "alternate",
      //   delay: anime.stagger(250)
      // });

      const duckMouthUppderAnim = anime.timeline({
        loop: true,
        autoplay: false,
        direction: "alternate",
        easing: "easeInOutQuad",
      });
  
      const duckMouthUnderAnim = anime.timeline({
        loop: true,
        autoplay: false,
        direction: "alternate",
        easing: "easeInOutQuad",
      });
  
      const duckEyeBrowAnim = anime.timeline({
        loop: true,
        autoplay: false,
        direction: "alternate",
        easing: "easeInOutQuad",
      });
  
      duckMouthUppderAnim.add({
        targets: ".duckMouthUpper",
        translateY: ["-0.25rem", 0, "-0.25rem", 0],
        rotate: ["10deg", 0, "10deg", 0],
        endDelay: 500,
        duration: 500,
      });
  
      duckMouthUnderAnim.add({
        targets: ".duckMouthUnder",
        translateY: ["0.25rem", 0, "0.25rem", 0],
        rotate: ["-10deg", 0, "-10deg", 0],
        endDelay: 500,
        duration: 500,
      });
  
      duckEyeBrowAnim.add({
        targets: ".duckEyebrow",
        translateY: [0, "-0.5rem", "0.5rem"],
        delay: 500,
        duration: 500,
      });
    
  if(inputBoolean === true){
      postAnimationElemAndInter.play();
      postAnimationElemAndNoob.play();
      // postAnimationNoobElemAndInter.play();

      duckEyeBrowAnim.play();
      duckMouthUnderAnim.play();
      duckMouthUppderAnim.play();
  }

  if(inputBoolean === false){
    
    anime.remove("#skillElemAndInter");
    anime.remove("#skillElemAndNoob");
    anime.remove("#skillNoobElemAndInter");

    anime.remove(".duckMouthUpper");
    anime.remove(".duckMouthUnder");
    anime.remove(".duckEyebrow");
  }
  //   duckEyeBrowAnim.pause();
  //   duckMouthUnderAnim.pause();
  //   duckMouthUppderAnim.pause();
  // }

  
}