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

export function signUpData(valueFisrt, valueLast, valuePassword, valueEmail) {
  let fNameValue = valueFisrt;
  let lNameValue = valueLast;
  let signUpPasswordValue = valuePassword;
  let signUpEmailValue = valueEmail;
  let userInfo = {
    firstName: fNameValue,
    lastName: lNameValue,
    email: signUpEmailValue,
    password: signUpPasswordValue,
  };
  localStorageData(userInfo);
}

export function userData(email, password, fun, div, button) {
  email.value = "";
  password.value = "";
  fun({
    valueId: "incorrectT",
    valueClass: "incorrectToast util",
    value: "Please enter valid email and password",
    div: div,
    vale2: button,
  });
  return false;
}

export let data = JSON.parse(localStorage.getItem("user"));
