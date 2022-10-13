/*Вы также можете инициировать события самостоятельно, чтобы управлять Owl Carousel:*/
const owl = $(".owl-carousel");
owl.owlCarousel({
  center: true,
  loop: true,
  margin: 20,
  startPosition: 0,
  items: 1,
  responsive: {
    // breakpoint from 0 up
    0: {},
    // breakpoint from 480 up
    540: { items: 3, startPosition: 1 },
    850: { items: 3, startPosition: 1 },
    // breakpoint from 768 up
    1000: { margin: 20, items: 3 },
    1200: { margin: 30, items: 3 },
  },
});
// Go to the next item

// Go to the previous item
$(".customPrevBtn").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel", [300]);
});

/*BURGER*/
const navBtn = document.querySelector(".nav__toggle");
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav");
navBtn.onclick = function () {
  nav.classList.toggle("nav--mobile");
  menuIcon.classList.toggle("menu-icon--active");
  document.body.classList.toggle("no-scroll");
};
