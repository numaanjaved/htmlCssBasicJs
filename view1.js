import { renderSignIn } from "./controller.js";
import { signUpDiv } from "./view2.js";

// body styling
const body = document.querySelector("body");

export function formSwitch(
  translateSignInForm,
  signInFormOpacity,
  translateSignUpForm,
  signUpFormOpacity
) {
  signInDiv.style.transform = translateSignInForm;
  signInDiv.style.opacity = signInFormOpacity;
  signUpDiv.style.transform = translateSignUpForm;
  signUpDiv.style.opacity = signUpFormOpacity;
}

// container for login form
const containerSignIn = document.createElement("div");
containerSignIn.id = "signIn";
containerSignIn.className = "signIn utilForm tr";
body.appendChild(containerSignIn);

const makeTagElementArr = [
  {
    tagName: "p",
    valueId: "text",
    classes: "textCenter",
    value: "Sign in to start your session",
  },
  {
    tagName: "input",
    valueId: "signInE",
    classes: "text-md pd outline bd",
    value: "Email",
  },
  {
    tagName: "input",
    tag1: "form",
    valueId: "signInP",
    arr: {
      attT: "autocomplete",
      attV: true,
    },
    classes: "text-md pd outline bd",
    value: "Email",
  },
  {
    tagName: "button",
    valueId: "signInB",
    classes: "outline color bdn",
    value: "Sign In",
  },
  {
    tagName: "p",
    valueId: "ptext",
    classes: "mg",
    value: "-OR-",
  },
  {
    tagName: "button",
    valueId: "signInBtn",
    classes: "outline color bdn",
    value: "Register Now",
  },
];

makeTagElementArr.forEach((element, index) => {
  if (index == 1) {
    const input = document.createElement("input");
    input.id = element.valueId;
    input.className = "text-md pd outline bd";
    input.placeholder = element.value;
    containerSignIn.appendChild(input);
  } else if (index == 2) {
    const inputPassword = document.createElement("input");
    const form = document.createElement("form");
    inputPassword.id = element.valueId;
    inputPassword.setAttribute("autocomplete", true);
    inputPassword.className = "text-md pd mg outline";
    inputPassword.placeholder = "Password";
    inputPassword.type = "password";
    form.appendChild(inputPassword);
    containerSignIn.appendChild(form);
  } else {
    const elementTag = document.createElement(element.tagName);
    elementTag.id = element.valueId;
    elementTag.className = element.classes;
    elementTag.textContent = element.value;
    containerSignIn.appendChild(elementTag);
  }
});

export const goToSignInForm = document.querySelector("#signInBtn");
export const signInButton = document.querySelector("#signInB");
export const signInDiv = document.querySelector("#signIn");
export const signInEmail = document.querySelector("#signInE");
export const signInPassword = document.querySelector("#signInP");
goToSignInForm.addEventListener("click", (e) => {
  e.preventDefault();
  formSwitch("translateX(-550px)", "0", "translateX(0px)", "1");
});
signInButton.addEventListener("click", () => {
  renderSignIn();
});
