let createNewElement = (
  newElement,
  elementClass = null,
  elementContainer,
  elementContent = null,
  attributes = {}
) => {
  let htmlElement = document.createElement(newElement);
  if (elementClass) {
    // console.log(`Adding classes: ${elementClass}`);
    if (Array.isArray(elementClass)) {
      elementClass.forEach((cls) => {
        htmlElement.classList.add(cls);
      });
    } else {
      htmlElement.classList.add(elementClass);
    }
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
createNewElement("div", "landing_Page_container", body);

//<<<<<<<                 Header Section start          >>>>>>

createNewElement("header", "header", body);

createNewElement("nav", "navbar", ".header");

// logo div:
createNewElement("div", "logo", ".navbar");
createNewElement("img", "rexlogo", ".logo", null, {
  src: "./Assets/images/BlueRex_Logo.webp",
  alt: "RexLogo Icon",
});
createNewElement("span", "rexlogo_text", ".logo", "BlueRex");

// Navbar Lists
createNewElement("div", "list_container", ".navbar");
let nav_ul = createNewElement("ul", "header_items_list", ".list_container");

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

  let li = createNewElement("li", "list_items", ".header_items_list");
  createNewElement("a", "li_links", li, `${li_items.text}`, {
    href: `${li_items.href}`,
  });
});

// navbar Hamburger Button:
let hamburger_button = createNewElement("button", "btn", ".list_container");
createNewElement("span", "bars", hamburger_button);

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
