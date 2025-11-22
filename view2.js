import { renderSignUp } from "./controller.js";
import {
  inputPassword,
  makeTagElement,
  inputTag,
} from "./view1.js";

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
// container for Sign Up form
const containerDiv = document.createElement("div");
containerDiv.id = "signUp";
containerDiv.className = "signUp utilForm mg tr";
body.appendChild(containerDiv);

// container sign up content
const pSignUp = makeTagElement(
  "p",
  "text",
  "textCenter",
  "Resgister new membership"
);

// register input email
const inputEmailSignUpFirstName = inputTag("firstName", "First Name");

const inputEmailSignUpLastName = inputTag("lastName", "Last Name");

const inputEmailSignUpEmail = inputTag("signUpE", "Email");

// register input password
const inputPasswordSignUp = inputPassword("signUpP");

// Sign-Up button
const buttonLoginSignUp = makeTagElement(
  "button",
  "signUpB",
  "outline color bdn",
  "Sign Up"
);

const pTextSignUp = makeTagElement("p", "ptext", "mg", "-OR-");

const buttonSignUp = makeTagElement(
  "button",
  "signUpBtn",
  "outline color bdn",
  "Login Now"
);
containerDiv.append(
  pSignUp,
  inputEmailSignUpFirstName,
  inputEmailSignUpLastName,
  inputEmailSignUpEmail,
  inputPasswordSignUp,
  buttonLoginSignUp,
  pTextSignUp,
  buttonSignUp
);
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
  renderSignUp();
});
