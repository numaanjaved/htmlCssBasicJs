let listitem = document.querySelector(".items");
// parentnode
console.log(listitem.parentNode);
// parentelement
console.log(listitem.parentElement);
// nextsibling
console.log(listitem.nextSibling);
// nextelementsibling
console.log(listitem.nextElementSibling);
// childnodes
console.log(listitem.childNodes);
// children
console.log(listitem.children);
// previoussibling
console.log(listitem.previousSibling);
// previouselementsibling
console.log(listitem.previousElementSibling);
// firstchild
console.log(listitem.firstChild);
// firstelementchild
console.log(listitem.firstElementChild);
// createelement
let newDiv = document.createElement("div");
console.log(newDiv);
// addclass
newDiv.className = "hello";
// addid
newDiv.id = "hello1";
// setattributes
newDiv.setAttribute("title", "heading");
// createtextnode
let newDivText = document.createTextNode("hello world");
newDiv.appendChild(newDivText);
let h1 = document.querySelector(".title");
let main = document.querySelector("#main-header");
main.insertBefore(newDiv,h1)
