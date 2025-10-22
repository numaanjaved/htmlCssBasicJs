const dragableList = document.querySelector("#dragable-list");
const checkBtn = document.querySelector("#check");

const richestPeople = [
  "Jeff Bezos",
  "Bill Gates",
  "Warren Buffett",
  "Bernard Arnault",
  "Carlos Slim Helu",
  "Amancio Ortega",
  "Larry Ellison",
  "Mark Zuckerberg",
  "Michael Blooming",
  "Larry Page",
];

let listItems = [];

let dragStartIndex;

function makeTags(tag, text, attName, attValue, tagClass) {
  const tagEl = document.createElement(tag);
  tagEl.textContent = text;
  tagEl.setAttribute(attName, attValue);
  tagEl.className = tagClass;
  return tagEl;
}

function createItem() {
  [...richestPeople]
    .map((listItem) => ({ value: listItem, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value)
    .forEach((person, index) => {
      const listItem = document.createElement("li");
      listItem.setAttribute("data-index", index);

      const span = makeTags("span", `${index + 1}`, "number");

      const div = makeTags("div", "", "draggable", "true", "dragable");

      const p = makeTags("p", `${person}`, "person-name");

      const i = document.createElement("i");
      i.className = "fas fa-grip-lines";

      div.append(p, i);
      listItem.append(span, div);

      listItems.push(listItem);

      dragableList.appendChild(listItem);
    });

  addEventListeners();
}
createItem();

function dragStart() {
  dragStartIndex = Number(this.closest("li").getAttribute("data-index"));
}

function dragEnter() {
  this.classList.add("over");
}

function dragLeave() {
  this.classList.remove("over");
}

function dragOver(e) {
  e.preventDefault();
}

function dragDrop() {
  const dragEndIndex = +this.getAttribute("data-index");

  swapItems(dragStartIndex, dragEndIndex);
  this.classList.remove("over");
}

function swapItems(fromIndex, toIndex) {
  const itemOne = listItems[fromIndex].querySelector(".dragable");
  const itemTwo = listItems[toIndex].querySelector(".dragable");

  listItems[fromIndex].appendChild(itemTwo);
  listItems[toIndex].appendChild(itemOne);
}

function addEventListeners() {
  const dragables = document.querySelectorAll(".dragable");
  const dragListItems = document.querySelectorAll(".dragable-list li");

  dragables.forEach((dragable) => {
    dragable.addEventListener("dragstart", dragStart);
  });

  dragListItems.forEach((item) => {
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragleave", dragLeave);
    item.addEventListener("dragenter", dragEnter);
    item.addEventListener("dragover", dragOver);
  });
}
checkBtn.addEventListener("click", checkItem);

function checkItem() {
  listItems.forEach((listItem, index) => {
    listItem.classList.remove("right", "wrong");

    const personName = listItem.querySelector(".dragable").innerText.trim();

    if (personName !== richestPeople[index]) {
      listItem.classList.add("wrong");
    } else {
      listItem.classList.add("right");
    }
  });
}
