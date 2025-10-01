// chain animation
function brakeChain() {
  let chain = document.querySelector("#chain");
  chain.innerHTML = "&#xf0c1";
  setTimeout(function () {
    chain.innerHTML = "&#xf127";
  }, 1000);
}
brakeChain();
setInterval(brakeChain, 2000);

// battery animantion

function battery() {
  let batteryCharge = document.querySelector("#battery");
  batteryCharge.innerHTML = "&#xf244;";
  setTimeout(function () {
    batteryCharge.innerHTML = "&#xf243;";
  }, 1000);
  setTimeout(function () {
    batteryCharge.innerHTML = "&#xf242;";
  }, 2000);
  setTimeout(function () {
    batteryCharge.innerHTML = "&#xf241;";
  }, 3000);
  setTimeout(function () {
    batteryCharge.innerHTML = "&#xf240;";
  }, 4000);
}
battery();
setInterval(battery, 5000);

// hourGlass animation

function hourGlassTip() {
  let hourGlass = document.querySelector("#hourGlass");
  hourGlass.innerHTML = "&#xf251;";
  setTimeout(function () {
    hourGlass.innerHTML = "&#xf252;";
  }, 1000);
  setTimeout(function () {
    hourGlass.innerHTML = "&#xf253;";
  }, 2000);
}
hourGlassTip();
setInterval(hourGlassTip, 3000);
