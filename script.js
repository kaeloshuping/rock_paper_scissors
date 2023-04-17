// array of choice for the game to be played with
const choices = ["ROCK", "PAPER", "SCISSORS"];

// this function takes an array and returns 1 of the options from the array as the computers choice
function getComputerChoice(choice_array) {
    let choice = choice_array[Math.floor(Math.random() * choice_array.length)];
    return choice;
};

// get all buttons and save them in a nodelist
const buttons = document.querySelectorAll('button');
const container = document.querySelector('#main-container');
const scores = document.querySelector('#scores');


// initialise empty variable called userChoice and result
let userChoice;
let playerChoice;

// initialise both user and computer score to 0
let userScore = document.getElementById('user-score').innerText;

let computerScore = document.getElementById('computer-score').innerText;

// get computer choice
let computerChoice = getComputerChoice(choices);

// this function takes the players choice and the computers choice and checks who has won the round
function playRound() {
  if (playerChoice === computerChoice) {
    let computerResultID = document.getElementById('result');
    computerResultID.innerText = 'That is a tie!';
    computerResultID.style.color = 'white';
  }

  else if (playerChoice === "ROCK" && computerChoice === "PAPER") {
      computerScore++;
      updateScoreBoard(userScore, computerScore);
      updateComputerResult();
  }

  else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
      userScore++;
      updateScoreBoard(userScore, computerScore);
      updatePlayerResult();
  }

  else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
      userScore++;
      updateScoreBoard(userScore, computerScore);
      updatePlayerResult();
  }

  else if (playerChoice === "SCISSORS" && computerChoice === "ROCK") {
      computerScore++;
      updateScoreBoard(userScore, computerScore);
      updateComputerResult();
  }

  else if (playerChoice === "PAPER" && computerChoice === "SCISSORS") {
      computerScore++;
      updateScoreBoard(userScore, computerScore);
      updateComputerResult();
  }

  else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
      userScore++;
      updateScoreBoard(userScore, computerScore);
      updatePlayerResult();
  };
};

// for each button in the "buttons" nodelist, add an event listener for when the button is clicked
// the ID of the button should be saved in the userChoice variable initialised above and the variable
// is the passed to the getUserChoice function
buttons.forEach((button) => {
  button.addEventListener('click', handleClick);
});

// this function simply returns the value of the ID of the clicked button
const getUserChoice = function (choice) {
    const result = choice;
    return result;
  };

// this function takes the user and computer's current score as arguments and updates the scoreboard
function updateScoreBoard(userScore, computerScore) {
  let newUserScoreID = document.getElementById('user-score');
  newUserScoreID.style.fontSize = '20px'
  newUserScoreID.innerText = 'Your score: ' + userScore;
  let newComputerScoreID = document.getElementById('computer-score');
  newComputerScoreID.style.fontSize = '20px'
  newComputerScoreID.innerText = 'Computer score: ' + computerScore ;
};

// this function updates the outcomes on the GUI in the case the player wins a round
function updatePlayerResult() {
  let playerResultID = document.getElementById('result');
  playerResultID.innerText = "You win " + playerChoice + " beats " + computerChoice + "!";
  playerResultID.style.color = '#60f952';
};

// this function updates the outcomes on the GUI in the case the computer wins a round
function updateComputerResult() {
  let computerResultID = document.getElementById('result');
  computerResultID.innerText = "You lose " + computerChoice + " beats " + playerChoice + "!";
  computerResultID.style.color = '#f9525a';
};

function checkPoints() {
  if (userScore >= 5) {
    buttons.forEach((button) => {
      button.removeEventListener('click', handleClick);
    })
    // let refreshPage = document.getElementById("header-text")
    // refreshPage.innerText = "Refresh the page to play again!"
    // refreshPage.style.color = "white"
    let gameEnd = document.getElementById('result');
    gameEnd.innerText = "Congratulations You win!!";
    gameEnd.style.color = '#60f952';
    refreshPage();
  }

  else if (computerScore >= 5) {
    buttons.forEach((button) => {
      button.removeEventListener('click', handleClick);
    });
    let gameEnd = document.getElementById('result');
    gameEnd.innerText = "Unfortunately Computer win!!";
    gameEnd.style.color = '#f9525a';
    refreshPage();
  };
};

function handleClick() {
  userChoice = this.id;
  playerChoice = getUserChoice(userChoice);
  computerChoice = getComputerChoice(choices);
  playRound();
  checkPoints();
  const removeHeader = document.getElementById('header-text')
  container.removeChild(removeHeader)
};

function refreshPage() {
  const refreshPage = document.createElement("div")
  refreshPage.textContent = "Refresh the page to play again!"
  refreshPage.style.color = "white"
  container.appendChild(refreshPage)
}