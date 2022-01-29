  /* Building a tic tac toe game where players x,o will be able to interact with the
  board. Game will end with x or o winning or a tie. 
  */


/* Declaring var/const for that status of the game, current player, created functions
to be used later to display messages on screen depending on game outcome
*/
let gamePlaying = true;
let currentPlayer = "O";

const gameWon = function() {
    `Congratulations, ${currentPlayer} ! You Won!`;
}    
const gameDraw = function() {
     "Cat's Game!";
}

const currPlayerTurn = function () {
    `${currentPlayer} Go!`;
}

const gameStatus = document.querySelector("game-outcome");
gameStatus.innerHTML = currPlayerTurn();

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
