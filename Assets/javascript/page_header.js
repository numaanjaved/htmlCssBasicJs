//<<<<<<<                 Header Section start          >>>>>>

// Defining header tag
let header = document.createElement("header");
header.classList.add("header");
// Appending in body
body.appendChild(landing_page_container);
body.appendChild(header);
// Defining nav tag
let nav = document.createElement("nav");
nav.classList.add("navbar");
header.appendChild(nav);
// logo div:
let logo_div = document.createElement("div");
logo_div.classList.add("logo");
nav.appendChild(logo_div);

// logo img:
let logo_img = document.createElement("img");
logo_img.classList.add("rexlogo");
logo_img.setAttribute("src", "./Assets/images/BlueRex_Logo.png");
logo_div.appendChild(logo_img);
let logo_text = document.createElement("span");
logo_text.classList.add("rexlogo_text");
logo_text.textContent = "BlueRex";
logo_div.appendChild(logo_text);
// Navbar Lists
let lists_container = document.createElement("div");
lists_container.classList.add("list_container");
nav.appendChild(lists_container);
let nav_ul = document.createElement("ul");
nav_ul.classList.add("header_items_list");
lists_container.appendChild(nav_ul);

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
  let list_li = document.createElement("li");
  list_li.classList.add("list_items");
  let list_item_link = document.createElement("a");
  list_item_link.classList.add("li_links");
  list_item_link.setAttribute("href", `${li_items.href}`);
  list_item_link.textContent = `${li_items.text}`;
  nav_ul.appendChild(list_li);
  list_li.appendChild(list_item_link);
});

// navbar Hamburger Button:

let hamburger_button = document.createElement("button");
hamburger_button.classList.add("btn");

let btn_bar = ["bar1", "bar2", "bar3"];
btn_bar.forEach((bars) => {
  let bar = document.createElement("span");
  bar.classList.add("bars");
  hamburger_button.appendChild(bar);
});

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

lists_container.appendChild(hamburger_button);

//<<<<<<<                 Header Section End          >>>>>>
