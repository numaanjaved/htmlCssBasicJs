const container = document.querySelector(".container");
const text = document.querySelector("#text");
let totalTime = 7500;
let breatheTime = (totalTime / 5) * 2;
let holdBreathe = totalTime / 5;

breatheAnimation();
function breatheAnimation() {
  text.textContent = "Breathe In!";
  container.className = "container grow";

  setTimeout(() => {
    text.textContent = "Breathe Hold!";
    setTimeout(() => {
      text.textContent = "Breathe Out!";
      container.className = "container shrink";
    }, holdBreathe);
  }, breatheTime);
}
setInterval(breatheAnimation, totalTime);
