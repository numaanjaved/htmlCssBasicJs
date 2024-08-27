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
let company_images_data = [
  { src: "../../Project_Assets/Company_img1.png", alt: "Company Image" },
  { src: "../../Project_Assets/Company_img2.png", alt: "Company Image" },
  { src: "../../Project_Assets/Company_img3.png", alt: "Company Image" },
  { src: "../../Project_Assets/Company_img4.png", alt: "Company Image" },
];
company_img_divs.forEach((div_data, index) => {
  let div = document.createElement("div");
  div.classList.add("company_image");
  footer_img_content_div.appendChild(div);

  //   creating_img tag:

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
Array_of_li_names.forEach((list_name, index) => {
  let bottom_footer_list_item = document.createElement("li");
  bottom_footer_list_item.classList.add("footer_list_item");
  footer_items_ul.appendChild(bottom_footer_list_item);

  //   now adding links in it:
  if (index == 0) {
    let footer_copyright_link_text = document.createElement("span");
    footer_copyright_link_text.id = "copyright";
    footer_copyright_link_text.textContent = list_name;
    bottom_footer_list_item.appendChild(footer_copyright_link_text);
  } else if (index != 0) {
    let footer_list_item_link = document.createElement("a");
    footer_list_item_link.classList.add("footer_list_item_link");
    footer_list_item_link.textContent = list_name;
    bottom_footer_list_item.appendChild(footer_list_item_link);
  }
});

//<<<<<<<====                 Footer Section End           ====>>>>>
