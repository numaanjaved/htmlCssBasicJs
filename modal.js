import {
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
  formSwitch,
  makeTag
} from "./view.js";

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
  }, 2000);
  localStorageData(userInfo);
}
