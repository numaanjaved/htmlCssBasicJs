//<<<<<<<                 Main Section start         >>>>>>
createNewElement("main", "main", body);
// Main section script functions
let main_sec_scripts_func = async () => {
  let newMainScriptFunc =(src, timeout=null)=>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let main_section_script_attr={ src: `${src}`, defer: "defer"};
        let main_section_scripts = createScript("script", head ,main_section_script_attr);
        main_section_scripts.onload = () => {
          resolve(` ${src} Script Loaded Successfully`);
        };
  
        main_section_scripts.onerror = () => {
          reject(`Error Occurred while Loading ${src} Script`);
        };
      }, timeout);
    });
  }
  let async_landingSection = await newMainScriptFunc("./Assets/javascript/components/main/landing_section.js",1)
  let async_brandingSection = await newMainScriptFunc("./Assets/javascript/components/main/branding_section.js",3);
  let async_achievementSection = await newMainScriptFunc("./Assets/javascript/components/main/achievement_section.js",5);
  let async_creativeSection = await newMainScriptFunc("./Assets/javascript/components/main/creative_section.js",7);
  let async_ourServicesSection = await newMainScriptFunc("./Assets/javascript/components/main/ourServices_section.js",9);
  let async_ourRecentSection = await newMainScriptFunc("./Assets/javascript/components/main/ourRecentWork_section.js",11);
  let async_ourPartnersSection = await newMainScriptFunc("./Assets/javascript/components/main/partners_section.js",13);
  let async_testimonialSection = await newMainScriptFunc("./Assets/javascript/components/main/testimonial_section.js",15);
  let async_contactSection = await newMainScriptFunc("./Assets/javascript/components/main/contact_section.js",17);
  let async_socialLinksSection = await newMainScriptFunc("./Assets/javascript/components/main/socialLinks_section.js",19);
  
  
  return [async_landingSection, async_brandingSection, async_achievementSection, async_creativeSection,async_ourServicesSection,async_ourRecentSection, async_ourPartnersSection, async_testimonialSection, async_contactSection, async_socialLinksSection];
};

let run_main_sec_script_func =  main_sec_scripts_func();

run_main_sec_script_func.then((value) => {
    value.forEach((val) => console.log(val));
  }).catch((err) => {
    console.error(err);
  });

  //<<<<<<<                     Main Section End        >>>>>>