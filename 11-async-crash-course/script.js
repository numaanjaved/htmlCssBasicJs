// const posts = [
//   { title: "Post one", body: "this is post one" },
//   { title: "Post two", body: "this is post two" },
// ];

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post, index) => {
//       output += `<li>${post.title}</li>`;
//       document.body.innerHTML = output;
//     });
//   }, 1000);
// }

// function createPost(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// promise

const posts = [
  { title: "Post one", body: "this is post one" },
  { title: "Post two", body: "this is post two" },
];

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post, index) => {
      output += `<li>${post.title}</li>`;
      document.body.innerHTML = output;
    });
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject("error");
      }
    }, 2000);
  });
}

// async / await

// async function hello() {
//   await createPost({ title: "Book three", body: "this is book three" });
//   getPosts();
// }
// hello();

// async / await / fetch

async function helloUser() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json()
  console.log(data)
}
helloUser()

// promise.all

// const promise1 = Promise.resolve("hello world");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => {
//   setTimeout(resolve, 2000, "goodbye");
// });
// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );
