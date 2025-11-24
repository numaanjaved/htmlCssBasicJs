import { makeTag, formSwitch } from "./util.js";
import { signUpButton } from "./register.js";
import { signInButton, loginInData } from "./login.js";

import { signUpData, data, userData } from "./model.js";

export const signInDiv = document.querySelector("#signIn");
export const signInEmail = document.querySelector("#signInE");
export const signInPassword = document.querySelector("#signInP");
const regex = new RegExp(/^\S+@\S+\.\S+$/);
const fName = document.querySelector("#firstName");
export const signUpDiv = document.querySelector("#signUp");
const lName = document.querySelector("#lastName");
const signUpEmail = document.querySelector("#signUpE");
const SignUpPassword = document.querySelector("#signUpP");
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
    userData(signInEmail, signInPassword, makeTag, signInDiv, signInButton);
    return false;
  }

  data.forEach((user, index) => {
    const userEmail = user.email;
    const userPassword = user.password;
    if (signInEmailValue == userEmail && signInPasswordValue == userPassword) {
      signInDiv.style.opacity = "0";
      signInDiv.style.transform = "translate(-550px)";
      loginInData(`Thanks ${user.firstName} ${user.lastName} for Login in.`);
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
  signUpData(fName.value, lName.value, SignUpPassword.value, signUpEmail.value);
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
