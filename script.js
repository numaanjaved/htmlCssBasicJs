import {
  makeInput,
  inputPassword,
  lOrRBtn,
  signInOrOutBtn,
  inputName,
  textLogin,
  pText,
  makeTag,
} from "./utils.js";
import { localStorageData, data } from "./localstorage.js";
// body styling
const body = document.querySelector("body");

// container for login form
const containerSignIn = document.createElement("div");
containerSignIn.id = "signIn";
containerSignIn.className = "signIn utilForm tr";
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

const buttonLoginSignIn = lOrRBtn("signInBtn", "Register Now");
containerSignIn.appendChild(buttonLoginSignIn);

// container for Sign Up form
const containerDiv = document.createElement("div");
containerDiv.id = "signUp";
containerDiv.className = "signUp utilForm mg tr";
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

const buttonSignUp = lOrRBtn("signUpBtn", "Login Now");
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

function formSwitch(
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

goToSignInForm.addEventListener("click", (e) => {
  e.preventDefault();
  formSwitch("translateX(-550px)", "0", "translateX(0px)", "1");
});
goToSignUpForm.addEventListener("click", (e) => {
  e.preventDefault();
  formSwitch("translateX(0px)", "1", "translateX(-550px)", "0");
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
    makeTag(
      "inputT",
      "inputToast util",
      "Please fill all fields",
      signUpDiv,
      signUpButton
    );
    return false;
  }

  if (!signUpEmailValue.match(regex)) {
    makeTag(
      "emailT",
      "emailToast util",
      "Please enter valid email",
      signUpDiv,
      SignUpPassword
    );
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
  successText.className = "util"
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
    formSwitch("translateX(0)", "1", "translateX(-550px)", "0");
  }, 2000);
  localStorageData(userInfo);
});

signInButton.addEventListener("click", () => {
  const signInEmailValue = signInEmail.value;
  const signInPasswordValue = signInPassword.value;
  if (signInEmail.value == "" || signInPassword.value == "") {
    makeTag(
      "loginT",
      "loginToast util",
      "Please enter email and password",
      signInDiv,
      signInButton
    );
    return false;
  }
  data.forEach((user, index) => {
    const userEmail = user.email;
    const userPassword = user.password;
    if (signInEmailValue == userEmail && signInPasswordValue == userPassword) {
      signInDiv.style.opacity = "0";
      signInDiv.style.transform = "translate(-550px)";
      body.textContent = `Thanks ${user.firstName} ${user.lastName} for Login in.`;
      return false;
    } else {
      if (index == 1) {
        signInEmail.value = "";
        signInPassword.value = "";
        makeTag(
          "incorrectT",
          "incorrectToast util",
          "Please enter valid email and password",
          signInDiv,
          signInButton
        );
        return false;
      }
    }
  });
});
