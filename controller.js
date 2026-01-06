import { makeTag, makeTagElement } from "./util.js";

import { loginInData } from "./login.js";

const logoutbtn = makeTagElement({
  tagName: "button",
  valueId: "signOutbtn",
  classes: "outline color bdn logout",
  value: "Logout",
});
document.body.appendChild(logoutbtn);
export const signInDiv = document.querySelector("#signIn");
export const signInEmail = document.querySelector("#signInE");
export const signInPassword = document.querySelector("#signInP");

export const signUpDiv = document.querySelector("#signUp");

const signInButton = document.querySelector("#signInB");

const signoutbtn = document.querySelector(".logout");

signoutbtn.addEventListener("click", () => {
  setCookie("email", null, null);
  signInDiv.style.opacity = "1";
  signInDiv.style.transform = "translate(0px)";
  signoutbtn.style.opacity = "0";
});

function setCookie(cName, cValue, exdays) {
  const date = new Date();
  date.setTime(date.getTime() + exdays * 60 * 1000);
  let expires = `expires=${date.toUTCString()}`;
  document.cookie = `${encodeURIComponent(cName)}=${encodeURIComponent(
    cValue
  )}; ${expires}; path="/"`;
}

function getCookie(cName) {
  let name = cName + "=";
  const cookies = decodeURIComponent(document.cookie);
  const data = cookies.split(";");
  for (let i = 0; i < data.length; i++) {
    let c = data[i];
    while (c.charAt(0) === 0) {
      return c.substring(1);
    }

    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
function cookieData() {
  let isLoggnedIn = true;
  if (isLoggnedIn) {
    let Value = getCookie("email");
    if (Value !== "") {
      loginInData("welcome again");
      signoutbtn.style.opacity = "1";
      signInDiv.style.opacity = "0";
      signInDiv.style.transform = "translate(-555px)";
    } else {
      signInDiv.style.opacity = "1";
      signInDiv.style.transform = "translate(0px)";
    }
  }
}
document.addEventListener("DOMContentLoaded", () => cookieData());

export function renderSignIn() {
  if (signInEmail.value == "" || signInPassword.value == "") {
    makeTag({
      valueId: "loginT",
      valueClass: "loginToast util",
      value: "Please enter email and password",
      div: signInDiv,
      value2: signInButton,
    });
    return false;
  }
  let signInEmailValue = signInEmail.value;
  let signInPasswordValue = signInPassword.value;

  fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
      if (data.length === 0) {
        signInEmail.value = "";
        signInPassword.value = "";
        makeTag({
          valueId: "incorrectT",
          valueClass: "incorrectToast util",
          value: "Please enter valid email and password",
          div: signInDiv,
          value2: signInButton,
        });
        return false;
      }

      data.forEach((user, index) => {
        const userEmail = user.email;
        const userPassword = user.password;
        if (
          signInEmailValue == userEmail &&
          signInPasswordValue == userPassword
        ) {
          signInDiv.style.opacity = "0";
          signInDiv.style.transform = "translate(-550px)";
          loginInData(`Thanks for Login in.`);
          setCookie("email", signInEmailValue, 1);
          return false;
        } else {
          if (index == 0) {
            signInEmail.value = "";
            signInPassword.value = "";
            makeTag({
              valueId: "incorrectT",
              valueClass: "incorrectToast util",
              value: "Please enter valid email and password",
              div: signInDiv,
              value2: signInButton,
            });
          }
        }
      });
    })
    .catch((error) => console.log(error));
}
