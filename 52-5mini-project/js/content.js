let span = [
  { tag: "span", class: "animated-bg animated-bg-text" },
  { tag: "span", class: "animated-bg animated-bg-text" },
  { tag: "span", class: "animated-bg animated-bg-text" },
];

let card = document.createElement("div");
card.className = "card";

let cardHeader = document.createElement("div");
cardHeader.className = "card-header animated-bg";

let imgHeader = document.createElement("img");
imgHeader.className = "animated-bg";

cardHeader.appendChild(imgHeader);
let cardContent = document.createElement("div");
cardContent.className = "card-content";

let h3 = document.createElement("h3");
h3.className = "card-title";

let p = document.createElement("p");
p.className = "excerpt";
for (let tag of span) {
  let spanTag = document.createElement(tag.tag);
  spanTag.className = tag.class;
  p.appendChild(spanTag);
}
cardContent.append(h3, p);

let cardAuthor = document.createElement("div");
cardAuthor.className = "author";

let cardAuthorImg = document.createElement("div");
cardAuthorImg.className = "profile_img animated-bg overflow";

let authorInfo = document.createElement("div");
authorInfo.className = "author-info center column-center space-around";

let strong = document.createElement("strong");
strong.className = "animated-bg animated-bg-text author";

let small = document.createElement("small");
small.className = "animated-bg animated-bg-text date";

authorInfo.append(strong, small);

cardAuthor.append(cardAuthorImg, authorInfo);

card.append(cardHeader, cardContent, cardAuthor);

document.body.appendChild(card);

const header = document.querySelector(".card-header");
const title = document.querySelector(".card-title");
const excerpt = document.querySelector(".excerpt");
const profile_img = document.querySelector(".profile_img");
const author = document.querySelector(".author");
const date = document.querySelector("#date");
const animated_bg = document.querySelectorAll(".animated-bg");
const animated_bg_text = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);
console.log();

function getData() {
  header.innerHTML = '<img src="photo.jpg" alt="" />';
  title.innerHTML = "Lorem ipsum dolor sit amet";
  excerpt.innerHTML =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati iste";
  profile_img.innerHTML =
    '<img src="https://randomuser.me/api/portraits/men/36.jpg" alt="" />';
  author.innerHTML = "Author";
  date.innerText = "oct 23,2000";
  animated_bg.forEach((bg) => bg.classList.remove(".animated-bg"));
  animated_bg_text.forEach((bg) => bg.classList.remove(".animated-bg-text"));
}
