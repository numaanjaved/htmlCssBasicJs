// DOM Element
const time = document.querySelector("#time"),
  greeting = document.querySelector("#greeting"),
  name = document.querySelector("#name"),
  message = document.querySelector("#message");

// show time
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();
  // set AM or PM
  const ampm = hour >= 12 ? "AM" : "PM";
  // 12 hour format
  hour = hour % 12 || 12;
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )}`;
  setTimeout(showTime, 1000);
}
// addzeroe
function addZero(n) {
  return (parseInt(n, 10) < 10 ? "0" : "") + n;
}

function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();
  if (hour < 12) {
    // document.body.style.background =
    //   "url('./img/morning.jpg') no-repeat center center/cover";
    greeting.innerHTML = "Good Morning";
  } else if (hour < 18) {
    // document.body.style.background =
    //   "url('./img/afternoon.jpg') no-repeat center center/cover";
    greeting.innerHTML = "Good Afternoon";
  }
  // document.body.style.background =
  //   "url('./img/evening.jpg') no-repeat center center/cover";
  else greeting.innerHTML = "Good Evening";
}

// get name
function getName() {
  if (localStorage.getItem("name") === null) {
    name.textContent = "[Enter name]";
  } else {
    name.textContent = "";
  }
}

// set name
name.addEventListner("keypress", setName);

function setName(e) {
  if (e.type === "keypress") {
    if (e.leyCode == 13) {
      localStorage.setItem("name", name.innerHTML);
      name.blur();
    }
  }
}

function getMessage() {
  if (localStorage.getItem("message") === null) {
    message.textContent = "[Enter message]";
  } else {
    message.textContent = "";
  }
}

showTime();
setBgGreet();
getName();
getMessage();
