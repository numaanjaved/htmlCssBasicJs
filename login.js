import { renderSignIn } from "./controller.js";
import { inputPassword, makeTagElement, inputTag, formSwitch } from "./util.js";

// body styling
const body = document.querySelector("body");

// container for login form
const containerSignIn = document.createElement("div");
containerSignIn.id = "signIn";
containerSignIn.className = "signIn utilForm tr";
body.appendChild(containerSignIn);

// container sign in content
const pSignIn = makeTagElement({
  tagName: "p",
  id: "text",
  classes: "textCenter",
  value: "Sign in to start your session",
});

// login input email
const inputEmailSignIn = inputTag("signInE", "Email");

// login input password
const inputPasswordSignIn = inputPassword("signInP");

// Sign-In button
const buttonLogin = makeTagElement({
  tagName: "button",
  id: "signInB",
  classes: "outline color bdn",
  value: "Sign In",
});

const pTextSignIn = makeTagElement({
  tagName: "p",
  id: "ptext",
  classes: "mg",
  value: "-OR-",
});

const buttonLoginSignIn = makeTagElement({
  tagName: "button",
  id: "signInBtn",
  classes: "outline color bdn",
  value: "Register Now",
});

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

export function loginInData(loginData) {
  document.body.textContent = loginData;
}

goToSignInForm.addEventListener("click", (e) => {
  e.preventDefault();
  formSwitch({
    signInT: "translateX(-550px)",
    signInO: "0",
    signUpT: "translateX(0px)",
    signUpO: "1",
  });
});

signInButton.addEventListener("click", () => {
  renderSignIn();
});
