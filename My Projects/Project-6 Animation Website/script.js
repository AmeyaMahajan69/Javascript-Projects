let csrs=document.querySelector("#cursor");
let blur=document.querySelector("#cursor-blur")


document.addEventListener("mousemove",(dets)=>{
    csrs.style.left=dets.x -12+"px";
    csrs.style.top=dets.y-12+"px";
    blur.style.left=dets.x  -125 + "px"
    blur.style.top=dets.y -125 + "px"
}) 

let h4=document.querySelectorAll("#nav h4")
h4.forEach((elem)=>{
    elem.addEventListener("mouseenter",()=>{
        csrs.style.scale= 3;
        csrs.style.border="1px solid #fff"
        csrs.style.backgroundColor="transparent"
        csrs.style.transition="ease-in-out 0.2s"
    })
}) 

h4.forEach((elem)=>{
    elem.addEventListener("mouseleave",()=>{
        csrs.style.scale= 1;
        csrs.style.border="0px solid #95c11e"
        csrs.style.backgroundColor="#95c11e"
        csrs.style.transition="ease-in-out"
    })
}) 


gsap.to("#nav",{
    backgroundColor:"#000",
    height: "90px",
    duration:0.5,
    scrollTrigger:{
        trigger: "#nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1

    }
})

gsap.to("#main",{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers: true,
        start: "top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

  gsap.from("#card1,#card2,#card3", {
    scale: 0.8,
    // opacity:0,
    duration: 1,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".cards",
      scroller: "body",
      // markers:false,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });

gsap.from("#colon1", {
    y: -70,
    x: -70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

  gsap.from("#colon2", {
    y: 70,
    x: 70,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 45%",
      scrub: 4,
    },
  });

