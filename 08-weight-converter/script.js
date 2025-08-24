let pound = document.querySelector("#pound");
document.querySelector(".card").style.display = "none";
document.querySelector(".card-2").style.display = "none";
pound.addEventListener("input", function (e) {
  document.querySelector(".card").style.display = "block";
  document.querySelector(".card-2").style.display = "block";
  let value = e.target.value;
  let gramvalue = (document.querySelector(".gramOutput").innerHTML =
    value / 0.2348883);
  let kgvalue = (document.querySelector(".kgOutput").innerHTML = value / 53873);
});
