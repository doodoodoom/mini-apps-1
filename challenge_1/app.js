var ticTacToe = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];

var currentPlayer = 'X';

var victoryMessage = `CONGRATS ${currentPlayer}, YOU WON!!`;
var drawMessage = 'NO ONE WON!!';

var playerTurn = (currentPlayer) => {
  // TODO: invoke changeSquare
  
  checkForGameOver();

  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else {
    currentPlayer = 'X';
  }
};

var checkForGameOver = () => {
  var reducer = (acc, val) => acc + val;

  var row1 = [ticTacToe[0]];
  var row2 = [ticTacTow[1]];
  var row3 = [ticTacTow[2]];
  var column1 = [ticTacToe[0, 0], ticTacToe[1, 0], ticTacToe[2, 0]];
  var column2 = [ticTacToe[0, 1], ticTacToe[1, 1], ticTacToe[2, 1]];
  var column3 = [ticTacToe[0, 2], ticTacToe[1, 2], ticTacToe[2, 2]];
  var diagonal1 = [ticTacToe[0, 0], ticTacToe[1, 1], ticTacToe[2, 2]];
  var diagonal2 = [ticTacToe[0, 2], ticTacToe[1, 1], ticTacToe[2, 0]];

  var possibilities = [
    row1, row2, row3,
    column1, column2, column3,
    diagonal1, diagonal2
  ];

  for (var i = 0; i < possibilities.length; i ++) {
    if (Math.abs(possibilities[i].reduce(reducer)) === 3) {
      throw (victoryMessage);
    }
  }
 
  var filledSpots = 0;

  for (var i = 0; i < possibilities.length; i ++) {
    if (possibilities[i].includes(0)) {
      break;
    } else {
      filledSpots ++;
    }
  }

  if (filledSpots === 9) {
    throw (drawMessage);
  }
};

var resetGame = () => {
  currentPlayer = 'X';
  ticTacToe = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (var ele = 0; ele < document.getElementsByClassName("square").length; ele ++){
    document.getElementsByClassName("square")[ele].innerHTML = "&#9634;";
  }
};

var changeSquare = (currentPlayer, square) => {
  if (currentPlayer === 'X') {
    square = 1;
    // TODO: change element to X
  } else if (currentPlayer === 'O') {
    square = -1;
    // TODO: change element to O
  }
};