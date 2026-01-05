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

export function makeTagElement(obj) {
  const element = document.createElement(obj.tagName);
  element.id = obj.valueId;
  element.className = obj.classes;
  element.textContent = obj.value;
  return element;
}

export function inputTag(valueId, value) {
  const input = document.createElement("input");
  input.id = valueId;
  input.className = "text-md pd outline bd";
  input.placeholder = value;
  return input;
}

export function makeTag(obj) {
  const tag = document.createElement("p");
  tag.className = obj.valueClass;
  tag.id = obj.valueId;
  tag.textContent = obj.value;
  obj.div.insertBefore(tag, obj.value2);
  setTimeout(() => {
    tag.remove();
  }, 2000);
  return false;
}
