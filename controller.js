import { signUpButton, regex, goToSignUpForm } from "./view2.js";

import {
  signInEmail,
  signInButton,
  signInPassword,
  goToSignInForm,
} from "./view1.js";

import { signUpData, data, formSwitch } from "./modal.js";

export function formFunctionSignUp() {
  goToSignInForm.addEventListener("click", (e) => {
    e.preventDefault();
    formSwitch("translateX(-550px)", "0", "translateX(0px)", "1");
  });
}

export function formFunctionSignIn() {
  goToSignUpForm.addEventListener("click", (e) => {
    e.preventDefault();
    formSwitch("translateX(0px)", "1", "translateX(-550px)", "0");
  });
}
export const signInDiv = document.querySelector("#signIn");

export const fName = document.querySelector("#firstName");
export const signUpDiv = document.querySelector("#signUp");
export const lName = document.querySelector("#lastName");
export const signUpEmail = document.querySelector("#signUpE");
export const SignUpPassword = document.querySelector("#signUpP");

export function makeTag(valueId, valueClass, value, div, value2) {
  const tag = document.createElement("p");
  tag.className = valueClass;
  tag.id = valueId;
  tag.textContent = value;
  div.insertBefore(tag, value2);
  setTimeout(() => {
    tag.remove();
  }, 2000);
  return false;
}
export function renderSignIn() {
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
  let signInEmailValue = signInEmail.value;
  let signInPasswordValue = signInPassword.value;
  if (data == null) {
    signInEmail.value = "";
    signInPassword.value = "";
    makeTag(
      "incorrectT",
      "incorrectToast util",
      "Please enter valid email and password",
      signInDiv,
      signInButton
    );
    return false;
  }

  data.forEach((user, index) => {
    const userEmail = user.email;
    const userPassword = user.password;
    if (signInEmailValue == userEmail && signInPasswordValue == userPassword) {
      signInDiv.style.opacity = "0";
      signInDiv.style.transform = "translate(-550px)";
      document.body.textContent = `Thanks ${user.firstName} ${user.lastName} for Login in.`;
      return false;
    } else {
      if (index == 1) {
        signInEmail.value = "";
        signInPassword.value = "";
        makeTag(
          "incorrectT",
          "incorrectToast util",
          "Please enter valid email and password",
          signInDiv,
          signInButton
        );
        return false;
      }
    }
  });
}

export function renderSignUp() {
  let signUpEmailValue = signUpEmail.value;
  signUpData();
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
      document.querySelector("#signUp p")
    );
    return false;
  }

  fName.value = "";
  lName.value = "";
  signUpEmail.value = "";
  SignUpPassword.value = "";

  const successText = document.createElement("p");
  successText.id = "successP";
  successText.className = "util";
  successText.style.textAlign = "center";
  successText.textContent = "Congrulation you successfully registered";
  signUpDiv.insertBefore(successText, document.querySelector("#signUp p"));

  setTimeout(() => {
    const textSuccess = document.querySelector("#successP");
    textSuccess.remove();
    formSwitch("translateX(0)", "1", "translateX(-550px)", "0");
    window.location.reload();
  }, 2000);
}
