window.onload = function() {
  function cursor(e) {
    $(".cursor").css({
      top: e.pageY - scrollY + "px",
      left: e.pageX + "px"
    });
  }

  function scrollEvent(e) {
    if($(window).scrollTop() > 0) {
      $("header").addClass("scroll");
    } else {
      $("header").removeClass("scroll");
    }

    cursor(e);
  }

  $(window).on("scroll", scrollEvent);
  $(window).on("mousemove", cursor);

  gsap.registerPlugin(ScrollTrigger);

  const horizontalScroll = gsap.timeline()
  .to($(".section6 .section6-slide-wrap"), {duration: 0.05, x: 0})
  .to($(".section6 .section6-slide-wrap"), {x: "-71.42%"});

  gsap.timeline()
  .addLabel("main-visual-title")
    .to(".section1 h2 p:first-of-type span", {delay: 0.5, className: "+=active"}, "main-visual-title")
    .to(".section1 h2 p:nth-of-type(2) span", {delay: 0.7, className: "+=active"}, "main-visual-title")
    .to(".section1 h2 p:last-of-type span", {delay: 0.9, className: "+=active"}, "main-visual-title");

  $(".scroll-motion").each(function(q){
    gsap.to($(this), {
      scrollTrigger: {
        trigger: $(this),
        start: "top 40%",
        end: "bottom center",
        toggleClass: {targets: $(".scroll-motion").eq(q), className: "active"},
        once: true
      },
    });
  });

  $(".scroll-motion").each(function(){
    gsap.to($(this).children(".txt-wrap"), {
      scrollTrigger: {
        trigger: $(this),
        start: "top 40%",
        end:"bottom center",
        scrub: 1,
      },
      top: "30%",
    });
  });

  $(".section5").each(function(){
    gsap.to($(this).find(".section5-item.left img"), {
      scrollTrigger: {
        trigger: $(this),
        start: "top 40%",
        end:"bottom center",
        scrub: 1,
      },
      left: "10%",
    });
  });

  $(".section5").each(function(){
    gsap.to($(this).find(".section5-item.right img"), {
      scrollTrigger: {
        trigger: $(this),
        start: "top 40%",
        end:"bottom center",
        scrub: 1,
      },
      right: "10%",
    });
  });

  $(".section5-item").each(function(q){
    gsap.to($(this), {
      scrollTrigger: {
        trigger: $(this),
        start: "top 80%",
        end: "bottom center",
        toggleClass: {targets: $(".section5-item").eq(q), className: "active"},
        once: true
      },
    });
  });

  $(".section6-motion").each(function(q){
    gsap.to($(this), {
      scrollTrigger: {
        trigger: $(this),
        start: "top 80%",
        end: "bottom center",
        toggleClass: {targets: $(".section6-motion").eq(q), className: "active"},
        once: true
      },
    });
  });

  ScrollTrigger.create({
    animation: horizontalScroll,
    trigger: ".section6",
    start: "top top",
    end: () => "+=" + $(".section6 .section6-slide-wrap").innerWidth(),
    scrub: 1,
    pin: true
  });

  $(".section7-motion").each(function(q){
    gsap.to($(this), {
      scrollTrigger: {
        trigger: $(this),
        start: "top 80%",
        end: "bottom center",
        toggleClass: {targets: $(".section7-motion").eq(q), className: "active"},
        once: true
      },
    });
  });

  $(".img-hover").hover(function() {
    $(".cursor").addClass("img-cursor");
  }, function() {
    $(".cursor").removeClass("img-cursor");
  });

  $(".explore-button").hover(function() {
    $(".cursor").addClass("explore-cursor");
  }, function() {
    $(".cursor").removeClass("explore-cursor");
  });

  $(".list-hover").hover(function() {
    $(".cursor").addClass("list-cursor");

    if($(this).hasClass("news-tit")) {
      $(".cursor").text("View News");
    } else {
      $(".cursor").text("View Project");
    }
  }, function() {
    $(".cursor").removeClass("list-cursor").text("");
  });
}
