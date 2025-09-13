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
  let bookMark = {
    name: siteName,
    url: siteUrl,
  };
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
  var booksaved = JSON.parse(localStorage.getItem("bookmarks"));
  let bookmarkresult = document.querySelector("#output");
  bookmarkresult.innerHTML = "";
  for (var i = 0; i < booksaved.length; i++) {
    var name = booksaved[i].name;
    var url = booksaved[i].url;
    bookmarkresult.innerHTML +=
      '<div class="bookOutput">' +
      name +
      "<h3>" +
      '<a class="btn" target="_blank" href="' +
      url +
      '">visit</a>' +
      "<a onClick=\"deletebookmark('" +
      url +
      '\')" class="btn" href="#">delete</a>' +
      "</h3>" +
      "</div>";
  }
}

function deletebookmark(url) {
  var olderbooksaved = JSON.parse(localStorage.getItem("bookmarks"));
  for (var i = 0; i < olderbooksaved.length; i++) {
    if (olderbooksaved[i].url == url) {
      olderbooksaved.splice(i, 1);
    }
  }
  localStorage.setItem("bookmarks", JSON.stringify(olderbooksaved));
  fetchResult();
}
