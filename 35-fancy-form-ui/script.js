const questions = [
  { question: "Enter your first name" },
  { question: "Enter your last name" },
  { question: "Enter your email", pattern: /^\S+@\S+\.\S+$/ },
  { question: "Create a password", type: "password" },
];

let shakeTime = 100;
let switchTime = 200;

let position = 0;

let formBox = document.querySelector("#form-box");
let nextBtn = document.querySelector("#next-btn");
let prevbtn = document.querySelector("#prev-btn");
let inputForm = document.querySelector("#input-form");
let input = document.querySelector("#input");
let inputLabel = document.querySelector("#input-label");
let inputProgress = document.querySelector("#input-progress");
let progressBar = document.querySelector("#progress-bar");

document.addEventListener("DOMContentLoaded", getQuestion);
nextBtn.addEventListener("click", validate);

function getQuestion() {
  inputLabel.innerHTML = questions[position].question;
  input.type = input.type ? questions[position].type : "text";
  input.value = input.value ? questions[position].answer : "";
  progressBar.style.width = (position * 100) / questions.length + "%";
  showQuestion();
}

function showQuestion() {
  inputForm.style.opacity = "1";
  inputProgress.style.width = "100%";
}

function hideQuestion() {
  inputForm.style.opacity = "0";
  inputProgress.style.width = "0";
}

function transform(x, y) {
  formBox.style.transform = `translate(${x}px, ${y}px)`;
}

function validate() {
  const pattern = questions[position].pattern || /.+/;
  if (!pattern.test(input.value)) {
    inputFail();
  } else {
    inputPass();
  }
}

function inputFail() {
  formBox.classList.add("error");
  setTimeout(() => {
    formBox.classList.remove("error");
    input.focus();
    transform(0, 0);
  }, shakeTime * 6 + 20);
  for (let i = 0; i < 6; i++) {
    setTimeout(() => transform(((i % 2) * 2 - 1) * 20, 0), shakeTime * i);
  }
  setTimeout(() => transform(0, 0), shakeTime * 6);
}

function inputPass() {
  setTimeout(transform, shakeTime * 0, 0, 10);
  setTimeout(transform, shakeTime * 1, 0, 0);
  questions[position].answer = input.value;
  position++;
  if (questions[position]) {
    hideQuestion();
    getQuestion();
    inputLabel.innerHTML = questions[position].question;
    input.value = "";
  } else {
    progressBar.style.width = "100%";
    formComplete();
  }
}
function formComplete() {
  formBox.classList.add("close");
  const h1 = document.createElement("h1");
  h1.classList.add("end")
  setTimeout(()=>h1.style.opacity="1",1000)
  h1.appendChild(
    document.createTextNode(`Thanks ${questions[0].answer} for sign up`)
  );
  document.querySelector(".container").insertBefore(h1, formBox);
}
