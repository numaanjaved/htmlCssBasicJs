import { renderSignIn } from "./controller.js";
import { inputPassword, makeTagElement, inputTag } from "./util.js";

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
  valueId: "text",
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
  valueId: "signInB",
  classes: "outline color bdn",
  value: "Sign In",
});

containerSignIn.append(
  pSignIn,
  inputEmailSignIn,
  inputPasswordSignIn,
  buttonLogin
);

export const goToSignInForm = document.querySelector("#signInBtn");
export const signInButton = document.querySelector("#signInB");

export function loginInData(loginData) {
  document.querySelector("h1").textContent = loginData;
}

signInButton.addEventListener("click", () => {
  renderSignIn();
});
