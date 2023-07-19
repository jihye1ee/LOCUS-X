window.onload = function() {
  gsap.timeline()
  .addLabel("main-visual-title")
    .to(".section1 h2 p:first-of-type span", {delay: 0.5, className: "+=show"}, "main-visual-title")
    .to(".section1 h2 p:nth-of-type(2) span", {delay: 0.7, className: "+=show"}, "main-visual-title")
    .to(".section1 h2 p:last-of-type span", {delay: 0.9, className: "+=show"}, "main-visual-title");

  gsap.registerPlugin(ScrollTrigger);

  const horizontalScroll = gsap.timeline()
  .to($(".section6 .section6-slide-wrap"), {duration: 0.05, x: 0})
  .to($(".section6 .section6-slide-wrap"), {x: "-71.42%"});

  ScrollTrigger.create({
    animation: horizontalScroll,
    trigger: ".section6",
    start: "top top",
    end: () => "+=" + $(".section6 .section6-slide-wrap").innerWidth(),
    scrub: 1,
    pin: true
  });
}