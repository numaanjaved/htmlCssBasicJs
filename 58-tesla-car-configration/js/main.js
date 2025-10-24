const topBar = document.querySelector("#top-bar");
const exteriorColorButton = document.querySelector("#exterior-buttons");
const interiorColorButton = document.querySelector("#interior-buttons");
const exteriorImage = document.querySelector("#exterior-image");
const interiorImage = document.querySelector("#interior-image");

const exteriorImages = {
  "Stealth Grey": "./img/modal-y-stealth-grey.jpg",
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
// Handle Top Bar On Scroll
const handleScroll = () => {
  const atTop = window.scrollY === 0;
  topBar.classList.toggle("visible-bar", atTop);
  topBar.classList.toggle("hidden-bar", !atTop);
};

// Handle color
const handleColor = (e) => {
  let button;

  if (e.target.tagName === "IMG") {
    button = e.target.closest("button");
  } else if (e.target.tagName === "BUTTON") {
    button = e.target;
  }

  if (button) {
    const buttons = e.currentTarget.querySelectorAll("button");
    buttons.forEach((btn) => btn.classList.remove("btn-selected"));
    button.classList.add("btn-selected");
  }

  if (e.currentTarget === exteriorColorButton) {
    const color = button.querySelector("img").alt;
    exteriorImage.src = exteriorImages[color];
  }

  if (e.currentTarget === interiorColorButton) {
    const color = button.querySelector("img").alt;
    interiorImage.src = interiorImages[color];
  }
};

// Event Listners
window.addEventListener("scroll", () => requestAnimationFrame(handleScroll));
exteriorColorButton.addEventListener("click", handleColor);
interiorColorButton.addEventListener("click", handleColor);
