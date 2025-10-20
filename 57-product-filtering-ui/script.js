const products = [
  {
    name: "Sony Playstation 5",
    url: "./img/playstation_5 - Copy.png",
    category: "games",
    price: 499.99,
  },
  {
    name: "Samsung Galaxy",
    url: "./img/samsung_galaxy - Copy.png",
    category: "smartphones",
    price: 399.99,
  },
  {
    name: "Cannon EOS Camera",
    url: "./img/cannon_eos_camera - Copy.png",
    category: "cameras",
    price: 749.99,
  },
  {
    name: "Sony A7 Camera",
    url: "./img/sony_a7_camera - Copy.png",
    category: "cameras",
    price: 1999.99,
  },
  {
    name: "LG TV",
    url: "./img/lg_tv - Copy.png",
    category: "televisions",
    price: 799.99,
  },
  {
    name: "Nintendo Switch",
    url: "./img/nintendo_switch - Copy.png",
    category: "games",
    price: 299.99,
  },
  {
    name: "Xbox Series X",
    url: "./img/xbox_series_x - Copy.png",
    category: "games",
    price: 499.99,
  },
  {
    name: "Samsung TV",
    url: "./img/samsung_tv - Copy.png",
    category: "televisions",
    price: 1099.99,
  },
  {
    name: "Google Pixel",
    url: "./img/google_pixel - Copy.png",
    category: "smartphones",
    price: 499.99,
  },
  {
    name: "Sony ZV1F Camera",
    url: "./img/sony_zv1f_camera - Copy.png",
    category: "cameras",
    price: 799.99,
  },
  {
    name: "Toshiba TV",
    url: "./img/toshiba_tv - Copy.png",
    category: "televisions",
    price: 499.99,
  },
  {
    name: "iPhone 14",
    url: "./img/iphone_14 - Copy.png",
    category: "smartphones",
    price: 999.99,
  },
];

const checkDiv = [
  {
    id: "cameras",
    text: "Cameras",
  },
  {
    id: "smartphones",
    text: "Smartphones",
  },
  {
    id: "games",
    text: "Games",
  },
  {
    id: "television",
    text: "Televisions",
  },
];

const searchInput = document.querySelector("#search");
const cartCount = document.querySelector("#cart-count");
const filterContainer = document.querySelector("#filter-container");
const productWrapper = document.querySelector("#products-wrapper");

checkDiv.forEach((div) => {
  let checkInputDiv = document.createElement("div");
  const inputElement = document.createElement("input");
  inputElement.setAttribute("type", "checkbox");
  inputElement.className = "check";
  inputElement.id = `${div.id}`;
  const label = document.createElement("label");
  label.setAttribute("for", `${div.id}`);
  label.innerText = `${div.text}`;

  checkInputDiv.append(inputElement, label);
  filterContainer.appendChild(checkInputDiv);
});
const checkBoxes = document.querySelectorAll(".check");
let cartItemCount = 0;

let productElements = [];

filterContainer.addEventListener("change", filterProduct);
searchInput.addEventListener("input", filterProduct);

products.forEach((product) => {
  const productElement = document.createElement("div");
  productElement.className = "item space-y-2";

  const productDiv = document.createElement("div");
  productDiv.className =
    "bg-gray-100 flex justify-center relative overflow-hidden group cursor-pointer border rounded-xl";

  const productImg = document.createElement("img");
  productImg.src = `${product.url}`;
  productImg.alt = `${product.name}`;
  productImg.className = "w-full h-full object-cover";

  const cartBtn = document.createElement("button");
  cartBtn.className =
    "status bg-black text-white absolute bottom-0 left-0 right-0 text-center py-2 translate-y-full transition group-hover:translate-y-0";
  cartBtn.innerText = "Add to cart";

  const productName = document.createElement("p");
  productName.className = "text-xl";
  productName.innerText = `${product.name}`;

  const productPrice = document.createElement("strong");
  productPrice.innerText = `${product.price.toLocaleString()}`;

  productDiv.append(productImg, cartBtn);
  productElement.append(productDiv, productName, productPrice);

  productElement
    .querySelector(".status")
    .addEventListener("click", updateCount);

  productElements.push(productElement);

  productWrapper.appendChild(productElement);
});

function updateCount(e) {
  const statusEl = e.target;
  if (statusEl.classList.contains("added")) {
    statusEl.classList.remove("added");
    statusEl.innerText = "Add to Cart";
    statusEl.classList.add("bg-black");
    statusEl.style.background = "#111";

    cartItemCount--;
  } else {
    statusEl.classList.add("added");
    statusEl.innerText = "Remove to Cart";
    statusEl.classList.remove("bg-black");
    statusEl.style.background = "#548758";
    cartItemCount++;
  }
  cartCount.innerText = cartItemCount;
}

function filterProduct() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  const checked = Array.from(checkBoxes)
    .filter((check) => check.checked)
    .map((check) => check.id);

  productElements.forEach((productElement, index) => {
    const product = products[index];
    const matchSearchTerm = product.name.toLowerCase().includes(searchTerm);
    const isInChecked =
      checked.length === 0 || checked.includes(product.category);

    if (matchSearchTerm && isInChecked) {
      productElement.classList.remove("hidden");
    } else {
      productElement.classList.add("hidden");
    }
  });
}
