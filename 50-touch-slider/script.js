const slider = document.querySelector(".slider-container");
const slides = Array.from(document.querySelectorAll(".slide"));
let isDragable = false,
  currentTranslate = 0,
  prevTranslate = 0,
  startPos = 0,
  currentIndex = 0,
  animationID = 0;

slides.forEach((slide, index) => {
  const slideImg = slide.querySelector("img");
  slideImg.addEventListener("dragstart", (e) => e.preventDefault());

  // touch event
  slide.addEventListener("touchstart", touchStart(index));
  slide.addEventListener("touchend", touchEnd);
  slide.addEventListener("touchmove", touchMove);

  // mouse event
  slide.addEventListener("mousedown", touchStart(index));
  slide.addEventListener("mouseup", touchEnd);
  slide.addEventListener("mouseleave", touchEnd);
  slide.addEventListener("mousemove", touchMove);
});

window.oncontextmenu = function (event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
};

function touchStart(index) {
  return function (event) {
    isDragable = true;
    currentIndex = index;
    startPos = getPositionX(event);
    animationID = requestAnimationFrame(animation);
  };
}

function touchEnd() {
  isDragable = false;
  cancelAnimationFrame(animation);
  const movedBy = currentTranslate - prevTranslate;
  if (movedBy < -100 && currentIndex < slides.length - 1) currentIndex += 1;
  if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;
  setPositionByIndex();
}

function touchMove(event) {
  if (isDragable) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
  }
}

function getPositionX(event) {
  return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
}

function animation() {
  setSliderPosition();
  if (isDragable) requestAnimationFrame(animation);
}

function setSliderPosition() {
  return (slider.style.transform = `translateX(${currentTranslate}px)`);
}

function setPositionByIndex() {
  currentTranslate = currentIndex * -window.innerWidth;
  prevTranslate = currentTranslate;
  setSliderPosition();
}
