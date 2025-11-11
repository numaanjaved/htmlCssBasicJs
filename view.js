import {
  textLogin,
  makeInput,
  inputPassword,
  signInOrOutBtn,
  pText,
  lOrRBtn,
  inputName,
  formSwitch,
} from "./util.js";
import { renderSignIn, renderSignUp } from "./controller.js";

// body styling
const body = document.querySelector("body");

// container for login form
const containerSignIn = document.createElement("div");
containerSignIn.id = "signIn";
containerSignIn.className = "signIn utilForm tr";
body.appendChild(containerSignIn);

// container sign in content
const pSignIn = textLogin("Sign in to start your session");
containerSignIn.appendChild(pSignIn);

// login input email

const inputEmailSignIn = makeInput("signInE");
containerSignIn.appendChild(inputEmailSignIn);

// login input password
const inputPasswordSignIn = inputPassword("signInP");
containerSignIn.appendChild(inputPasswordSignIn);

// Sign-In button
const buttonLogin = signInOrOutBtn("signInB", "Sign In");
containerSignIn.appendChild(buttonLogin);

const pTextSignIn = pText();
containerSignIn.appendChild(pTextSignIn);

const buttonLoginSignIn = lOrRBtn("signInBtn", "Register Now");
containerSignIn.appendChild(buttonLoginSignIn);

// container for Sign Up form
const containerDiv = document.createElement("div");
containerDiv.id = "signUp";
containerDiv.className = "signUp utilForm mg tr";
body.appendChild(containerDiv);

// container sign up content
const pSignUp = textLogin("Register new membership");

// register input email
const inputEmailSignUpFirstName = inputName("firstName", "First Name");

const inputEmailSignUpLastName = inputName("lastName", "Last Name");

const inputEmailSignUpEmail = makeInput("signUpE");

// register input password
const inputPasswordSignUp = inputPassword("signUpP");

// Sign-Up button
const buttonLoginSignUp = signInOrOutBtn("signUpB", "Sign Up");

const pTextSignUp = pText();

const buttonSignUp = lOrRBtn("signUpBtn", "Login Now");
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

export const goToSignInForm = document.querySelector("#signInBtn");
export const goToSignUpForm = document.querySelector("#signUpBtn");
export const signInButton = document.querySelector("#signInB");
export const signUpButton = document.querySelector("#signUpB");
export const signInDiv = document.querySelector("#signIn");
export const signUpDiv = document.querySelector("#signUp");

goToSignInForm.addEventListener("click", (e) => {
  e.preventDefault();
  formSwitch("translateX(-550px)", "0", "translateX(0px)", "1");
});
goToSignUpForm.addEventListener("click", (e) => {
  e.preventDefault();
  formSwitch("translateX(0px)", "1", "translateX(-550px)", "0");
});

export const fName = document.querySelector("#firstName");
export const lName = document.querySelector("#lastName");
export const signUpEmail = document.querySelector("#signUpE");
export const SignUpPassword = document.querySelector("#signUpP");
export const signInEmail = document.querySelector("#signInE");
export const signInPassword = document.querySelector("#signInP");
export const regex = new RegExp(/^\S+@\S+\.\S+$/);

signInButton.addEventListener("click", () => {
  renderSignIn();
});

signUpButton.addEventListener("click", () => {
  renderSignUp();
});
