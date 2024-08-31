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
  let newScriptFunc =(src, timeout)=>{
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        let new_script = createScript("script", head, {
          src: `${src}`,
          defer: "defer",
        });
        new_script.onload = () => {
          resolve(` ${src} Script Loaded Successfully`);
        };
  
        new_script.onerror = () => {
          reject(`Error Occurred while Loading ${src} Script`);
        };
      }, timeout);
    });
  }
  let async_header =await newScriptFunc("./Assets/javascript/components/header.js",10)
  let async_main =await newScriptFunc("./Assets/javascript/components/main.js",20)
  let async_footer =await newScriptFunc("./Assets/javascript/components/footer.js",2000)
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