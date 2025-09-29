class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  static displayBooks() {
    const books = Store.getBooks();
    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector("#book-list");
    const row = document.createElement("tr");
    function btn(tg1, tg2, value) {
      let tag1 = document.createElement(tg1);
      let tag2 = document.createElement(tg2);
      tag1.appendChild(tag2);
      tag2.className = "btn btn-primary delete";
      tag2.innerText = value;
      return tag1;
    }

    function makeTd(value) {
      let td = document.createElement("td");
      td.innerText = value;
      return td;
    }
    row.append(
      makeTd(book.title),
      makeTd(book.author),
      makeTd(book.isbn),
      btn("td", "a", "X")
    );
    list.appendChild(row);
  }
  static deleteBook(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.parentElement.remove();
    }
  }
  static showAlert(message, className) {
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const bookForm = document.querySelector("#book-form");
    const container = document.querySelector(".container");
    container.insertBefore(div, bookForm);
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }
  static clearfeild() {
    const title = (document.querySelector("#title").value = "");
    const author = (document.querySelector("#author").value = "");
    const isbn = (document.querySelector("#isbn").value = "");
  }
}
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  static addBook(book) {
    const books = Store.getBooks();
    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.isbn === isbn) {
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
  }
}

// add book event
document.addEventListener("DOMContentLoaded", UI.displayBooks);
document.querySelector("#book-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const isbn = document.querySelector("#isbn").value;
  if (title === "" || author === "" || isbn === "") {
    UI.showAlert("Please fill all the fields", "info");
  } else {
    const book = new Book(title, author, isbn);
    UI.addBookToList(book);
    UI.clearfeild();
    Store.addBook(book);
    UI.showAlert("Book Added", "success");
  }
});
// remove book event
document.querySelector("#book-list").addEventListener("click", (e) => {
  UI.deleteBook(e.target);
  Store.removeBook(e.target.parentElement.previousElementSibling.textContent);
  UI.showAlert("Book removed", "success");
});
