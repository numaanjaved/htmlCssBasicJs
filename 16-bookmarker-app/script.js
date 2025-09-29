let form = document.querySelector("#myForm");
form.addEventListener("submit", saveBookMark);
function saveBookMark(e) {
  e.preventDefault();
  let siteName = document.querySelector("#siteName").value;
  let siteUrl = document.querySelector("#siteUrl").value;
  if (!siteName || !siteUrl) {
    alert("please fill all the fields");
    return false;
  }
  const expression =
    /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
  const regex = new RegExp(expression);
  if (!siteUrl.match(regex)) {
    alert("please enter a valid url");
    return false;
  }
  document.querySelector("#myForm").reset();
  let bookMark = { name: siteName, url: siteUrl };
  if (localStorage.getItem("bookmarks") === null) {
    let bookMarks = [];
    bookMarks.push(bookMark);
    localStorage.setItem("bookmarks", JSON.stringify(bookMarks));
  } else {
    let oldData = JSON.parse(localStorage.getItem("bookmarks"));
    oldData.push(bookMark);
    localStorage.setItem("bookmarks", JSON.stringify(oldData));
  }
  fetchResult();
}
function fetchResult() {
  var booksSaved = JSON.parse(localStorage.getItem("bookmarks"));
  let bookmarkresult = document.querySelector("#output");
  for (var i = 0; i < booksSaved.length; i++) {
    var name = booksSaved[i].name;
    var url = booksSaved[i].url;
    let outputDiv = document.createElement("div");
    bookmarkresult.appendChild(outputDiv);
    outputDiv.innerText = name;
    outputDiv.className = "bookOutput";
    let h3 = document.createElement("h3");
    outputDiv.appendChild(h3);
    let a = document.createElement("a");
    a.className = "btn";
    a.href = url;
    a.target = "_blank";
    a.textContent = "Visit";
    h3.append(a);
    let a2 = document.createElement("a");
    a2.className = "btn btn-delete";
    a2.textContent = "Delete";
    h3.append(a2);
    a2.addEventListener("click", function (event) {
      deletebookmark(url, event);
    });
  }
}
function deletebookmark(url, event) {
  var olderbooksaved = JSON.parse(localStorage.getItem("bookmarks"));
  for (var i = 0; i < olderbooksaved.length; i++) {
    if (olderbooksaved[i].url == url) {
      olderbooksaved.splice(i, 1);
    }
  }
  localStorage.setItem("bookmarks", JSON.stringify(olderbooksaved));
  const bookDiv = event.target.closest(".bookOutput");
  if (bookDiv) {
    bookDiv.remove();
  }
  fetchResult();
}
