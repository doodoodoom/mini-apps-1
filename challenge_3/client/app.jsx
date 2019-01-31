class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: -1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const newState = {};
    var newForm = this.state.form;
    newForm ++;
    if (newForm === 4) {
      newForm = -1;
    }
    newState.form = newForm;
    this.setState(newState);
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
          <Form1 handleSubmit={this.handleSubmit}/>
        </div>
      );
    }
    if (this.state.form === 1) {
      return (
        <div>
          <Form2 handleSubmit={this.handleSubmit}/>
        </div>
      );
    }
    if (this.state.form === 2) {
      return (
        <div>
          <Form3 handleSubmit={this.handleSubmit}/>
        </div>
      );
    }
    if (this.state.form === 3) {
      return (
        <div>
          <Confirmation handleSubmit={this.handleSubmit}/>
        </div>
      );
    }
  }
}

class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    this.props.handleSubmit(event);
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
    this.props.handleSubmit(event);
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
    this.props.handleSubmit(event);
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
    this.state = {};
  }

  handleSubmit(event) {
    this.props.handleSubmit(event);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>ALL THE DATA</h1>
        <input type="submit" value="PURCHASE"/>
      </form>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);