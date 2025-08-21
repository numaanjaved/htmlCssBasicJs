let addbutton = document.querySelector(".btn");
var listitem = document.querySelector(".items");
var filter = document.querySelector(".search");

addbutton.addEventListener("click", additem);
function additem(e) {
  e.preventDefault();
  var text = document.querySelector(".text");
  var li = document.createElement("li");
  li.className = "listed-group-item";
  li.appendChild(document.createTextNode(text.value));
  listitem.appendChild(li);
  var deletebtn = document.createElement("button");
  deletebtn.appendChild(document.createTextNode("X"));
  deletebtn.className = "delete";
  li.appendChild(deletebtn);
  text.value = "";
}

listitem.addEventListener("click", removeItem);
function removeItem(e) {
  if ((e.target.classList.Contains = "delete")) {
    if (confirm("You want to delete?")) {
      var li = e.target.parentElement;
      console.log(li);
      listitem.removeChild(li);
    }
  }
}

filter.addEventListener("keyup", findItem);
function findItem(e) {
  var searchInput = e.target.value.toLowerCase();
  var list = listitem.querySelectorAll("li");
  Array.from(list).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(searchInput) != -1) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}
