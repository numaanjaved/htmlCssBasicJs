import {
  signInButton,
  signInDiv,
  fName,
  lName,
  signInEmail,
  signUpEmail,
  signInPassword,
  SignUpPassword,
} from "./view.js";

import { makeTag } from "./util.js";

function localStorageData(list) {
  if (localStorage.getItem("user") === null) {
    let userList = [];
    userList.push(list);
    localStorage.setItem("user", JSON.stringify(userList));
  } else {
    let oldData = JSON.parse(localStorage.getItem("user"));
    oldData.push(list);
    localStorage.setItem("user", JSON.stringify(oldData));
  }
}
let data = JSON.parse(localStorage.getItem("user"));

export function signInCheck() {
  let signInEmailValue = signInEmail.value;
  let signInPasswordValue = signInPassword.value;

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

export function signUpData() {
  let fNameValue = fName.value;
  let lNameValue = lName.value;
  let signUpEmailValue = signUpEmail.value;
  let signUpPasswordValue = SignUpPassword.value;
  let userInfo = {
    firstName: fNameValue,
    lastName: lNameValue,
    email: signUpEmailValue,
    password: signUpPasswordValue,
  };
  localStorageData(userInfo);
}
