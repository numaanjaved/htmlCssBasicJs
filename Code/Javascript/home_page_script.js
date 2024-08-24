let body = document.body;
// Defining Landing Page Container:
let landing_page_container = document.createElement("div");
landing_page_container.classList.add("landing_Page_container");

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
logo_img.setAttribute("src", "../../Project_Assets/BlueRex_Logo.png");
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
  { href: "../../home_page.html", text: "Home" },
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
// creating hamburger button using fontawesome:
let i_tag = document.createElement("i");
i_tag.classList.add("fa-solid");
i_tag.classList.add("fa-bars");
lists_container.appendChild(hamburger_button);
hamburger_button.appendChild(i_tag);

//<<<<<<<                 Header Section End          >>>>>>
