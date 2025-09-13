let nextSlide = document.querySelector("#arrow-right");
let prevSlide = document.querySelector("#arrow-left");
let slides = document.querySelectorAll(".slide");
let current = 0;

function reset() {
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
}

function startSlide() {
  reset();
  slides[0].style.display = "block";
}

function slideLeft() {
  reset();
  slides[current - 1].style.display = "block";
  current--;
}

prevSlide.addEventListener("click", function () {
  if (current === 0) {
    current = slides.length;
  }
  slideLeft();
});

function slideRight() {
  reset();
  slides[current + 1].style.display = "block";
  current++;
}

nextSlide.addEventListener("click", function () {
  if (current === slides.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();
