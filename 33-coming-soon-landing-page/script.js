const countDown = document.querySelector(".countDown");
const lanuchDate = new Date("Jan 1,2026 13:00:00").getTime();
let intvl = setInterval(() => {
  const now = new Date().getTime();
  const distance = lanuchDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const mins = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  countDown.innerHTML = `
  <div>${days}<span>Days</span></div>
  <div>${hours}<span>Hours</span></div>
  <div>${mins}<span>Mins</span></div>
  <div>${seconds}<span>Seconds</span></div>
  `;
  if (distance < 0) {
    clearInterval(intvl);
    countDown.style.color = "#587543";
    countDown.innerHTML = `<div>Launched!</div>`;
  }
}, 1000);
