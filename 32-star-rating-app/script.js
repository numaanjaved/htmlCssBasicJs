const ratings = {
  sony: 3.4,
  samsung: 4.2,
  vizio: 2.4,
  panasonic: 2.4,
  phillips: 4.3,
};

const starTotal = 5;

const productSelect = document.querySelector("#product-select");

const productRating = document.querySelector("#product-rating");

let product;

const tbody = document.querySelector("tbody");

const tvNames = [
  { value: "sony", text: "Sony 4K TV" },
  { value: "samsung", text: "Samsung 4k TV" },
  { value: "vizio", text: "Vizio 4k TV" },
  { value: "panasonic", text: "Panasonic 4k TV" },
  { value: "phillips", text: "Phillips 4k TV" },
];

tvNames.forEach((name) => {
  let option = document.createElement("option");
  option.textContent = name.text;
  option.value = name.value;
  productSelect.appendChild(option);
});

function table(className, text) {
  let tr = document.createElement("tr");
  tr.className = className;
  let td1 = document.createElement("td");
  td1.textContent = text;
  let td2 = document.createElement("td");
  let starOuterDiv = document.createElement("div");
  starOuterDiv.className = "star-outer";
  let starInnerDiv = document.createElement("div");
  starInnerDiv.className = "star-inner";
  starOuterDiv.appendChild(starInnerDiv);
  let span = document.createElement("span");
  span.className = "number-rating";
  tr.append(td1, td2, starOuterDiv, span);
  td2.append(starOuterDiv, span);
  return tr;
}

tbody.append(
  table("sony", "Sony 4K TV"),
  table("samsung", "Samsung 4k TV"),
  table("vizio", "Vizio 4k TV"),
  table("panasonic", "Panasonic 4k TV"),
  table("phillips", "Phillips 4k TV")
);

productSelect.addEventListener("change", (e) => {
  product = e.target.value;
  productRating.disabled = false;
  productRating.value = ratings[product];
});

productRating.addEventListener("blur", (e) => {
  const rating = e.target.value;
  if (rating > 5) {
    alert("please enter 1 - 5");
  }
  ratings[product] = rating;
  getRatings();
});
document.addEventListener("DOMContentLoaded", getRatings);
function getRatings() {
  for (let rating in ratings) {
    const starPercentage = (ratings[rating] / starTotal) * 100;
    const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}`;
    document.querySelector(
      `.${rating} .star-inner`
    ).style.width = `${starPercentageRounded}%`;
    document.querySelector(`.${rating} .number-rating`).innerHTML =
      ratings[rating];
  }
}
