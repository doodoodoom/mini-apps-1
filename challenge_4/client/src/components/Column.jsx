import React from 'react';

// import Spot from './Spot.jsx';

class Column extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      column: [0, 0, 0, 0, 0, 0],
      player: 1,
      spot: 0
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {
    const newState = this.props.handleChange(this.state.column, this.state.spot);
    this.setState(newState);
  }

  render() {
    var key = 6;
    const col = this.state.column.map((spot) => {
      key --;
      return (
        <div key={'spot' + key}>
          {this.state.column[key]}
        </div>
      )
    });

    return(
      <div onClick={this.handleChange}>
        {col}
      </div>
    );
  }
};

export default Column;