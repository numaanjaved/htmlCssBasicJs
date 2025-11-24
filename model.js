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

export function signUpData({
  valueFisrt,
  valueLast,
  valuePassword,
  valueEmail,
}) {
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

export function formSwitch({
  signInDiv,
  signInT,
  signInO,
  signUpDiv,
  signUpT,
  signUpO,
}) {
  signInDiv.style.transform = signInT;
  signInDiv.style.opacity = signInO;
  signUpDiv.style.transform = signUpT;
  signUpDiv.style.opacity = signUpO;
}

export function userData({ value, value2, value3, value4, value5 }) {
  value.value = "";
  value2.value = "";
  value3({
    id: "incorrectT",
    classes: "incorrectToast util",
    value: "Please enter valid email and password",
    div: value4,
    value2: value5,
  });
}

export function inputValid({ value, value2, value3, value4, value5 }) {
  value.value = "";
  value2.value = "";
  value3({
    id: "loginT",
    classes: "loginToast util",
    value: "Please enter email and password",
    div: value4,
    value2: value5,
  });
  return false;
}

export function signInValid({
  signInEmailValue,
  userEmail,
  signInPasswordValue,
  userPassword,
  signInDiv,
  loginInData,
  index,
  makeTag,
}) {
  if (signInEmailValue == userEmail && signInPasswordValue == userPassword) {
    signInDiv.style.opacity = "0";
    signInDiv.style.transform = "translate(-550px)";
    loginInData(`Thanks ${user.firstName} ${user.lastName} for Login in.`);
    return false;
  } else {
    if (index == 1) {
      signInEmailValue = "";
      signInPasswordValue = "";
      makeTag({
        id: "incorrectT",
        classes: "incorrectToast util",
        value: "Please enter valid email and password",
        div: signInDiv,
        value2: signInButton,
      });
      return false;
    }
  }
}

export let data = JSON.parse(localStorage.getItem("user"));
