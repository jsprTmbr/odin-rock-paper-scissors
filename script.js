/*
get human choice
play a round with human choice and generate cpu choice at the same time

track human score and set it to 0
track computer score and set it to 0

round logic:
take the player and computer choices as arguments
play a round, increment the round winner's score
log the winner
if either party has less than 5 points, the player can play again.
once someone has 5 points, the humans choices are disabled and a new game button appears

*/

let computerChoice = ""
let humanChoice = ""
let computerScore = 0
let humanScore = 0
let roundCounter = 0

let rockChoice = document.querySelector("#rockBtn"); //when player clicks on "Rock"
rockChoice.addEventListener('click',(e) => {
    humanChoice = "rock";
    playRound(humanChoice, getComputerChoice())
})
let paperChoice = document.querySelector("#paperBtn"); //when player clicks on "Paper"
paperChoice.addEventListener('click',(e) => {
    humanChoice = "paper";
    playRound(humanChoice, getComputerChoice())
})
let scissorsChoice = document.querySelector("#scissorsBtn"); //when player clicks on "Scissors"
scissorsChoice.addEventListener('click',(e) => {
    humanChoice = "scissors";
    playRound(humanChoice, getComputerChoice())
})

function getComputerChoice() {
    choice = Math.floor(Math.random()*100)
    // has 33% chance to choose one of the three choices from a range of 0-99 (i think)

    if (choice >= 66) { // rng value of 66 or more (66-99)is scissors
        return "scissors"
    } else if (choice <= 33) { // rng value of 33 or less (0-33) is rock
        return "rock"
    } else { // and basically everything between is paper (33-66)
        return "paper"
    }
}

function playRound(humanChoice, computerChoice) {

    const gameState = document.querySelector("#gameState"); //links to the html elements
    const score = document.querySelector("#score");
    const round = document.querySelector("#round")
    const newGameSpot = document.querySelector("#gameThings")

    // Player choses rock
    if (humanChoice == "rock") {
        if (computerChoice == "scissors") { // Computer - Scissors
            humanScore++ 
            gameState.textContent = "Rock beats scissors. You win the round. +1 point to You."
        } else if ( computerChoice == "rock") { // Computer - Rock
            gameState.textContent = "Both chose rock. Draw."
        } else { // Computer - Paper
            computerScore++
            gameState.textContent = "Rock loses to paper. Computer wins the round. +1 point to Computer"
        }
    // Player choses paper
    } else if (humanChoice == "paper") {
        if (computerChoice == "scissors") { // Computer - Scissors
            computerScore++ 
            gameState.textContent = "Paper loses to scissors. Computer wins the round. +1 point to Computer."
        } else if ( computerChoice == "rock") { // Computer - Rock
            humanScore++
            gameState.textContent = "Paper beats rock. You win the round. +1 point to You."
        } else { // Computer - Paper
            gameState.textContent = "Both chose paper. Draw."
        }
    // Player choses scissors
    } else if (humanChoice == "scissors") { 
        if (computerChoice == "scissors") { // Computer - Scissors
            gameState.textContent = "Both chose scissors. Draw."
        } else if ( computerChoice == "rock") { // Computer - Rock
            computerScore++
            gameState.textContent = "Scissors loses to rock. Computer wins the round. +1 point to Computer."
        } else { // Computer - Paper
            humanScore++
            gameState.textContent = "Scissors beats paper. You win the round. +1 point to You."
        }
    }

    score.textContent = `Score: ${humanScore} to ${computerScore}`

    if (humanScore == 5) {
        round.textContent = "You have racked up 5 points. You win"
        } else if (computerScore == 5) {
            round.textContent = "Computer has racked up 5 points. You lose"
        }

    if (humanScore == 5 || computerScore == 5) { //if either player has won the game, disables game buttons for player and creates a newgame button 
        rockChoice.disabled = true;
        paperChoice.disabled = true;
        scissorsChoice.disabled = true;
        let newGameButton = document.createElement("button")
        newGameButton.setAttribute("id", "NewGame")
        newGameButton.textContent = "New Game"
        newGameButton.addEventListener('click',(e) => {
            newGame()
        })
        newGameSpot.appendChild(newGameButton)
    }
}

function newGame() {        // New game function. Resets all stats to default and removes newgame button
    computerChoice = ""
    humanChoice = ""
    computerScore = 0
    humanScore = 0
    roundCounter = 0
    score.textContent = "Score: 0 to 0"
    round.textContent = "First to 5"
    gameState.textContent = "Ready to start game."
    rockChoice.disabled = false;
    paperChoice.disabled = false;
    scissorsChoice.disabled = false;
    document.querySelector("#NewGame").remove();
}