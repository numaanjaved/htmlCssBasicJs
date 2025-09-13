document.querySelector("#text").addEventListener("click", loadtext);

function loadtext() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "sample.txt", true);
  xhr.onload = function () {
    if (this.status == 200) {
      console.log(this.responseText);
    }
  };

  xhr.onreadystatechange = function () {
    if ((this.readyState = 4)) {
      console.log(this.responseText);
    }
  };
  xhr.send();
}
