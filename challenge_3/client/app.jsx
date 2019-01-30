class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  render() {
    return (
      <div>
        <button>CHECKOUT</button>
      </div>
    );
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
  }
  render() {
    return (
      <div>
        <h1>
          Name: <input type="text"/>
        </h1>
        <h1>
          Email: <input type="text"/>
        </h1>
        <h1>
          Password: <input type="text"/>
        </h1>
        <button>NEXT</button>
      </div>
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
  }
  render() {
    return (
      <div>
        <h1>
          Ship To Address
          <ul>Street Line 1: <input type="text"/></ul>
          <ul>Street Line 2: <input type="text"/></ul>
          <ul>City: <input type="text"/></ul>
          <ul>State: <input type="text"/></ul>
          <ul>Zip Code: <input type="text"/></ul>
        </h1>
        <h1>
          Phone Number: <input type="text"/>
        </h1>
        <button>NEXT</button>
      </div>
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
  }
  render() {
    return (
      <div>
        <h1>
          Credit Card Number: <input type="text"/>
        </h1>
        <h1>
          Expiration Date: <input type="text"/>
        </h1>
        <h1>
          CVV: <input type="text"/>
        </h1>
        <h1>
          Billing Zip Code: <input type="text"/>
        </h1>
        <button>NEXT</button>
      </div>
    )
  }
}

class Confirmation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h1>ALL THE DATA</h1>
        <button>PURCHASE</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Form1 />,
  document.getElementById('app')
);