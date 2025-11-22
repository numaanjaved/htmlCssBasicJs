export function localStorageData(list) {
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
import {
  fName,
  lName,
  signUpEmail,
  SignUpPassword,
  signUpDiv,
  signInDiv,
} from "./controller.js";

export function signUpData() {
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
  localStorageData(userInfo);
}

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

export let data = JSON.parse(localStorage.getItem("user"));
console.log(data);
