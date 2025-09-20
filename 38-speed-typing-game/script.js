window.addEventListener("load", init);
// global variable
let time = 5;
let score = 0;
let isPlaying;

// DOM Element
let seconds = document.querySelector("#seconds");
let currentWord = document.querySelector("#current-word");
let wordInput = document.querySelector("#word-input");
let gameTime = document.querySelector("#time");
let gameScore = document.querySelector("#score");
let message = document.querySelector("#message");

// levels
let level = {
  easy: 5,
  medium: 3,
  hard: 2,
};

let currentLevel = level.medium;

let words = [
  "apple",
  "banana",
  "cherry",
  "orange",
  "grape",
  "melon",
  "kiwi",
  "mango",
  "pear",
  "plum",
  "peach",
  "fig",
  "date",
  "lemon",
  "lime",
  "apricot",
  "papaya",
  "guava",
  "berry",
  "coconut",
  "olive",
  "pomegranate",
  "passionfruit",
  "dragonfruit",
  "jackfruit",
  "lychee",
  "starfruit",
  "cranberry",
  "blueberry",
  "raspberry",
];

// Initilize function
function init() {
  // function to get random word and display on window
  showWord(words);
  // function to check match text
  wordInput.addEventListener("input", matchText);
  // function for time
  setInterval(countDown, 1000);
  // check game status
  setInterval(gameCheck, 50);
  seconds.innerHTML = currentLevel;
}

function showWord(words) {
  // get random index
  let randIndex = Math.floor(Math.random() * words.length);
  // get random word set to screen
  currentWord.innerHTML = words[randIndex];
}

function countDown() {
  // check if time is greater
  if (time > 0) {
    // decrement
    time--;
    // set time value
    gameTime.innerHTML = time;
  }
}

function matchText() {
  if (correctText()) {
    time = currentLevel + 1;
    wordInput.value = "";
    showWord(words);
    score++;
  }
  if (score === -1) {
    score = 0;
  }
  gameScore.innerHTML = score;
}

function correctText() {
  // check if text match
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = "CORRECT!!!";
    return true;
  } else {
    message.innerHTML = "";
    return false;
  }
}

function gameCheck() {
  // check if game is over
  if (!isPlaying && time === 0) {
    message.innerHTML = "GAME OVER!!!";
    score = -1;
    isPlaying = false;
  }
}
