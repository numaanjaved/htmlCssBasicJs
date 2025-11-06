export function makeInput(valueId) {
  const inputEmail = document.createElement("input");
  inputEmail.className = "text-md";
  inputEmail.id = valueId;
  inputEmail.placeholder = "Email";
  return inputEmail;
}

export function inputPassword(valueId) {
  const inputPassword = document.createElement("input");
  inputPassword.id = valueId;
  inputPassword.className = "text-md";
  inputPassword.placeholder = "Password";
  inputPassword.type = "password";
  return inputPassword;
}

export function lOrRBtn(valueId, value) {
  const buttonLogin = document.createElement("button");
  buttonLogin.id = valueId;
  buttonLogin.textContent = value;
  return buttonLogin;
}

export function textLogin(value) {
  const p = document.createElement("p");
  p.id = "text";
  p.textContent = value;
  return p;
}

export function inputName(valueId, value) {
  const input = document.createElement("input");
  input.id = valueId;
  input.className = "text-md";
  input.placeholder = value;
  return input;
}

export function signInOrOutBtn(valueId, value) {
  const button = document.createElement("button");
  button.id = valueId;
  button.textContent = value;
  return button;
}

export function pText() {
  const pText = document.createElement("p");
  pText.className = "pText";
  pText.textContent = "-OR-";
  return pText;
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
