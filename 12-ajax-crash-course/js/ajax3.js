document.querySelector("#users").addEventListener("click", loaduser);
function loaduser() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users", true);
  xhr.onload = function () {
    if (this.status == 200) {
      let users = JSON.parse(this.responseText);
      let hello = "";
      for (var i in users) {
        hello +=
          '<div class="users">' +
          "<ul>" +
          "<li>" +
          users[i].id +
          "</li>" +
          "<li>" +
          users[i].login +
          "</li>" +
          "</ul>" +
          "</div>";
      }
      document.querySelector(".output").innerHTML = hello;
    }
  };
  xhr.send();
}
