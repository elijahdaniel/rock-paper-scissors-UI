// set
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");
let playerScore = document.querySelector('#playerscore');
let computerScore = document.querySelector('#compscore');
let round = document.querySelector('#roundnumber');

// actions for buttons
rock.addEventListener('click', playRound);
paper.addEventListener('click', playRound)
scissors.addEventListener('click', playRound);

// div for result output each round
let outcomeWindow = document.querySelector(".outcomeWindow");
let result = document.createElement("div");
outcomeWindow.appendChild(result);

// div for who won
let winnerWindow = document.querySelector(".winnerWindow");
let resultWin = document.createElement("div");
winnerWindow.appendChild(resultWin);

// computer's randomized choices
function computerPlay() {
    let play = ['rock', 'paper', 'scissors'];
    let choice = play[Math.floor(Math.random() * play.length)]
    return choice;
}

// gameplay
function playRound() {
    let computerChoice = computerPlay().toUpperCase();
    let playerChoice = this.id.toUpperCase();
    if (computerChoice === playerChoice) {
      result.textContent = "Draw! Both players have selected " + playerChoice +"!";
      round.textContent = + round.textContent + 1;
  } else if (
    (playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
    (playerChoice === "SCISSORS" && computerChoice === "PAPER") ||
    (playerChoice === "PAPER" && computerChoice === "ROCK")
  ) {
    result.textContent = playerChoice + " beats " + computerChoice + "! You win this round!";
    playerScore.textContent = +playerScore.textContent + 1;
    round.textContent = +round.textContent + 1;
  } else {
    result.textContent = computerChoice + " beats " + playerChoice + ". You lose this round.";
    computerScore.textContent = +computerScore.textContent + 1;
    round.textContent = +round.textContent + 1;
  }

  if (playerScore.textContent == 5) {
    resultWin.textContent = "You Won!";
    computerScore.textContent = 0;
    playerScore.textContent = 0;
    round.textContent = 0;
  } else if (
     computerScore.textContent == 5
  ) {
    resultWin.textContent = "You lost .. to a computer!";
    computerScore.textContent = 0;
    playerScore.textContent = 0;
    round.textContent = 0;
  }

}
  