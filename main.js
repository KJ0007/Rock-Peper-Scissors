let user_score = 0;
let comp_score = 0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result >p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });

  paper_div.addEventListener("click", function () {
    game("p");
  });

  scissors_div.addEventListener("click", function () {
    game("s");
  });
}
main();

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function stringToWord(str) {
  if (str === "r") return "Rock";
  if (str === "p") return "Paper";
  return "Scissors";
}

function win(userChoice, computerChoice) {
  const glowing_div = document.getElementById(userChoice);
  user_score++;
  userScore_span.innerHTML = user_score;
  compScore_span.innerHTML = comp_score;
  result_div.innerHTML = `${stringToWord(
    userChoice
  )}(user)  beats ${stringToWord(computerChoice)}(comp) . You Win!`;
  glowing_div.classList.add("green-glow");
  setTimeout(function () {
    glowing_div.classList.remove("green-glow");
  }, 500);
}

function lose(userChoice, computerChoice) {
  const glowing_div = document.getElementById(userChoice);
  comp_score++;
  userScore_span.innerHTML = user_score;
  compScore_span.innerHTML = comp_score;
  result_div.innerHTML = `${stringToWord(
    computerChoice
  )}(comp)  beats ${stringToWord(userChoice)}(user) . You lose`;
  glowing_div.classList.add("red-glow");
  setTimeout(function () {
    glowing_div.classList.remove("red-glow");
  }, 500);
}

function draw(userChoice, computerChoice) {
  const glowing_div = document.getElementById(userChoice);

  result_div.innerHTML = `It's a DRAW`;
  glowing_div.classList.add("gray-glow");
  setTimeout(function () {
    glowing_div.classList.remove("gray-glow");
  }, 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "rs":
    case "pr":
    case "sp":
      win(userChoice, computerChoice);
      break;

    case "rp":
    case "ps":
    case "sr":
      lose(userChoice, computerChoice);
      break;

    case "rr":
    case "pp":
    case "ss":
      draw(userChoice, computerChoice);
      break;
  }
}
