//<<<<<<<                 Our Recent Work Section start     >>>>>>
createNewElement("section", "work_section", ".main");
createNewElement("div", "work_section_container", ".work_section");

// text content of work section:

createNewElement("div", "work_section_text_content", ".work_section_container");
createNewElement( "h2", "section_heading", ".work_section_text_content", `Our Recent Work`);
createNewElement( "p", "section_text", ".work_section_text_content", `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi et sapiente porro asperiores accusantium quaerat numquam, nemo pariatur aliquam maxime iusto ducimus ut nisi, nihil quos, quasi non! Necessitatibus, inventore.sit am et conse adipisicingctetur elit.`);

createNewElement("ul", "work_list", ".work_section_text_content");

let items_in_ul_array = [
  { href: "/", link_name: "Web Design" },
  { href: "/", link_name: "Mobile App" },
  { href: "/", link_name: "Branding" },
  { href: "/", link_name: "Branding" },
];

items_in_ul_array.forEach((li_item_name) => {
  let list_item = createNewElement("li", "work_list_items", ".work_list");
  let work_sec_link_obj= { href: `${li_item_name.href}` }
  createNewElement( "a", "work_links", list_item, `${li_item_name.link_name}`, work_sec_link_obj);
});

createNewElement("div", "work_section_images", ".work_section_container");
createNewElement("div", "work_section_images_container", ".work_section_images");

let Array_of_product_containers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let data_of_product_images = [
  {
    src: "./Assets/images/N8_image.webp",
    alt: "N8 bottle Image",
  },
  {
    src: "./Assets/images/MUG_image.webp",
    alt: "Mug Image",
  },
  {
    src: "./Assets/images/Book_image.webp",
    alt: "Book Image",
  },
  {
    src: "./Assets/images/Tshirt_image.webp",
    alt: "T-shirt Image",
  },
  {
    src: "./Assets/images/Box_image.webp",
    alt: "Box Image",
  },
  {
    src: "./Assets/images/Bottles_image.webp",
    alt: "N8 bottle Image",
  },
  {
    src: "./Assets/images/tags_image.webp",
    alt: "Tags(lables) Image",
  },
  {
    src: "./Assets/images/Handbag_image.webp",
    alt: "Hand bag(Shopping bag) Image",
  },
  {
    src: "./Assets/images/sanitizer_image.webp",
    alt: "Sanitizer Image",
  },
];
Array_of_product_containers.forEach((div, index) => {
  let product_container = createNewElement( "div", "product_img",".work_section_images_container");
  let each_product_img_data_obj={src: `${data_of_product_images[index].src}`, alt: `${data_of_product_images[index].alt}`};
  createNewElement("img", null, product_container, null,each_product_img_data_obj );
});

createNewElement("button", "btn", ".work_section_container", `Read More`);

//<<<<<<<                 Our Recent Work Section End    >>>>>>