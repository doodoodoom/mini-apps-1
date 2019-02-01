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
      player: 1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(column, spot, key) {
    if (spot < column.length) {
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
      this.setState({player: newPlayer, board: newBoard});
      var newSpot = spot;
      newSpot ++;
      var newState = {column: newColumn, player: newPlayer, spot: newSpot};
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