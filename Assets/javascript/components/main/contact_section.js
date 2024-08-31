//<<<<<<<                 Contact Section Start    >>>>>

createNewElement("section", "contact_section", ".main");
createNewElement("div", "contact_section_container", ".contact_section");
createNewElement("div", "contact_section_text_content", ".contact_section_container");
createNewElement("h2", "section_heading", ".contact_section_text_content", `Need Help?`);
createNewElement("h3", "section_sub_heading", ".contact_section_text_content",`Don't Forget to Contact With Us?`);
createNewElement("p", "section_text", ".contact_section_text_content", `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, cumque? Nobis repellat vel quas ab in cumque? Animi, corporis architecto! Quibusdam sint laboriosam laudantium omnis in recusandae eum ullam similique?`);
createNewElement("div", "contact_div", ".contact_section_text_content");
createNewElement("form", "contact_form", ".contact_div");

let input_data_array = [
  {
    type: "text",
    placeholder: "Name",
    name: "name_input",
    id: "customer_name_input",
    required: true,
    spellcheck: false,
    autocomplete: "off",
  },
  {
    type: "email",
    placeholder: "Email",
    name: "email_input",
    id: "customer_email_input",
    required: true,
    spellcheck: false,
    autocomplete: "off",
  },
];

input_data_array.forEach((data) => {
	let input_data_obj= {
		type: data.type,
		name: data.name,
		id: data.id,
		placeholder: data.placeholder,
		spellcheck: data.spellcheck,
		required: data.required,
		autocomplete: data.autocomplete,
	  };
  createNewElement("input", "contact_input", ".contact_form", null, input_data_obj);
});
createNewElement("button", "form_btn", ".contact_form", `SUBMIT`);

//<<<<<<<                 Contact Section End    >>>>>