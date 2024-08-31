//<<<<<<<                 Achievements Section Start        >>>>>>

createNewElement("section", "achievement_section", ".main");
createNewElement("div", "achievement_section_container", ".achievement_section");

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
  let container = createNewElement("div", [`sub_containers`, `cont${index + 1}`], ".achievement_section_container");

  //   Putting Data in sub container:
  let announcements_icon_obj= {src: "./Assets/images/announcement.webp", alt: "Announcement Icon"};
  let icon = createNewElement("i", "icons", container);
  createNewElement("img", null, icon, null, announcements_icon_obj);

  createNewElement("p","achev_num",container,`${sub_container_content.ach_num[index]}`);
  createNewElement("p", "achev_text", container, `${sub_container_content.ach_text[index]}`);
  createNewElement("span", "achev_des", container,`${sub_container_content.ach_des[index]}`);
});

//<<<<<<<                 Achievements Section End      >>>>>>