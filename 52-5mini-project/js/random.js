const tagsEl = document.querySelector(".tags");
const textarea = document.querySelector("#textarea");

function hightlightTag(value) {
  value.classList.add("highlight");
}

function unhightlightTag(value) {
  value.classList.remove("highlight");
}

textarea.focus();

textarea.addEventListener("keyup", (e) => {
  createTag(e.target.value);

  if (e.key === "Enter") {
    setTimeout(() => {
      e.target.value = "";
    }, 10);

    randomSelect();
  }
});

function createTag(input) {
  const tags = input
    .split(",")
    .filter((key) => key.trim() !== "")
    .map((key) => key.trim());

  tagsEl.innerHTML = "";

  tags.forEach((tag) => {
    const tagEl = document.createElement("span");
    tagEl.classList.add("tag");
    tagEl.textContent = tag;
    tagsEl.appendChild(tagEl);
  });
}

function randomSelect() {
  const times = 30;

  const interval = setInterval(() => {
    const randomTag = pickRandomTag();

    hightlightTag(randomTag);

    setTimeout(() => {
      unhightlightTag(randomTag);
    }, 100);
  }, 100);

  setInterval(() => {
    clearInterval(interval);

    setTimeout(() => {
      const randomTag = pickRandomTag();
      hightlightTag(randomTag);
    }, 100);
  }, times * 100);
}

function pickRandomTag() {
  const tags = document.querySelectorAll(".tag");
  return tags[Math.floor(Math.random() * tags.length)];
}
