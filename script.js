import {
  makeInput,
  inputPassword,
  lOrRBtn,
  signInOrOutBtn,
  inputName,
  textLogin,
  pText,
} from "./utils.js";
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
containerDiv.appendChild(pSignUp);

// register input email

const inputEmailSignUpFirstName = inputName("firstName", "First Name");
containerDiv.appendChild(inputEmailSignUpFirstName);

const inputEmailSignUpLastName = inputName("lastName", "Last Name");
containerDiv.appendChild(inputEmailSignUpLastName);

const inputEmailSignUpEmail = makeInput("signUpE");
containerDiv.appendChild(inputEmailSignUpEmail);

// register input password
const inputPasswordSignUp = inputPassword("signUpP");
containerDiv.appendChild(inputPasswordSignUp);

// Sign-Up button
const buttonLoginSignUp = signInOrOutBtn("signUpB", "Sign Up");
containerDiv.appendChild(buttonLoginSignUp);

const pTextSignUp = pText();
containerDiv.appendChild(pTextSignUp);

const buttonSignUp = lOrRBtn("signUpBtn", "Login Now", "#437583");
containerDiv.appendChild(buttonSignUp);

const goToSignInForm = document.querySelector("#signInBtn");
const goToSignUpForm = document.querySelector("#signUpBtn");
const signInB = document.querySelector("#signInB");
const signUpB = document.querySelector("#signUpB");

goToSignInForm.addEventListener("click", (e) => {
  e.preventDefault();
  const signInContainer = document.querySelector("#signIn");
  signInContainer.style.transform = "translateX(-550px)";
  signInContainer.style.opacity = "0";
  const signUpContainer = document.querySelector("#signUp");
  signUpContainer.style.transform = "translateX(0)";
  signUpContainer.style.opacity = "1";
});

goToSignUpForm.addEventListener("click", (e) => {
  e.preventDefault();
  const signInContainer = document.querySelector("#signIn");
  signInContainer.style.transform = "translateX(0)";
  signInContainer.style.opacity = "1";
  const signUpContainer = document.querySelector("#signUp");
  signUpContainer.style.transform = "translateX(-550px)";
  signUpContainer.style.opacity = "0";
});
const signUpButton = document.querySelector("#signUpB");
const signInButton = document.querySelector("#signInB");
const fName = document.querySelector("#firstName");
const lName = document.querySelector("#lastName");
const signUpEmail = document.querySelector("#signUpE");
const SignUpPassword = document.querySelector("#signUpP");
const signInEmail = document.querySelector("#signInE");
const signInPassword = document.querySelector("#signInP");
const signInDiv = document.querySelector("#signIn");
const signUpDiv = document.querySelector("#signUp");

const userList = [];
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
    alert("Please fill all fields");
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
  successText.style.width = "70%";
  successText.style.padding = "1rem";
  successText.style.border = "1px";
  successText.style.borderStyle = "solid";
  successText.style.borderColor = "#904594";
  successText.style.color = "green";
  successText.style.textAlign = "center";
  successText.textContent = "Congrulation you successfully registered";
  signUpDiv.insertBefore(successText, document.querySelector("#signUp p"));

  userList.push(userInfo);
  fName.value = "";
  lName.value = "";
  signUpEmail.value = "";
  SignUpPassword.value = "";
  setTimeout(() => {
    const textSuccess = document.querySelector("#successP");
    textSuccess.style.display = "none";
    signInDiv.style.display = "block";
    signUpDiv.style.display = "none";
  }, 2000);
  localStorage.setItem("User", JSON.stringify(userList));
});

signInButton.addEventListener("click", () => {
  let data = JSON.parse(localStorage.getItem("User"));
  const signInEmailValue = signInEmail.value;
  const signInPasswordValue = signInPassword.value;
  if (signInEmail.value == "" || signInPassword.value == "") {
    alert("Please enter email and password");
  }
  data.forEach((user) => {
    const userEmail = user.email;
    const userPassword = user.password;
    if (signInEmailValue == userEmail || signInPasswordValue == userPassword) {
      console.log("hello");
    }
  });
});
