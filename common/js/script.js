window.onload = function() {
  gsap.registerPlugin(ScrollTrigger);

  const horizontalScroll = gsap.timeline()
  .to($(".section6 .section6-slide-wrap"), {duration: 0.05, x: 0})
  .to($(".section6 .section6-slide-wrap"), {x: "-70%"})
  .to($(".section6 .section6-slide-wrap"), {duration: 0.05})

  ScrollTrigger.create({
    animation: horizontalScroll,
    trigger: ".section6",
    start: "top top",
    end: () => "+=" + document.querySelector(".section6 .section6-slide-wrap").offsetWidth,
    scrub: 1,
    pin: true
  });
}