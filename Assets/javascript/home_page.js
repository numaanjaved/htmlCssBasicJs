let body = document.body;
// Scripts Functions
let scripts_func = async () => {
  let header_script_func = new Promise((resolve, reject) => {
    setTimeout(() => {
      let header_script = document.createElement("script");
      header_script.setAttribute("src", "./Assets/javascript/page_header.js");
      header_script.defer = true;
      document.head.appendChild(header_script);
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
      let main_script = document.createElement("script");
      main_script.setAttribute("src", "./Assets/javascript/page_main.js");
      main_script.defer = true;
      document.head.appendChild(main_script);

      main_script.onload = () => {
        resolve("Main Script Loaded Successfully");
      };

      main_script.onerror = () => {
        reject("Error Occurred while Loading Main Script");
      };
    }, 20);
  });
  // let footer_script_func = new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     let footer_script = document.createElement("script");
  //     footer_script.setAttribute("src", "./Assets/javascript/page_footer.js");
  //     footer_script.defer = true;
  //     document.head.appendChild(footer_script);

  //     footer_script.onload = () => {
  //       resolve("Footer Script Loaded Successfully");
  //     };

  //     footer_script.onerror = () => {
  //       reject("Error Occurred while Loading Footer Script");
  //     };
  //   }, 2500);
  // });

  let async_header = await header_script_func;
  let async_main = await main_script_func;
  // let async_footer = await footer_script_func;
  return [async_header, async_main]; //async_footer
};

let run_func = scripts_func();

run_func
  .then((value) => {
    value.forEach((val) => console.log(val));
  })
  .catch((err) => {
    console.error(err);
  });
