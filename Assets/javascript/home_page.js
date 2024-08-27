let body = document.body;
// Defining Landing Page Container:
// It is just for styling purpose
let landing_page_container = document.createElement("div");
landing_page_container.classList.add("landing_Page_container");

let header_script = document.createElement("script");
header_script.setAttribute("src", "./Assets/javascript/page_header.js");
header_script.defer = true;
document.head.appendChild(header_script);

let main_script = document.createElement("script");
main_script.setAttribute("src", "./Assets/javascript/page_main.js");
main_script.defer = true;
document.head.appendChild(main_script);

let footer_script = document.createElement("script");
footer_script.setAttribute("src", "./Assets/javascript/page_footer.js");
footer_script.defer = true;
document.head.appendChild(footer_script);

// Task Completed version 5 Details:
//  JS files divided in sections
// folder structure changed
