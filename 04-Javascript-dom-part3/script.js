// Event
// let button = document.querySelector(".btn-primary");
// button.addEventListener("click", buttonclick);
// button.addEventListener("dblclick", buttonclick);
function buttonclick(e) {
  //   console.log(e.type);
  //   console.log(e);
  //   console.log(e.target);
  //   console.log(e.target.className);
  document.querySelector(".title").textContent = "changed";
  document.querySelector(".container").style.backgroundColor = "#f4f4f4";
  //   output.innerHTML = "<h3>" + e.target.className + "</h3>";
  //   console.log(e.clientY);
  //   console.log(e.clientX);
  //   console.log(e.offsetX)
  //   console.log(e.offsetY)
  //   console.log(e.altkey);
  //   console.log(e.ctrlkey);
  //   console.log(e.shiftkey);
}
let button = document.querySelector(".btn-primary");
let box = document.querySelector(".box");
var output = document.querySelector(".output");
// button.addEventListener("click", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);
// box.addEventListener("mouseenter",runEvent)
// box.addEventListener("mouseleave",runEvent)
// box.addEventListener("mouseover",runEvent)
// box.addEventListener("mouseout", runEvent);
// box.addEventListener("mousemove", runEvent);
let iteminput = document.querySelector('input[type="text"]');
let form = document.querySelector("form");
// iteminput.addEventListener("keydown", runEvent);
// iteminput.addEventListener("keyup",runEvent)
// iteminput.addEventListener("keypress",runEvent)
// iteminput.addEventListener("focus",runEvent)
// iteminput.addEventListener("blur",runEvent)
function runEvent(e) {
  console.log("Event Type: " + e.type);
  //   console.log(e.target.value)
  //   output.innerHTML = "<h3>" + e.target.value + "</h3>";
  //   output.innerHTML =
  // "<h3>MouseX: " + e.offsetX + "</h3><h3>MouseY: " + e.offsetY + "</h3>";
}
