//<<<<<<<                 Testimonials Section start   >>>>>

createNewElement("section", "testimonial_section", ".main");
createNewElement("div", "testimonial_section_container", ".testimonial_section");
createNewElement("div", "testimonial_section_text_content", ".testimonial_section_container");
createNewElement("h4", "slogan_text", ".testimonial_section_text_content", `Our Happy Client`);
createNewElement("h2", "section_heading", ".testimonial_section_text_content",`Testimonials`);
createNewElement("div", "client_review", ".testimonial_section_text_content");
createNewElement("p", "section_text", ".client_review", `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nisi doloribus at aut rerum, sed ji autem, praesentium magnam dolore odit possim neque temporibus.`);
createNewElement("div", "client_info", ".client_review");
createNewElement("div", "stars_container", ".client_info");
let each_star_data_obj= {src: "./Assets/images/star_icon.webp", alt: "Star Icon"};
for (let i = 0; i < 5; i++) {
  createNewElement("img", null, ".stars_container", null, each_star_data_obj);
}
createNewElement("p", "client_name", ".client_info", `Mr. John Doe`);
createNewElement( "div", "testimonial_section_img", ".testimonial_section_container");
let testimonial_section_img_obj= {src: "./Assets/images/testimonals_img.webp", alt: "A you businessman picture"}
createNewElement("img", null, ".testimonial_section_img", null, testimonial_section_img_obj);

//<<<<<<<                 Testimonials Section End   >>>>>