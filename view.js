import { inputPassword, formSwitch } from "./util.js";
import { renderSignIn, renderSignUp } from "./controller.js";
import { localStorageData } from "./modal.js";

// body styling
const body = document.querySelector("body");

function makeTagElement(tagName, valueId, classes, value) {
  const buttonLogin = document.createElement(tagName);
  buttonLogin.id = valueId;
  buttonLogin.className = classes;
  buttonLogin.textContent = value;
  return buttonLogin;
}

function inputTag(valueId, value) {
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
  setTimeout(() => {
    window.location.reload();
  }, 2000);
  localStorageData(userInfo);
  renderSignUp();
});
