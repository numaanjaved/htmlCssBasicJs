document.querySelector("#getText").addEventListener("click", getText);
document.querySelector("#getUsers").addEventListener("click", getUsers);
document.querySelector("#getPosts").addEventListener("click", getPosts);
function getText() {
  fetch("sample.txt")
    .then(function (res) {
      return res.text();
    })
    .then(function (data) {
      document.querySelector("#output").innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getUsers() {
  fetch("users.json")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>Users</h2>";
      data.forEach(function (user) {
        output += `<div>
                    <ul>
                        <li>${user.id}</li>
                        <li>${user.name}</li>
                        <li>${user.email}</li>
                        </ul>
                    </div>`;
      });
      document.querySelector("#output").innerHTML = output;
    });
}

function getPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => {
      let output = "<h2>Posts</h2>";
      data.forEach(function (post) {
        output += `<div>
                        <h2>${post.title}</h2>
                        <p>${post.body}</p>
                    </div>`;
      });
      document.querySelector("#output").innerHTML = output;
    });
}
