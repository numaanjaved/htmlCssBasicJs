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
    document.querySelector(".text").innerHTML = this.responseText;
  };
  xhr.send();
}

document.querySelector("#user").addEventListener("click", loadUser);
document.querySelector("#users").addEventListener("click", loadUsers);
function loadUser() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "user.json", true);
  xhr.onload = function () {
    if (this.status == 200) {
      var user = JSON.parse(this.responseText);
      let id = user.id;
      let userName = user.name;
      let userEmail = user.email;
      let ul = document.createElement("ul");
      function makeLi(value) {
        let li = document.createElement("li");
        li.textContent = `${value}`;
        return li;
      }
      ul.appendChild(makeLi(id));
      ul.appendChild(makeLi(userName));
      ul.appendChild(makeLi(userEmail));
      document.querySelector(".user").appendChild(ul);
    }
  };
  xhr.send();
}

function loadUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "users.json", true);
  xhr.onload = function () {
    if (this.status == 200) {
      var users = JSON.parse(this.responseText);
      function makeLi(value) {
        let li = document.createElement("li");
        li.textContent = `${value}`;
        return li;
      }
      for (let i of users) {
        let ul = document.createElement("ul");
        ul.appendChild(makeLi(i.id));
        ul.appendChild(makeLi(i.name));
        ul.appendChild(makeLi(i.email));
        document.querySelector(".users").appendChild(ul);
      }
    }
  };
  xhr.send();
}

document.querySelector("#gitUser").addEventListener("click", loaduser);
function loaduser() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.github.com/users", true);
  xhr.onload = function () {
    if (this.status == 200) {
      let users = JSON.parse(this.responseText);
      let div = document.createElement("div");
      div.classList.add("users");
      let gitUsers = document.querySelector(".gitUser");
      gitUsers.appendChild(div);
      function makeLi(value) {
        let li = document.createElement("li");
        li.textContent = `${value}`;
        return li;
      }
      for (let i of users) {
        let ul = document.createElement("ul");
        ul.appendChild(makeLi(i.id));
        ul.appendChild(makeLi(i.login));
        gitUsers.appendChild(ul);
      }
      console.log(users)
    }
  };
  xhr.send();
}
