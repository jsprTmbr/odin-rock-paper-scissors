/*
get computer choice
computer will randomly return rock, paper or scissors
get human choice

track human score and set it to 0
track computer score and set it to 0

round logic:
take the player and computer choices as arguments
play a round, increment the round winner's score
log the winner
if there have been less than 5 rounds played then begin a new round

*/

let computerChoice = ""
let humanChoice = ""
let computerScore = 0
let humanScore = 0
let roundCounter = 0

// rock || paper || scissor //
function getComputerChoice() {
    choice = Math.floor(Math.random()*100)
    // has 33% chance to choose one of the three choices from a range of 0-99 (i think)

    if (choice >= 66) { // rng value of 66 or more (66-99)is scissors
        console.log(choice)
        return "scissors"
    } else if (choice <= 33) { // rng value of 33 or less (0-33) is rock
        console.log(choice)
        return "rock"
    } else { // and basically everything between is paper (33-66)
        console.log(choice)
        return "paper"
    }
    
} 

// Two flags for correct or incorrect answers
// If necessary, loops the popup with a different, more specific text
// Human has a popup with an input field
// Popup asks human rock paper or scissors
// Human enter rock or paper or scissors
// If human answers something else
// Tell human that is an invalid answer and have them enter the answer again (loops)
// If the answer is rock paper or scissor
// The humans choice is the answer

function getHumanChoice() {
    let validAnswer = false; // If the answer is not valid, asks the user again. aka if the answer is NOT rock, paper or scissor
    let wrongInput = false;  // The first time around, wrong input is false. if the user enters a wrong input, 
                             // the program tells the user they entered in a wrong input and asks them to answer again
    let userInput = ""

    // A while loop to ask the human the answer again until 
    // They choose one of the correct choices

    while(!validAnswer) {
        if (!wrongInput) {
            userInput = prompt("Rock, paper or scissors");
        } else {
            userInput = prompt("Unrecognised answer. Please enter rock, paper or scissors")
        }

        // Lowercase the answer for script to make it shorter i think
        let choice = userInput.toLowerCase();

        if (choice == "rock" || choice == "paper" || choice == "scissors") {
            validAnswer = true;
            console.clear();
            console.log(`You chose ${choice}.`)
            return choice;
            
        } else {
            console.log("Wrong Input");
            wrongInput = true;
        }
    }
}

function playGame() {
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    

    // playRound is triggered
    // Human is asked to chooses rock, paper or scissor
    // Computer makes their choise
    // Compare the choices with if statements
    // If player wins the round, gives them a point
    // If the computer wins the round, gives them a point
    // If it's a draw, no point are given
    function playRound(humanChoice, computerChoice) {
        // Player choses rock
        if (humanChoice == "rock") {
            if (computerChoice == "scissors") { // Computer - Scissors
                humanScore++ 
                console.log("Rock beats scissors. You win the round. +1 point to You.")
            } else if ( computerChoice == "rock") { // Computer - Rock
                console.log("Both chose rock. Draw.")
            } else { // Computer - Paper
                computerScore++
                console.log("Rock loses to paper. Computer wins the round. +1 point to Computer")
            }
        // Player choses paper
        } else if (humanChoice == "paper") {
            if (computerChoice == "scissors") { // Computer - Scissors
                computerScore++ 
                console.log("Paper loses to scissors. Computer wins the round. +1 point to Computer.")
            } else if ( computerChoice == "rock") { // Computer - Rock
                humanScore++
                console.log("Paper beats rock. You win the round. +1 point to You.")
            } else { // Computer - Paper
                console.log("Both chose paper. Draw.")
            }
        // Player choses scissors
        } else if (humanChoice == "scissors") { 
            if (computerChoice == "scissors") { // Computer - Scissors
                console.log("Both chose scissors. Draw.")
            } else if ( computerChoice == "rock") { // Computer - Rock
                computerScore++
                console.log("Scissors loses to rock. Computer wins the round. +1 point to Computer.")
            } else { // Computer - Paper
                humanScore++
                console.log("Scissors beats paper. You win the round. +1 point to You.")
            }
        }
        roundCounter++
        console.log(`Current round is: ${roundCounter}/5`)
        console.log(`Score is: ${humanScore} to ${computerScore}`)

        if (roundCounter < 5) {
            playGame()
        } else if (roundCounter == 5) {
            console.log(`Game over! ${winChecker(humanScore, computerScore)}`)
            console.log(`To play a new game, type newGame().`)
        }
    }

    playRound(humanSelection, computerSelection);

    function winChecker(humanScore, computerScore){
        let winnerScore = 0                                 //
        if (humanScore > computerScore) {                   //if human has more points than cp
            winnerScore = humanScore - computerScore        // How many points human wins by
            if (winnerScore > 1) {                          // If by more than 1
                return `You win by ${winnerScore} points!`  // tell the player by how many points
            } else {
                return `You win by ${winnerScore} point!`   // if by 1 tell the player by x point
            }

        } else if ( humanScore < computerScore ) {          // If human has less points than cp
            winnerScore = computerScore - humanScore        // How many points does cp win by
            if (winnerScore > 1) {                          // If mopre than 1
                return `You lose by ${winnerScore} points!` // Tell the player by how many points
            } else {
                return `You lose by ${winnerScore} point!`  // If by 1 tell the player by x point
            }

        } else {                                            // If it's a draw
            return `Draw! ${humanScore} to ${computerScore}`// Tell the player the draw score
        }
    }
}

function newGame() {        // New game function. Resets all stats to default and triggers playGame()
    computerChoice = ""
    humanChoice = ""
    computerScore = 0
    humanScore = 0
    roundCounter = 0
    playGame();
}

playGame(); // Triggers on browser open/refresh

