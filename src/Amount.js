import React, { Component } from "react";

class Amount extends Component {
  constructor(props) {
    super(props);
    this.state = { amount: 0 };
  }

  onIncrement = () => {
    this.setState(state => ({
      amount: state.amount + 1,
    }));
  };

  onDecrement = () => {
    this.state.amount &&
      this.setState(state => ({
        amount: state.amount - 1,
      }));
  };

  handleInputChange = e => {
    const target = e.target;
    const value =
      target.type === "checkbox" ? target.checked : parseInt(target.value);
    const name = target.name;

    this.setState(state => ({
      [name]: value,
    }));
  };

  render() {
    const { amount } = this.state;
    const Euro = ({ amount }) => <p>Euro: {amount * 0.86}</p>;
    const Pound = ({ amount }) => <p>Pound: {amount * 0.76}</p>;

    return (
      <div>
        <span>US Dollar: {this.state.amount} </span>;
        <div>
          <button type="button" onClick={this.onIncrement}>
            +
          </button>
          <button type="button" onClick={this.onDecrement}>
            -
          </button>
        </div>
        <div>
          <input
            style={{ width: "50px" }}
            type="number"
            name="amount"
            value={amount}
            onChange={this.handleInputChange}
            min="0"
          />
        </div>
        {this.props.children}
        {this.props.children()}
      </div>
    );
  }
}

export default Amount;
