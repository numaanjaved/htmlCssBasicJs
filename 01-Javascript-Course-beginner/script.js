// Developer tool
console.log("Hello World");

// var, let, const
var name = "hello"; // globally scope and reintialize,reassign
let fname = "brad"; // block scope reassign but not reintialize
const lname = "traversy"; // block scope and constant

// Data types
const a = "hello"; // string
const b = 4; // number
const c = 4.2; // number
const d = true; // boolean
const e = null;
const dataType = undefined;

// conditional operator
if (b == 44) {
  console.log("b is 44");
} else if (b > 3) {
  console.log("b is greater");
} else {
  console.log("b is not same");
}

// ternary operator
const number = b == 4 ? true : false;
console.log(number);

// switch case

// functions
function addSum(num1 = 1, num2 = 1) {
  console.log(num1 + num2);
}
addSum(3, 5);

// using return function
function addSum(num1 = 1, num2 = 1) {
  return num1 + num2;
}
console.log(addSum(3, 5));
// arrow function

const fullName = (fname, lname) => {
  console.log(`Your fullname ${fname} ${lname}`);
};
fullName("hello", "world");

// array
let arr = new Array(1, 3, 4, 5, 5, 5); // method 1

let arr2 = ["hello", "world", "vegatables"]; // method 2

console.log(arr);

console.log(arr[1]);

arr.pop();
console.log(arr);

arr.length;
console.log(arr);

arr.push("furits");
console.log(arr);

arr.unshift("apple");
console.log(arr);

// Object
let obj = {
  name: "hello",
  class: "ten",
  rollNo: 33,
  books: ["math", "eng", "urdu"],
};

console.log(obj);

// Array of object

let arrOfObj = [
  {
    fname: "yahoo",
    lname: "baba",
    number: 34,
  },
  {
    fname: "hello",
    lname: "world",
    number: 22,
  },
  {
    fname: "apna",
    lname: "college",
    number: 23,
  },
];
console.log(arrOfObj);

// DOM
let inputtext = document.querySelector(".text");
let inputemail = document.querySelector(".email");
let container = document.querySelector(".container");
let button = document.querySelector(".btn");
let userlist = document.querySelector(".userlist");
let message = document.querySelector(".msg");

button.addEventListener("click", function (e) {
  e.preventDefault();
  if (inputtext.value === "" || inputemail.value === "") {
    message.style.display = "block";
    setTimeout(function () {
      message.style.display = "none";
    }, 3000);
  } else {
    let li = document.createElement("li");
    li.innerHTML = `${inputtext.value} <br> ${inputemail.value}`;
    userlist.appendChild(li);
    container.style.background = "lightblue";
  }
  inputtext.value = " ";
  inputemail.value = " ";
});
