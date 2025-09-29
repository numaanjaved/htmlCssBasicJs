const slider = document.querySelector(".slider-container");
const slides = Array.from(document.querySelectorAll(".slider"));

let isDragable = false;
let startPosition = 0;
let animationID = 0;
let currentIndex = 0;

slides.forEach((slide, index) => {
  const slideItem = slide.querySelector("img");
  slideItem.addEventListener("dragstart", (e) => e.preventDefault());

  // touch events
  slide.addEventListener("touchstart", touchStart(slide, index));
  slide.addEventListener("touchend", touchEnd);
  slide.addEventListener("touchmove", touchMove);

  // mouse events
  slide.addEventListener("mousedown", touchStart(slide, index));
  slide.addEventListener("mouseup", touchEnd);
  slide.addEventListener("mouseleave", touchEnd);
  slide.addEventListener("mousemove", touchMove);
});
