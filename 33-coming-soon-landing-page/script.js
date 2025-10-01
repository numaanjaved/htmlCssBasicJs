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
  let timeArr = [
    { divText: `${days}`, spanText: "Days" },
    { divText: `${hours}`, spanText: "Hours" },
    { divText: `${mins}`, spanText: "Mins" },
    { divText: `${seconds}`, spanText: "Seconds" },
  ];
  countDown.innerHTML = "";
  timeArr.forEach((time) => {
    let div = document.createElement("div");
    let span = document.createElement("span");
    div.textContent = time.divText;
    span.textContent = time.spanText;
    div.appendChild(span);
    countDown.append(div);
  });
  if (distance < 0) {
    clearInterval(intvl);
    countDown.style.color = "#587543";
    let div = document.createElement("div");
    div.innerText = "Launched!";
    countDown.appendChild(div);
  }
}, 1000);
