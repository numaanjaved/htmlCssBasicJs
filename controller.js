import {
  signUpButton,
  signUpDiv,
  fName,
  lName,
  signUpEmail,
  SignUpPassword,
  regex,
} from "./view2.js";

import {
  signInEmail,
  signInButton,
  signInDiv,
  signInPassword,
  formSwitch,
} from "./view1.js";

import { signInCheck } from "./modal.js";
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
  signInCheck();
}

export function renderSignUp() {
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
