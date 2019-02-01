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
      ]
    };
  }
  render() {
    var key = -1;
    const b = this.state.board.map((col) => {
      key ++;
      return (
        <div className="column" key={'column' + key}>
          <Column />
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