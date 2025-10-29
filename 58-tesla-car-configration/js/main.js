const topBar = document.querySelector("#top-bar");
const exteriorColorSection = document.querySelector("#exterior-buttons");
const interiorColorSection = document.querySelector("#interior-buttons");
const exteriorImage = document.querySelector("#exterior-image");
const interiorImage = document.querySelector("#interior-image");
const wheelButtonSection = document.querySelector("#wheel-buttons");
const performanceBtn = document.querySelector("#performance-btn");
let selectedColor = "Stealth Grey";
const selectedOptions = {
  "performance wheels": false,
  "performance package": false,
  "full self-driving": false,
};

// handles top bar
const scrollHandle = () => {
  const atTop = window.scrollY === 0;
  topBar.classList.toggle("visible-bar", atTop);
  topBar.classList.toggle("hidden-bar", !atTop);
};

// images mapping
const exteriorImages = {
  "Stealth Grey": "./img/model-y-stealth-grey.jpg",
  "Pearl White": "./img/model-y-pearl-white.jpg",
  "Deep Blue": "./img/model-y-deep-blue-metallic.jpg",
  "Solid Black": "./img/model-y-solid-black.jpg",
  "Ultra Red": "./img/model-y-ultra-red.jpg",
  Quicksilver: "./img/model-y-quicksilver.jpg",
};

const interiorImages = {
  Dark: "./img/model-y-interior-dark.jpg",
  Light: "./img/model-y-interior-light.jpg",
};

// handle colors
const colorhandle = (event) => {
  let button;

  if (event.target.tagName === "IMG") {
    button = event.target.closest("button");
  } else if (event.target.tagName === "BUTTON") {
    button = event.target;
  }

  if (button) {
    const buttons = event.currentTarget.querySelectorAll("button");
    buttons.forEach((btn) => btn.classList.remove("btn-selected"));
    button.classList.add("btn-selected");
  }
  // exterior color
  if (event.currentTarget === exteriorColorSection) {
    selectedColor = button.querySelector("img").alt;
    updateExteriorImage();
  }
  // interior color
  if (event.currentTarget === interiorColorSection) {
    const color = button.querySelector("img").alt;
    interiorImage.src = interiorImages[color];
  }
};
// exterior image and performance wheel
const updateExteriorImage = () => {
  const performanceSuffix = selectedOptions["performance wheels"]
    ? "-performance"
    : "";
  const colorKey =
    selectedColor in exteriorImages ? selectedColor : "Stealth Grey";
  exteriorImage.src = exteriorImages[colorKey].replace(
    ".jpg",
    `${performanceSuffix}.jpg`
  );
};

// handle wheel
const wheelHandle = (event) => {
  if (event.target.tagName === "BUTTON") {
    const buttons = document.querySelectorAll("#wheel-buttons button");
    buttons.forEach((btn) => btn.classList.remove("bg-gray-700", "text-white"));
    event.target.classList.add("bg-gray-700", "text-white");

    selectedOptions["performance wheels"] =
      event.target.textContent.includes("Performance");
    updateExteriorImage();
  }
};
// handle performance
const handlePerformance = () => {
  performanceBtn.classList.toggle("bg-gray-700");
  performanceBtn.classList.toggle("text-white");
};

// event listeners
window.addEventListener("scroll", () => requestAnimationFrame(scrollHandle));
exteriorColorSection.addEventListener("click", colorhandle);
interiorColorSection.addEventListener("click", colorhandle);
wheelButtonSection.addEventListener("click", wheelHandle);
performanceBtn.addEventListener("click", handlePerformance);
