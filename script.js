import {
  makeInput,
  inputPassword,
  lOrRBtn,
  signInOrOutBtn,
  inputName,
  textLogin,
  pText,
} from "./utils.js";

import { userList, setData, data } from "./localstorage.js";
// body styling
const body = document.querySelector("body");
body.style.height = "100vh";
body.style.width = "100vw";
body.style.backgroundColor = "#a7c9c6ff";
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "space-around";
body.style.overflow = "hidden";

// container for login form
const containerSignIn = document.createElement("div");
containerSignIn.id = "signIn";
containerSignIn.style.maxHeight = "400px";
containerSignIn.style.width = "300px";
containerSignIn.style.display = "flex";
containerSignIn.style.alignItems = "center";
containerSignIn.style.justifyContent = "center";
containerSignIn.style.flexDirection = "column";
containerSignIn.style.backgroundColor = "#fff";
containerSignIn.style.borderRadius = "10px";
containerSignIn.style.padding = "1rem";
containerSignIn.style.position = "absolute";
body.appendChild(containerSignIn);

// container sign in content
const pSignIn = textLogin("Sign in to start your session");
containerSignIn.appendChild(pSignIn);

// login input email

const inputEmailSignIn = makeInput("signInE");
containerSignIn.appendChild(inputEmailSignIn);

// login input password
const inputPasswordSignIn = inputPassword("signInP");
containerSignIn.appendChild(inputPasswordSignIn);

// Sign-In button
const buttonLogin = signInOrOutBtn("signInB", "Sign In");
containerSignIn.appendChild(buttonLogin);

const pTextSignIn = pText();
containerSignIn.appendChild(pTextSignIn);

const buttonLoginSignIn = lOrRBtn("signInBtn", "Register Now", "#437583");
containerSignIn.appendChild(buttonLoginSignIn);

// container for Sign Up form
const containerDiv = document.createElement("div");
containerDiv.id = "signUp";
containerDiv.style.maxHeight = "500px";
containerDiv.style.width = "300px";
containerDiv.style.display = "flex";
containerDiv.style.alignItems = "center";
containerDiv.style.justifyContent = "center";
containerDiv.style.flexDirection = "column";
containerDiv.style.backgroundColor = "#fff";
containerDiv.style.borderRadius = "10px";
containerDiv.style.transform = "translateX(550px)";
containerDiv.style.opacity = "0";
containerDiv.style.margin = "0";
body.appendChild(containerDiv);

// container sign up content
const pSignUp = textLogin("Register new membership");

// register input email
const inputEmailSignUpFirstName = inputName("firstName", "First Name");

const inputEmailSignUpLastName = inputName("lastName", "Last Name");

const inputEmailSignUpEmail = makeInput("signUpE");

// register input password
const inputPasswordSignUp = inputPassword("signUpP");

// Sign-Up button
const buttonLoginSignUp = signInOrOutBtn("signUpB", "Sign Up");

const pTextSignUp = pText();

const buttonSignUp = lOrRBtn("signUpBtn", "Login Now", "#437583");
containerDiv.append(
  pSignUp,
  inputEmailSignUpFirstName,
  inputEmailSignUpLastName,
  inputEmailSignUpEmail,
  inputPasswordSignUp,
  buttonLoginSignUp,
  pTextSignUp,
  buttonSignUp
);

const goToSignInForm = document.querySelector("#signInBtn");
const goToSignUpForm = document.querySelector("#signUpBtn");
const signInButton = document.querySelector("#signInB");
const signUpButton = document.querySelector("#signUpB");
const signInDiv = document.querySelector("#signIn");
const signUpDiv = document.querySelector("#signUp");

goToSignInForm.addEventListener("click", (e) => {
  e.preventDefault();
  signInDiv.style.transform = "translateX(-550px)";
  signInDiv.style.opacity = "0";
  signUpDiv.style.transform = "translateX(0)";
  signUpDiv.style.opacity = "1";
});

goToSignUpForm.addEventListener("click", (e) => {
  signInDiv.style.transform = "translateX(0)";
  signInDiv.style.opacity = "1";
  signUpDiv.style.transform = "translateX(-550px)";
  signUpDiv.style.opacity = "0";
});
const fName = document.querySelector("#firstName");
const lName = document.querySelector("#lastName");
const signUpEmail = document.querySelector("#signUpE");
const SignUpPassword = document.querySelector("#signUpP");
const signInEmail = document.querySelector("#signInE");
const signInPassword = document.querySelector("#signInP");
const regex = new RegExp(/^\S+@\S+\.\S+$/);

signUpButton.addEventListener("click", () => {
  let fNameValue = fName.value;
  let lNameValue = lName.value;
  let signUpEmailValue = signUpEmail.value;
  let signUpPasswordValue = SignUpPassword.value;

  if (
    fName.value == "" ||
    lName.value == "" ||
    signUpEmail.value == "" ||
    SignUpPassword.value == ""
  ) {
    const inputT = document.createElement("p");
    inputT.id = "inputT";
    inputT.className = "inputToast";
    inputT.textContent = "Please fill all fields";
    signUpDiv.insertBefore(inputT, signUpButton);
    setTimeout(() => {
      inputT.remove();
    }, 2000);
    return false;
  }

  if (!signUpEmailValue.match(regex)) {
    const emailT = document.createElement("p");
    emailT.id = "emailT";
    emailT.className = "emailToast";
    emailT.textContent = "Please enter valid email";
    signUpDiv.insertBefore(emailT, SignUpPassword);
    setTimeout(() => {
      emailT.remove();
    }, 2000);
    return false;
  }

  let userInfo = {
    firstName: fNameValue,
    lastName: lNameValue,
    email: signUpEmailValue,
    password: signUpPasswordValue,
  };

  const successText = document.createElement("p");
  successText.id = "successP";
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
    signInDiv.style.opacity = "1";
    signInDiv.style.transform = "translateX(0)";
    signUpDiv.style.opacity = "0";
    signUpDiv.style.transform = "translateX(-550px)";
  }, 2000);

  userList.push(userInfo);
  localStorage.setItem("user", JSON.stringify(userList));
});

signInButton.addEventListener("click", () => {
  const signInEmailValue = signInEmail.value;
  const signInPasswordValue = signInPassword.value;
  if (signInEmail.value == "" || signInPassword.value == "") {
    const loginT = document.createElement("p");
    loginT.id = "loginT";
    loginT.className = "loginToast";
    loginT.textContent = "Please enter email and password";
    signInDiv.insertBefore(loginT, signInButton);
    setTimeout(() => {
      loginT.remove();
    }, 2000);
    return false;
  }
  data.forEach((user) => {
    const userEmail = user.email;
    const userPassword = user.password;
    if (signInEmailValue == userEmail && signInPasswordValue == userPassword) {
      signInDiv.style.opacity = "0";
      signInDiv.style.transform = "translate(-550px)";
      body.textContent = `Thanks ${user.firstName} ${user.lastName} for Login in.`;
      return false;
    } else {
      alert("Please enter correct email or password");
    }
  });
});
