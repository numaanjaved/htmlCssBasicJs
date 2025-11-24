import { renderSignUp } from "./controller.js";
import { inputPassword, makeTagElement, inputTag, formSwitch } from "./util.js";

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
  valueId: "text",
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
  valueId: "signUpB",
  classes: "outline color bdn",
  value: "Sign Up",
});

const pTextSignUp = makeTagElement("p", "ptext", "mg", "-OR-");

const buttonSignUp = makeTagElement({
  tagName: "button",
  valueId: "signUpBtn",
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
goToSignUpForm.addEventListener("click", (e) => {
  e.preventDefault();
  formSwitch({
    translateSignInForm: "translateX(0px)",
    signInFormOpacity: "1",
    translateSignUpForm: "translateX(-550px)",
    signUpFormOpacity: "0",
  });
});

signUpButton.addEventListener("click", () => {
  renderSignUp();
});
