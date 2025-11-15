import { signInDiv, signUpDiv } from "./view.js";

export function inputPassword(valueId) {
  const inputPassword = document.createElement("input");
  const form = document.createElement("form");
  inputPassword.id = valueId;
  inputPassword.setAttribute("autocomplete", true);
  inputPassword.className = "text-md pd mg outline";
  inputPassword.placeholder = "Password";
  inputPassword.type = "password";
  form.appendChild(inputPassword);
  return form;
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

export function makeTag(valueId, valueClass, value, div, value2) {
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
