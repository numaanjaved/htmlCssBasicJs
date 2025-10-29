export function makeInput(valueId) {
  const inputEmail = document.createElement("input");
  inputEmail.id = valueId;
  inputEmail.placeholder = "Email";
  inputEmail.style.fontSize = "1.2rem";
  inputEmail.style.padding = "5px";
  inputEmail.style.margin = "10px";
  inputEmail.style.border = "1px";
  inputEmail.style.borderStyle = "solid";
  inputEmail.style.borderColor = "grey";
  inputEmail.style.outline = "none";
  return inputEmail;
}

export function inputPassword(valueId) {
  const inputPassword = document.createElement("input");
  inputPassword.id = valueId;
  inputPassword.placeholder = "Password";
  inputPassword.style.fontSize = "1.2rem";
  inputPassword.style.outline = "none";
  inputPassword.style.padding = "5px";
  inputPassword.style.margin = "0px";
  inputPassword.type = "password";
  return inputPassword;
}

export function lOrRBtn(valueId, value, bgc) {
  const buttonLogin = document.createElement("button");
  buttonLogin.id = valueId;
  buttonLogin.textContent = value;
  buttonLogin.style.border = "none";
  buttonLogin.style.outline = "none";
  buttonLogin.style.color = "#fff";
  buttonLogin.style.padding = "10px 12px";
  buttonLogin.style.margin = "1rem";
  buttonLogin.style.backgroundColor = bgc;
  return buttonLogin;
}

export function textLogin(value) {
  const p = document.createElement("p");
  p.textContent = value;
  p.style.color = "grey";
  p.style.textAlign = "center";
  return p;
}

export function inputName(valueId, value) {
  const input = document.createElement("input");
  input.id = valueId;
  input.placeholder = value;
  input.style.fontSize = "1.2rem";
  input.style.padding = "5px";
  input.style.margin = "5px";
  input.style.border = "1px";
  input.style.borderStyle = "solid";
  input.style.borderColor = "grey";
  input.style.outline = "none";
  return input;
}

export function signInOrOutBtn(valueId, value) {
  const button = document.createElement("button");
  button.id = valueId;
  button.textContent = value;
  button.style.border = "none";
  button.style.outline = "none";
  button.style.color = "#fff";
  button.style.padding = "10px 12px";
  button.style.margin = "1rem";
  button.style.backgroundColor = "#437583";
  return button;
}

export function pText() {
  const pText = document.createElement("p");
  pText.textContent = "-OR-";
  pText.style.margin = "0";
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
