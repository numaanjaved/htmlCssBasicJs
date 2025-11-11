import {
  goToSignInForm,
  goToSignUpForm,
  signInButton,
  signUpButton,
  signUpDiv,
  signInDiv,
  fName,
  lName,
  signInEmail,
  signUpEmail,
  signInPassword,
  SignUpPassword,
  regex,
  signInEmailValue,
  signInPasswordValue,
} from "./view.js";
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
  // return false;
}

if (!signUpEmailValue.match(regex)) {
  makeTag(
    "emailT",
    "emailToast util",
    "Please enter valid email",
    signUpDiv,
    SignUpPassword
  );
  // return false;
}

const successText = document.createElement("p");
successText.id = "successP";
successText.className = "util";
successText.style.textAlign = "center";
successText.textContent = "Congrulation you successfully registered";
signUpDiv.insertBefore(successText, document.querySelector("#signUp p"));

fName.value = "";
lName.value = "";
signUpEmail.value = "";
SignUpPassword.value = "";
setTimeout(() => {
  const textSuccess = document.querySelector("#successP");
  textSuccess.remove();
  formSwitch("translateX(0)", "1", "translateX(-550px)", "0");
}, 2000);
localStorageData(userInfo);
function makeTag(valueId, valueClass, value, div, value2) {
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
export let data = JSON.parse(localStorage.getItem("user"));
export function signInCheck() {
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
  data.forEach((user, index) => {
    const userEmail = user.email;
    const userPassword = user.password;
    if (signInEmailValue == userEmail && signInPasswordValue == userPassword) {
      signInDiv.style.opacity = "0";
      signInDiv.style.transform = "translate(-550px)";
      body.textContent = `Thanks ${user.firstName} ${user.lastName} for Login in.`;
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
