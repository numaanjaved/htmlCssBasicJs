import { renderSignUp, gotoFormSignUp } from "./controller.js";
import { inputPassword, makeTagElement, inputTag } from "./util.js";

// body styling
const body = document.querySelector("body");

// container for Sign Up form
const containerDiv = document.createElement("div");
containerDiv.id = "signUp";
containerDiv.className = "signUp utilForm mg tr";
body.appendChild(containerDiv);

// container sign up content
const pSignUp = makeTagElement({
  tagName: "p",
  id: "text",
  classes: "textCenter",
  value: "Resgister new membership",
});

// register input email
const inputEmailSignUpFirstName = inputTag("firstName", "First Name");

const inputEmailSignUpLastName = inputTag("lastName", "Last Name");

const inputEmailSignUpEmail = inputTag("signUpE", "Email");

// register input password
const inputPasswordSignUp = inputPassword("signUpP");

// Sign-Up button
const buttonLoginSignUp = makeTagElement({
  tagName: "button",
  id: "signUpB",
  classes: "outline color bdn",
  value: "Sign Up",
});

const pTextSignUp = makeTagElement({
  tagName: "p",
  id: "ptext",
  classes: "mg",
  value: "-OR-",
});

const buttonSignUp = makeTagElement({
  tagName: "button",
  id: "signUpBtn",
  classes: "outline color bdn",
  value: "Login Now",
});
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
export const signUpDiv = document.querySelector("#signUp");

gotoFormSignUp(goToSignUpForm);

signUpButton.addEventListener("click", () => {
  renderSignUp();
});
