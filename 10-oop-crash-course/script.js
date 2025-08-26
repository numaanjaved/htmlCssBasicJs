// basic literal

// const Book = {
//   title: "Book one",
//   author: "hello",
//   year: 2012,
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
// };

// const Book2 = {
//   title: "Book two",
//   author: "hello2",
//   year: 2013,
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },
// };

// console.log(Book.getSummary());
// console.log(Book2.getSummary());
// console.log(Object.keys(Book));

// constructor

// function Book(title, author, year) {
//   (this.title = title),
//     (this.author = author),
//     (this.year = year),
//     (this.getSummary = function () {
//       return `${this.title} was written by ${this.author} in ${this.year}`;
//     });
// }
// const book1 = new Book("Book one", "hello", 2014);
// console.log(book1.getSummary());

// prototype

// function Book(title, author, year) {
//   (this.title = title), (this.author = author), (this.year = year);
// }

// Book.prototype.getSummary = function () {
//   return `${this.title} was written by ${this.author} in ${this.year}`;
// };

// Book.prototype.getAge = function () {
//   const age = new Date().getFullYear() - this.year;
//   return `${this.title} is ${age} years old`;
// };

// const Book1 = new Book("Book one", "hello", 2014);
// console.log(Book1.getAge());

// inheritance

// function Bookconstrutor(title, author, year, month) {
//   Book.call(this, title, author, year);
//   this.month = month;
// }

// Bookconstrutor.prototype = Object.create(Book.prototype);
// const book2 = new Bookconstrutor("Book two", "hello",3034,"jan");
// console.log(book2.getSummary());

// object of protos

// const Bookprotos = {
//   getSummary: function () {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   },

//   getAge: function () {
//     const age = new Date().getFullYear() - this.year;
//     return `${this.title} is ${age} years old`;
//   },
// };

// const book = Object.create(Bookprotos);
// book.title = "Book one";
// book.author = "hello";
// book.year = 2012;
// console.log(book.getAge());

// const book = Object.create(Bookprotos, {
//   title: { value: "Book one" },
//   author: { value: "hello" },
//   year: { value: 2012 },
// });
// console.log(book.getSummary())

// classes

// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }

//   getSummary() {
//     return `${this.title} was written by ${this.author} in ${this.year}`;
//   }

//   static topBook() {
//     return "hello";
//   }
// }

// subclasses

// class Book2 extends Book {
//   constructor(title, author, year, month) {
//     super(title, author, year);
//     this.month;
//   }
// }

// const Book1 = new Book2("Book two", "hello", 2014, "jan");
// console.log(Book1.getSummary());
