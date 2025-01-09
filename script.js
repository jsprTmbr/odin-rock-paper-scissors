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
let playerChoice = ""

// rock || paper || scissor //
function getComputerChoice() {
    choice = Math.floor(Math.random()*100)
    // has 33% chance to choose one of the three choices from a range of 0-99 (i think)

    if (choice >= 66) { // rng value of 66-99 is scissors
        return "Scissors"
    } else if (choice <= 33) { // rng value of 0-33 is rock
        return "Rock"
    } else { // and basically everything between is paper (33-66)
        return "Paper"
    }
} 

// flags for correct or incorrect answers
// loops if necessary with different text
// human has a popup with an input field
// popup asks human rock paper or scissors
// human enter rock or paper or scissors
// if human answers something else
// tell human that is an invalid answer and have them enter the answer again
// if the answer is rock paper or scissor
// the humans choice is the answer

function getHumanChoice() {
    let validAnswer = false; // If the answer is not valid, asks the user again aka if the answer is NOT rock, paper or scissor
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
            console.log(`You chose ${choice}.`)
            return choice;
        } else {
            console.log("Wrong Input");
            wrongInput = true;
        }
    }
}

getHumanChoice()