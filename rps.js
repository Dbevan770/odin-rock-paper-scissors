// Define options for computer
let options = ["Rock", "Paper", "Scissors"];
let winner = '';
let playerScore = 0;
let computerScore = 0;

// Assign player choice buttons to variables
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorsBtn = document.getElementById('scissorsBtn');

const playAgainBtn = document.getElementById('play-again');

// Assign text for result display
let resultText = document.getElementById('result-text');
let resultTitle = document.getElementById('result-title');
let playerScoreText = document.getElementById('player-score');
let compScoreText = document.getElementById('computer-score');

let endGameText = document.getElementById('end-game-text');

// Assign actions to player choice Buttons
rockBtn.addEventListener('click', () => SetPlayerChoice('Rock'))
paperBtn.addEventListener('click', () => SetPlayerChoice('Paper'))
scissorsBtn.addEventListener('click', () => SetPlayerChoice('Scissors'))

playAgainBtn.addEventListener('click', () =>{
    resetGame();
})

// Randomly select rock paper or scissors from the array to act as computer's choice
function ComputerPlay () {
    let compChoice = options[Math.floor(Math.random()*options.length)];

    return compChoice;
}

function updateScores(){
    playerScoreText.innerHTML = "Player: " + playerScore;
    compScoreText.innerHTML = "Computer: " + computerScore;
    if (playerScore >= 5 || computerScore >= 5){
        gameOver();
    }
}

function gameEnd () {
    if (winner === 'Tie'){
        resultText.innerHTML = "The Game is a Tie!";
    }
    else if (winner === 'Computer'){
        resultText.innerHTML = "Computer Wins!";
    }
    else if (winner === 'Player'){
        resultText.innerHTML = "Player Wins!";
    }
    else {
        resultText="Something went wrong.";
    }
    updateScores();
}

// Play round of Rock-Paper-Scissors
function PlayRound (playerSelection, compSelection) {
    resultTitle.innerHTML = "The Player chose: " + playerSelection + " and the Computer chose: " + compSelection;
    if (playerSelection === compSelection){
        winner = 'Tie';
    }
    else if 
    ((playerSelection === 'Rock' && compSelection === 'Paper') ||
    (playerSelection === 'Scissors' && compSelection === 'Rock') ||
    (playerSelection === 'Paper' && compSelection === 'Scissors'))
    {
        winner = 'Computer';
        computerScore++;
    }
    else if 
    ((compSelection === 'Rock' && playerSelection === 'Paper') ||
    (compSelection === 'Scissors' && playerSelection === 'Rock') ||
    (compSelection === 'Paper' && playerSelection === 'Scissors'))
    {
        winner = 'Player';
        playerScore++;
    }

    gameEnd(winner);
    return winner;
}

function SetPlayerChoice(buttonSelection){
    playerSelection = buttonSelection
    const compSelection = ComputerPlay();
    console.log(playerSelection, compSelection, PlayRound(playerSelection, compSelection))
}

function gameOver(){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    if(playerScore >= 5){
        endGameText.innerHTML = "You Won!";
    }
    else if (computerScore >= 5){
        endGameText.innerHTML = "You Lost!";
    }
    else {
        endGameText.innerHTML = "Something went wrong.";
    }
    playAgainBtn.style.display = 'block';
}

function resetGame(){
    playAgainBtn.style.display = 'none';
    resultTitle.innerHTML = '';
    resultText.innerHTML = '';
    endGameText.innerHTML = '';
    playerScore = 0;
    computerScore = 0;
    updateScores();
    rockBtn.disabled = false;
    paperBtn.disabled = false;
    scissorsBtn.disabled = false;
}