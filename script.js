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

function playRound(playerChoice, computerChoice){

    if (playerChoice === computerChoice){
        document.querySelector(".winner p").textContent = "Tie!";
    }
    else if (
        playerChoice === "Rock" && computerChoice === "Scissors" ||
        playerChoice === "Paper" && computerChoice === "Rock" ||
        playerChoice === "Scissors" && computerChoice === "Paper") {
            document.querySelector(".winner p").textContent = "You won!";
            playerScore++;
        }
    else {
        document.querySelector(".winner p").textContent = "Computer won!";
        computerScore++;
    }

    round++;

    if (
        playerChoice === "Rock" && computerChoice === "Scissors" ||
        playerChoice === "Paper" && computerChoice === "Rock" ||
        playerChoice === "Scissors" && computerChoice === "Paper"){
            document.querySelector(".round-result p").textContent = `${playerChoice} beats ${computerChoice}`
    }
    else if (
        computerChoice === "Rock" && playerChoice === "Scissors" ||
        computerChoice === "Paper" && playerChoice === "Rock" ||
        computerChoice === "Scissors" && playerChoice === "Paper") {
            document.querySelector(".round-result p").textContent = `${computerChoice} beats ${playerChoice}`
    }
    else {
        document.querySelector(".round-result p").textContent = `It's a tie!`
    }
}

let round = 0;
let playerScore = 0;
let computerScore = 0;

function clickPick() {
    document.getElementById("rock").addEventListener("click", () => playFullRound("Rock"));
    document.getElementById("paper").addEventListener("click", () => playFullRound("Paper"));
    document.getElementById("scissors").addEventListener("click", () => playFullRound("Scissors"));
}

function playFullRound (playerChoice) {
    if (playerScore === 5 || computerScore === 5) return;
    
    const computerChoice = getComputerChoice();
    const roundResult = playRound(playerChoice, computerChoice);

    document.querySelector(".player-pick p").textContent = `Player ${playerChoice}`
    document.querySelector(".computer-pick p").textContent = `Computer ${computerChoice}`
    
    const playerPickContainer  = document.querySelector(".player-pick")
    const playerPickIg = `
        <img src="img/${playerChoice.toLowerCase()}_p.png" alt="${playerChoice}" class="choice-img">
        <p style="display: none"> Player ${playerChoice}`
    playerPickContainer.innerHTML = playerPickIg

    const computerPickContainer  = document.querySelector(".computer-pick")
    const computerPickIg = `
        <img src="img/${computerChoice.toLowerCase()}_c.png" alt="${computerChoice}" class="choice-img">
        <p style="display: none"> Computer ${computerChoice}`
    computerPickContainer.innerHTML = computerPickIg

    document.querySelector(".player-score p").textContent = `Player Score: ${playerScore}`
    document.querySelector(".computer-score p").textContent = `Computer Score: ${computerScore}`

    if (playerScore === 5 || computerScore === 5) {
        const finalMessage = playerScore === 5 ? "Player wins the game!" : "Computer wins the game!"
        document.querySelector(".winner p").textContent = finalMessage
    }
}

clickPick()

document.querySelector("#reset").addEventListener("click", () => {
    playerScore = 0
    computerScore = 0
    round = 0

    document.querySelector(".player-pick p").textContent = `Player`
    document.querySelector(".computer-pick p").textContent = `Computer`
    document.querySelector(".player-score p").textContent = `Player Score: 0`
    document.querySelector(".computer-score p").textContent = `Computer Score: 0`
    document.querySelector(".round-result p").textContent = ""
    document.querySelector(".winner p").textContent = ""

    document.querySelector(".player-pick").innerHTML = `<p> </p>`
    document.querySelector(".computer-pick").innerHTML = `<p> </p>`
})