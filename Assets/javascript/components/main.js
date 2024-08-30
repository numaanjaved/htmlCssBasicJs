//<<<<<<<                 Main Section start         >>>>>>

createNewElement("main", "main", body);

//<<<<<<<                 Landing Page Section start         >>>>>>

// creating Landing Page section (Landing page text and img content)

createNewElement("section", "landing_page_section", ".main");

createNewElement("div", "landing_page_content", ".landing_page_section");

// Landing Page text content

createNewElement("div", "text_content", ".landing_page_content");
createNewElement(
  "h3",
  "slogan_text",
  ".text_content",
  `We are best and creative agency`
);
createNewElement(
  "h1",
  "main_heading",
  ".text_content",
  `We are best and creative agency`
);
createNewElement(
  "p",
  "landing_page_description",
  ".text_content",
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusa reiciendis voluptatem ratione doloribus`
);

createNewElement("div", "btns_container", ".text_content");

let buttons_inner_text = ["Our Story", "Read More"];
buttons_inner_text.forEach((btn) => {
  createNewElement("button", "btn", ".btns_container", `${btn}`);
});

// Landing Page Image:

createNewElement("div", "img_content", ".landing_page_content");
createNewElement("img", null, ".img_content", null, {
  src: "./Assets/images/landing_Page_img.png",
});

//<<<<<<<                 Landing Page Section end         >>>>>>

//<<<<<<<                 Branding Section start         >>>>>>

createNewElement("section", "branding_page_section", ".main");

createNewElement("div", "branding_page_content", ".branding_page_section");
// branding Page text content:

createNewElement("div", "branding_page_text_content", ".branding_page_content");

createNewElement(
  "h4",
  "slogan_text",
  ".branding_page_text_content",
  "Dream Big Inspire the World"
);
createNewElement(
  "h2",
  "section_heading",
  ".branding_page_text_content",
  "We turn creative ideas into your business"
);

createNewElement("ul", "branding_list", ".branding_page_text_content");

let branding_list_inner_content = [
  { href: "/", list_name: "Web Design" },
  { href: "/", list_name: "Mobile App" },
  { href: "/", list_name: "Branding" },
  { href: "/", list_name: "Branding" },
];

branding_list_inner_content.forEach((li_item_link) => {
  let li_item = createNewElement("li", "branding_list_items", ".branding_list");

  createNewElement(
    "a",
    "branding_links",
    li_item,
    `${li_item_link.list_name}`,
    {
      href: `${li_item_link.href}`,
    }
  );
});

createNewElement(
  "p",
  "section_text",
  ".branding_page_text_content",
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad reiciendis, dolorem vero magnam praesentium alias sequi illo. Modi quo, nobis earum cum iusto nostrum aut quibusdam non sit impedit est ipsa fugiat libero itaque ad eaque. Dolores diesw klice iokrn as, shinda kukro voluptatem.`
);

createNewElement("button", "btn", ".branding_page_text_content", `Read More`);

// Branding Section Image Content

createNewElement("div", "branding_page_img_content", ".branding_page_content");
createNewElement("img", null, ".branding_page_img_content", null, {
  src: "./Assets/images//watch_image.png",
  alt: "Image of a Watch",
});

//<<<<<<<                 Branding Section End        >>>>>>

//<<<<<<<                 Achievements Section Start        >>>>>>

createNewElement("section", "achievement_section", ".main");

createNewElement(
  "div",
  "achievement_section_container",
  ".achievement_section"
);

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
  let container = createNewElement(
    "div",
    [`sub_containers`, `cont${index + 1}`],
    ".achievement_section_container"
  );

  //   Putting Data in sub container:

  let icon = createNewElement("i", "icons", container);
  createNewElement("img", null, icon, null, {
    src: "./Assets/images/announcement.png",
    alt: "Announcement Icon",
  });

  createNewElement(
    "p",
    "achev_num",
    container,
    `${sub_container_content.ach_num[index]}`
  );
  createNewElement(
    "p",
    "achev_text",
    container,
    `${sub_container_content.ach_text[index]}`
  );
  createNewElement(
    "span",
    "achev_des",
    container,
    `${sub_container_content.ach_des[index]}`
  );
});

//<<<<<<<                 Achievements Section End      >>>>>>

//<<<<<<<                 Creative Section Start      >>>>>>

createNewElement("section", "creative_section", ".main");

createNewElement("div", "creative_section_container", ".creative_section");

createNewElement(
  "h4",
  "slogan_text",
  ".creative_section_container",
  `Let's Grow Together`
);

createNewElement(
  "h2",
  "section_heading",
  ".creative_section_container",
  `We turn creative ideas into your business`
);

createNewElement(
  "p",
  "section_text",
  ".creative_section_container",
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex fugit aliquam error excepturi veritatis alias ipsum facere nostrum quod non nobis officiis doloremque veniam.`
);

createNewElement("button", "btn", ".creative_section_container", `Read more`);

//<<<<<<<                 Creative Section End      >>>>>>

//<<<<<<<                 Our Services Section Start      >>>>>>

createNewElement("section", "services_section", ".main");

createNewElement("div", "services_section_container", ".services_section");

createNewElement(
  "div",
  "services_section_text_content",
  ".services_section_container"
);

createNewElement(
  "h4",
  "slogan_text",
  ".services_section_text_content",
  `We are best creative agency`
);
createNewElement(
  "h2",
  "section_heading",
  ".services_section_text_content",
  `We turn creative ideas into your business`
);

createNewElement(
  "p",
  "section_text",
  ".services_section_text_content",
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia impedit placeat ipsum vel aliquid delectus eos. Inventore quis atque culpa odio sed laudantium odio sed eius amet tenetur incidunt deleniti? Voluptas, eius amet amet consectetur labore!`
);

// Sub sections of services section:
createNewElement("div", "services_div", ".services_section_text_content");

let Array_of_sub_services_content = {
  icons_src: [
    "./Assets/images/chat_icon.png",
    "./Assets/images/colorful_announcement.png",
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

Array_of_sub_services_containers.forEach((item, index) => {
  // Creating and Appending Div in sub div container

  let container = createNewElement("div", "service", ".services_div");

  //Now putting content inside each sub div:=>

  // Defining Elements(tags):
  let icon = createNewElement("i", "icons", container);

  let icon_img = createNewElement("img", null, icon, null, {
    src: `${Array_of_sub_services_content.icons_src[index]}`,
    alt: `${Array_of_sub_services_content.icons_alt[index]}`,
  });

  createNewElement(
    "h2",
    "sub_section_heading",
    container,
    `${Array_of_sub_services_content.sub_section_heading[index]}`
  );
  createNewElement(
    "p",
    "sub_section_text",
    container,
    `${Array_of_sub_services_content.sub_section_text[index]}`
  );
  createNewElement(
    "button",
    "btn",
    container,
    `${Array_of_sub_services_content.sub_section_btn_text[index]}`
  );
});

// Img Content of services section
createNewElement("div", "services_section_img", ".services_section_container");
createNewElement("img", null, ".services_section_img", null, {
  src: "./Assets/images/services_section_image.png",
  alt: "services section image",
});

// Img btn:
createNewElement("button", "service_sec_btn", ".services_section_img");

createNewElement(
  "img",
  "services_section_play_button",
  ".service_sec_btn",
  null,
  {
    src: "./Assets/images/play_btn_white.png",
    alt: "Play button",
  }
);

//<<<<<<<                 Our Services Section End     >>>>>>

//<<<<<<<                 Our Recent Work Section start     >>>>>>

createNewElement("section", "work_section", ".main");

createNewElement("div", "work_section_container", ".work_section");

// text content of work section:

createNewElement("div", "work_section_text_content", ".work_section_container");
createNewElement(
  "h2",
  "section_heading",
  ".work_section_text_content",
  `Our Recent Work`
);
createNewElement(
  "p",
  "section_text",
  ".work_section_text_content",
  `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi et sapiente porro asperiores accusantium quaerat numquam, nemo pariatur aliquam maxime iusto ducimus ut nisi, nihil quos, quasi non! Necessitatibus, inventore.sit am et conse adipisicingctetur elit.`
);

createNewElement("ul", "work_list", ".work_section_text_content");

let items_in_ul_array = [
  { href: "/", link_name: "Web Design" },
  { href: "/", link_name: "Mobile App" },
  { href: "/", link_name: "Branding" },
  { href: "/", link_name: "Branding" },
];

items_in_ul_array.forEach((li_item_name, index) => {
  let list_item = createNewElement("li", "work_list_items", ".work_list");

  createNewElement(
    "a",
    "work_links",
    list_item,
    `${items_in_ul_array[index].link_name}`,
    { href: `${items_in_ul_array[index].href}` }
  );
});

createNewElement("div", "work_section_images", ".work_section_container");

createNewElement(
  "div",
  "work_section_images_container",
  ".work_section_images"
);

let Array_of_product_containers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let data_of_product_images = [
  {
    src: "./Assets/images/N8_image.png",
    alt: "N8 bottle Image",
  },
  {
    src: "./Assets/images/MUG_image.png",
    alt: "Mug Image",
  },
  {
    src: "./Assets/images/Book_image.png",
    alt: "Book Image",
  },
  {
    src: "./Assets/images/Tshirt_image.png",
    alt: "T-shirt Image",
  },
  {
    src: "./Assets/images/Box_image.png",
    alt: "Box Image",
  },
  {
    src: "./Assets/images/Bottles_image.png",
    alt: "N8 bottle Image",
  },
  {
    src: "./Assets/images/tags_image.png",
    alt: "Tags(lables) Image",
  },
  {
    src: "./Assets/images/Handbag_image.png",
    alt: "Hand bag(Shopping bag) Image",
  },
  {
    src: "./Assets/images/sanitizer_image.png",
    alt: "Sanitizer Image",
  },
];
Array_of_product_containers.forEach((div, index) => {
  let product_container = createNewElement(
    "div",
    "product_img",
    ".work_section_images_container"
  );

  createNewElement("img", null, product_container, null, {
    src: `${data_of_product_images[index].src}`,
    alt: `${data_of_product_images[index].alt}`,
  });
});

createNewElement("button", "btn", ".work_section_container", `Read More`);

//<<<<<<<                 Our Recent Work Section End    >>>>>>

//<<<<<<<                 Our Partners Section Start   >>>>>>

createNewElement("section", "partners_section", "main");

createNewElement("div", "partners_section_container", ".partners_section");
let data_of_images = [
  { src: "./Assets/images/CISCO.png", alt: "CISCO Logo" },
  { src: "./Assets/images/ADIDAS.png", alt: "ADIDAS Logo" },
  { src: "./Assets/images/LENOVO.png", alt: "LENOVO Logo" },
  { src: "./Assets/images/DISNEP.png", alt: "DISNEP Logo" },
  { src: "./Assets/images/AMAZON.png", alt: "AMAZON Logo" },
  { src: "./Assets/images/PUMA.png", alt: "PUMA Logo" },
  { src: "./Assets/images/APPLE.png", alt: "APPLE Logo" },
  { src: "./Assets/images/MINI.png", alt: "MINI Logo" },
];

data_of_images.forEach((data) => {
  createNewElement("img", "partner_logo", ".partners_section_container", null, {
    src: `${data.src}`,
    alt: `${data.alt}`,
  });
});

//<<<<<<<                 Our Partners Section End     >>>>>

//<<<<<<<                 Testimonials Section start   >>>>>

createNewElement("section", "testimonial_section", ".main");

createNewElement(
  "div",
  "testimonial_section_container",
  ".testimonial_section"
);

createNewElement(
  "div",
  "testimonial_section_text_content",
  ".testimonial_section_container"
);

createNewElement(
  "h4",
  "slogan_text",
  ".testimonial_section_text_content",
  `Our Happy Client`
);
createNewElement(
  "h2",
  "section_heading",
  ".testimonial_section_text_content",
  `Testimonials`
);

createNewElement("div", "client_review", ".testimonial_section_text_content");

createNewElement(
  "p",
  "section_text",
  ".client_review",
  `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nisi doloribus at aut rerum, sed ji autem, praesentium magnam dolore odit possim neque temporibus.`
);

createNewElement("div", "client_info", ".client_review");
createNewElement("div", "stars_container", ".client_info");

for (let i = 0; i < 5; i++) {
  let star = createNewElement("img", null, ".stars_container", null, {
    src: "./Assets/images/star_icon.png",
    alt: "Star Icon",
  });
}
createNewElement("p", "client_name", ".client_info", `Mr. John Doe`);

createNewElement(
  "div",
  "testimonial_section_img",
  ".testimonial_section_container"
);

createNewElement("img", null, ".testimonial_section_img", null, {
  src: "./Assets/images/testimonals_img.png",
  alt: "A you businessman picture",
});

//<<<<<<<                 Testimonials Section End   >>>>>

//<<<<<<<                 Contact Section Start    >>>>>

createNewElement("section", "contact_section", ".main");

createNewElement("div", "contact_section_container", ".contact_section");

createNewElement(
  "div",
  "contact_section_text_content",
  ".contact_section_container"
);
createNewElement(
  "h2",
  "section_heading",
  ".contact_section_text_content",
  `Need Help?`
);
createNewElement(
  "h3",
  "section_sub_heading",
  ".contact_section_text_content",
  `Don't Forget to Contact With Us?`
);
createNewElement(
  "p",
  "section_text",
  ".contact_section_text_content",
  `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, cumque? Nobis repellat vel quas ab in cumque? Animi, corporis architecto! Quibusdam sint laboriosam laudantium omnis in recusandae eum ullam similique?`
);

createNewElement("div", "contact_div", ".contact_section_text_content");

createNewElement("form", "contact_form", ".contact_div");

let input_data_array = [
  {
    type: "text",
    placeholder: "Name",
    name: "name_input",
    id: "customer_name_input",
    required: true,
    spellcheck: false,
    autocomplete: "off",
  },
  {
    type: "email",
    placeholder: "Email",
    name: "email_input",
    id: "customer_email_input",
    required: true,
    spellcheck: false,
    autocomplete: "off",
  },
];

input_data_array.forEach((data, index) => {
  createNewElement("input", "contact_input", ".contact_form", null, {
    type: data.type,
    name: data.name,
    id: data.id,
    placeholder: data.placeholder,
    spellcheck: data.spellcheck,
    required: data.required,
    autocomplete: data.autocomplete,
  });
});
createNewElement("button", "form_btn", ".contact_form", `SUBMIT`);

//<<<<<<<                 Contact Section End    >>>>>

//<<<<<<<                 Social Links Section Start   >>>>>

createNewElement("section", "social_links_section", ".main");

createNewElement(
  "div",
  "social_links_section_container",
  ".social_links_section"
);

createNewElement("div", "links_container", ".social_links_section_container");

let social_links = [
  { href: "/", link_name: "facebook" },
  { href: "/", link_name: "twitter" },
  { href: "/", link_name: "linkedin" },
  { href: "/", link_name: "instagram" },
  { href: "/", link_name: "behance" },
];
social_links.forEach((social_link_name, index) => {
  createNewElement(
    "a",
    "social_links",
    ".links_container",
    social_links[index].link_name,
    { href: `${social_links[index].href}` }
  );
});

//<<<<<<<                 Social Links Section End        >>>>>
//<<<<<<<                     Main Section End        >>>>>>
