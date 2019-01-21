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
    this.setState(state => ({
      amount: state.amount - 1,
    }));
  };

  render() {
    return (
      <div>
        <span>US Dollar: {this.state.amount} </span>;
        <button type="button" onClick={this.onIncrement}>
          +
        </button>
        <button type="button" onClick={this.onDecrement}>
          -
        </button>
      </div>
    );
  }
}

export default Amount;
