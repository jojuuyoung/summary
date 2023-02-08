$(document).ready(function(){

	// const showHeader = gsap.from('.scrolling', {
    //     yPercent: -100,
    //     paused: true,
    //     duration: 0.3
    // }).totalProgress(1);

    const txt = gsap.from('.scrolling-text .text', {
        yPercent: 0,
        paused: true,
        duration: 0.3
    }).totalProgress(1);

    ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
            self.direction === -1 ? showHeader.play() : showHeader.reverse()
        }
    });

    //marquee scroll
    let currentScroll = 0;
    let isScrollingDown = true;

    const rollingTxt = gsap.to(".scrolling-text .text", {
        xPercent: -100,
        repeat: -1,
        duration: 20,
        ease: "linear"
    }).totalProgress(0.5);

    gsap.set(".scrolling-text", {xPercent: -50});

    window.addEventListener("scroll", function(){
        if ( window.pageYOffset > currentScroll ) {
            isScrollingDown = true;
        } else {
            isScrollingDown = false;
        }

        gsap.to(rollingTxt, {
            timeScale: isScrollingDown ? 1 : -1
        });

        currentScroll = window.pageYOffset
    });


	//cursor custom
    let $cursor = $('.cursor-inner');
    let x = 0, y = 0;
    let xp = 0, yp = 0;

    $('body').on('mousemove',function(e){
        x = e.pageX;
        y = e.pageY;
    });

    setInterval(function(){
        xp += ((x - xp)/6);
        yp += ((y - yp)/6);
        $cursor.css({left: xp +'px', top: yp +'px'});
    }, 15);


    //코드펜
    const container = document.querySelector(".container");

document.body.addEventListener("mousemove", e => {
  const x = e.clientX;
  const y = e.clientY - 35;
  gsap.to(container, {
    y: y
  });
  gsap.to(".menu-mask", {
    y: -y
  });
});

//뿅뿅아이콘
"use strict";

(function () {
  const wrapper = document.querySelector(".confetti");
  const isAnimationOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
  const icons = ["🎉", "✨", "💜", "🖤", "👸🏻", "💻"];
  const iconCount = 18;
  var elements = [];
  init();
  function init() {
    for (let i = 0; i < iconCount; i++) {
      createIcon();
    }
    gsap.set(elements, {
      transformOrigin: "50% 50%",
      scale: 0
    });
  }
  function createIcon(icon) {
    if (icon === null || icon === undefined) {
      icon = document.createElement("span");
      icon.classList.add("confetti__item");
      wrapper.appendChild(icon);
      elements.push(icon);
    }
    icon.innerText = gsap.utils.random(icons);
    if (isAnimationOk) animateIcon(icon);
  }
  function animateIcon(icon) {
    let durationFall = gsap.utils.random(1.75, 2.5);
    let durationFade = .3;
    let delay = gsap.utils.random(0, .75);
    let xDirection = gsap.utils.random(0, 1) > .5 ? 1 : -1;
    let x = (gsap.utils.random(0, window.outerWidth / 4) + 100) * xDirection;
    let tl = new gsap.timeline();
    tl.to(icon, {
      repeat: -1,
      delay: delay,
      keyframes: [{
        scale: 1,
        duration: .1
      }, {
        y: `random(${-window.outerHeight / 4}, 0)`,
        ease: Back.easeOut.config(5),
        duration: durationFall
      }, {
        x: (gsap.utils.random(0, window.outerWidth / 4) + 100) * xDirection,
        ease: "Power1.easeOut",
        duration: durationFall,
        delay: -durationFall
      }, {
        opacity: 0,
        scale: 4,
        ease: "Power1.easeOut",
        duration: durationFade,
        delay: -durationFade
      }]
    }, "<");
  }
})();


});