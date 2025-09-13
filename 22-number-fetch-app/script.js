let numberInput = document.querySelector("#numFacts");
let factDiv = document.querySelector(".facts");
let outputFact = document.querySelector(".fact");
numberInput.addEventListener("input", getFactajax);
function getFactajax() {
  let number = numberInput.value;
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "http://numbersapi.com/" + number);
  xhr.onload = function () {
    if (this.status == 200) {
      factDiv.style.display = "block";
      outputFact.innerHTML = this.responseText;
    }
    if (number === "") {
      outputFact.innerHTML = "";
    }
  };
  xhr.send();
}

// function getFactfetch() {
//   let number = numberInput.value;
//   fetch("http://numbersapi.com/" + number)
//     .then((response) => response.text())
//     .then((data) => {
//       factDiv.style.display = "block";
//       outputFact.innerHTML = data;
//     })
//     .catch((err) => console.log(err));
// }
