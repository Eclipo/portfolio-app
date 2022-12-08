// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
import anime from "animejs";

var iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
var ff = navigator.userAgent.indexOf('Firefox') > 0;
var tap = ('ontouchstart' in window || navigator.msMaxTouchPoints) ? 'touchstart' : 'mousedown';
if (iOS) document.body.classList.add('iOS');

var logoAnimation = function() {

  

  var setDashoffset = function(el) {
    var l = el.getTotalLength();
    el.setAttribute('stroke-dasharray', l);
    return [l,0];
  }

  
  var letters = anime({
    targets: '#lines path',
    // delay:500,
    strokeDashoffset: {
      value: setDashoffset,
      
      duration: 2750,
      easing: 'easeOutQuad',
    },
  });
  
  

  var dotJSRoll = anime({
    targets: '#dot-js',
    transform: ['translate(0 0)', 'translate(800 0)'],
    delay: letters.duration - 400,
    duration: 2750,
    elasticity: 300,
    easing:'easeOutExpo',
    complete: function(){
      anime({
       // play:fireworks.boom(800,252),
        targets:'#dot-js',
        opacity:0,
      })
    }
  });


  var dotJSDown = anime({
    targets: '#dot-js',
    transform: ['translate(0 -304)', 'translate(0 0)'],
    duration: 500,
    elasticity: 600,
    autoplay: false,
   

  });

  var dotJSUp = anime({
    targets: '#dot-js',
    transform: ['translate(0 0) scale(1 3)', 'translate(0 -352) scale(1 1)'],
    duration: 800,
    easing: 'easeOutCirc',
    complete: dotJSDown.play
  });

  var boom = anime({
    duration: 880,
    complete: function(a) {
      var dot = dotJSDown.animatables[0].target.getBoundingClientRect();
      var pos = {x: dot.left + (dot.width / 2), y: dot.top + (dot.height / 2)}
      //fireworks.boom(pos.x, pos.y);
    }
  });

  var letterI = anime({
    targets: '#line-i-1',
    strokeDashoffset: {
      value: setDashoffset,
      duration: 700,
      easing: 'easeOutQuad'
    },
    transform: function() {
      return ff ? ['rotate(360)', 'rotate(0)'] : ['rotate(360 240 64)', 'rotate(0 240 64)'];
    },
    duration: 3500,
    delay: letters.duration - 780
  });

  var dotI = anime({
    targets: '#dot-i',
    transform: ['translate(0 -352) scale(1 3)', 'translate(0 0) scale(1 1)'],
    opacity: {
      value: [0, 1],
      easing: 'linear',
      duration: 100
    },
    delay: letters.duration + 250,
  });

  
  var gradients = anime({
    targets: '#fills *:not(#dot-i)',
    opacity: [0, 1],
    delay: letterI.duration - 300,
    delay: function(el, i, l) {
      var mid = l/2;
      var index = (i - mid) > mid ? 0 : i;
      var delay = Math.abs(index - mid);
      return (letterI.duration - 1300) + (delay * 30);
    },
    duration: 500,
    easing: 'linear',
    complete:function(){
      anime({
        targets:['#introTextID','#choiceID'],
        opacity:[0,1],
        easing:'linear',
        duration:1250
      });
    }
    
  });

  
}
// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

export class IntroAnimation{

contructor() {

  
}

playOrStop(input){

  if(input === true){
    
  anime({
    targets:'.logo',
    opacity:[0,1],
    begin:function(){
      anime({
        targets:'#introTextID',
        opacity:[1,0],
        easing:'linear',
        duration:500
      });
    }
  });



   logoAnimation();
  }

}

}