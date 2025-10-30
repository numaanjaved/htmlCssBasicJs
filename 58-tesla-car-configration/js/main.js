const topBar = document.querySelector("#top-bar");
const exteriorColorSection = document.querySelector("#exterior-buttons");
const interiorColorSection = document.querySelector("#interior-buttons");
const exteriorImage = document.querySelector("#exterior-image");
const interiorImage = document.querySelector("#interior-image");
const wheelButtonSection = document.querySelector("#wheel-buttons");
const performanceBtn = document.querySelector("#performance-btn");
const totalPriceElement = document.querySelector("#total-price");
const fullSelfDrivingCheckBox = document.querySelector(
  "#full-self-driving-checkbox"
);
const accessoryCheckBoxes = document.querySelectorAll(
  ".accessory-form-checkbox"
);
const downPaymentElement = document.querySelector("#down-payment");
const monthlyPaymentElement = document.querySelector("#monthly-payment");

const basePrice = 52490;
let currentPrice = basePrice;

let selectedColor = "Stealth Grey";
const selectedOptions = {
  "Performance Wheels": false,
  "Performance Package": false,
  "Full Self-Driving": false,
};

const pricing = {
  "Performance Wheels": 2500,
  "Performance Package": 5000,
  "Full Self-Driving": 8500,
  Accessories: {
    "Center Console Trays": 35,
    Sunshade: 105,
    "All-Weather Interior Liners": 225,
  },
};

// handle price
const updateTotalPrice = () => {
  currentPrice = basePrice;

  if (selectedOptions["Performance Wheels"]) {
    currentPrice += pricing["Performance Wheels"];
  }

  if (selectedOptions["Performance Package"]) {
    currentPrice += pricing["Performance Package"];
  }

  if (selectedOptions["Full Self-Driving"]) {
    currentPrice += pricing["Full Self-Driving"];
  }

  accessoryCheckBoxes.forEach((checkbox) => {
    const accessoryLabel = checkbox
      .closest("label")
      .querySelector("span")
      .textContent.trim();
    const accessoryOption = pricing.Accessories[accessoryLabel];

    if (checkbox.checked) {
      currentPrice += accessoryOption;
    }
  });
  totalPriceElement.textContent = `$${currentPrice.toLocaleString()}`;
  updatePrice();
};

const updatePrice = () => {
  const downPayment = currentPrice * 0.1;
  downPaymentElement.textContent = `$${downPayment.toLocaleString()}`;

  // calculate loan detail
  const loanTermMonth = 60;
  const interestRate = 0.03;

  const loanAmount = currentPrice - downPayment;

  const monthlyInterestRate = interestRate / 2;
  const monthlyPayment =
    (loanAmount *
      (monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, loanTermMonth))) /
    (Math.pow(1 + monthlyInterestRate, loanTermMonth) - 1);
  monthlyPaymentElement.textContent = `$${monthlyPayment
    .toFixed(2)
    .toLocaleString()}`;
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
  const performanceSuffix = selectedOptions["Performance Package"]
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

    selectedOptions["Performance Package"] =
      event.target.textContent.includes("Performance");
    updateExteriorImage();
    updateTotalPrice();
  }
};
// handle performance
const handlePerformance = () => {
  const isSelected = performanceBtn.classList.toggle("bg-gray-700");
  performanceBtn.classList.toggle("text-white");

  selectedOptions["Performance Package"] = isSelected;
  updateTotalPrice();
};

// full self driving change
const fullSeflDrivingChange = () => {
  selectedOptions["Full Self-Driving"] = fullSelfDrivingCheckBox.checked;
  updateTotalPrice();
};

// accessory checkbox
accessoryCheckBoxes.forEach((checkbox) => {
  checkbox.addEventListener("change", () => updateTotalPrice());
});

// event listeners
window.addEventListener("scroll", () => requestAnimationFrame(scrollHandle));
exteriorColorSection.addEventListener("click", colorhandle);
interiorColorSection.addEventListener("click", colorhandle);
wheelButtonSection.addEventListener("click", wheelHandle);
performanceBtn.addEventListener("click", handlePerformance);
fullSelfDrivingCheckBox.addEventListener("change", fullSeflDrivingChange);
