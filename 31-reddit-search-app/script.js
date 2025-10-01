import reddit from "./redditapi.js";
let searchForm = document.querySelector("#search-form");
let searchInput = document.querySelector("#search-input");
let limitOption = document.querySelector("#limit");
let optionArr = [5, 10, 25, 50, 100];
optionArr.forEach((option) => {
  let optionTag = document.createElement("option");
  optionTag.textContent = option;
  optionTag.value = option;
  limitOption.append(optionTag);
});
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let searchTerm = searchInput.value;
  let sortBy = document.querySelector("input[name='sortby']:checked").value;
  let searchLimit = document.querySelector("#limit").value;
  if (searchTerm === "") {
    showMessage("Please fill field", "alert-primary");
  }
  searchInput.value = "";
  limitOption.value = "";
  reddit.search(searchTerm, searchLimit, sortBy).then((results) => {
    results.forEach((post) => {
      let img = document.createElement("img");
      img.className = "card-img-top";

      let image = post.preview
        ? post.preview.images[0].source.url
        : "https://cdn.comparitech.com/wp-content/uploads/2017/08/reddit-1.jpg";
      img.src = image;
      img.alt = "Card image cap";

      let oDiv = document.createElement("div");
      oDiv.appendChild(img);
      oDiv.className = "card mb-2";

      let iDiv = document.createElement("div");
      iDiv.className = "card-body";

      let h5 = document.createElement("h5");
      h5.className = "card-title";
      h5.textContent = post.title;

      let p = document.createElement("p");
      p.classList.add("card-text");
      p.textContent = truncate(post.selftext, 100);

      let a = document.createElement("a");
      a.className = "btn btn-primary";
      a.setAttribute("href", post.url);
      a.textContent = "Read More";

      let hr = document.createElement("hr");

      function makeSpan(className, value) {
        let span = document.createElement("span");
        span.className = "badge";
        span.classList.add(`bg-${className}`);
        span.textContent = value;
        return span;
      }

      iDiv.append(h5, p, a, hr);
      iDiv.appendChild(makeSpan("secondary", `Subreddit: ${post.subreddit}`));
      iDiv.appendChild(makeSpan("dark", `Score: ${post.score}`));

      oDiv.appendChild(iDiv);
      document.querySelector("#results").appendChild(oDiv);
    });
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
