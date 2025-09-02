let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let slides = document.querySelectorAll(".slide");
let auto = false;
let slideInterval;
nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);
function nextSlide() {
  slideInterval = setTimeout(() => {
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    }
  }, 5000);
  let current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.nextElementSibling) {
    current.nextElementSibling.classList.add("current");
  } else {
    slides[0].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
}
function prevSlide() {
  slideInterval = setTimeout(() => {
    if (auto) {
      clearInterval(slideInterval);
      slideInterval = setInterval(nextSlide, 5000);
    }
  }, 5000);
  let current = document.querySelector(".current");
  current.classList.remove("current");
  if (current.previousElementSibling) {
    current.previousElementSibling.classList.add("current");
  } else {
    slides[slides.length - 1].classList.add("current");
  }
  setTimeout(() => current.classList.remove("current"));
}
if (auto) {
  slideInterval = setinterval(nextSlide(), 5000);
}
