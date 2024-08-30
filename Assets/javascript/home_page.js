let head = document.head;
let body = document.body;

// Scripts Functions
let createScript = (scriptTag, scriptContainer, attributes = {}) => {
  let scriptTagName = document.createElement(scriptTag);
  scriptContainer.appendChild(scriptTagName);

  if (attributes) {
    for (let attr_key in attributes) {
      scriptTagName.setAttribute(attr_key, attributes[attr_key]);
    }
  }
  return scriptTagName;
};

let scripts_func = async () => {
  let header_script_func = new Promise((resolve, reject) => {
    setTimeout(() => {
      let header_script = createScript("script", head, {
        src: "./Assets/javascript/components/header.js",
        defer: "defer",
      });
      header_script.onload = () => {
        resolve("Header Script Loaded Successfully");
      };

      header_script.onerror = () => {
        reject("Error Occurred while Loading Header Script");
      };
    }, 1);
  });
  let main_script_func = new Promise((resolve, reject) => {
    setTimeout(() => {
      let main_script = createScript("script", head, {
        src: "./Assets/javascript/components/main.js",
        defer: "defer",
      });
      main_script.onload = () => {
        resolve("Main Script Loaded Successfully");
      };

      main_script.onerror = () => {
        reject("Error Occurred while Loading Main Script");
      };
    }, 20);
  });
  let footer_script_func = new Promise((resolve, reject) => {
    setTimeout(() => {
      let footer_script = createScript("script", head, {
        src: "./Assets/javascript/components/footer.js",
        defer: "defer",
      });

      footer_script.onload = () => {
        resolve("Footer Script Loaded Successfully");
      };

      footer_script.onerror = () => {
        reject("Error Occurred while Loading Footer Script");
      };
    }, 2500);
  });

  let async_header = await header_script_func;
  let async_main = await main_script_func;
  let async_footer = await footer_script_func;
  return [async_header, async_main, async_footer];
};

let run_func = scripts_func();

run_func
  .then((value) => {
    value.forEach((val) => console.log(val));
  })
  .catch((err) => {
    console.error(err);
  });
