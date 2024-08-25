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

//<<<<<<<                 Main Section start         >>>>>>

let main = document.createElement("main");
body.appendChild(main);

//<<<<<<<                 Landing Page Section start         >>>>>>

// creating Landing Page section (Landing page text and img content)

let landing_page_section = document.createElement("section");
landing_page_section.classList.add("landing_page_section");
main.appendChild(landing_page_section);
let landing_page_content_div = document.createElement("div");
landing_page_content_div.classList.add("landing_page_content");
landing_page_section.appendChild(landing_page_content_div);

// Landing Page text content

let landing_page_text_content = document.createElement("div");
landing_page_text_content.classList.add("text_content");
landing_page_content_div.appendChild(landing_page_text_content);

let landing_page_slogan_text = document.createElement("h3");
landing_page_slogan_text.textContent = "We are best and creative agency";
let landing_page_main_heading = document.createElement("h1");
landing_page_main_heading.textContent =
  "We turn creative ideas into your business.";
let landing_page_text = document.createElement("p");
landing_page_text.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusa reiciendis voluptatem ratione doloribus`;
landing_page_text.classList.add("landing_page_description");
landing_page_slogan_text.classList.add("slogan_text");
landing_page_main_heading.classList.add("main_heading");
let landing_page_btn_container = document.createElement("div");
landing_page_btn_container.classList.add("btns_container");
let buttons_inner_text = ["Our Story", "Read More"];
buttons_inner_text.forEach((btn) => {
  let button = document.createElement("button");
  button.classList.add("btn");
  button.textContent = btn;
  landing_page_btn_container.appendChild(button);
});
landing_page_text_content.appendChild(landing_page_slogan_text);
landing_page_text_content.appendChild(landing_page_main_heading);
landing_page_text_content.appendChild(landing_page_text);
landing_page_text_content.appendChild(landing_page_btn_container);

// Landing Page Image:

let landing_page_img_container = document.createElement("div");
landing_page_img_container.classList.add("img_content");
let landing_page_img_content = document.createElement("img");
landing_page_img_content.setAttribute(
  "src",
  "../../Project_Assets/Landing_Page_img.png"
);
landing_page_img_content.setAttribute("alt", "Business Man Image");
landing_page_content_div.appendChild(landing_page_img_container);
landing_page_img_container.appendChild(landing_page_img_content);

//<<<<<<<                 Landing Page Section end         >>>>>>
