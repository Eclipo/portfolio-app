import anime from "animejs";


export async function playPostFunc(inputBoolean) {

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
    console.log('duck');
      duckEyeBrowAnim.play();
      duckMouthUnderAnim.play();
      duckMouthUppderAnim.play();
  }

  if(inputBoolean === false){
    anime.remove(".duckMouthUpper");
    anime.remove(".duckMouthUnder");
    anime.remove(".duckEyebrow");
  }

}