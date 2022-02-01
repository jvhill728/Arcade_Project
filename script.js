  /* Building a tic tac toe game where players x,o will be able to interact with the
  board. Game will end with x or o winning or a tie. 
  */


/* Declaring var/const for that status of the game, current player, created functions
to be used later to display messages on screen depending on game outcome
*/
let gamePlaying = true;
let currentPlayer = "O";

// Write a function that will store user input and display it to the screen
const player1Submit = document.getElementById("playerBtn1");
player1Submit.addEventListener("click", function() {
    let player1Input = document.getElementById("player1").value;
    document.getElementById("player1-display").innerHTML = player1Input;
});

const player2Submit = document.getElementById("playerBtn2");
player2Submit.addEventListener("click", function() {
    let player2Input = document.getElementById("player2").value;
    document.getElementById("player2-display").innerHTML = player2Input;
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
