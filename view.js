import { renderSignIn } from "./controller.js";
function makeInput(valueId) {
  const inputEmail = document.createElement("input");
  inputEmail.className = "text-md pd outline bd";
  inputEmail.id = valueId;
  inputEmail.placeholder = "Email";
  return inputEmail;
}

function inputPassword(valueId) {
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

function lOrRBtn(valueId, value) {
  const buttonLogin = document.createElement("button");
  buttonLogin.id = valueId;
  buttonLogin.className = "outline color bdn";
  buttonLogin.textContent = value;
  return buttonLogin;
}

function textLogin(value) {
  const p = document.createElement("p");
  p.id = "text";
  p.className = "textCenter";
  p.textContent = value;
  return p;
}

function inputName(valueId, value) {
  const input = document.createElement("input");
  input.id = valueId;
  input.className = "text-md pd outline bd";
  input.placeholder = value;
  return input;
}

function signInOrOutBtn(valueId, value) {
  const button = document.createElement("button");
  button.id = valueId;
  button.className = "outline color bdn";
  button.textContent = value;
  return button;
}

function pText() {
  const pText = document.createElement("p");
  pText.className = "mg";
  pText.textContent = "-OR-";
  return pText;
}

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

function formSwitch(
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
export let signInEmailValue = signInEmail.value;
export let signInPasswordValue = signInPassword.value;
signInButton.addEventListener("click", () => {
  renderSignIn();
});

signUpButton.addEventListener("click", () => {
});
