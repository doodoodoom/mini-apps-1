import React from 'react';

import Spot from './Spot.jsx';

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: [0, 0, 0, 0, 0, 0]
    }
  }
  render() {
    var key = -1;
    const col = this.state.column.map((spot) => {
      key ++;
      return (
        <div key={'spot' + key}>
          <Spot />
        </div>
      )
    });

    return(
      <div>
        {col}
      </div>
    );
  }
};

export default Column;