import React from 'react';

import Column from './Column.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      board: [
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0]    
      ],
      player: 1,
      numPieces: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.checkForColumnWin = this.checkForColumnWin.bind(this);
    this.checkForRowWin = this.checkForRowWin.bind(this);
    this.checkForTie = this.checkForTie.bind(this);
  }

  checkForColumnWin() {
    for (var col = 0; col < this.state.board.length; col ++) {
      var counter = 0;
      var total = 0;
      for (var spot = 0; spot < this.state.board[col].length; spot ++) {
        counter ++;
        total += this.state.board[col][spot];
        if (spot > 0) {
          if (this.state.board[col][spot] === this.state.board[col][spot - 1]) {
            if (counter === 4) {
              if (total === 4) {
                window.alert(`PLAYER 1 HAS WON!!!`);
                return;
              } else if (total === 8) {
                window.alert(`PLAYER 2 HAS WON!!!`);
                return;
              }
            }
          } else {
            counter = 0;
            total = 0;
          }
        }
      }
    }
  }

  checkForRowWin() {
    var boardInRows = [];
    for (var x = 0; x < 6; x ++) {
      var row = [];
      for (var y = 0; y < this.state.board.length; y ++) {
        row.push(this.state.board[y][x]);
      }
      boardInRows.push(row);
    }

    console.log(this.state.board);
    console.log(boardInRows);

    for (var row = 0; row < boardInRows.length; row ++) {
      var counter = 0;
      var total = 0;
      for (var col = 0; col < boardInRows[row].length; col ++) {
        counter ++;
        total += boardInRows[row][col];
        if (col > 0) {
          if (boardInRows[row][col] === boardInRows[row][col - 1]) {
            if (counter === 4) {
              if (total === 4) {
                window.alert(`PLAYER 1 HAS WON!!!`);
                return;
              } else if (total === 8) {
                window.alert(`PLAYER 2 HAS WON!!!`);
                return;
              }
            }
          } else {
            counter = 0;
            total = 0;
          }
        }
      }
    }
  }

  // checkForDiagonalWin() {

  // }

  checkForTie() {
    if (this.state.numPieces === 42) {
      window.alert('NO ONE WON, WE HAVE A DRAW!!!');
    }
  }

  handleChange(column, spot, key) {
    if (spot < column.length) {
      var newNumPieces = this.state.numPieces;
      newNumPieces ++;

      var newColumn = column;
      newColumn[spot] = this.state.player;

      var newBoard = this.state.board;
      newBoard[key] = newColumn;

      var newPlayer = this.state.player;
      if (newPlayer === 1) {
        newPlayer = 2;
      } else if (newPlayer === 2) {
        newPlayer = 1;
      }

      this.setState({player: newPlayer, board: newBoard, numPieces: newNumPieces});
      var newSpot = spot;
      newSpot ++;

      var newState = {column: newColumn, player: newPlayer, spot: newSpot};
      this.checkForColumnWin();
      this.checkForRowWin();
      this.checkForTie();
      return newState;
    }
  }


  render() {
    var key = -1;
    const b = this.state.board.map((col) => {
      key ++;
      return (
        <div className="column" key={'column' + key}>
          <Column value={key} handleChange={this.handleChange}/>
        </div>
      )
    });

    return (
      <div>
        {b}
      </div>
    );
  }
}

export default Board;