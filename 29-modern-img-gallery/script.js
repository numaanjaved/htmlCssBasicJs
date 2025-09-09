let current = document.querySelector("#current");
let imgs = document.querySelectorAll(".imgs img");
let mainImg = document.querySelector(".main-img");
let opacity = 0.4;
imgs[0].style.opacity = opacity;
imgs.forEach((img) => {
  img.addEventListener("click", () => {
    current.src = img.src;
    current.classList.add("fadeIn");
    setTimeout(() => current.classList.remove("fadeIn"), 500);
    imgs.forEach((img) => {
      if (img.src !== current.src) {
        img.style.opacity = 1;
      } else {
        img.style.opacity = opacity;
      }
    });
  });
});
