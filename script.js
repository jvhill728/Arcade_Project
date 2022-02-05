
/* Declaring var/const for that status of the game, current player, created functions
to be used later to display messages on screen depending on game outcome
*/
let gameActive = true;
let currentPlayer = "X";
let board = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

const playerTurnDisplay = document.querySelector(".playerTurn-display");
const cells = Array.from(document.querySelectorAll(".cell"));
const restartBtn = document.getElementById("restart");


// Write a function that will store user input and display it to the screen

const player1Submit = document.getElementById("playerBtn1");
player1Submit.addEventListener("click", function() {
    let player1Input = document.getElementById("player1").value;
    document.getElementById("player1-display").innerHTML = player1Input + " is Xs!";
});

const player2Submit = document.getElementById("playerBtn2");
player2Submit.addEventListener("click", function() {
    let player2Input = document.getElementById("player2").value;
    document.getElementById("player2-display").innerHTML = player2Input + " is Os!";
});



const gameWon = function() {
    `Congratulations, ${currentPlayer} ! You Won!`;
}    
const gameDraw = function() {
     "Cat's Game!";
}

const currPlayerTurn = function () {
    `${currentPlayer} Go!`;
}


// gameState is the constant state of the board, a grid set with null variables that will have 
// Xs or Os to play through the game.  
const gameState = {
    players: ['X', 'O'],
    board: [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ]
}

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




// function handleCellPlayed(clickedCell, clickedCellIndex) {
//     gameState[clickedCellIndex] = currentPlayer;
//     clickedCell.innerHTML = currentPlayer;
// }

// function handlePlayerChange() {
//     currentPlayer = currentPlayer === "X" ? "O" : "X";
//     playerTurnDisplay.innerHTML = currentPlayerTurn();
// }

// Function to look at the board and analyze if it is a win or not

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 9; i++) {
        const winCondition = winningGame[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        playerTurnDisplay.innerHTML = gameWon();
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        playerTurnDisplay.innerHTML = gameDraw();
        gameActive = false;
        return;
    }

}

// Function to check cells clicked by X or O so the same cell cannot be played twice.
const isValidAction = (cell) => {
    if (cell.innerText === 'X' || cell.innerText === 'O'){
        return false;
    }

    return true;
};

// function to update the board with current player info
const boardUpdate =  (index) => {
    board[index] = currentPlayer;
}

// Funtion to change status display to alert which player's turn it is 
const changePlayer = function() {
    playerTurnDisplay.innerHTML = `It's ${currentPlayer}'s turn`;
    currentPlayer = currentPlayer === "Xs Go!" ? "Os Gos!" : "Xs Go!";
    playerTurnDisplay.innerHTML = currentPlayer;
    playerTurnDisplay.classList.add(`{currentPlayer}`);
}


// Function is to definte user action and use helper functions to validate, update, and change player
const userAction = function(cell, index) {
    if(isValidAction(cell) && gameActive) {
        cell.innerHTML = currentPlayer;
        cell.classList.add(`Player${currentPlayer}`);
        boardUpdate(index);
        handleResultValidation();
        changePlayer();
    }
}


const resetBoard = () => {
    board = [
        [null, null, null],
        [null, null, null],
        [null, null, null]
    ];
    document.getElementById("player1-display").innerHTML = "";
    document.getElementById("player2-display").innerHTML = "";
    document.getElementById("player1").value = null;
    document.getElementById("player2").value = null;

    isGameActive = true;
    // announcer.classList.add('hide');
    

    if (currentPlayer === 'O') {
        changePlayer();
    }

    cells.forEach(cell => {
        cell.innerText = '';
        cell.classList.remove('playerX');
        cell.classList.remove('playerO');
    });
}

cells.forEach( (cell, index) => {
    cell.addEventListener('click', () => userAction(cell, index));
});

restartBtn.addEventListener('click', resetBoard);