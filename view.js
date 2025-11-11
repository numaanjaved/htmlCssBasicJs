import {
  textLogin,
  makeInput,
  inputPassword,
  signInOrOutBtn,
  pText,
  lOrRBtn,
  inputName
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

export function makeTag(valueId, valueClass, value, div, value2) {
  const tag = document.createElement("p");
  tag.className = valueClass;
  tag.id = valueId;
  tag.className = valueClass;
  tag.textContent = value;
  div.insertBefore(tag, value2);
  setTimeout(() => {
    tag.remove();
  }, 2000);
  return false;
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

signInButton.addEventListener("click", () => {
  if (signInEmail.value == "" || signInPassword.value == "") {
    makeTag(
      "loginT",
      "loginToast util",
      "Please enter email and password",
      signInDiv,
      signInButton
    );
    return false;
  }
  renderSignIn();
});

signUpButton.addEventListener("click", () => {
  let signUpEmailValue = signUpEmail.value;
  if (
    fName.value == "" ||
    lName.value == "" ||
    signUpEmail.value == "" ||
    SignUpPassword.value == ""
  ) {
    makeTag(
      "inputT",
      "inputToast util",
      "Please fill all fields",
      signUpDiv,
      signUpButton
    );
    return false;
  }

  if (!signUpEmailValue.match(regex)) {
    makeTag(
      "emailT",
      "emailToast util",
      "Please enter valid email",
      signUpDiv,
      SignUpPassword
    );
    return false;
  }

  fName.value = "";
  lName.value = "";
  signUpEmail.value = "";
  SignUpPassword.value = "";
  renderSignUp();
});
