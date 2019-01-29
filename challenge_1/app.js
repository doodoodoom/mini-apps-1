var ticTacToe = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

var currentPlayer = 'X';

var victoryMessage = 'CONGRATS ' + currentPlayer + '! YOU WON!!'
var drawMessage = 'NO ONE WON!!';

var gameOver = false;

var playerTurn = (currentPlayer, ticTacToe) => {
  
};

var checkForGameOver = () => {

};

var resetGame = () => {
  currentPlayer = 'X';
  ticTacToe = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
};

var changeSquare = (currentPlayer, square) => {
  if (currentPlayer === 'X') {
    square = 1;
  } else if (currentPlayer === 'O') {
    square = -1;
  }

};