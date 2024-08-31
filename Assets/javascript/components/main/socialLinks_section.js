//<<<<<<<                 Social Links Section Start   >>>>>

createNewElement("section", "social_links_section", ".main");
createNewElement( "div", "social_links_section_container", ".social_links_section");
createNewElement("div", "links_container", ".social_links_section_container");

let social_links = [
  { href: "/", link_name: "facebook" },
  { href: "/", link_name: "twitter" },
  { href: "/", link_name: "linkedin" },
  { href: "/", link_name: "instagram" },
  { href: "/", link_name: "behance" },
];
social_links.forEach((social_link_name) => {
	let social_link_href_obj= { href: `${social_link_name.href}` };
  createNewElement("a", "social_links", ".links_container", `${social_link_name.link_name}`,social_link_href_obj);
  
});

//<<<<<<<                 Social Links Section End        >>>>>