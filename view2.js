import { renderSignUp } from "./controller.js";
import { localStorageData } from "./modal.js";
import { formSwitch } from "./view1.js";

// body styling
const body = document.querySelector("body");

// container for Sign Up form
const containerDiv = document.createElement("div");
containerDiv.id = "signUp";
containerDiv.className = "signUp utilForm mg tr";
body.appendChild(containerDiv);

const makeTagElementArr = [
  {
    tagName: "p",
    valueId: "text",
    classes: "textCenter",
    value: "Resgister new membership",
  },
  {
    tagName: "input",
    valueId: "firstName",
    classes: "text-md pd outline bd",
    value: "First Name",
  },
  {
    tagName: "input",
    valueId: "lastName",
    classes: "text-md pd outline bd",
    value: "Last Name",
  },
  {
    tagName: "input",
    valueId: "signUpE",
    classes: "text-md pd outline bd",
    value: "Email",
  },
  {
    tagName: "input",
    tag1: "form",
    valueId: "signUpP",
    arr: {
      attT: "autocomplete",
      attV: true,
    },
    classes: "text-md pd outline bd",
    value: "Email",
  },
  {
    tagName: "button",
    valueId: "signUpB",
    classes: "outline color bdn",
    value: "Sign Up",
  },
  {
    tagName: "p",
    valueId: "ptext",
    classes: "mg",
    value: "-OR-",
  },
  {
    tagName: "button",
    valueId: "signUpBtn",
    classes: "outline color bdn",
    value: "Login Now",
  },
];

makeTagElementArr.forEach((element, index) => {
  if (index == 1) {
    const input = document.createElement("input");
    input.id = element.valueId;
    input.className = "text-md pd outline bd";
    input.placeholder = element.value;
    containerDiv.appendChild(input);
  } else if (index == 2) {
    const input = document.createElement("input");
    input.id = element.valueId;
    input.className = "text-md pd outline bd";
    input.placeholder = element.value;
    containerDiv.appendChild(input);
  } else if (index == 3) {
    const input = document.createElement("input");
    input.id = element.valueId;
    input.className = "text-md pd outline bd";
    input.placeholder = element.value;
    containerDiv.appendChild(input);
  } else if (index == 4) {
    const inputPassword = document.createElement("input");
    const form = document.createElement("form");
    inputPassword.id = element.valueId;
    inputPassword.setAttribute("autocomplete", true);
    inputPassword.className = "text-md pd mg outline";
    inputPassword.placeholder = "Password";
    inputPassword.type = "password";
    form.appendChild(inputPassword);
    containerDiv.appendChild(form);
  } else {
    const elementTag = document.createElement(element.tagName);
    elementTag.id = element.valueId;
    elementTag.className = element.classes;
    elementTag.textContent = element.value;
    containerDiv.appendChild(elementTag);
  }
});
export const goToSignUpForm = document.querySelector("#signUpBtn");
export const signUpButton = document.querySelector("#signUpB");
export const fName = document.querySelector("#firstName");
export const signUpDiv = document.querySelector("#signUp");
export const lName = document.querySelector("#lastName");
export const signUpEmail = document.querySelector("#signUpE");
export const SignUpPassword = document.querySelector("#signUpP");
export const regex = new RegExp(/^\S+@\S+\.\S+$/);

goToSignUpForm.addEventListener("click", (e) => {
  e.preventDefault();
  formSwitch("translateX(0px)", "1", "translateX(-550px)", "0");
});

signUpButton.addEventListener("click", () => {
  let fNameValue = fName.value;
  let lNameValue = lName.value;
  let signUpPasswordValue = SignUpPassword.value;
  let signUpEmailValue = signUpEmail.value;
  let userInfo = {
    firstName: fNameValue,
    lastName: lNameValue,
    email: signUpEmailValue,
    password: signUpPasswordValue,
  };
  localStorageData(userInfo);
  renderSignUp();
});
