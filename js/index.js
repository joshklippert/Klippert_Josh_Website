gsap.registerPlugin(ScrollTrigger)
// buttons
gsap.from('#buttons', {
    y: 400,
    opacity: 0,
    duration: 3,
    ease: "power4.out",
    stagger: .30,
    scrollTrigger: {
       trigger: ".btngrp", 
       start: "top 80%",
       markers: false,
    }
})
// bfast
gsap.from('#text', {
    xPercent: -100,
    duration: 5,
    opacity: 100,
    ease: "power4.out",
    stagger: .15,
    scrollTrigger: {
       trigger: ".bfast1", 
       start: "top 80%",
       markers: false,
       scrub: true,
    }
})
gsap.from('#image', {
    xPercent: 100,
    duration: 5,
    opacity: 0,
    ease: "power4.out",
    stagger: .15,
    scrollTrigger: {
       trigger: ".bfast1", 
       start: "top 80%",
       markers: false,
       scrub: true,
    }
})
// lunch
gsap.from('#image1', {
    xPercent: -100,
    duration: 5,
    opacity: 100,
    ease: "power4.out",
    stagger: .15,
    scrollTrigger: {
       trigger: ".lunch1", 
       start: "top 80%",
       markers: false,
       scrub: true,
    }
})
gsap.from('#text1', {
    xPercent: 100,
    duration: 5,
    opacity: 0,
    ease: "power4.out",
    stagger: .15,
    scrollTrigger: {
       trigger: ".lunch1", 
       start: "top 80%",
       markers: false,
       scrub: true,
    }
})
// dinner
gsap.from('#text2', {
    xPercent: -100,
    duration: 5,
    opacity: 100,
    ease: "power4.out",
    stagger: .15,
    scrollTrigger: {
       trigger: ".dinner1", 
       start: "top 80%",
       markers: false,
       scrub: true,
    }
})
gsap.from('#image2', {
    xPercent: 100,
    duration: 5,
    opacity: 0,
    ease: "power4.out",
    stagger: .15,
    scrollTrigger: {
       trigger: ".dinner1", 
       start: "top 80%",
       markers: false,
       scrub: true,
    }
})
// about us
gsap.from('#about', {
    y: 400,
    opacity: 0,
    duration: 3,
    ease: "power4.out",
    stagger: .30,
    scrollTrigger: {
       trigger: ".about1", 
       start: "top 80%",
       markers: false,
    }
})
// location
gsap.from('#scale1', {
    scale: 100,
    duration: 5,
    ease: "power4.out",
    scrollTrigger: {
        trigger: ".location1", 
        start: "top 80%",
        markers: false,
     }
    }
)
