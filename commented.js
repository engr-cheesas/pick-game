// function playGame() {

//     while (round > 0) {
//         const humanPick = getHumanChoice()
//         const computerPick = getComputerChoice()

//         if (humanPick === null) return;

//         playRound(humanPick, computerPick)
//         console.log("Scoreboard: Human - ", humanScore, " | Computer - ", computerScore)
//         round-=1
//     }

//     console.log("Final Score: Human - ", humanScore, " | Computer - ", computerScore)

//     if (humanScore > computerScore) {
//         console.log("Congrats! You win the game!")
//     }
//     else if (computerScore > humanScore) {
//         console.log("Computer wins the game. Better luck next time!")
//     }
//     else if (humanScore == computerScore) {
//         console.log("It's a tie!")
//     }
// }

// function getHumanChoice() {
//     let userInput = "";

//     while (true){

//         userInput = prompt("Enter pick: ")

//         if (userInput === null) {
//             console.log("Game cancelled.")
//             return null;
//         }

//         userInput = userInput.trim().toLowerCase();

//         if (
//             userInput === "rock" ||
//             userInput === "paper" ||
//             userInput === "scissors" ||
//             userInput === "r" ||
//             userInput === "p" ||
//             userInput === "s"
//         ){
//             break;
//         }

//             console.log("Invalid choice! Try again.")
//     }

//     let humanChoice = userInput;

//     if (humanChoice === "rock" || humanChoice === "r") {
//         humanChoice = "Rock";
//     }
//     else if (humanChoice === "paper" || humanChoice === "p") {
//         humanChoice = "Paper";
//     }
//     else if (humanChoice === "scissors" || humanChoice === "s") {
//         humanChoice = "Scissors";
//     }

//     console.log("You: ", humanChoice);
//     return humanChoice;
// }