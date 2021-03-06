class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: -1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event, info) {
    event.preventDefault();
    if (!info) {
      const newState = {};
      var newForm = this.state.form;
      newForm ++;
      newState.form = newForm;
      this.setState(newState);
    } else {
      const newState = info;
      this.setState(newState);
    }
  }

  render() {
    if (this.state.form === -1) {
      return (
        <form onSubmit={this.handleSubmit}>
          <input type="submit" value="CHECKOUT"/>
        </form>
      );
    }
    if (this.state.form === 0) {
      return (
        <div>
          <Form1 handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        </div>
      );
    }
    if (this.state.form === 1) {
      return (
        <div>
          <Form2 handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        </div>
      );
    }
    if (this.state.form === 2) {
      return (
        <div>
          <Form3 handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        </div>
      );
    }
    if (this.state.form === 3) {
      return (
        <div>
          <Confirmation handleSubmit={this.handleSubmit} handleChange={this.handleChange} fullState={this.state}/>
        </div>
      );
    }
  }
}

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 1,
      name: '',
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    this.props.handleSubmit(event, this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>
          Name: <input name="name" type="text" value={this.state.name} onChange={this.handleChange}/>
        </h1>
        <h1>
          Email: <input name="email" type="text" value={this.state.email} onChange={this.handleChange}/>
        </h1>
        <h1>
          Password: <input name="password" type="text" value={this.state.password} onChange={this.handleChange}/>
        </h1>
        <input type="submit" value="NEXT"/>
      </form>
    )
  }
}

class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 2,
      street1: '',
      street2: '',
      city: '',
      state: '',
      zipcode: '',
      phone: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    this.props.handleSubmit(event, this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>
          Ship To Address
          <ul>Street Line 1: <input name="street1" type="text" value={this.state.street1} onChange={this.handleChange}/></ul>
          <ul>Street Line 2: <input name="street2" type="text" value={this.state.street2} onChange={this.handleChange}/></ul>
          <ul>City: <input name="city" type="text" value={this.state.city} onChange={this.handleChange}/></ul>
          <ul>State: <input name="state" type="text" value={this.state.state} onChange={this.handleChange}/></ul>
          <ul>Zip Code: <input name="zipcode" type="text" value={this.state.zipcode} onChange={this.handleChange}/></ul>
        </h1>
        <h1>
          Phone Number: <input name="phone" type="text" value={this.state.phone} onChange={this.handleChange}/>
        </h1>
        <input type="submit" value="NEXT"/>
      </form>
    )
  }
}

class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: 3,
      cardNumber: '',
      expDate: '',
      cvv: '',
      billingZip: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const newState = {};
    newState[event.target.name] = event.target.value;
    this.setState(newState);
  }

  handleSubmit(event) {
    this.props.handleSubmit(event, this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>
          Credit Card Number: <input name="cardNumber" type="text" value={this.state.cardNumber} onChange={this.handleChange}/>
        </h1>
        <h1>
          Expiration Date: <input name="expDate" type="text" value={this.state.expDate} onChange={this.handleChange}/>
        </h1>
        <h1>
          CVV: <input name="cvv" type="text" value={this.state.cvv} onChange={this.handleChange}/>
        </h1>
        <h1>
          Billing Zip Code: <input name="billingZip" type="text" value={this.state.billingZip} onChange={this.handleChange}/>
        </h1>
        <input type="submit" value="NEXT"/>
      </form>
    )
  }
}

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: -1
    };
  }

  handleSubmit(event) {
    this.props.handleSubmit(event);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    console.log(this.props);
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>
          <h2>Name: {this.props.fullState.name}</h2> 
          <h2>Email: {this.props.fullState.email}</h2>
          <h2>Password: {this.props.fullState.password}</h2>
          <h2>Street Line 1: {this.props.fullState.street1}</h2>
          <h2>Street Line 2: {this.props.fullState.street2}</h2>
          <h2>City: {this.props.fullState.city}</h2>
          <h2>State: {this.props.fullState.state}</h2>
          <h2>Zip Code: {this.props.fullState.zipcode}</h2>
          <h2>Phone Number: {this.props.fullState.phone}</h2>
          <h2>Credit Card Number: {this.props.fullState.cardNumber}</h2>
          <h2>Expiration Date: {this.props.fullState.expDate}</h2>
          <h2>CVV: {this.props.fullState.cvv}</h2>
          <h2>Billing Zip Code: {this.props.fullState.billingZip}</h2>
        </h1>
        <input type="submit" value="PURCHASE"/>
      </form>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);