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


});