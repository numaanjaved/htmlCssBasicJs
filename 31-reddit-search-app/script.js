import reddit from "./redditapi.js";
let searchForm = document.querySelector("#search-form");
let searchInput = document.querySelector("#search-input");
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchTerm = searchInput.value;
  let sortBy = document.querySelector("input[name='sortby']:checked").value;
  let searchLimit = document.querySelector("#limit").value;
  if (searchTerm === "") {
    showMessage("Please fill field", "alert-primary");
  }
  searchInput.value = "";
  reddit.search(searchTerm, sortBy, searchLimit).then((results) => {
    let output = "<div class='card-columns'>";
    results.forEach((post) => {
      let image = post.preview
        ? post.preview.images[0].source.url
        : "https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg";
      output += `
      <div class="card mb-2">
      <img class="card-img-top" src="${image}" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text">${truncate(post.selftext, 100)}</p>
        <a href="${post.url}" target="_blank
        " class="btn btn-primary">Read More</a>
        <hr>
        <span class="badge badge-secondary">Subreddit: ${post.subreddit}</span> 
        <span class="badge badge-dark">Score: ${post.score}</span>
      </div>
    </div>
      `;
    });
    document.querySelector("#results").innerHTML = output;
    output += "</div>";
  });
});

function showMessage(message, className) {
  const div = document.createElement("div");
  div.className = `alert ${className}`;
  div.appendChild(document.createTextNode(message));
  let formDiv = document.querySelector("#search-container");
  let search = document.querySelector("#search");
  formDiv.insertBefore(div, search);
  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}
function truncate(text, limit) {
  const shortened = text.indexOf(" ", limit);
  if (shortened == -1) return text;
  return text.substring(0, shortened);
}
