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

//<<<<<<<                 Our Recent Work Section start     >>>>>>

let our_work_section = document.createElement("section");
our_work_section.classList.add("work_section");
main.appendChild(our_work_section);

let work_section_container = document.createElement("div");
work_section_container.classList.add("work_section_container");
our_work_section.appendChild(work_section_container);

// text content of work section:

let work_section_text_content = document.createElement("div");
work_section_text_content.classList.add("work_section_text_content");
work_section_container.appendChild(work_section_text_content);

let work_section_heading = document.createElement("h2");
work_section_heading.classList.add("section_heading");
work_section_heading.textContent = "Our Recent Work";
work_section_text_content.appendChild(work_section_heading);

let work_section_text = document.createElement("p");
work_section_text.classList.add("section_text");
work_section_text.textContent =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi et sapiente porro asperiores accusantium quaerat numquam, nemo pariatur aliquam maxime iusto ducimus ut nisi, nihil quos, quasi non! Necessitatibus, inventore.sit am et conse adipisicingctetur elit.";
work_section_text_content.appendChild(work_section_text);

let work_list_ul = document.createElement("ul");
work_list_ul.classList.add("work_list");
work_section_text_content.appendChild(work_list_ul);

let items_in_ul_array = ["Web Design", "Mobile App", "Branding", "Branding"];

items_in_ul_array.forEach((li_item_name) => {
  let list_item = document.createElement("li");
  list_item.classList.add("work_list_items");

  let list_item_link = document.createElement("a");
  list_item_link.classList.add("work_links");
  list_item_link.textContent = li_item_name;

  list_item.appendChild(list_item_link);
  work_list_ul.appendChild(list_item);
});

let work_section_images_main_container = document.createElement("div");
work_section_images_main_container.classList.add("work_section_images");
work_section_container.appendChild(work_section_images_main_container);

let work_section_img_sub_container = document.createElement("div");
work_section_img_sub_container.classList.add("work_section_images_container");
work_section_images_main_container.appendChild(work_section_img_sub_container);

let Array_of_product_containers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let data_of_product_images = [
  {
    src: "../../Project_Assets/N8_image.png",
    alt: "N8 bottle Image",
  },
  {
    src: "../../Project_Assets/MUG_image.png",
    alt: "Mug Image",
  },
  {
    src: "../../Project_Assets/Book_image.png",
    alt: "Book Image",
  },
  {
    src: "../../Project_Assets/Tshirt_image.png",
    alt: "T-shirt Image",
  },
  {
    src: "../../Project_Assets/Box_image.png",
    alt: "Box Image",
  },
  {
    src: "../../Project_Assets/Bottles_image.png",
    alt: "N8 bottle Image",
  },
  {
    src: "../../Project_Assets/tags_image.png",
    alt: "Tags(lables) Image",
  },
  {
    src: "../../Project_Assets/Handbag_image.png",
    alt: "Hand bag(Shopping bag) Image",
  },
  {
    src: "../../Project_Assets/sanitizer_image.png",
    alt: "Sanitizer Image",
  },
];
Array_of_product_containers.forEach((product_container, index) => {
  product_container = document.createElement("div");
  product_container.classList.add("product_img");

  let product_img = document.createElement("img");

  product_img.setAttribute("src", `${data_of_product_images[index].src}`);
  product_img.setAttribute("alt", `${data_of_product_images[index].alt}`);

  work_section_img_sub_container.appendChild(product_container);
  product_container.appendChild(product_img);
});

let our_work_sec_btn = document.createElement("button");
our_work_sec_btn.textContent = `Read More`;
our_work_sec_btn.classList.add("btn");

work_section_container.appendChild(our_work_sec_btn);

//<<<<<<<                 Our Recent Work Section End    >>>>>>

//<<<<<<<                 Our Partners Section Start   >>>>>>

let partners_section = document.createElement("section");
partners_section.classList.add(`partners_section`);
main.appendChild(partners_section);

let partners_section_container = document.createElement("div");
partners_section_container.classList.add(`partners_section_container`);
partners_section.appendChild(partners_section_container);

let data_of_images = [
  { src: "../../Project_Assets/CISCO.png", alt: "CISCO Logo" },
  { src: "../../Project_Assets/ADIDAS.png", alt: "ADIDAS Logo" },
  { src: "../../Project_Assets/LENOVO.png", alt: "LENOVO Logo" },
  { src: "../../Project_Assets/DISNEP.png", alt: "DISNEP Logo" },
  { src: "../../Project_Assets/AMAZON.png", alt: "AMAZON Logo" },
  { src: "../../Project_Assets/PUMA.png", alt: "PUMA Logo" },
  { src: "../../Project_Assets/APPLE.png", alt: "APPLE Logo" },
  { src: "../../Project_Assets/MINI.png", alt: "MINI Logo" },
];

data_of_images.forEach((data) => {
  let img_tag = document.createElement("img");
  img_tag.classList.add("partner_logo");
  img_tag.setAttribute("src", data.src);
  img_tag.setAttribute("alt", data.alt);
  partners_section_container.appendChild(img_tag);
});

//<<<<<<<                 Our Partners Section End     >>>>>

//<<<<<<<                 Testimonials Section start   >>>>>

let testimonial_section = document.createElement("section");
testimonial_section.classList.add("testimonial_section");
main.appendChild(testimonial_section);

let testimonial_section_container = document.createElement("div");
testimonial_section_container.classList.add("testimonial_section_container");
testimonial_section.appendChild(testimonial_section_container);

// Testimonials Section text content:
let testimonial_section_text_container = document.createElement("div");
testimonial_section_text_container.classList.add(
  "testimonial_section_text_content"
);
testimonial_section_container.appendChild(testimonial_section_text_container);

let testimonial_section_slogan_text = document.createElement("h4");
testimonial_section_slogan_text.classList.add("slogan_text");
testimonial_section_slogan_text.textContent = "Our Happy Client";
testimonial_section_text_container.appendChild(testimonial_section_slogan_text);

testimonial_section_text_container.appendChild(testimonial_section_slogan_text);
let testimonial_section_main_heading = document.createElement("h2");
testimonial_section_main_heading.classList.add(`section_heading`);
testimonial_section_main_heading.textContent = "Testimonials";
testimonial_section_text_container.appendChild(
  testimonial_section_main_heading
);

let client_review_container = document.createElement("div");
client_review_container.classList.add("client_review");
testimonial_section_text_container.appendChild(client_review_container);

let client_review_text = document.createElement("p");
client_review_text.classList.add("section_text");
client_review_text.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos nisi doloribus at aut rerum, sed ji autem,
                praesentium magnam dolore odit possim neque temporibus.`;
client_review_container.appendChild(client_review_text);

let client_info_container = document.createElement("div");
client_info_container.classList.add("client_info");
client_review_container.appendChild(client_info_container);

let stars_container = document.createElement("div");
stars_container.classList.add("stars_container");
client_info_container.appendChild(stars_container);

for (let i = 0; i < 5; i++) {
  let star = document.createElement("i");
  star.classList.add("fa-solid");
  star.classList.add("fa-star");
  stars_container.appendChild(star);
}

let testimonial_client_name = document.createElement("p");
testimonial_client_name.classList.add("client_name");
testimonial_client_name.textContent = "Mr. John Doe";
client_info_container.appendChild(testimonial_client_name);

let testimonial_section_img_container = document.createElement("div");
testimonial_section_img_container.classList.add("testimonial_section_img");
testimonial_section_container.appendChild(testimonial_section_img_container);

let testimonial_section_img = document.createElement("img");
testimonial_section_img.setAttribute(
  "src",
  "../../Project_Assets/testimonals_img.png"
);
testimonial_section_img.setAttribute("alt", "A you businessman picture");
testimonial_section_img_container.appendChild(testimonial_section_img);

//<<<<<<<                 Testimonials Section End   >>>>>

//<<<<<<<                 Contact Section Start    >>>>>

let contact_section = document.createElement("div");
contact_section.classList.add("contact_section");
main.appendChild(contact_section);

let contact_section_container = document.createElement("div");
contact_section_container.classList.add("contact_section_container");
contact_section.appendChild(contact_section_container);

let contact_section_text_container = document.createElement("div");
contact_section_text_container.classList.add("contact_section_text_content");
contact_section_container.appendChild(contact_section_text_container);

let contact_section_main_heading = document.createElement("h2");
contact_section_main_heading.classList.add("section_heading");
contact_section_main_heading.textContent = "Need Help?";
contact_section_text_container.appendChild(contact_section_main_heading);

let contact_section_sub_heading = document.createElement("h3");
contact_section_sub_heading.classList.add("section_sub_heading");
contact_section_sub_heading.textContent = "Don't Forget to Contact With Us";
contact_section_text_container.appendChild(contact_section_sub_heading);

let contact_section_text = document.createElement("p");
contact_section_text.classList.add("section_text");
contact_section_text.textContent = ` Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Mollitia, cumque? Nobis repellat vel quas ab in cumque? Animi,
              corporis architecto! Quibusdam sint laboriosam laudantium omnis in
              recusandae eum ullam similique?`;
contact_section_text_container.appendChild(contact_section_text);

let contact_input_div = document.createElement("div");
contact_input_div.classList.add("contact_div");
contact_section_text_container.appendChild(contact_input_div);

let contact_form = document.createElement("form");
contact_form.classList.add("contact_form");
contact_input_div.appendChild(contact_form);

let input_data_array = [
  {
    type: "text",
    placeholder: "Name",
    name: "name_input",
    id: "customer_name_input",
  },
  {
    type: "email",
    placeholder: "Email",
    name: "email_input",
    id: "customer_email_input",
  },
];

input_data_array.forEach((data, index) => {
  let data_input = document.createElement("input");
  data_input.classList.add("contact_input");
  data_input.type = `${data.type}`;
  data_input.placeholder = `${data.placeholder}`;
  data_input.name = `${data.name}`;
  data_input.id = `${data.id}`;
  data_input.spellcheck = `${data.spellcheck}`;
  data_input.required = true;
  data_input.spellcheck = false;
  data_input.autocomplete = "off";
  contact_form.appendChild(data_input);
});

let contact_form_submit_btn = document.createElement(`button`);
contact_form_submit_btn.classList.add("form_btn");
contact_form_submit_btn.textContent = "SUBMIT";
contact_form.appendChild(contact_form_submit_btn);

//<<<<<<<                 Contact Section End    >>>>>

//<<<<<<<                 Social Links Section Start   >>>>>

let social_links_section = document.createElement("section");
social_links_section.classList.add("social_links_section");
main.appendChild(social_links_section);

let social_links_container = document.createElement("div");
social_links_container.classList.add("social_links_section_container");
social_links_section.appendChild(social_links_container);

let links_container = document.createElement("div");
links_container.classList.add("links_container");
social_links_container.appendChild(links_container);

let social_links = [
  { href: "/", link_name: "facebook" },
  { href: "/", link_name: "twitter" },
  { href: "/", link_name: "linkedin" },
  { href: "/", link_name: "instagram" },
  { href: "/", link_name: "behance" },
];
social_links.forEach((social_link_name, index) => {
  social_link_name = document.createElement("a");
  social_link_name.classList.add("social_links");
  social_link_name.textContent = `${social_links[index].link_name}`;
  social_link_name.setAttribute("href", `${social_links[index].href}`);
  links_container.appendChild(social_link_name);
});

//<<<<<<<                 Social Links Section End  >>>>>

//<<<<<<<====                 Footer Section start             ====>>>>>

let footer = document.createElement("footer");
footer.classList.add("footer");
body.appendChild(footer);

let footer_section = document.createElement("section");
footer_section.classList.add("footer_section_content");
footer.appendChild(footer_section);

let footer_main_content = document.createElement("div");
footer_main_content.classList.add("main_content");
footer_section.appendChild(footer_main_content);

let footer_main_text_content_div = document.createElement("div");
footer_main_text_content_div.classList.add("text_content_div");
footer_main_content.appendChild(footer_main_text_content_div);

let name_of_companies = ["Company1", "Company2", "Company3", "Company4"];
let links_in_company = [
  ["About", "Apporach", "Sustainability", "Careers", "News"],
  ["Scope", "Design", "Accountability", "Profession", "Media"],
  ["Product", "Development", "Services", "Sales", "Records"],
  ["Help", "Contact", "Policy", "What's New?", "Faq"],
];
links_in_company.forEach((links_names, index) => {
  let subDiv = document.createElement("div");
  subDiv.classList.add("text_sub_content");

  let sub_section_heading = document.createElement("h4");
  sub_section_heading.classList.add("section_sub_heading");
  sub_section_heading.textContent = name_of_companies[index];

  footer_main_text_content_div.appendChild(subDiv);
  subDiv.appendChild(sub_section_heading);

  //Adding company links list:
  let company_linkList = document.createElement("ul");
  company_linkList.classList.add(`company_list`);
  subDiv.appendChild(company_linkList);

  //   Creating li and extracting data from Array
  links_names.forEach((li_link_name) => {
    let li_items = document.createElement("li");
    li_items.classList.add("company_list_items");
    company_linkList.appendChild(li_items);

    //   Now creating Link of Li:

    let company_li_link = document.createElement("a");
    company_li_link.classList.add("company_item_link");
    company_li_link.href = "/";
    company_li_link.textContent = li_link_name;
    li_items.appendChild(company_li_link);
  });
});

let footer_img_content_div = document.createElement("div");
footer_img_content_div.classList.add("img_content_div");
footer_main_content.appendChild(footer_img_content_div);

let company_img_divs = ["div1", "div2", "div3", "div4"];

company_img_divs.forEach((div_data, index) => {
  let div = document.createElement("div");
  div.classList.add("company_image");
  footer_img_content_div.appendChild(div);

  //   creating_img tag:
  let company_images_data = [
    { src: "../../Project_Assets/Company_img1.png", alt: "Company Image" },
    { src: "../../Project_Assets/Company_img2.png", alt: "Company Image" },
    { src: "../../Project_Assets/Company_img3.png", alt: "Company Image" },
    { src: "../../Project_Assets/Company_img4.png", alt: "Company Image" },
  ];
  let company_img = document.createElement("img");
  company_img.setAttribute("src", `${company_images_data[index].src}`);
  company_img.setAttribute("alt", `${company_images_data[index].alt}`);
  div.appendChild(company_img);
});

// bottom part of Footer:

let footer_sub_content = document.createElement("div");
footer_sub_content.classList.add("sub_content");
footer_section.appendChild(footer_sub_content);

let text_content_footer_bottom = document.createElement("div");
text_content_footer_bottom.classList.add("text_content_footer_bottom");
footer_sub_content.appendChild(text_content_footer_bottom);

let footer_items_ul = document.createElement("ul");
footer_items_ul.classList.add("footer_items");
text_content_footer_bottom.appendChild(footer_items_ul);

let footer_li_items_array = ["li1", "li2", "li3", "li4"];

let Array_of_li_names = [
  `\u00A9 Themes by psdfreebies.com`,
  "Privacy",
  "Terms of Use",
  "Site Map",
];
Array_of_li_names.forEach((list_name) => {
  let bottom_footer_list_item = document.createElement("li");
  bottom_footer_list_item.classList.add("footer_list_item");
  footer_items_ul.appendChild(bottom_footer_list_item);

  //   now adding links in it:
  let footer_list_item_link = document.createElement("a");
  footer_list_item_link.classList.add("footer_list_item_link");
  footer_list_item_link.textContent = list_name;
  bottom_footer_list_item.appendChild(footer_list_item_link);
});

//<<<<<<<====                 Footer Section End           ====>>>>>
