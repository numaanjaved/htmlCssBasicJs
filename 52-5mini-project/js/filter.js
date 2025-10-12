const result = document.querySelector(".user-list");
const input = document.querySelector("#input");

let listItem = [];

input.addEventListener("input", (e) => searchText(e.target.value));
async function getData() {
  const res = await fetch("https://randomuser.me/api?results=50");
  const { results } = await res.json();
  console.log(results);

  result.innerHTML = "";

  results.forEach((user) => {
    const li = document.createElement("li");

    listItem.push(li);
    let img = document.createElement("img");
    img.src = user.picture.first;

    let userInfo = document.createElement("div");
    userInfo.className = "user-info center column";

    let h4 = document.createElement("h4");
    h4.innerText = `${user.name.first}, ${user.name.last}`;
    let p = document.createElement("p");
    p.innerText = `${user.location.city}, ${user.location.country}`;

    userInfo.append(h4, p);
    li.append(img, userInfo);
    // li.innerHTML = `
    // <img src='${user.picture.large}'>
    // <div class="user-info center column">
    // <h4>${user.name.first}, ${user.name.last}</h4>
    // <p>${user.location.city}, ${user.location.country}</p>
    // </div>
    // `;

    result.appendChild(li);
  });
}
getData();

function searchText(searchTerm) {
  listItem.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
