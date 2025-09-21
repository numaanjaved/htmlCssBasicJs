// DOM Element
let time = document.querySelector("#time"),
  greeting = document.querySelector("#greeting"),
  name = document.querySelector("#name"),
  message = document.querySelector("#message");

// show time
function showTime() {
  // get time
  let today = new Date(),
    hour = today.getHours(),
    mins = today.getMinutes(),
    sec = today.getSeconds();
  // set time in DOM
  time.innerHTML = `${hour}<span>:</span>${addZero(
    mins
  )}<span>:</span>${addZero(sec)}`;
  // update time after second
  setTimeout(showTime, 1000);
  //   set 12 hour format
  hour = hour % 12 || 12;
}

// add zero
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

// set wallpaper and greeting according to time
function setBgGreet() {
  // get time
  let today = new Date(),
    hour = today.getHours();
  // check time then update
  if (hour < 12) {
    document.body.style.background =
      "url(./img/morning.jpg) no-repeat center center/cover";
    greeting.textContent = `Good Morning`;
  } else if (hour < 18) {
    document.body.style.background =
      "url(./img/afternoon.jpg) no-repeat center center/cover";
    greeting.textContent = `Good Afternoon`;
  } else {
    document.body.style.background =
      "url(./img/night.jpg) no-repeat center center/cover";
    greeting.textContent = `Good Night`;
  }
}

// local storage save name and message functions
function getName() {
  // check if local is null and update
  if (localStorage.getItem("name") === null) {
    // if null the set name for enter
    localStorage.getItem("name", (name.textContent = "[Enter Name]"));
  } else {
    name.textContent = localStorage.getItem("name");
  }
}

function getMessage() {
  // check if local is null and update
  if (localStorage.getItem("message") === null) {
    // if null the set name for enter
    localStorage.getItem("message", (message.textContent = "[Enter Message]"));
  } else {
    message.textContent = localStorage.getItem("message");
  }
}

function setName(e) {
  // if key press
  if (e.type == "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("name", e.target.innerText);
      name.blur();
    } else {
      localStorage.setItem("name", e.target.innerText);
    }
  }
}

function setMessage(e) {
  // if key press
  if (e.type == "keypress") {
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem("message", e.target.innerText);
      message.blur();
    } else {
      localStorage.setItem("message", e.target.innerText);
    }
  }
}

name.addEventListener("keypress", setName);
name.addEventListener("blur", setName);

message.addEventListener("keypress", setMessage);
message.addEventListener("blur", setMessage);

// run
showTime();
setBgGreet();
getName();
getMessage();
