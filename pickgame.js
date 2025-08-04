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

function playRound(humanChoice, computerChoice){

    if (humanChoice === computerChoice){
        document.querySelector(".winner p").textContent = "Tie!";
    }
    else if (
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper") {
            document.querySelector(".winner p").textContent = "You won!";
            humanScore++;
        }
    else {
        document.querySelector(".winner p").textContent = "Computer won!";
        computerScore++;
    }

    round++;

    if (
        humanChoice === "Rock" && computerChoice === "Scissors" ||
        humanChoice === "Paper" && computerChoice === "Rock" ||
        humanChoice === "Scissors" && computerChoice === "Paper"){
            document.querySelector(".round-result p").textContent = `${humanChoice} beats ${computerChoice}`
    }
    else if (
        computerChoice === "Rock" && humanChoice === "Scissors" ||
        computerChoice === "Paper" && humanChoice === "Rock" ||
        computerChoice === "Scissors" && humanChoice === "Paper") {
            document.querySelector(".round-result p").textContent = `${computerChoice} beats ${humanChoice}`
    }
    else {
        document.querySelector(".round-result p").textContent = `It's a tie!`
    }
}

let round = 0;
let humanScore = 0;
let computerScore = 0;

function clickPick() {
    document.getElementById("rock").addEventListener("click", () => playFullRound("Rock"));
    document.getElementById("paper").addEventListener("click", () => playFullRound("Paper"));
    document.getElementById("scissors").addEventListener("click", () => playFullRound("Scissors"));
}

function playFullRound (humanChoice) {
    if (humanScore === 5 || computerScore === 5) return;
    
    const computerChoice = getComputerChoice();
    const roundResult = playRound(humanChoice, computerChoice);

    document.querySelector(".human-pick p").textContent = `Player ${humanChoice}`
    document.querySelector(".computer-pick p").textContent = `Computer ${computerChoice}`
    
    // const playerPickContainer  = document.querySelector(".human-pick")
    // const playerPickIg = `
    //     <img src="${humanChoice.toLowerCase()}.jpeg" alt="${humanChoice} class="choice-img">
    //     <p> Player ${humanChoice}`
    // playerPickContainer.innerHTML = playerPickIg

    document.querySelector(".human-score p").textContent = `Player Score: ${humanScore}`
    document.querySelector(".computer-score p").textContent = `Computer Score: ${computerScore}`
    // document.querySelector(".winner p").textContent = finalMessage;

    if (humanScore === 5 || computerScore === 5) {
        const finalMessage = humanScore === 5 ? "Player wins the game!" : "Computer wins the game!"
        document.querySelector(".winner p").textContent = finalMessage
    }
}

clickPick()

document.querySelector("#reset").addEventListener("click", () => {
    humanScore = 0
    computerScore = 0
    round = 0

    document.querySelector(".human-pick p").textContent = `Player`
    document.querySelector(".computer-pick p").textContent = `Computer`
    document.querySelector(".human-score p").textContent = `Player Score: 0`
    document.querySelector(".computer-score p").textContent = `Computer Score: 0`
    document.querySelector(".round-result p").textContent = ""
    document.querySelector(".winner p").textContent = ""

})


// function setupGame() {
//     document.getElementById("rock").addEventListener("click", function() {
//         const humanChoice = "Rock"
//         const computerChoice = getComputerChoice()
//         playRound(humanChoice, computerChoice)
//         document.querySelector(".human-pick p").textContent = `You picked: ${humanChoice}`;
//         document.querySelector(".computer-pick p").textContent = `Computer picked: ${computerChoice}`;
//     });

//     document.getElementById("paper").addEventListener("click", function() {
//         const humanChoice = "Paper"
//         const computerChoice = getComputerChoice()
//         playRound(humanChoice, computerChoice)
//         document.querySelector(".human-pick p").textContent = `You picked: ${humanChoice}`;
//         document.querySelector(".computer-pick p").textContent = `Computer picked: ${computerChoice}`;
//     });

//     document.getElementById("scissors").addEventListener("click", function() {
//         const humanChoice = "Scissors"
//         const computerChoice = getComputerChoice()
//         playRound(humanChoice, computerChoice)
//         document.querySelector(".human-pick p").textContent = `You picked: ${humanChoice}`;
//         document.querySelector(".computer-pick p").textContent = `Computer picked: ${computerChoice}`;
//     });
// }