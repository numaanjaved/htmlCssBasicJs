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
  divD.innerHTML = `${days}`;
  divD.appendChild(spanD);
  divH.innerHTML = `${hours}`;
  divH.appendChild(spanH);
  divM.innerHTML = `${mins}`;
  divM.appendChild(spanM);
  divS.innerHTML = `${seconds}`;
  divS.appendChild(spanS);
  countDown.append(divD, divH, divM, divS);
  if (distance < 0) {
    clearInterval(intvl);
    countDown.style.color = "#587543";
    let div = document.createElement("div");
    div.innerText = "Launched!";
    countDown.appendChild(div);
  }
}, 1000);

let divD = document.createElement("div");
let spanD = document.createElement("span");
spanD.innerText = "Days";

let divH = document.createElement("div");
let spanH = document.createElement("span");
spanH.innerText = "Hours";

let divM = document.createElement("div");
let spanM = document.createElement("span");
spanM.innerText = "Mins";

let divS = document.createElement("div");
let spanS = document.createElement("span");
spanS.innerText = "Seconds";
