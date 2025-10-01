let nextBtn = document.querySelector("#next");
let prevBtn = document.querySelector("#prev");
let slider = document.querySelector(".slider");
let auto = false;
let slideInterval;

let slideContent = [
  {
    h2Text: "Slide One",
    pText:
      "jhgu rhgunv i vhuertv hrt v vior  hooht9uv9 o etvgjoieug oc h8t44tafht98tvjka ico cojfect9tco c u9c hahch9 ",
  },
  {
    h2Text: "Slide Two",
    pText:
      "jhgu rhgunv i vhuertv hrt v vior  hooht9uv9 o etvgjoieug oc h8t44tafht98tvjka ico cojfect9tco c u9c hahch9 ",
  },
  {
    h2Text: "Slide Three",
    pText:
      "jhgu rhgunv i vhuertv hrt v vior  hooht9uv9 o etvgjoieug oc h8t44tafht98tvjka ico cojfect9tco c u9c hahch9 ",
  },
  {
    h2Text: "Slide Four",
    pText:
      "jhgu rhgunv i vhuertv hrt v vior  hooht9uv9 o etvgjoieug oc h8t44tafht98tvjka ico cojfect9tco c u9c hahch9 ",
  },
  {
    h2Text: "Slide Five",
    pText:
      "jhgu rhgunv i vhuertv hrt v vior  hooht9uv9 o etvgjoieug oc h8t44tafht98tvjka ico cojfect9tco c u9c hahch9 ",
  },
];
slideContent.forEach((content, index) => {
  let div = document.createElement("div");
  div.className = "slide";
  let contentDiv = document.createElement("div");
  if (index === 0) {
    div.classList.add("current");
  }
  contentDiv.className = "content";
  let h2 = document.createElement("h2");
  h2.textContent = content.h2Text;
  let p = document.createElement("p");
  p.textContent = content.pText;
  contentDiv.append(h2, p);
  div.append(contentDiv);
  slider.appendChild(div);
});

let slides = document.querySelectorAll(".slide");
console.log(slides);
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
