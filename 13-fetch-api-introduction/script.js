let container = document.querySelector(".container");

function fetchData(url, preCall, callbacks) {
  fetch(url)
    .then(preCall)
    .then(callbacks)
    .catch((err) => console.log(err));
}

function make(btnId, value) {
  let btn = document.createElement("button");
  btn.className = "btn btn-primary";
  btn.id = btnId;
  btn.textContent = value;
  return btn;
}
let arrObj = [
  { id: "getText", class: "btn", text: "Get Text" },
  { id: "getUsers", class: "btn", text: "Get Users" },
  { id: "getPosts", class: "btn", text: "Get Posts" },
];
arrObj.forEach((arr) => {
  container.insertBefore(make(arr.id, arr.text), document.querySelector("hr"));
});

document.querySelector("#getText").addEventListener("click", getText);
document.querySelector("#getUsers").addEventListener("click", getUsers);
document.querySelector("#getPosts").addEventListener("click", getPosts);

function getText() {
  fetchData(
    "sample.txt",
    (res) => res.text(),
    (data) => (document.querySelector("#output").innerHTML = data)
  );
}
function makeLi(value) {
  let li = document.createElement("li");
  li.textContent = value;
  return li;
}
let btn = document.querySelectorAll(".btn");
btn.forEach((itm) => (itm.style.margin = "0 10px"));
function makeListFromObject(obj, keys) {
  let ul = document.createElement("ul");
  keys.forEach((key) => {
    ul.append(makeLi(obj[key]));
  });
  return ul;
}

function makeFunc(value, arr, renderItem) {
  let outputResult = document.querySelector("#output");
  outputResult.textContent = "";
  let h2 = document.createElement("h2");
  h2.textContent = value;
  outputResult.append(h2);
  arr.forEach(function (user) {
    outputResult.append(renderItem(user));
  });
}

function renderUser(user) {
  let div = document.createElement("div");
  div.append(makeListFromObject(user, ["id", "name", "email"]));
  return div;
}

function renderPost(post) {
  let div = document.createElement("div");
  let h2 = document.createElement("h2");
  h2.textContent = post.title;
  let p = document.createElement("p");
  div.append(h2, p);
  p.textContent = post.body;
  return div;
}

function getUsers() {
  fetchData(
    "users.json",
    (res) => res.json(),
    function (data) {
      makeFunc("Users", data, renderUser);
    }
  );
}

function getPosts() {
  fetchData(
    "https://jsonplaceholder.typicode.com/posts",
    (res) => res.json(),
    function (data) {
      makeFunc("Posts", data, renderPost);
    }
  );
}
