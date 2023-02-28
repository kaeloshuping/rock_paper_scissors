const choices = ["ROCK", "PAPER", "SCISSORS"]

function getComputerChoice(choice_array) {
    let choice = choice_array[Math.floor(Math.random() * choice_array.length)]
    return choice
}

let userScore = 0 
let computerScore = 0

function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "That is a tie!"
    }

    else if (playerChoice === "ROCK" && computerChoice === "PAPER") {
        computerScore++
        return "You lose " + computerChoice + " beats " + playerChoice + "!"
    }

    else if (playerChoice === "PAPER" && computerChoice === "ROCK") {
        userScore++
        return "You win " + playerChoice + " beats " + computerChoice + "!"
    }

    else if (playerChoice === "ROCK" && computerChoice === "SCISSORS") {
        userScore++
        return "You win " + playerChoice + " beats " + computerChoice + "!"
    }

    else if (playerChoice === "SCISSORS" && computerChoice === "ROCK") {
        computerScore++
        return "You lose " + computerChoice + " beats " + playerChoice + "!"
    }

    else if (playerChoice === "PAPER" && computerChoice === "SCISSORS") {
        computerScore++
        return "You lose " + computerChoice + " beats " + playerChoice + "!"
    }

    else if (playerChoice === "SCISSORS" && computerChoice === "PAPER") {
        userScore++
        return "You win " + playerChoice + " beats " + computerChoice + "!"
    }
}

function gamePlay() {
    let userInput = prompt("Lets play Rock Paper Scissors, what is your choice?").toUpperCase()
    let computerChoice = getComputerChoice(choices)
    return playRound(userInput, computerChoice)
}

for (let i = 0; i < 5; i++) {
    console.log(gamePlay())
    console.log("User Score: " + userScore)
    console.log("Computer Score: " + computerScore)
}

console.log("Final Score:")
console.log("User Score: " + userScore)
console.log("Computer Score: " + computerScore)
