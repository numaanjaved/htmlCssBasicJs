//<<<<<<<                 Landing Page Section start         >>>>>>

// creating Landing Page section (Landing page text and img content)

createNewElement("section", "landing_page_section", ".main");
createNewElement("div", "landing_page_content", ".landing_page_section");

// Landing Page text content

createNewElement("div", "text_content", ".landing_page_content");
createNewElement("h3", "slogan_text",".text_content", `We are best and creative agency`);
createNewElement("h1","main_heading",".text_content",`We turn creative ideas into your business.`);
createNewElement( "p", "landing_page_description", ".text_content", `Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusa reiciendis voluptatem ratione doloribus`);

createNewElement("div", "btns_container", ".text_content");

let buttons_inner_text = ["Our Story", "Read More"];
buttons_inner_text.forEach((btn) => {
  createNewElement("button", "btn", ".btns_container", `${btn}`);
});

// Landing Page Image:
let landing_page_img_obj= {src: "./Assets/images/landing_Page_img.webp", alt:"A business Man Image"}
createNewElement("div", "img_content", ".landing_page_content");
createNewElement("img", null, ".img_content", null, landing_page_img_obj);

//<<<<<<<                 Landing Page Section end         >>>>>>