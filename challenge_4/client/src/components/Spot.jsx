import React from 'react';

class Spot extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      spot: 0
    }
  }
  
  render() {
    return(
      <div>
        {this.state.spot}
      </div>
    );
  }
};

export default Spot;