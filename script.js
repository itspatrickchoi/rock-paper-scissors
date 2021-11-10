function computerPlay() {
    let weapons = ["rock", "paper", "scissors"];
    let randomNumber = Math.random()*1000;
    if (randomNumber <= 333) {
        return weapons[0];
    }
    else if (randomNumber <= 666) {
        return weapons[1];
    }
    else {
        return weapons[2];
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            console.log("It's a tie!");
        }
        else if (computerSelection === "paper") {
            console.log("You lose! Paper beats Rock.");
            console.log(`Computer: ${++computerCount}`);
        }
        else {
            console.log("You win! Rock beats Scissors.");
            console.log(`Player: ${++playerCount}`);
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            console.log("It's a tie!");
        }
        else if (computerSelection === "scissors") {
            console.log("You lose! Scissors beats Paper.");
            console.log(`Computer: ${++computerCount}`);
        }
        else {
            console.log("You win! Paper beats Rock.");
            console.log(`Player: ${++playerCount}`);
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            console.log("It's a tie!");
        }
        else if (computerSelection === "rock") {
            console.log("You lose! Rock beats Scissors.");
            console.log(`Computer: ${++computerCount}`);
        }
        else {
            console.log("You win! Scissors beats Paper.");
            console.log(`Player: ${++playerCount}`);
        }
    }
    else {
        console.log("Your weapon of choice is invalid!");
    }
}

let playerCount = 0;
let computerCount = 0;

function game() {
    let computerSelection;
    let playerSelection;
    while(playerCount !== 5 && computerCount !== 5) {
        computerSelection = computerPlay();
        playerSelection = prompt("Enter your weapon of choice!");
        playerSelection = playerSelection.toLowerCase().trim();
        playRound(playerSelection, computerSelection)
        console.log(playerCount);
        console.log(computerCount);
    }
    if (playerCount === 5) {
        console.log("Congratulations! You won the game!")
    }
    else {
        console.log("Oh no, you lost the game!")
    }
}

game();