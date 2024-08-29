// let body = document.body;

let createElement = (
  newElement,
  elementClass = null,
  elementContainer,
  elementContent = null,
  attributes = {}
) => {
  let htmlElement = document.createElement(newElement);
  if (elementClass) {
    htmlElement.classList.add(elementClass);
  }
  if (elementContent != null) {
    htmlElement.innerHTML = elementContent;
  }
  if (attributes) {
    for (let attr_key in attributes) {
      htmlElement.setAttribute(attr_key, attributes[attr_key]);
    }
  }
  if (typeof elementContainer === "string") {
    let selectParent = document.querySelector(elementContainer);
    if (selectParent) {
      selectParent.appendChild(htmlElement);
    } else {
      `Error While creating element "${newElement}" having class name "${elementClass}"`;
    }
  } else {
    elementContainer.appendChild(htmlElement);
  }
  return htmlElement;
};

// div is for background image effect
createElement("div", "landing_Page_container", body);

//<<<<<<<                 Header Section start          >>>>>>

createElement("header", "header", body);

createElement("nav", "navbar", ".header");

// logo div:
createElement("div", "logo", ".navbar");
createElement("img", "rexlogo", ".logo", null, {
  src: "./Assets/images/BlueRex_Logo.png",
  alt: "RexLogo Icon",
});
createElement("span", "rexlogo_text", ".logo", "BlueRex");

// Navbar Lists
createElement("div", "list_container", ".navbar");
let nav_ul = createElement("ul", "header_items_list", ".list_container");

// Creating Array of objects containing Li data

let array_of_nav_links = [
  { href: "../../index.html", text: "Home" },
  { href: "/", text: "About" },
  { href: "/", text: "Features" },
  { href: "/", text: "Product" },
  { href: "/", text: "Reviews" },
  { href: "/", text: "Faq" },
  { href: "/", text: "Contact" },
];

array_of_nav_links.forEach((li_items) => {
  // defined variable to store data in one variable and then put data in that variable for each iteration

  let li = createElement("li", "list_items", ".header_items_list");
  createElement("a", "li_links", li, `${li_items.text}`, {
    href: `${li_items.href}`,
  });
});

// navbar Hamburger Button:
let hamburger_button = createElement("button", "btn", ".list_container");
createElement("span", "bars", hamburger_button);

// hamburger_functionality=>:
hamburger_button.addEventListener("click", (e) => {
  if (nav_ul.classList.contains("flex") == true) {
    nav_ul.classList.remove("flex");
    nav_ul.classList.add("none");
  } else if (nav_ul.classList.contains("flex") != true) {
    nav_ul.classList.remove("none");
    nav_ul.classList.add("flex");
  }
});

//<<<<<<<                 Header Section End          >>>>>>
