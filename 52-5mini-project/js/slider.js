const sliderContainer = document.querySelector(".slider-container");
const sliderLeft = document.querySelector(".left-slider");
const sliderRight = document.querySelector(".right-slider");
const upBtn = document.querySelector(".up");
const downBtn = document.querySelector(".down");
const slidesLength = sliderRight.querySelectorAll("div").length;
const divs = sliderLeft.querySelectorAll("div");

let activeSlideIndex = 0;

sliderLeft.style.top = `-${(slidesLength - 1) * 100}vh`;

upBtn.addEventListener("click", () => changeSlide("up"));
downBtn.addEventListener("click", () => changeSlide("down"));

const changeSlide = (direction) => {
  const slideHeight = sliderContainer.clientHeight;
  if (direction === "up") {
    activeSlideIndex++;
    if (activeSlideIndex > slidesLength - 1) {
      activeSlideIndex = 0;
    }
  }
  if (direction === "down") {
    activeSlideIndex--;
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLength - 1;
    }
  }
  sliderRight.style.transform = `translateY(${
    -activeSlideIndex * slideHeight
  }px)`;
  sliderLeft.style.transform = `translateY(${
    activeSlideIndex * slideHeight
  }px)`;
};
