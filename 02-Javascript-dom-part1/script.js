console.dir(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.all);
// document.all[11].textContent = "hello";
console.log(document.head);
console.log(document.body);

// GETEELEMENTBYID
var header = document.getElementById("main-header");
// header.textContent = "hello";
// header.innerText = "hello2";
// header.innerHTML = "<h2>hello</h2>";
console.log(header);

// GETELEMENTBYCLASSNAME

var title = document.getElementsByClassName("title");
title[1].style.color = "grey";
console.log(title);

// QUERYSELECTOR

var listItem = document.querySelector(".items:nth-child(odd)");
listItem.style.backgroundColor = "grey";
console.log(listItem);

//QUERYSELECTORALL