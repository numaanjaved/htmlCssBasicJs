const choices = document.querySelectorAll(".choice");
const score = document.querySelector("#score");
const result = document.querySelector("#result");
const restart = document.querySelector("#restart");
const modal = document.querySelector(".modal");

const scoreBoard = {
  player: 0,
  computer: 0,
};

function play(e) {
  restart.style.display = "inline-block";
  const playerChoice = e.target.id;
  const computerChoice = getComputerChoice();
  const winner = getWinner(playerChoice, computerChoice);
  showWinner(winner, computerChoice);
}

function getComputerChoice() {
  let rand = Math.random();
  if (rand < 0.34) {
    return "rock";
  } else if (rand < 0.67) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getWinner(p, c) {
  if (p === c) {
    return "draw";
  } else if (p === "rock") {
    if (c === "paper") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "paper") {
    if (c === "scissors") {
      return "computer";
    } else {
      return "player";
    }
  } else if (p === "scissors") {
    if (c === "rock") {
      return "computer";
    } else {
      return "player";
    }
  }
}

function showWinner(winner, computerChoice) {
  result.innerHTML = "";
  score.innerHTML = "";
  let h1 = document.createElement("h1");
  let icon = document.createElement("i");
  icon.className = `fas fa-hand-${computerChoice} fa-10x`;
  let p = document.createElement("p");
  p.textContent = `Computer Choose ${computerChoice}`;
  if (winner === "player") {
    scoreBoard.player++;
    h1.className = "text-win";
    h1.textContent = "You Win";
    result.append(h1, icon, p);
  } else if (winner === "computer") {
    scoreBoard.computer++;
    h1.className = "text-lose";
    h1.textContent = "You Lose";
    result.append(h1, icon, p);
  } else {
    h1.textContent = "Draw!";
    result.append(h1, icon, p);
  }
  let p1 = document.createElement("p");
  p1.textContent = `Player: ${scoreBoard.player}`;
  let p2 = document.createElement("p");
  p2.textContent = `Computer: ${scoreBoard.computer}`;
  score.append(p1, p2);
  modal.style.display = "block";
}

function clearModal(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}

choices.forEach((choice) => {
  choice.addEventListener("click", play);
});

window.addEventListener("click", clearModal);

restart.addEventListener("click", () => {
  score.innerHTML = "";
  scoreBoard.player = 0;
  scoreBoard.computer = 0;
  let p1 = document.createElement("p");
  p1.textContent = `Player: 0`;
  let p2 = document.createElement("p");
  p2.textContent = `Computer: 0`;
  score.append(p1, p2);
});
