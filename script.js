
/* Declaring var/const for that status of the game, current player, created functions
to be used later to display messages on screen depending on game outcome
*/
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];


const playerTurnDisplay = document.querySelector(".playerTurn-display");
const cells = Array.from(document.querySelectorAll(".cell"));
const restartBtn = document.getElementById("restart");
const gameStatus = document.querySelector(".game-outcome");

// Write a function that will store user input and display it to the screen

    const player1Submit = document.getElementById("playerBtn1");
    player1Submit.addEventListener("click", function() {
        let player1Input = document.getElementById("player1").value;
        document.getElementById("player1-display").innerHTML = player1Input + " is Xs!";
        document.getElementById("player1").value = "";
    });

    const player2Submit = document.getElementById("playerBtn2");
    player2Submit.addEventListener("click", function() {
        let player2Input = document.getElementById("player2").value;
        document.getElementById("player2-display").innerHTML = player2Input + " is Os!";
        document.getElementById("player2").value = "";
        document.getElementById("playerTurn").innerHTML = `${currentPlayer} Must Start The Game!`;
    });
 



// Tic tac toe has 8 winning conditions. 3 vertical, 3 horizontal, 2 diagonal. Winning 
// conditions will have to be declared using the array index of the grid. 

const winningGame = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


// Adding function to allow cells to be be clicked and display x or o depending on player turn
function cellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
    
    if(currentPlayer === "X") {
        clickedCell.style.color = "rgb(255, 0, 0)";
    } else {
        clickedCell.style.color = "rgb(163, 69, 252)";
    }
}


// Function will allow player turn to change by looking at who current player is and flipping it
function playerChange() {
    if(currentPlayer === "X") {
        currentPlayer = "O";
        playerTurnDisplay.innerHTML = `${currentPlayer}, Your Turn!`;
    } else {
        currentPlayer = "X";
        playerTurnDisplay.innerHTML = `${currentPlayer}, Your Turn!`;
    }
}

// Function to look at cells played and determine winner, draw, if moves are valid
function resultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningGame[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === "" || b === "" || c === "") {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon && currentPlayer === "X") {
        gameStatus.innerHTML = `The ${currentPlayer}s Are Victorious!`;
        gameStatus.style.color = "rgb(255, 0, 0)";
        playerTurnDisplay.innerHTML = "Game Over!";
        gameActive = false;
        return;
    } else if(roundWon && currentPlayer === "O") {
        gameStatus.innerHTML = `The ${currentPlayer}s Are Victorious!`;
        gameStatus.style.color = "rgb(163, 69, 252)";
        playerTurnDisplay.innerHTML = "Game Over!";
        gameActive = false;
    }


    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        gameStatus.innerHTML = "Cat's Game!";
        playerTurnDisplay.innerHTML = "Game Over!";
        gameStatus.style.color = "yellow";
        gameActive = false;
        return;
    }

    playerChange();

}


function cellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute("data-cell-index"));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    cellPlayed(clickedCell, clickedCellIndex);
    resultValidation();
}




// Restart function to clear board, player names, game status info
const restartBoard = () => {
    gameActive = true;
  
    document.getElementById("player1-display").innerHTML = "";
    document.getElementById("player2-display").innerHTML = "";
    document.getElementById("player1").value = null;
    document.getElementById("player2").value = null;
    document.getElementById("playerTurn").innerHTML = "";
    document.getElementById("game-msg").innerHTML = "";
    gameState = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");

}    



document.querySelectorAll('.cell').forEach(cell => cell.addEventListener("click", cellClick));
restartBtn.addEventListener("click", restartBoard);
