// array of choice for the game to be played with
const choices = ["ROCK", "PAPER", "SCISSORS"]

// this function takes an array and returns 1 of the options from the array as the computers choice
function getComputerChoice(choice_array) {
    let choice = choice_array[Math.floor(Math.random() * choice_array.length)]
    return choice
}

// get all buttons and save them in a nodelist
const buttons = document.querySelectorAll('button')
const container = document.querySelector('#main-container')
const scores = document.querySelector('#scores')


// initialise empty variable called userChoice and result
let userChoice;
let playerChoice;

// initialise both user and computer score to 0
let userScore = document.querySelector('#user-score')

let computerScore = document.querySelector('#computer-score')

// get computer choice
let computerChoice = getComputerChoice(choices)

// this function takes the players choice and the computers choice and checks who has won the round
function playRound() {
    if (playerChoice === computerChoice) {
       const content = document.createElement('h2')
       content.style.color = 'white'
       content.textContent = 'That is a tie!'
       container.appendChild(content)
    }

    else if (playerChoice === "ROCK" && computerChoice === "PAPER") {
        computerScore++
        updateScoreBoard(userScore, computerScore)
        // updateComputerScoreboard()
        const content = document.createElement('h2')
       content.style.color = 'red'
       content.textContent = "You lose " + computerChoice + " beats " + playerChoice + "!"
       container.appendChild(content)
    }

    else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
        userScore++
        updateScoreBoard(userScore, computerScore)
        // updateUserScoreboard()
        const content = document.createElement('h2')
       content.style.color = 'green'
       content.textContent = "You win " + playerChoice + " beats " + computerChoice + "!"
       container.appendChild(content)
    }

    else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
        userScore++
        updateScoreBoard(userScore, computerScore)
        // updateUserScoreboard()
        const content = document.createElement('h2')
       content.style.color = 'green'
       content.textContent = "You win " + playerChoice + " beats " + computerChoice + "!"
       container.appendChild(content)
    }

    else if (playerChoice === "SCISSORS" && computerChoice === "ROCK") {
        computerScore++
        updateScoreBoard(userScore, computerScore)
        // updateComputerScoreboard()
        const content = document.createElement('h2')
       content.style.color = 'red'
       content.textContent = "You lose " + computerChoice + " beats " + playerChoice + "!"
       container.appendChild(content)
    }

    else if (playerChoice === "PAPER" && computerChoice === "SCISSORS") {
        computerScore++
        updateScoreBoard(userScore, computerScore)
        // updateComputerScoreboard()
        const content = document.createElement('h2')
       content.style.color = 'red'
       content.textContent = "You lose " + computerChoice + " beats " + playerChoice + "!"
       container.appendChild(content)
    }

    else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
        userScore++
        updateScoreBoard(userScore, computerScore)
        // updateUserScoreboard()
        const content = document.createElement('h2')
       content.style.color = 'green'
       content.textContent = "You win " + playerChoice + " beats " + computerChoice + "!"
       container.appendChild(content)
    }
}


// for each button in the "buttons" nodelist, add an event listener for when the button is clicked
// the ID of the button should be saved in the userChoice variable initialised above and the variable
// is the passed to the getUserChoice function
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    userChoice = button.id
    playerChoice = getUserChoice(userChoice)
    playRound()
  })
})

// this function simply returns the value of the ID of the clicked button
const getUserChoice = function (choice) {
    const result = choice
    return result
  }


// function updateUserScoreboard() {
//     //   update user scoreboard display
//     const userScoreDisplay = document.createElement('h3')
//     userScoreDisplay.style.color = 'white'
//     userScoreDisplay.textContent = 'Your Score: ' + userScore
//     scores.appendChild(userScoreDisplay)
// }

// function updateComputerScoreboard() {
//     // update computer scoreboard display
//     const computerScoreDisplay = document.createElement('h3')
//     computerScoreDisplay.style.color = 'white'
//     computerScoreDisplay.textContent = 'Computer Score: ' + computerScore
//     scores.appendChild(computerScoreDisplay)
// }


function updateScoreBoard(userScore, computerScore) {
  userScore.textContent = userScore
  computerScore.textContent = computerScore
}
