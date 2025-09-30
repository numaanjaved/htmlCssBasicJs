document.querySelector("#text").addEventListener("click", loadtext);
document.querySelector("#user").addEventListener("click", loadUser);
document.querySelector("#users").addEventListener("click", loadUsers);
document.querySelector("#gitUser").addEventListener("click", loaduser);

function fetchData(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (this.status == 200) {
      callback(this.responseText);
    }
  };
  xhr.send();
}

function makeLi(value) {
  let li = document.createElement("li");
  li.textContent = `${value}`;
  return li;
}

function makeListFromObject(obj, keys) {
  let ul = document.createElement("ul");
  keys.forEach((key) => ul.append(makeLi(obj[key])));
  return ul;
}

function loadtext() {
  fetchData("sample.txt", function (data) {
    console.log(data);
    document.querySelector(".text").innerHTML = data;
  });
}

function loadUser() {
  fetchData("user.json", function (data) {
    const user = JSON.parse(data);
    let ul = makeListFromObject(user, ["id", "name", "email"]);
    document.querySelector(".user").appendChild(ul);
  });
}

function loadUsers() {
  fetchData("users.json", function (data) {
    const users = JSON.parse(data);
    const container = document.querySelector(".users");
    users.forEach((user) => {
      container.appendChild(makeListFromObject(user, ["id", "name", "email"]));
    });
  });
}

function loaduser() {
  fetchData("https://api.github.com/users", function (data) {
    const users = JSON.parse(data);
    const gitUsers = document.querySelector(".gitUser");
    const div = document.createElement("div");
    div.classList.add("users");
    gitUsers.appendChild(div);

    users.forEach((user) => {
      div.appendChild(makeListFromObject(user, ["id", "login"]));
    });
  });
}
