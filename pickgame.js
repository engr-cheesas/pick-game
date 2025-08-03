function getHumanChoice() {
    let userInput = "";

    while (true){

        userInput = prompt("Enter pick: ")

        if (userInput === null) {
            console.log("Game cancelled.")
            return null;
        }

        userInput = userInput.trim().toLowerCase();

        if (
            userInput === "rock" ||
            userInput === "paper" ||
            userInput === "scissors" ||
            userInput === "r" ||
            userInput === "p" ||
            userInput === "s"
        ){
            break;
        }

            console.log("Invalid choice! Try again.")
    }

    let humanChoice = userInput;

    if (humanChoice === "rock" || humanChoice === "r") {
        humanChoice = "Rock";
    }
    else if (humanChoice === "paper" || humanChoice === "p") {
        humanChoice = "Paper";
    }
    else if (humanChoice === "scissors" || humanChoice === "s") {
        humanChoice = "Scissors";
    }

    console.log("You: ", humanChoice);
    return humanChoice;
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);

    if (computerChoice == 0) {
        computerChoice = "Rock";
    }
    else if (computerChoice == 1) {
        computerChoice = "Paper";
    }
    else if (computerChoice == 2) {
        computerChoice = "Scissors";
    }

    console.log("Computer: ", computerChoice);
    return computerChoice;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        if (humanChoice == "Paper" && computerChoice == "Rock") {
            console.log("You win! Paper beats Rock.")
            humanScore += 1
        }
        else if (humanChoice == "Scissors" && computerChoice == "Paper") {
            console.log("You win! Scissors beat Paper.")
            humanScore += 1
        }
        else if (humanChoice == "Rock" && computerChoice == "Scissors") {
            console.log("You win! Rock beat Scissors.")
            humanScore += 1
        }
        else if (computerChoice == "Paper" && humanChoice == "Rock") {
            console.log("Computer wins! Paper beats Rock.")
            computerScore += 1
        }
        else if (computerChoice == "Scissors" && humanChoice == "Paper") {
            console.log("Computer wins! Scissors beat Paper.")
            computerScore += 1
        }
        else if (computerChoice == "Rock" && humanChoice == "Scissors") {
            console.log("Computer wins! Rock beat Scissors.")
            computerScore += 1
        }
        else if (humanChoice == computerChoice) {
            console.log("Tie!")
        }
    }

    let round = 5;

    while (round > 0) {
        const humanPick = getHumanChoice()
        const computerPick = getComputerChoice()

        if (humanPick === null) return;

        playRound(humanPick, computerPick)
        console.log("Scoreboard: Human - ", humanScore, " | Computer - ", computerScore)
        round-=1
    }

    console.log("Final Score: Human - ", humanScore, " | Computer - ", computerScore)

    if (humanScore > computerScore) {
        console.log("Congrats! You win the game!")
    }
    else if (computerScore > humanScore) {
        console.log("Computer wins the game. Better luck next time!")
    }
    else if (humanScore == computerScore) {
        console.log("It's a tie!")
    }
}

playGame()

