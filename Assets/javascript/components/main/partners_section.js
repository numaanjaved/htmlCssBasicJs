//<<<<<<<                 Our Partners Section Start   >>>>>>

createNewElement("section", "partners_section", "main");
createNewElement("div", "partners_section_container", ".partners_section");
let data_of_images = [
  { src: "./Assets/images/CISCO.webp", alt: "CISCO Logo" },
  { src: "./Assets/images/ADIDAS.webp", alt: "ADIDAS Logo" },
  { src: "./Assets/images/LENOVO.webp", alt: "LENOVO Logo" },
  { src: "./Assets/images/DISNEP.webp", alt: "DISNEP Logo" },
  { src: "./Assets/images/AMAZON.webp", alt: "AMAZON Logo" },
  { src: "./Assets/images/PUMA.webp", alt: "PUMA Logo" },
  { src: "./Assets/images/APPLE.webp", alt: "APPLE Logo" },
  { src: "./Assets/images/MINI.webp", alt: "MINI Logo" },
];

data_of_images.forEach((data) => {
	let each_logo_data_obj={ src: `${data.src}`, alt: `${data.alt}`}
  createNewElement("img", "partner_logo", ".partners_section_container", null, each_logo_data_obj);
});

//<<<<<<<                 Our Partners Section End     >>>>>