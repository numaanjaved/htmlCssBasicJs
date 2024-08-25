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

//<<<<<<<                 Branding Section start         >>>>>>

let branding_page_section = document.createElement("section");
branding_page_section.classList.add("branding_page_section");
main.appendChild(branding_page_section);

let branding_page_content_div = document.createElement("div");
branding_page_content_div.classList.add("branding_page_content");
branding_page_section.appendChild(branding_page_content_div);

// branding Page text content:

let branding_page_text_content_div = document.createElement("div");
branding_page_text_content_div.classList.add("branding_page_text_content");
branding_page_content_div.appendChild(branding_page_text_content_div);

let branding_main_heading, branding_slogan_text;
branding_slogan_text = document.createElement("h4");
branding_main_heading = document.createElement("h2");
branding_slogan_text.classList.add("slogan_text");
branding_main_heading.classList.add("section_heading");
branding_slogan_text.textContent = "Dream Big Inspire the World";
branding_main_heading.textContent = "We turn creative ideas into your business";
branding_page_text_content_div.appendChild(branding_slogan_text);
branding_page_text_content_div.appendChild(branding_main_heading);

let branding_list = document.createElement("ul");
branding_list.classList.add("branding_list");
branding_page_text_content_div.appendChild(branding_list);

let branding_list_inner_content = [
  { href: "/", list_name: "Web Design" },
  { href: "/", list_name: "Mobile App" },
  { href: "/", list_name: "Branding" },
  { href: "/", list_name: "Branding" },
];

branding_list_inner_content.forEach((li_item_link) => {
  let li_item = document.createElement("li");
  li_item.classList.add("branding_list_items");
  let li_item_link_def = document.createElement("a");
  li_item_link_def.classList.add("branding_links");
  li_item_link_def.textContent = li_item_link.list_name;
  li_item_link_def.setAttribute("href", `${li_item_link.href}`);
  branding_list.appendChild(li_item);
  li_item.appendChild(li_item_link_def);
});

let branding_section_text = document.createElement("p");
branding_section_text.classList.add("section_text");
branding_section_text.textContent = ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad reiciendis, dolorem vero magnam praesentium alias sequi illo. Modi quo, nobis earum cum iusto nostrum aut quibusdam non sit impedit est ipsa fugiat libero itaque ad eaque. Dolores diesw klice iokrn as, shinda kukro voluptatem.`;
branding_page_text_content_div.appendChild(branding_section_text);

let branding_section_btn = document.createElement("button");
branding_section_btn.classList.add("btn");
branding_section_btn.textContent = "Read More";
branding_page_text_content_div.appendChild(branding_section_btn);

// Branding Section Image Content

let branding_section_img_container = document.createElement("div");
branding_section_img_container.classList.add("branding_page_img_content");
let branding_section_img = document.createElement("img");
branding_section_img.setAttribute(
  "src",
  "../../Project_Assets/watch_image.png"
);
branding_section_img.setAttribute("alt", "Image of a Watch");

branding_page_content_div.appendChild(branding_section_img_container);
branding_section_img_container.appendChild(branding_section_img);

//<<<<<<<                 Branding Section End        >>>>>>

//<<<<<<<                 Achievements Section Start        >>>>>>
let achievements_section = document.createElement("section");
achievements_section.classList.add("achievement_section");
main.appendChild(achievements_section);
let achievement_section_container = document.createElement("div");
achievement_section_container.classList.add("achievement_section_container");
achievements_section.appendChild(achievement_section_container);

let achievement_container = ["container1", "container2", "container3"];
let sub_container_content = {
  ach_num: ["500+", "254+", "45+"],
  ach_text: [
    "Successfully Completed Projects",
    "Highly Specialized Employees",
    "Awards <br />around the world",
  ],
  ach_des: [
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolor eligendi iusto mollitia aperiam.`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolor eligendi iusto mollitia aperiam.`,
    `Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi dolor eligendi iusto mollitia aperiam.`,
  ],
};
achievement_container.forEach((container, index) => {
  container = document.createElement("div");
  container.classList.add("sub_containers");
  container.classList.add(`cont${index + 1}`);
  achievement_section_container.appendChild(container);

  //   Putting Data in sub container:

  let i_tag = document.createElement("i");
  i_tag.classList.add("icons");
  let i_tag_img = document.createElement("img");
  i_tag_img.setAttribute("src", "../../Project_Assets/announcement.png");
  i_tag_img.setAttribute("alt", "Announcement Icon");
  i_tag.appendChild(i_tag_img);

  let achev_num = document.createElement("p");
  achev_num.classList.add("achev_num");

  let achev_text = document.createElement("p");
  achev_text.classList.add("achev_text");

  let achev_des = document.createElement("span");
  achev_des.classList.add("achev_des");

  //   Putting inner HTML in elements of sub container

  achev_num.textContent = sub_container_content.ach_num[index];
  achev_text.innerHTML = `${sub_container_content.ach_text[index]}`;
  achev_des.textContent = sub_container_content.ach_des[index];

  //   Appending Child in sub container

  container.appendChild(i_tag);
  container.appendChild(achev_num);
  container.appendChild(achev_text);
  container.appendChild(achev_des);
});

//<<<<<<<                 Achievements Section End      >>>>>>

//<<<<<<<                 Creative Section Start      >>>>>>

let creative_section = document.createElement("section");
creative_section.classList.add("creative_section");
main.appendChild(creative_section);

let creative_section_container = document.createElement("div");
creative_section_container.classList.add("creative_section_container");
creative_section.appendChild(creative_section_container);

let creative_section_slogan_text = document.createElement("h4");
creative_section_slogan_text.classList.add("slogan_text");
creative_section_slogan_text.textContent = `Let's Grow Together`;

let creative_section_main_heading = document.createElement("h2");
creative_section_main_heading.classList.add("section_heading");
creative_section_main_heading.textContent = `We turn creative ideas into your business`;

let creative_section_text = document.createElement("p");
creative_section_text.classList.add("section_text");
creative_section_text.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugit aliquam error excepturi veritatis alias ipsum facere nostrum quod non nobis officiis doloremque veniam.`;

let creative_section_btn = document.createElement("button");
creative_section_btn.classList.add("btn");
creative_section_btn.textContent = "Read More";

creative_section_container.appendChild(creative_section_slogan_text);
creative_section_container.appendChild(creative_section_main_heading);
creative_section_container.appendChild(creative_section_text);
creative_section_container.appendChild(creative_section_btn);

//<<<<<<<                 Creative Section End      >>>>>>

//<<<<<<<                 Our Services Section Start      >>>>>>

let services_section = document.createElement("section");
services_section.classList.add("services_section");
main.appendChild(services_section);

let services_section_container = document.createElement("div");
services_section_container.classList.add("services_section_container");
services_section.appendChild(services_section_container);

let services_section_text_content_container = document.createElement("div");
services_section_text_content_container.classList.add(
  "services_section_text_content"
);
services_section_container.appendChild(services_section_text_content_container);

// Putting data in text content container:
let services_section_slogan_text = document.createElement("h4");
services_section_slogan_text.classList.add("slogan_text");
services_section_slogan_text.textContent = "We are best creative agency";

let services_section_main_heading = document.createElement("h2");
services_section_main_heading.classList.add("section_heading");
services_section_main_heading.textContent =
  "We turn creative ideas into your business";

let services_section_text = document.createElement("p");
services_section_text.classList.add("section_text");
services_section_text.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia impedit placeat ipsum vel aliquid delectus eos. Inventore quis atque culpa odio sed laudantium odio sed eius amet tenetur incidunt deleniti? Voluptas, eius amet amet consectetur labore!`;

services_section_text_content_container.appendChild(
  services_section_slogan_text
);
services_section_text_content_container.appendChild(
  services_section_main_heading
);
services_section_text_content_container.appendChild(services_section_text);

// Sub sections of services section:
let services_sub_div = document.createElement("div");
services_sub_div.classList.add("services_div");
services_section_text_content_container.appendChild(services_sub_div);

let Array_of_sub_services_content = {
  icons_src: [
    "../../Project_Assets/chat_icon.png",
    "../../Project_Assets/colorful_announcement.png",
  ],
  icons_alt: ["Messaging Icon", "A colorful icon of announcements"],
  sub_section_heading: ["Graphics Design", "Graphics Design"],
  sub_section_text: [
    ` Lorem ipsum dolor, sit am et conse adipisicingctetur elit.Dolore harum ipsa ducimus tempora. eeyo se ti nascki.`,
    ` Lorem ipsum dolor, sit am et conse adipisicingctetur elit.Dolore harum ipsa ducimus tempora. eeyo se ti nascki.`,
  ],
  sub_section_btn_text: ["READ MORE", "READ MORE"],
};

let Array_of_sub_services_containers = ["container1", "container2"];

Array_of_sub_services_containers.forEach((container, index) => {
  // Creating and Appending Div in sub div container

  container = document.createElement("div");
  container.classList.add("service");
  services_sub_div.appendChild(container);

  //Now putting content inside each sub div:=>

  // Defining Elements(tags):
  let icon = document.createElement("i");
  icon.classList.add("icons");
  let icon_img = document.createElement("img");

  let sub_section_heading = document.createElement("h2");
  sub_section_heading.classList.add("sub_section_heading");

  let sub_section_text = document.createElement("p");
  sub_section_text.classList.add("sub_section_text");
  let sub_section_btn = document.createElement("button");
  sub_section_btn.classList.add(`btn`);

  // Now putting values and appending:

  icon_img.setAttribute(
    "src",
    `${Array_of_sub_services_content.icons_src[index]}`
  );
  icon_img.setAttribute(
    "alt",
    `${Array_of_sub_services_content.icons_alt[index]}`
  );

  container.appendChild(icon);
  icon.appendChild(icon_img);

  sub_section_heading.textContent = `${Array_of_sub_services_content.sub_section_heading[index]}`;
  container.appendChild(sub_section_heading);

  sub_section_text.textContent = `${Array_of_sub_services_content.sub_section_text[index]}`;
  container.appendChild(sub_section_text);

  sub_section_btn.textContent = `${Array_of_sub_services_content.sub_section_btn_text[index]}`;
  container.appendChild(sub_section_btn);
});

// Img Content of services section

let services_section_img_content_container = document.createElement(`div`);
services_section_img_content_container.classList.add("services_section_img");
services_section_container.appendChild(services_section_img_content_container);
let services_section_img = document.createElement("img");
services_section_img.setAttribute(
  "src",
  "../../Project_Assets/services_section_image.png"
);
services_section_img_content_container.appendChild(services_section_img);

// Img btn:

let img_btn = document.createElement("button");
img_btn.classList.add("btn");
services_section_img_content_container.appendChild(img_btn);
let play_btn = document.createElement("i");
play_btn.classList.add("fa-solid");
play_btn.classList.add("fa-play");
img_btn.appendChild(play_btn);

//<<<<<<<                 Our Services Section End     >>>>>>
