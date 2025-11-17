import { renderSignIn } from "./controller.js";
import { signUpDiv } from "./view2.js";

// body styling
const body = document.querySelector("body");

export function inputPassword(valueId) {
  const inputPassword = document.createElement("input");
  const form = document.createElement("form");
  inputPassword.id = valueId;
  inputPassword.setAttribute("autocomplete", true);
  inputPassword.className = "text-md pd mg outline";
  inputPassword.placeholder = "Password";
  inputPassword.type = "password";
  form.appendChild(inputPassword);
  return form;
}

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

export function makeTagElement(tagName, valueId, classes, value) {
  const buttonLogin = document.createElement(tagName);
  buttonLogin.id = valueId;
  buttonLogin.className = classes;
  buttonLogin.textContent = value;
  return buttonLogin;
}

export function inputTag(valueId, value) {
  const input = document.createElement("input");
  input.id = valueId;
  input.className = "text-md pd outline bd";
  input.placeholder = value;
  return input;
}
// container for login form
const containerSignIn = document.createElement("div");
containerSignIn.id = "signIn";
containerSignIn.className = "signIn utilForm tr";
body.appendChild(containerSignIn);

// container sign in content
const pSignIn = makeTagElement(
  "p",
  "text",
  "textCenter",
  "Sign in to start your session"
);

// login input email
const inputEmailSignIn = inputTag("signInE", "Email");

// login input password
const inputPasswordSignIn = inputPassword("signInP");

// Sign-In button
const buttonLogin = makeTagElement(
  "button",
  "signInB",
  "outline color bdn",
  "Sign In"
);

const pTextSignIn = makeTagElement("p", "ptext", "mg", "-OR-");

const buttonLoginSignIn = makeTagElement(
  "button",
  "signInBtn",
  "outline color bdn",
  "Register Now"
);

containerSignIn.append(
  pSignIn,
  inputEmailSignIn,
  inputPasswordSignIn,
  buttonLogin,
  pTextSignIn,
  buttonLoginSignIn
);

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
