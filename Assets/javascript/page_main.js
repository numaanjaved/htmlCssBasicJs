//<<<<<<<                 Main Section start         >>>>>>

createElement("main", "main", body);

//<<<<<<<                 Landing Page Section start         >>>>>>

// creating Landing Page section (Landing page text and img content)

createElement("section", "landing_page_section", ".main");

createElement("div", "landing_page_content", ".landing_page_section");

// Landing Page text content

createElement("div", "text_content", ".landing_page_content");
createElement(
  "h3",
  "slogan_text",
  ".text_content",
  `We are best and creative agency`
);
createElement(
  "h1",
  "main_heading",
  ".text_content",
  `We are best and creative agency`
);
createElement(
  "p",
  "landing_page_description",
  ".text_content",
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusa reiciendis voluptatem ratione doloribus`
);

createElement("div", "btns_container", ".text_content");
let landing_page_btn_container = document.createElement("div");
landing_page_btn_container.classList.add("btns_container");

let buttons_inner_text = ["Our Story", "Read More"];
buttons_inner_text.forEach((btn) => {
  createElement("button", "btn", ".btns_container", `${btn}`);
});

// Landing Page Image:

createElement("div", "img_content", ".landing_page_content");
createElement("img", null, ".img_content", null, {
  src: "./Assets/images/landing_Page_img.png",
});

//<<<<<<<                 Landing Page Section end         >>>>>>

//<<<<<<<                 Branding Section start         >>>>>>

createElement("section", "branding_page_section", ".main");

createElement("div", "branding_page_content", ".branding_page_section");
// branding Page text content:

createElement("div", "branding_page_text_content", ".branding_page_content");

createElement(
  "h4",
  "slogan_text",
  ".branding_page_text_content",
  "Dream Big Inspire the World"
);
createElement(
  "h2",
  "section_heading",
  ".branding_page_text_content",
  "We turn creative ideas into your business"
);

createElement("ul", "branding_list", ".branding_page_text_content");

let branding_list_inner_content = [
  { href: "/", list_name: "Web Design" },
  { href: "/", list_name: "Mobile App" },
  { href: "/", list_name: "Branding" },
  { href: "/", list_name: "Branding" },
];

branding_list_inner_content.forEach((li_item_link) => {
  let li_item = createElement("li", "branding_list_items", ".branding_list");

  createElement("a", "branding_links", li_item, `${li_item_link.list_name}`, {
    href: `${li_item_link.href}`,
  });
});

createElement(
  "p",
  "section_text",
  ".branding_page_text_content",
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad reiciendis, dolorem vero magnam praesentium alias sequi illo. Modi quo, nobis earum cum iusto nostrum aut quibusdam non sit impedit est ipsa fugiat libero itaque ad eaque. Dolores diesw klice iokrn as, shinda kukro voluptatem.`
);

createElement("button", "btn", ".branding_page_text_content", `Read More`);

// Branding Section Image Content

createElement("div", "branding_page_img_content", ".branding_page_content");
createElement("img", null, ".branding_page_img_content", null, {
  src: "./Assets/images//watch_image.png",
  alt: "Image of a Watch",
});

//<<<<<<<                 Branding Section End        >>>>>>

//<<<<<<<                 Achievements Section Start        >>>>>>

createElement("section", "achievement_section", ".main");

createElement("div", "achievement_section_container", ".achievement_section");

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
achievement_container.forEach((con, index) => {
  let container = createElement(
    "div",
    [`sub_containers`, `cont${index + 1}`],
    ".achievement_section_container"
  );

  //   Putting Data in sub container:

  let icon = createElement("i", "icons", container);
  createElement("img", null, icon, null, {
    src: "./Assets/images/announcement.png",
    alt: "Announcement Icon",
  });

  createElement(
    "p",
    "achev_num",
    container,
    `${sub_container_content.ach_num[index]}`
  );
  createElement(
    "p",
    "achev_text",
    container,
    `${sub_container_content.ach_text[index]}`
  );
  createElement(
    "span",
    "achev_des",
    container,
    `${sub_container_content.ach_des[index]}`
  );
});

//<<<<<<<                 Achievements Section End      >>>>>>

//<<<<<<<                 Creative Section Start      >>>>>>

createElement("section", "creative_section", ".main");

createElement("div", "creative_section_container", ".creative_section");

createElement(
  "h4",
  "slogan_text",
  ".creative_section_container",
  `Let's Grow Together`
);

createElement(
  "h2",
  "section_heading",
  ".creative_section_container",
  `We turn creative ideas into your business`
);

createElement(
  "p",
  "section_text",
  ".creative_section_container",
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugit aliquam error excepturi veritatis alias ipsum facere nostrum quod non nobis officiis doloremque veniam.`
);

createElement("button", "btn", ".creative_section_container", `Read more`);

//<<<<<<<                 Creative Section End      >>>>>>

//<<<<<<<                 Our Services Section Start      >>>>>>

// let services_section = document.createElement("section");
// services_section.classList.add("services_section");
// main.appendChild(services_section);

// let services_section_container = document.createElement("div");
// services_section_container.classList.add("services_section_container");
// services_section.appendChild(services_section_container);

// let services_section_text_content_container = document.createElement("div");
// services_section_text_content_container.classList.add(
//   "services_section_text_content"
// );
// services_section_container.appendChild(services_section_text_content_container);

// Putting data in text content container:
// let services_section_slogan_text = document.createElement("h4");
// services_section_slogan_text.classList.add("slogan_text");
// services_section_slogan_text.textContent = "We are best creative agency";

// let services_section_main_heading = document.createElement("h2");
// services_section_main_heading.classList.add("section_heading");
// services_section_main_heading.textContent =
//   "We turn creative ideas into your business";

// let services_section_text = document.createElement("p");
// services_section_text.classList.add("section_text");
// services_section_text.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia impedit placeat ipsum vel aliquid delectus eos. Inventore quis atque culpa odio sed laudantium odio sed eius amet tenetur incidunt deleniti? Voluptas, eius amet amet consectetur labore!`;

// services_section_text_content_container.appendChild(
//   services_section_slogan_text
// );
// services_section_text_content_container.appendChild(
//   services_section_main_heading
// );
// services_section_text_content_container.appendChild(services_section_text);

// Sub sections of services section:
// let services_sub_div = document.createElement("div");
// services_sub_div.classList.add("services_div");
// services_section_text_content_container.appendChild(services_sub_div);

// let Array_of_sub_services_content = {
//   icons_src: [
//     "./Assets/images/chat_icon.png",
//     "./Assets/images/colorful_announcement.png",
//   ],
//   icons_alt: ["Messaging Icon", "A colorful icon of announcements"],
//   sub_section_heading: ["Graphics Design", "Graphics Design"],
//   sub_section_text: [
//     ` Lorem ipsum dolor, sit am et conse adipisicingctetur elit.Dolore harum ipsa ducimus tempora. eeyo se ti nascki.`,
//     ` Lorem ipsum dolor, sit am et conse adipisicingctetur elit.Dolore harum ipsa ducimus tempora. eeyo se ti nascki.`,
//   ],
//   sub_section_btn_text: ["READ MORE", "READ MORE"],
// };

// let Array_of_sub_services_containers = ["container1", "container2"];

// Array_of_sub_services_containers.forEach((item, index) => {
//   // Creating and Appending Div in sub div container

//   let container = document.createElement("div");
//   container.classList.add("service");
//   services_sub_div.appendChild(container);

//   //Now putting content inside each sub div:=>

//   // Defining Elements(tags):
//   let icon = document.createElement("i");
//   icon.classList.add("icons");
//   let icon_img = document.createElement("img");

//   let sub_section_heading = document.createElement("h2");
//   sub_section_heading.classList.add("sub_section_heading");

//   let sub_section_text = document.createElement("p");
//   sub_section_text.classList.add("sub_section_text");
//   let sub_section_btn = document.createElement("button");
//   sub_section_btn.classList.add(`btn`);

// Now putting values and appending:

//   icon_img.setAttribute(
//     "src",
//     `${Array_of_sub_services_content.icons_src[index]}`
//   );
//   icon_img.setAttribute(
//     "alt",
//     `${Array_of_sub_services_content.icons_alt[index]}`
//   );

//   container.appendChild(icon);
//   icon.appendChild(icon_img);

//   sub_section_heading.textContent = `${Array_of_sub_services_content.sub_section_heading[index]}`;
//   container.appendChild(sub_section_heading);

//   sub_section_text.textContent = `${Array_of_sub_services_content.sub_section_text[index]}`;
//   container.appendChild(sub_section_text);

//   sub_section_btn.textContent = `${Array_of_sub_services_content.sub_section_btn_text[index]}`;
//   container.appendChild(sub_section_btn);
// });

// Img Content of services section

// let services_section_img_content_container = document.createElement(`div`);
// services_section_img_content_container.classList.add("services_section_img");
// services_section_container.appendChild(services_section_img_content_container);

// let services_section_img = document.createElement("img");
// services_section_img.setAttribute(
//   "src",
//   "./Assets/images/services_section_image.png"
// );
// services_section_img_content_container.appendChild(services_section_img);

// Img btn:

// let img_btn = document.createElement("button");
// img_btn.classList.add("btn");
// services_section_img_content_container.appendChild(img_btn);

// let play_btn = document.createElement("img");
// play_btn.classList.add("services_section_play_button");
// play_btn.setAttribute("src", "./Assets/images/play_btn_white.png");
// play_btn.setAttribute("alt", "Play button");
// img_btn.appendChild(play_btn);

//<<<<<<<                 Our Services Section End     >>>>>>

//<<<<<<<                 Our Recent Work Section start     >>>>>>

// let our_work_section = document.createElement("section");
// our_work_section.classList.add("work_section");
// main.appendChild(our_work_section);

// let work_section_container = document.createElement("div");
// work_section_container.classList.add("work_section_container");
// our_work_section.appendChild(work_section_container);

// text content of work section:

// let work_section_text_content = document.createElement("div");
// work_section_text_content.classList.add("work_section_text_content");
// work_section_container.appendChild(work_section_text_content);

// let work_section_heading = document.createElement("h2");
// work_section_heading.classList.add("section_heading");
// work_section_heading.textContent = "Our Recent Work";
// work_section_text_content.appendChild(work_section_heading);

// let work_section_text = document.createElement("p");
// work_section_text.classList.add("section_text");
// work_section_text.textContent =
//   "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi et sapiente porro asperiores accusantium quaerat numquam, nemo pariatur aliquam maxime iusto ducimus ut nisi, nihil quos, quasi non! Necessitatibus, inventore.sit am et conse adipisicingctetur elit.";
// work_section_text_content.appendChild(work_section_text);

// let work_list_ul = document.createElement("ul");
// work_list_ul.classList.add("work_list");
// work_section_text_content.appendChild(work_list_ul);

// let items_in_ul_array = [
//   { href: "/", link_name: "Web Design" },
//   { href: "/", link_name: "Mobile App" },
//   { href: "/", link_name: "Branding" },
//   { href: "/", link_name: "Branding" },
// ];

// items_in_ul_array.forEach((li_item_name) => {
//   let list_item = document.createElement("li");
//   list_item.classList.add("work_list_items");

//   let list_item_link = document.createElement("a");
//   list_item_link.classList.add("work_links");
//   list_item_link.setAttribute("href", li_item_name.href);
//   list_item_link.textContent = li_item_name.link_name;

//   list_item.appendChild(list_item_link);
//   work_list_ul.appendChild(list_item);
// });

// let work_section_images_main_container = document.createElement("div");
// work_section_images_main_container.classList.add("work_section_images");
// work_section_container.appendChild(work_section_images_main_container);

// let work_section_img_sub_container = document.createElement("div");
// work_section_img_sub_container.classList.add("work_section_images_container");
// work_section_images_main_container.appendChild(work_section_img_sub_container);

// let Array_of_product_containers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let data_of_product_images = [
//   {
//     src: "./Assets/images/N8_image.png",
//     alt: "N8 bottle Image",
//   },
//   {
//     src: "./Assets/images/MUG_image.png",
//     alt: "Mug Image",
//   },
//   {
//     src: "./Assets/images/Book_image.png",
//     alt: "Book Image",
//   },
//   {
//     src: "./Assets/images/Tshirt_image.png",
//     alt: "T-shirt Image",
//   },
//   {
//     src: "./Assets/images/Box_image.png",
//     alt: "Box Image",
//   },
//   {
//     src: "./Assets/images/Bottles_image.png",
//     alt: "N8 bottle Image",
//   },
//   {
//     src: "./Assets/images/tags_image.png",
//     alt: "Tags(lables) Image",
//   },
//   {
//     src: "./Assets/images/Handbag_image.png",
//     alt: "Hand bag(Shopping bag) Image",
//   },
//   {
//     src: "./Assets/images/sanitizer_image.png",
//     alt: "Sanitizer Image",
//   },
// ];
// Array_of_product_containers.forEach((div, index) => {
//   let product_container = document.createElement("div");
//   product_container.classList.add("product_img");

//   let product_img = document.createElement("img");

//   product_img.setAttribute("src", `${data_of_product_images[index].src}`);
//   product_img.setAttribute("alt", `${data_of_product_images[index].alt}`);

//   work_section_img_sub_container.appendChild(product_container);
//   product_container.appendChild(product_img);
// });

// let our_work_sec_btn = document.createElement("button");
// our_work_sec_btn.textContent = `Read More`;
// our_work_sec_btn.classList.add("btn");

// work_section_container.appendChild(our_work_sec_btn);

//<<<<<<<                 Our Recent Work Section End    >>>>>>

//<<<<<<<                 Our Partners Section Start   >>>>>>

// let partners_section = document.createElement("section");
// partners_section.classList.add(`partners_section`);
// main.appendChild(partners_section);

// let partners_section_container = document.createElement("div");
// partners_section_container.classList.add(`partners_section_container`);
// partners_section.appendChild(partners_section_container);

// let data_of_images = [
//   { src: "./Assets/images/CISCO.png", alt: "CISCO Logo" },
//   { src: "./Assets/images/ADIDAS.png", alt: "ADIDAS Logo" },
//   { src: "./Assets/images/LENOVO.png", alt: "LENOVO Logo" },
//   { src: "./Assets/images/DISNEP.png", alt: "DISNEP Logo" },
//   { src: "./Assets/images/AMAZON.png", alt: "AMAZON Logo" },
//   { src: "./Assets/images/PUMA.png", alt: "PUMA Logo" },
//   { src: "./Assets/images/APPLE.png", alt: "APPLE Logo" },
//   { src: "./Assets/images/MINI.png", alt: "MINI Logo" },
// ];

// data_of_images.forEach((data) => {
//   let img_tag = document.createElement("img");
//   img_tag.classList.add("partner_logo");
//   img_tag.setAttribute("src", data.src);
//   img_tag.setAttribute("alt", data.alt);
//   partners_section_container.appendChild(img_tag);
// });

//<<<<<<<                 Our Partners Section End     >>>>>

//<<<<<<<                 Testimonials Section start   >>>>>

// let testimonial_section = document.createElement("section");
// testimonial_section.classList.add("testimonial_section");
// main.appendChild(testimonial_section);

// let testimonial_section_container = document.createElement("div");
// testimonial_section_container.classList.add("testimonial_section_container");
// testimonial_section.appendChild(testimonial_section_container);

// Testimonials Section text content:
// let testimonial_section_text_container = document.createElement("div");
// testimonial_section_text_container.classList.add(
//   "testimonial_section_text_content"
// );
// testimonial_section_container.appendChild(testimonial_section_text_container);

// let testimonial_section_slogan_text = document.createElement("h4");
// testimonial_section_slogan_text.classList.add("slogan_text");
// testimonial_section_slogan_text.textContent = "Our Happy Client";
// testimonial_section_text_container.appendChild(testimonial_section_slogan_text);

// testimonial_section_text_container.appendChild(testimonial_section_slogan_text);
// let testimonial_section_main_heading = document.createElement("h2");
// testimonial_section_main_heading.classList.add(`section_heading`);
// testimonial_section_main_heading.textContent = "Testimonials";
// testimonial_section_text_container.appendChild(
//   testimonial_section_main_heading
// );

// let client_review_container = document.createElement("div");
// client_review_container.classList.add("client_review");
// testimonial_section_text_container.appendChild(client_review_container);

// let client_review_text = document.createElement("p");
// client_review_text.classList.add("section_text");
// client_review_text.textContent = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nisi doloribus at aut rerum, sed ji autem, praesentium magnam dolore odit possim neque temporibus.`;
// client_review_container.appendChild(client_review_text);

// let client_info_container = document.createElement("div");
// client_info_container.classList.add("client_info");
// client_review_container.appendChild(client_info_container);

// let stars_container = document.createElement("div");
// stars_container.classList.add("stars_container");
// client_info_container.appendChild(stars_container);

// for (let i = 0; i < 5; i++) {
//   let star = document.createElement("img");
//   star.setAttribute("src", "./Assets/images/star_icon.png");
//   star.setAttribute("alt", "Star Icon");
//   stars_container.appendChild(star);
// }

// let testimonial_client_name = document.createElement("p");
// testimonial_client_name.classList.add("client_name");
// testimonial_client_name.textContent = "Mr. John Doe";
// client_info_container.appendChild(testimonial_client_name);

// let testimonial_section_img_container = document.createElement("div");
// testimonial_section_img_container.classList.add("testimonial_section_img");
// testimonial_section_container.appendChild(testimonial_section_img_container);

// let testimonial_section_img = document.createElement("img");
// testimonial_section_img.setAttribute(
//   "src",
//   "./Assets/images/testimonals_img.png"
// );
// testimonial_section_img.setAttribute("alt", "A you businessman picture");
// testimonial_section_img_container.appendChild(testimonial_section_img);

//<<<<<<<                 Testimonials Section End   >>>>>

//<<<<<<<                 Contact Section Start    >>>>>

// let contact_section = document.createElement("div");
// contact_section.classList.add("contact_section");
// main.appendChild(contact_section);

// let contact_section_container = document.createElement("div");
// contact_section_container.classList.add("contact_section_container");
// contact_section.appendChild(contact_section_container);

// let contact_section_text_container = document.createElement("div");
// contact_section_text_container.classList.add("contact_section_text_content");
// contact_section_container.appendChild(contact_section_text_container);

// let contact_section_main_heading = document.createElement("h2");
// contact_section_main_heading.classList.add("section_heading");
// contact_section_main_heading.textContent = "Need Help?";
// contact_section_text_container.appendChild(contact_section_main_heading);

// let contact_section_sub_heading = document.createElement("h3");
// contact_section_sub_heading.classList.add("section_sub_heading");
// contact_section_sub_heading.textContent = "Don't Forget to Contact With Us";
// contact_section_text_container.appendChild(contact_section_sub_heading);

// let contact_section_text = document.createElement("p");
// contact_section_text.classList.add("section_text");
// contact_section_text.textContent = ` Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, cumque? Nobis repellat vel quas ab in cumque? Animi, corporis architecto! Quibusdam sint laboriosam laudantium omnis in recusandae eum ullam similique?`;
// contact_section_text_container.appendChild(contact_section_text);

// let contact_input_div = document.createElement("div");
// contact_input_div.classList.add("contact_div");
// contact_section_text_container.appendChild(contact_input_div);

// let contact_form = document.createElement("form");
// contact_form.classList.add("contact_form");
// contact_input_div.appendChild(contact_form);

// let input_data_array = [
//   {
//     type: "text",
//     placeholder: "Name",
//     name: "name_input",
//     id: "customer_name_input",
//     required: true,
//     spellcheck: false,
//     autocomplete: "off",
//   },
//   {
//     type: "email",
//     placeholder: "Email",
//     name: "email_input",
//     id: "customer_email_input",
//     required: true,
//     spellcheck: false,
//     autocomplete: "off",
//   },
// ];

// input_data_array.forEach((data, index) => {
//   let data_input = document.createElement("input");
//   data_input.classList.add("contact_input");
//   data_input.type = data.type;
//   data_input.placeholder = data.placeholder;
//   data_input.name = data.name;
//   data_input.id = data.id;
//   data_input.spellcheck = data.spellcheck;
//   data_input.required = data.required;
//   data_input.autocomplete = data.autocomplete;
//   contact_form.appendChild(data_input);
// });

// let contact_form_submit_btn = document.createElement(`button`);
// contact_form_submit_btn.classList.add("form_btn");
// contact_form_submit_btn.textContent = "SUBMIT";
// contact_form.appendChild(contact_form_submit_btn);

//<<<<<<<                 Contact Section End    >>>>>

//<<<<<<<                 Social Links Section Start   >>>>>

// let social_links_section = document.createElement("section");
// social_links_section.classList.add("social_links_section");
// main.appendChild(social_links_section);

// let social_links_container = document.createElement("div");
// social_links_container.classList.add("social_links_section_container");
// social_links_section.appendChild(social_links_container);

// let links_container = document.createElement("div");
// links_container.classList.add("links_container");
// social_links_container.appendChild(links_container);

// let social_links = [
//   { href: "/", link_name: "facebook" },
//   { href: "/", link_name: "twitter" },
//   { href: "/", link_name: "linkedin" },
//   { href: "/", link_name: "instagram" },
//   { href: "/", link_name: "behance" },
// ];
// social_links.forEach((social_link_name, index) => {
//   social_link_name = document.createElement("a");
//   social_link_name.classList.add("social_links");
//   social_link_name.textContent = social_links[index].link_name;
//   social_link_name.setAttribute("href", social_links[index].href);
//   links_container.appendChild(social_link_name);
// });

//<<<<<<<                 Social Links Section End        >>>>>
//<<<<<<<                     Main Section End        >>>>>>
