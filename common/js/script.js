window.onload = function() {
  gsap.registerPlugin(ScrollTrigger);

  const subText2 = gsap.timeline()
  .to(".section2 .section-tit.one span", {delay: 0.3, className: "+=show"})
  .to(".section2 .section-tit.two span", {delay: 0.4, className: "+=show"})
  .to(".section2 .section-desc span", {delay: 0.5, className: "+=show"});

  const subText3 = gsap.timeline()
  .to(".section3 .section-tit.one span", {delay: 0.3, className: "+=show"})
  .to(".section3 .section-tit.two span", {delay: 0.4, className: "+=show"})
  .to(".section3 .section-tit.three span", {delay: 0.5, className: "+=show"})
  .to(".section3 .section-desc span", {delay: 0.6, className: "+=show"});

  const subText4 = gsap.timeline()
  .to(".section4 .section-tit.one span", {delay: 0.3, className: "+=show"})
  .to(".section4 .section-tit.two span", {delay: 0.4, className: "+=show"})
  .to(".section4 .section-tit.three span", {delay: 0.5, className: "+=show"})
  .to(".section4 .section-desc span", {delay: 0.6, className: "+=show"});

  const horizontalScroll = gsap.timeline()
  .to($(".section6 .section6-slide-wrap"), {duration: 0.05, x: 0})
  .to($(".section6 .section6-slide-wrap"), {x: "-71.42%"});

  gsap.timeline()
  .addLabel("main-visual-title")
    .to(".section1 h2 p:first-of-type span", {delay: 0.5, className: "+=show"}, "main-visual-title")
    .to(".section1 h2 p:nth-of-type(2) span", {delay: 0.7, className: "+=show"}, "main-visual-title")
    .to(".section1 h2 p:last-of-type span", {delay: 0.9, className: "+=show"}, "main-visual-title");

  ScrollTrigger.create({
    animation: subText2,
    trigger: ".section2",
    start: "top 80%",
    end: "bottom bottom",
    scrub: 1
  });

  ScrollTrigger.create({
    animation: subText3,
    trigger: ".section3",
    start: "top 80%",
    end: "bottom bottom",
    scrub: 1
  });

  ScrollTrigger.create({
    animation: subText4,
    trigger: ".section4",
    start: "top 80%",
    end: "bottom bottom",
    scrub: 1
  });

  ScrollTrigger.create({
    animation: horizontalScroll,
    trigger: ".section6",
    start: "top top",
    end: () => "+=" + $(".section6 .section6-slide-wrap").innerWidth(),
    scrub: 1,
    pin: true
  });
}