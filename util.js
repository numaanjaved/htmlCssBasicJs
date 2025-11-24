import { signUpDiv, signInDiv } from "./controller.js";

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

export function makeTagElement({ tagName, id, classes, value }) {
  const element = document.createElement(tagName);
  element.id = id;
  element.className = classes;
  element.textContent = value;
  return element;
}

export function inputTag(valueId, value) {
  const input = document.createElement("input");
  input.id = valueId;
  input.className = "text-md pd outline bd";
  input.placeholder = value;
  return input;
}

export function makeTag({ valueId, classes, value, div, value2 }) {
  const tag = document.createElement("p");
  tag.className = classes;
  tag.id = valueId;
  tag.textContent = value;
  div.insertBefore(tag, value2);
  setTimeout(() => {
    tag.remove();
  }, 2000);
  return false;
}
