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
