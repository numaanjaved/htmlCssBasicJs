//<<<<<<<                 Branding Section start         >>>>>>

createNewElement("section", "branding_page_section", ".main");
createNewElement("div", "branding_page_content", ".branding_page_section");
// branding Page text content:

createNewElement("div", "branding_page_text_content", ".branding_page_content");
createNewElement("h4", "slogan_text", ".branding_page_text_content", "Dream Big Inspire the World");
createNewElement("h2","section_heading", ".branding_page_text_content", "We turn creative ideas into your business");
createNewElement("ul", "branding_list", ".branding_page_text_content");

let branding_list_inner_content = [
  { href: "/", list_name: "Web Design" },
  { href: "/", list_name: "Mobile App" },
  { href: "/", list_name: "Branding" },
  { href: "/", list_name: "Branding" },
];

branding_list_inner_content.forEach((li_item_link) => {
  let li_item = createNewElement("li", "branding_list_items", ".branding_list");
  let branding_page_link_href_obj={href: `${li_item_link.href}`}
  createNewElement( "a","branding_links", li_item,`${li_item_link.list_name}`, branding_page_link_href_obj);
});

createNewElement("p", "section_text", ".branding_page_text_content", `Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ad reiciendis, dolorem vero magnam praesentium alias sequi illo. Modi quo, nobis earum cum iusto nostrum aut quibusdam non sit impedit est ipsa fugiat libero itaque ad eaque. Dolores diesw klice iokrn as, shinda kukro voluptatem.`);
createNewElement("button", "btn", ".branding_page_text_content", `Read More`);

// Branding Section Image Content

createNewElement("div", "branding_page_img_content", ".branding_page_content");
let branding_sec_img_obj = { src: "./Assets/images//watch_image.webp", alt: "Image of a Watch"};createNewElement("img", null, ".branding_page_img_content", null, branding_sec_img_obj );

//<<<<<<<                 Branding Section End        >>>>>>