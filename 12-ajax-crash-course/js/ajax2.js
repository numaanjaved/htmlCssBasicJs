document.querySelector("#user").addEventListener("click", loadtext);
document.querySelector("#users").addEventListener("click", loadtexts);
function loadtext() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "user.json", true);
  xhr.onload = function () {
    if (this.status == 200) {
      var user = JSON.parse(this.responseText);
      var output = "";
      output +=
        "<ul>" +
        "<li>" +
        user.id +
        "</li>" +
        "<li>" +
        user.name +
        "</li>" +
        "<li>" +
        user.email +
        "</li>" +
        "</ul>";
    }
    document.querySelector(".output").innerHTML = output;
  };
  xhr.send();
}

function loadtexts() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);
  xhr.onload = function () {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);
      var output = "";
      for (var i in users) {
        output +=
          "<ul>" +
          "<li>" +
          users[i].id +
          "</li>" +
          "<li>" +
          users[i].name +
          "</li>" +
          "<li>" +
          users[i].email +
          "</li>" +
          "</ul>";
      }
    }
    document.querySelector(".outputs").innerHTML = output;
  };
  xhr.send();
}
