import { makeTag } from "./util.js";
import { signUpButton } from "./register.js";

import { signInButton, loginInData } from "./login.js";

import {
  signUpData,
  data,
  userData,
  formSwitch,
  inputValid,
  signInValid,
} from "./model.js";

export const signInDiv = document.querySelector("#signIn");
export const signInEmail = document.querySelector("#signInE");
export const signInPassword = document.querySelector("#signInP");
const regex = new RegExp(/^\S+@\S+\.\S+$/);

const fName = document.querySelector("#firstName");
export const signUpDiv = document.querySelector("#signUp");
const lName = document.querySelector("#lastName");
const signUpEmail = document.querySelector("#signUpE");
const SignUpPassword = document.querySelector("#signUpP");

export function gotoFormSignIn(formBtnSignIn) {
  formBtnSignIn.addEventListener("click", (e) => {
    e.preventDefault();
    formSwitch({
      signInDiv: signInDiv,
      signInT: "translateX(-550px)",
      signInO: "0",
      signUpDiv: signUpDiv,
      signUpT: "translateX(0px)",
      signUpO: "1",
    });
  });
}

export function gotoFormSignUp(formBtnSignUp) {
  formBtnSignUp.addEventListener("click", (e) => {
    e.preventDefault();
    formSwitch({
      signUpDiv: signUpDiv,
      signInT: "translateX(0)",
      signInO: "1",
      signInDiv: signInDiv,
      signUpT: "translateX(-550px)",
      signUpO: "0",
    });
  });
}

let signInEmailValue = signInEmail.value;
let signInPasswordValue = signInPassword.value;

export function signInBtnClick() {
  signInButton.addEventListener("click", () => {
    if (signInEmail.value == "" || signInPassword.value == "") {
      inputValid({
        value: signInEmail,
        value2: signInPassword,
        value3: makeTag,
        value4: signInDiv,
        value5: signInButton,
      });
      return false;
    }
    if (data == null) {
      userData({
        value: signInEmail,
        value2: signInPassword,
        value3: makeTag,
        value4: signInDiv,
        value5: signInButton,
      });
      return false;
    }

    data.forEach((user, index) => {
      const userEmail = user.email;
      const userPassword = user.password;
      signInValid({
        signInEmailValue,
        userEmail,
        signInPasswordValue,
        userPassword,
        loginInData,
        index,
        makeTag,
      });
      // if (signInEmailValue == userEmail && signInPasswordValue == userPassword) {
      //   signInDiv.style.opacity = "0";
      //   signInDiv.style.transform = "translate(-550px)";
      //   loginInData(`Thanks ${user.firstName} ${user.lastName} for Login in.`);
      //   return false;
      // } else {
      //   if (index == 1) {
      //     signInEmail.value = "";
      //     signInPassword.value = "";
      //     makeTag({
      //       id: "incorrectT",
      //       classes: "incorrectToast util",
      //       value: "Please enter valid email and password",
      //       div: signInDiv,
      //       value2: signInButton,
      //     });
      //     return false;
      //   }
      // }
    });
  });
}

export function renderSignIn() {
  // if (signInEmail.value == "" || signInPassword.value == "") {
  //   makeTag({
  //     id: "loginT",
  //     classes: "loginToast util",
  //     value: "Please enter email and password",
  //     div: signInDiv,
  //     value2: signInButton,
  //   });
  //   return false;
  // }
}

export function renderSignUp() {
  let signUpEmailValue = signUpEmail.value;

  signUpData({
    fvalue: fName.value,
    lValue: lName.value,
    sUpPValue: SignUpPassword.value,
    sUpEValue: signUpEmail.value,
  });

  if (
    fName.value == "" ||
    lName.value == "" ||
    signUpEmail.value == "" ||
    SignUpPassword.value == ""
  ) {
    makeTag({
      id: "inputT",
      classes: "inputToast util",
      value: "Please fill all fields",
      div: signUpDiv,
      value2: signUpButton,
    });
    return false;
  }

  if (!signUpEmailValue.match(regex)) {
    makeTag({
      id: "emailT",
      classes: "emailToast util",
      value: "Please enter valid email",
      div: signUpDiv,
      value2: document.querySelector("#signUp p"),
    });
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
    formSwitch({
      signInT: "translateX(0)",
      signInO: "1",
      signUpT: "translateX(-550px)",
      signUpO: "0",
    });
    window.location.reload();
  }, 2000);
}
