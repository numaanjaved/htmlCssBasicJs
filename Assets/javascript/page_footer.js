//<<<<<<<====                 Footer Section start             ====>>>>>

createElement("footer", "footer", body);

createElement("section", "footer_section_content", ".footer");

createElement("div", "main_content", ".footer_section_content");
createElement("div", "text_content_div", ".main_content");

let name_of_companies = ["Company1", "Company2", "Company3", "Company4"];
let links_in_company = [
  ["About", "Apporach", "Sustainability", "Careers", "News"],
  ["Scope", "Design", "Accountability", "Profession", "Media"],
  ["Product", "Development", "Services", "Sales", "Records"],
  ["Help", "Contact", "Policy", "What's New?", "Faq"],
];
links_in_company.forEach((links_names, index) => {
  let subDiv = createElement("div", "text_sub_content", ".text_content_div");
  createElement(
    "h4",
    "section_sub_heading",
    subDiv,
    `${name_of_companies[index]}`
  );

  //Adding company links list:
  let company_linkList = createElement("ul", "company_list", subDiv);

  //   Creating li and extracting data from Array
  links_names.forEach((li_link_name) => {
    let li_items = createElement("li", "company_list_items", company_linkList);

    //   Now creating Link of Li:

    let company_li_link = createElement(
      "a",
      "company_item_link",
      li_items,
      `${li_link_name}`,
      { href: "#" }
    );
  });
});

createElement("div", "img_content_div", ".main_content");

let company_img_divs = ["div1", "div2", "div3", "div4"];
let company_images_data = [
  { src: "./Assets/images/Company_img1.png", alt: "Company Image" },
  { src: "./Assets/images/Company_img2.png", alt: "Company Image" },
  { src: "./Assets/images/Company_img3.png", alt: "Company Image" },
  { src: "./Assets/images/Company_img4.png", alt: "Company Image" },
];
company_img_divs.forEach((div_data, index) => {
  let div = createElement("div", "company_image", ".img_content_div");

  //   creating_img tag:
  let company_img = createElement("img", null, ".company_image", null, {
    src: company_images_data[index].src,
    alt: company_images_data[index].alt,
  });
});

// bottom part of Footer:

createElement("div", "sub_content", ".footer_section_content");

createElement("div", "text_content_footer_bottom", ".sub_content");

createElement("ul", "footer_items", ".text_content_footer_bottom");

let footer_li_items_array = ["li1", "li2", "li3", "li4"];

let Array_of_li_names = [
  `\u00A9 Themes by psdfreebies.com`,
  "Privacy",
  "Terms of Use",
  "Site Map",
];
Array_of_li_names.forEach((list_name, index) => {
  let bottom_footer_list_item = createElement(
    "li",
    "footer_list_item",
    ".footer_items"
  );

  //   now adding links in it:
  if (index == 0) {
    createElement("span", null, bottom_footer_list_item, `${list_name}`, {
      id: "copyright",
    });
  } else if (index != 0) {
    let footer_list_item_link = createElement(
      "a",
      "footer_list_item_link",
      bottom_footer_list_item,
      `${list_name}`,
      { href: "#" }
    );
  }
});

//<<<<<<<====                 Footer Section End           ====>>>>>
