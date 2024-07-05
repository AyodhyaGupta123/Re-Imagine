function loco(){

  gsap.registerPlugin(ScrollTrigger);
  
  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);
  
  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
  }

loco();



function swiper(){
  var swiper = new Swiper(".mySwiper", {
    effect: "flip",
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
}

function swiper1(){

  var swiper1 = new Swiper(".mySwiper1", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.94,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

}

function cardanimation() {
  gsap.to("#work>#cards", {
    scrollTrigger: {
      trigger: "#work",
      scroller: "#main",
      pin: true,
      scrub: 1
    },
    y: "-250vh",
    stagger: .1
  })
}
// function cardanimation() {
//   gsap.to("#part4>.img", {
//     scrollTrigger: {
//       trigger: "#part4",
//       scroller: "#main",
//       pin: true,
//       scrub:1,
//     },
//     y:"-500vh",
//     duration:500
//   })
// } 

gsap.to("#part3 .header img",{
  scrollTrigger:{
      scroller:"#main",
      trigger:"#part3 ",
     start:"top bottom",
     end:"bottom top",
     scrub:true,
  },
  x:400,
  ease:Expo.easeInout,
  duration:5
})

gsap.to("#part3 .footer img",{
  scrollTrigger:{
      scroller:"#main",
      trigger:"#part3 ",
     start:"top bottom",
     end:"bottom top",
     scrub:true,
  },
  x:-400,
  ease:Expo.easeInout,
  duration:.5
})

gsap.to("#part5 .img",{
  scrollTrigger:{
      scroller:"#main",
      trigger:"#part5",
     start:"top -30%",
  },
  width:"100%",
  ease:Expo.easeInout,
  duration:1
})

function lineAnimation(){
  document.querySelectorAll(".adiv")
.forEach(function(text){
  text.addEventListener("mouseenter",function(dets){
       gsap.to(dets.target.children[1],{
           width:"100%",
           ease:Expo.easeInout,
           duration:.2
    })
  })
})
document.querySelectorAll(".adiv")
.forEach(function(text){
  text.addEventListener("mouseleave",function(dets){
       gsap.to(dets.target.children[1],{
           width:"0%",
           left:"100%",
           ease:Expo.easeInout,
           duration:.2,
           onComplete:function(){
              dets.target.children[1].style.left=0;
           }
    })
  })
})
}
function frontpageAnimation(){

var tl = gsap.timeline();
tl.
to("#fs a",{
  delay:1,
  opacity:1,

})
.to("#fs a",{
   x:0
})
.to("#fs #h1",{
   y:0,
   duration:.5
})
.to("#fs #h2",{
  y:0,
  duration:.5
})
.to("#fs a,#h1,#h2",{
  y:-500,
  stagger:.1,
  ease:Expo.easeInout,
  duration:1
})
.to("#fs",{
  delay:-.4,
  height:"0%",
  duration:.5
})

}
 
gsap.to("#part7 .headtext h3",{
  x:10,
  ease:Expo.easeInout,
  repeat:-1
})

loco();
lineAnimation();
swiper();
swiper1();
frontpageAnimation();
cardanimation();