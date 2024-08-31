//<<<<<<<                 Our Services Section Start      >>>>>>

createNewElement("section", "services_section", ".main");
createNewElement("div", "services_section_container", ".services_section");
createNewElement("div","services_section_text_content",".services_section_container");
createNewElement("h4", "slogan_text", ".services_section_text_content", `We are best creative agency`);
createNewElement("h2", "section_heading", ".services_section_text_content", `We turn creative ideas into your business`);
createNewElement("p", "section_text", ".services_section_text_content", `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia impedit placeat ipsum vel aliquid delectus eos. Inventore quis atque culpa odio sed laudantium odio sed eius amet tenetur incidunt deleniti? Voluptas, eius amet amet consectetur labore!`);

// Sub sections of services section:
createNewElement("div", "services_div", ".services_section_text_content");
let Array_of_sub_services_content = {
  icons_src: [
    "./Assets/images/chat_icon.webp",
    "./Assets/images/colorful_announcement.webp",
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
  let icons_img_obj={src: `${Array_of_sub_services_content.icons_src[index]}`, alt: `${Array_of_sub_services_content.icons_alt[index]}`,}
  let icon_img = createNewElement("img", null, icon, null, icons_img_obj);

  createNewElement("h2","sub_section_heading", container, `${Array_of_sub_services_content.sub_section_heading[index]}`);
  createNewElement( "p", "sub_section_text", container,`${Array_of_sub_services_content.sub_section_text[index]}`);
  createNewElement("button","btn", container,`${Array_of_sub_services_content.sub_section_btn_text[index]}`);
});

// Img Content of services section
createNewElement("div", "services_section_img", ".services_section_container");
let services_sec_img_obj={ src: "./Assets/images/services_section_image.webp", alt: "services section image"};
createNewElement("img", null, ".services_section_img", null, services_sec_img_obj);

// Img btn:
createNewElement("button", "service_sec_btn", ".services_section_img");
let play_btn_img_obj={ src: "./Assets/images/play_btn_white.webp", alt: "Play button",};
createNewElement("img", "services_section_play_button", ".service_sec_btn", null, play_btn_img_obj);

//<<<<<<<                 Our Services Section End     >>>>>>